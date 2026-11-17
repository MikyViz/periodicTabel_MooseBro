/**
 * Guards against publishing with outstanding data-quality TODOs. Scans the
 * repository (excluding build/dependency output) for the literal marker
 * `TODO(maintainer)` and exits non-zero, listing every occurrence, if any
 * remain. Intended to run only via `prepublishOnly` — deliberately NOT part
 * of the regular `build`/`test` scripts, since it is normal for these TODOs
 * to persist during day-to-day development.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'node:fs/promises';

const MARKER = 'TODO(maintainer)';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SCAN_GLOBS = ['src/**/*.ts', 'scripts/**/*.ts', 'README.md'];
const IGNORE_SELF = 'scripts/check-todos.ts';

async function main(): Promise<void> {
  const hits: string[] = [];

  for (const pattern of SCAN_GLOBS) {
    for await (const file of glob(pattern, { cwd: ROOT })) {
      const relative = file.replaceAll('\\', '/');
      if (relative === IGNORE_SELF) continue;

      const content = readFileSync(resolve(ROOT, file), 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        if (line.includes(MARKER)) {
          hits.push(`${relative}:${String(i + 1)}: ${line.trim()}`);
        }
      });
    }
  }

  if (hits.length > 0) {
    console.error(
      `Found ${String(hits.length)} outstanding "${MARKER}" marker(s); resolve before publishing:\n` +
        hits.map((h) => `  - ${h}`).join('\n'),
    );
    process.exitCode = 1;
    return;
  }

  console.log(`No outstanding "${MARKER}" markers found.`);
}

await main();
