import type { Element } from '../../src/types.js';

export class DataValidationError extends Error {}

const VALID_BLOCKS = new Set(['s', 'p', 'd', 'f']);
const VALID_CATEGORIES = new Set([
  'alkali-metal',
  'alkaline-earth-metal',
  'lanthanide',
  'actinide',
  'transition-metal',
  'post-transition-metal',
  'metalloid',
  'reactive-nonmetal',
  'noble-gas',
  'unknown',
]);
const VALID_STATES = new Set(['solid', 'liquid', 'gas', 'unknown']);
const VALID_MASS_KINDS = new Set(['standard', 'conventional', 'longest-lived-isotope']);
const HEX_COLOR = /^#[0-9A-Fa-f]{6}$/;

/** Validates a nullable numeric field: `null` always passes; a number must be in `[min, max]`. */
function checkNullableRange(
  problems: string[],
  tag: string,
  field: string,
  value: number | null,
  min: number,
  max: number,
  unit: string,
): void {
  if (value === null) return;
  if (value < min || value > max) {
    problems.push(`${tag}: ${field} out of sane range [${String(min)}, ${String(max)}] ${unit}.`);
  }
}

/**
 * Validates the fully-assembled element dataset (after raw -> `Element`
 * transformation, including the `null`-coercion of unmeasured physical
 * properties) before it is written to `src/data/elements.ts`. Throws
 * `DataValidationError` with every problem found (not just the first) so a
 * single build failure reports the full list of issues to fix.
 */
export function validateElements(elements: readonly Element[]): void {
  const problems: string[] = [];

  if (elements.length !== 118) {
    problems.push(`Expected exactly 118 elements, found ${String(elements.length)}.`);
  }

  const seenNumbers = new Set<number>();
  const seenSymbols = new Set<string>();

  for (const el of elements) {
    const tag = `Z=${String(el.atomicNumber)} (${el.symbol})`;

    if (!Number.isInteger(el.atomicNumber) || el.atomicNumber < 1 || el.atomicNumber > 118) {
      problems.push(`${tag}: atomicNumber must be an integer in [1, 118].`);
    }
    if (seenNumbers.has(el.atomicNumber)) {
      problems.push(`Duplicate atomicNumber ${String(el.atomicNumber)}.`);
    }
    seenNumbers.add(el.atomicNumber);

    if (!/^[A-Z][a-z]?$/.test(el.symbol)) {
      problems.push(`${tag}: symbol "${el.symbol}" is not a valid IUPAC-style symbol.`);
    }
    if (seenSymbols.has(el.symbol)) {
      problems.push(`Duplicate symbol "${el.symbol}".`);
    }
    seenSymbols.add(el.symbol);

    for (const locale of ['en', 'ru', 'he'] as const) {
      if (!el.names[locale] || el.names[locale].trim().length === 0) {
        problems.push(`${tag}: names.${locale} is missing or empty.`);
      }
    }
    if (el.latinName?.trim().length === 0) {
      problems.push(`${tag}: latinName is present but empty.`);
    }

    if (!(el.atomicMass.value > 0)) {
      problems.push(`${tag}: atomicMass.value must be positive.`);
    }
    if (!VALID_MASS_KINDS.has(el.atomicMass.kind)) {
      problems.push(`${tag}: invalid atomicMass.kind "${el.atomicMass.kind}".`);
    }
    if (el.atomicMass.kind !== 'standard' && el.atomicMass.uncertainty !== undefined) {
      problems.push(`${tag}: atomicMass.uncertainty should only be set when kind is 'standard'.`);
    }

    if (!Number.isInteger(el.period) || el.period < 1 || el.period > 7) {
      problems.push(`${tag}: period must be an integer in [1, 7].`);
    }
    if (el.group !== undefined && (el.group < 1 || el.group > 18)) {
      problems.push(`${tag}: group must be in [1, 18] when present.`);
    }
    if (!VALID_BLOCKS.has(el.block)) {
      problems.push(`${tag}: invalid block "${el.block}".`);
    }
    if (!VALID_CATEGORIES.has(el.category)) {
      problems.push(`${tag}: invalid category "${el.category}".`);
    }
    if (!VALID_STATES.has(el.standardState)) {
      problems.push(`${tag}: invalid standardState "${el.standardState}".`);
    }

    checkNullableRange(
      problems,
      tag,
      'electronegativityPauling',
      el.electronegativityPauling,
      0,
      4.5,
      '(Pauling scale)',
    );
    checkNullableRange(problems, tag, 'atomicRadius', el.atomicRadius, 1, 400, 'pm');
    checkNullableRange(problems, tag, 'covalentRadius', el.covalentRadius, 1, 400, 'pm');
    checkNullableRange(problems, tag, 'vdwRadius', el.vdwRadius, 1, 400, 'pm');
    checkNullableRange(problems, tag, 'meltingPoint', el.meltingPoint, 0, 4200, 'K');
    checkNullableRange(problems, tag, 'boilingPoint', el.boilingPoint, 0, 6200, 'K');
    checkNullableRange(problems, tag, 'density', el.density, 0.00001, 23, 'g/cm3');
    checkNullableRange(problems, tag, 'electronAffinity', el.electronAffinity, -50, 400, 'kJ/mol');

    if (el.cpkColor !== null && !HEX_COLOR.test(el.cpkColor)) {
      problems.push(`${tag}: cpkColor "${el.cpkColor}" is not a #RRGGBB hex color.`);
    }
    if (el.jmolColor !== null && !HEX_COLOR.test(el.jmolColor)) {
      problems.push(`${tag}: jmolColor "${el.jmolColor}" is not a #RRGGBB hex color.`);
    }
    if (el.discoveredYear !== undefined && (el.discoveredYear < 1200 || el.discoveredYear > 2026)) {
      problems.push(`${tag}: discoveredYear out of sane range [1200, 2026].`);
    }

    el.ionizationEnergies.forEach((ionEnergy, i) => {
      if (ionEnergy.order !== i + 1) {
        problems.push(`${tag}: ionizationEnergies must be ordered starting at 1, no gaps.`);
      }
    });
  }

  for (let z = 1; z <= 118; z++) {
    if (!seenNumbers.has(z)) {
      problems.push(`Missing element with atomicNumber ${String(z)}.`);
    }
  }

  if (problems.length > 0) {
    throw new DataValidationError(
      `Element data validation failed with ${String(problems.length)} problem(s):\n` +
        problems.map((p) => `  - ${p}`).join('\n'),
    );
  }
}
