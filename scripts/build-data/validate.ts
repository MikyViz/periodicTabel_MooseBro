import type { RawElementInput } from './raw-types.js';

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
const HEX_COLOR = /^#[0-9A-Fa-f]{6}$/;

/**
 * Validates the raw element dataset before it is compiled into `src/data/elements.ts`.
 * Throws `DataValidationError` with every problem found (not just the first)
 * so a single build failure reports the full list of issues to fix.
 */
export function validateRawElements(elements: readonly RawElementInput[]): void {
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

    for (const locale of ['en', 'ru', 'he', 'la'] as const) {
      if (!el.names[locale] || el.names[locale].trim().length === 0) {
        problems.push(`${tag}: names.${locale} is missing or empty.`);
      }
    }

    if (!(el.atomicMass.value > 0)) {
      problems.push(`${tag}: atomicMass.value must be positive.`);
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

    if (
      el.electronegativityPauling !== undefined &&
      (el.electronegativityPauling <= 0 || el.electronegativityPauling > 4.5)
    ) {
      problems.push(`${tag}: electronegativityPauling out of sane range (0, 4.5].`);
    }
    for (const [field, value] of [
      ['atomicRadius', el.atomicRadius],
      ['covalentRadius', el.covalentRadius],
      ['vdwRadius', el.vdwRadius],
    ] as const) {
      if (value !== undefined && (value <= 0 || value > 400)) {
        problems.push(`${tag}: ${field} out of sane range (0, 400] pm.`);
      }
    }
    if (el.meltingPoint !== undefined && (el.meltingPoint < 0 || el.meltingPoint > 4200)) {
      problems.push(`${tag}: meltingPoint out of sane range [0, 4200] K.`);
    }
    if (el.boilingPoint !== undefined && (el.boilingPoint < 0 || el.boilingPoint > 6200)) {
      problems.push(`${tag}: boilingPoint out of sane range [0, 6200] K.`);
    }
    if (el.density !== undefined && (el.density <= 0 || el.density > 23)) {
      problems.push(`${tag}: density out of sane range (0, 23] g/cm3.`);
    }
    if (!HEX_COLOR.test(el.cpkColor)) {
      problems.push(`${tag}: cpkColor "${el.cpkColor}" is not a #RRGGBB hex color.`);
    }
    if (!HEX_COLOR.test(el.jmolColor)) {
      problems.push(`${tag}: jmolColor "${el.jmolColor}" is not a #RRGGBB hex color.`);
    }
    if (el.discoveredYear !== undefined && (el.discoveredYear < 1200 || el.discoveredYear > 2026)) {
      problems.push(`${tag}: discoveredYear out of sane range [1200, 2026].`);
    }
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
