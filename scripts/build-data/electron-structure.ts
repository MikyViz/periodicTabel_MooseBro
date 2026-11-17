/**
 * Computes ground-state electron configuration strings and per-shell
 * (K, L, M, ...) electron counts from a noble-gas-core shorthand.
 *
 * Rather than hand-typing all 118 full electron configurations (error-prone)
 * or re-deriving them from the Aufbau (n+l) filling rule (which would need a
 * manual override table anyway, since ~20 elements have experimentally
 * confirmed exceptions to naive Aufbau filling), each element's raw record
 * supplies only its noble-gas core symbol plus the valence subshells beyond
 * that core — exactly as found in NIST Atomic Spectra Database ground-level
 * listings. This module expands that into the full configuration and derives
 * shell occupancy by grouping subshells by principal quantum number `n`.
 */

/** A single subshell term, e.g. `{ n: 3, l: 'd', count: 6 }` for "3d6". */
interface Subshell {
  n: number;
  l: 's' | 'p' | 'd' | 'f';
  count: number;
}

/** Full ground-state subshell configurations of the five relevant noble gases. */
const NOBLE_GAS_CORES: Record<string, string> = {
  He: '1s2',
  Ne: '1s2 2s2 2p6',
  Ar: '1s2 2s2 2p6 3s2 3p6',
  Kr: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6',
  Xe: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6',
  Rn: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5d10 5s2 5p6 6s2 6p6',
};

const SUBSHELL_PATTERN = /^(\d)([spdf])(\d{1,2})$/;

function parseSubshells(config: string): Subshell[] {
  return config
    .trim()
    .split(/\s+/)
    .map((term) => {
      const match = SUBSHELL_PATTERN.exec(term);
      if (!match) {
        throw new Error(`Invalid subshell term "${term}" in configuration "${config}"`);
      }
      const [, n, l, count] = match as unknown as [string, string, Subshell['l'], string];
      return { n: Number(n), l, count: Number(count) };
    });
}

/**
 * Expands a noble-gas-core shorthand (e.g. core `"Ar"`, valence `"3d6 4s2"`)
 * into the full configuration string (e.g. `"[Ar] 3d6 4s2"`) and the electron
 * count per principal shell (e.g. `[2, 8, 14, 2]` for iron).
 */
export function expandElectronStructure(
  core: string | undefined,
  valence: string,
): { electronConfiguration: string; shells: readonly number[] } {
  const coreSubshells = core ? parseSubshells(NOBLE_GAS_CORES[core] ?? '') : [];
  if (core && coreSubshells.length === 0) {
    throw new Error(`Unknown noble gas core "${core}"`);
  }
  const valenceSubshells = parseSubshells(valence);
  const all = [...coreSubshells, ...valenceSubshells];

  const shellTotals = new Map<number, number>();
  for (const { n, count } of all) {
    shellTotals.set(n, (shellTotals.get(n) ?? 0) + count);
  }
  const maxN = Math.max(...shellTotals.keys());
  const shells = Array.from({ length: maxN }, (_, i) => shellTotals.get(i + 1) ?? 0);

  const electronConfiguration = core ? `[${core}] ${valence}` : valence;

  return { electronConfiguration, shells };
}
