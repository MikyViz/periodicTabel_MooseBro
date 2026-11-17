/**
 * Data build pipeline entry point for isotopes: parse NIST + NUBASE2020 raw
 * data -> cross-check -> generated TypeScript module
 * (`src/isotopes/data.ts`). Run via `npm run build:isotopes` (also invoked
 * automatically as part of `npm run build`).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import type { DecayMode, Isotope } from '../../src/types.js';
import { ELEMENTS } from '../../src/data/elements.js';
import { parseNistIsotopes } from './parse-nist.js';
import { findLongestLived, parseNubase, type NubaseRecord } from './parse-nubase.js';
import { crossCheck } from './validate.js';
import { NIST_ISOTOPE_SOURCE, NUBASE_SOURCE } from './sources.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, '../../src/isotopes/data.ts');

/** 34 elements with no naturally-occurring isotope at all. */
const SYNTHETIC_ONLY_ELEMENTS = new Set(
  ELEMENTS.filter((el) => el.atomicMass.kind === 'longest-lived-isotope').map(
    (el) => el.atomicNumber,
  ),
);

const DECAY_MODE_MAP: Record<string, DecayMode> = {
  A: 'alpha',
  'B-': 'beta-minus',
  'B+': 'beta-plus',
  EC: 'electron-capture',
  IT: 'isomeric-transition',
  SF: 'spontaneous-fission',
  p: 'proton-emission',
  n: 'neutron-emission',
};

function mapDecayModes(raw: readonly string[]): DecayMode[] {
  return raw.map((code) => DECAY_MODE_MAP[code] ?? code);
}

function nubaseKey(atomicNumber: number, massNumber: number): string {
  return `${String(atomicNumber)}-${String(massNumber)}`;
}

function build(): void {
  const nist = parseNistIsotopes();
  const nubase = parseNubase();

  const nubaseByKey = new Map<string, NubaseRecord>(
    nubase.map((r) => [nubaseKey(r.atomicNumber, r.massNumber), r]),
  );

  const isotopes: Isotope[] = [];

  // 1. Every natural isotope (stable + primordial radionuclides), per NIST.
  for (const rec of nist) {
    const nb = nubaseByKey.get(nubaseKey(rec.atomicNumber, rec.massNumber));
    if (nb === undefined) {
      throw new Error(
        `No NUBASE ground-state record found for natural isotope ${rec.symbol}-${String(rec.massNumber)} ` +
          `(Z=${String(rec.atomicNumber)}); cannot determine half-life/decay/stable flag.`,
      );
    }
    isotopes.push({
      atomicNumber: rec.atomicNumber,
      massNumber: rec.massNumber,
      symbol: rec.symbol,
      mass: { value: rec.mass, uncertainty: rec.massUncertainty },
      abundance: { value: rec.abundance, uncertainty: rec.abundanceUncertainty },
      halfLifeSeconds: nb.stable ? null : nb.halfLifeSeconds,
      stable: nb.stable,
      decayModes: mapDecayModes(nb.decayModes),
    });
  }

  // 2. The longest-lived known isotope of every element with NO natural
  // isotope at all (34 elements: Tc, Pm, Po..Og).
  for (const atomicNumber of SYNTHETIC_ONLY_ELEMENTS) {
    const best = findLongestLived(nubase, atomicNumber);
    if (best === undefined) {
      throw new Error(`No NUBASE ground-state record found at all for Z=${String(atomicNumber)}.`);
    }
    isotopes.push({
      atomicNumber: best.atomicNumber,
      massNumber: best.massNumber,
      symbol: best.symbol,
      mass: { value: best.mass, uncertainty: best.massUncertainty },
      abundance: null,
      halfLifeSeconds: best.stable ? null : best.halfLifeSeconds,
      stable: best.stable,
      decayModes: mapDecayModes(best.decayModes),
    });
  }

  isotopes.sort((a, b) => a.atomicNumber - b.atomicNumber || a.massNumber - b.massNumber);

  const report = crossCheck(isotopes, ELEMENTS);

  const hardFailures = [
    ...report.standardMassMismatches,
    ...report.intervalMismatches,
    ...report.abundanceSumMismatches,
  ];
  if (hardFailures.length > 0) {
    throw new Error(
      `Isotope data validation failed with ${String(hardFailures.length)} problem(s):\n` +
        hardFailures.map((p) => `  - ${p}`).join('\n'),
    );
  }

  if (report.longestLivedDisagreements.length > 0) {
    console.log(
      `NOTE: ${String(report.longestLivedDisagreements.length)} element(s) have a stored ` +
        'atomicMass.value that disagrees with the NUBASE2020-determined longest-lived ' +
        'isotope (element data is intentionally NOT auto-edited):',
    );
    for (const line of report.longestLivedDisagreements) {
      console.log(`  - ${line}`);
    }
  }

  const header = `/**
 * GENERATED FILE — do not edit by hand.
 *
 * Produced by \`npm run build:isotopes\` (scripts/build-isotopes/generate.ts)
 * from data/raw/nist_isotopic_compositions.html and data/raw/nubase2020.txt.
 * Edit the raw data / parsers and regenerate instead of editing this file
 * directly.
 *
 * Generated at: ${new Date().toISOString()}
 */
import type { DataSource, Isotope } from '../types.js';

export const NIST_ISOTOPE_SOURCE: DataSource = ${JSON.stringify(NIST_ISOTOPE_SOURCE, null, 2)};

export const NUBASE_SOURCE: DataSource = ${JSON.stringify(NUBASE_SOURCE, null, 2)};

export const ISOTOPES: readonly Isotope[] = ${JSON.stringify(isotopes, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, header, 'utf8');
  console.log(`Wrote ${String(isotopes.length)} isotopes to ${OUTPUT_PATH}`);
}

build();
