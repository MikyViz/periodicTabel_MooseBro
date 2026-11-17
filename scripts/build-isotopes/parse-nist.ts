/**
 * Parser for the NIST "most common isotopes" linearized ASCII dump
 * (data/raw/nist_isotopic_compositions.html — it's HTML-wrapped, but the
 * actual data is plain `Key = Value` blocks inside a single `<pre>`).
 *
 * Only records with a non-blank `Isotopic Composition` (abundance) are
 * returned — those are exactly this library's "naturally occurring
 * isotope" scope. NIST's list also includes commonly-referenced synthetic
 * isotopes (e.g. Tc-99, Po-210) with a blank abundance; those are excluded
 * here and instead handled via NUBASE's half-life-ranked "longest-lived"
 * lookup (see `parse-nubase.ts`).
 */
import { readFileSync } from 'node:fs';

export interface NistIsotopeRecord {
  atomicNumber: number;
  massNumber: number;
  symbol: string;
  mass: number;
  massUncertainty: number | null;
  abundance: number;
  abundanceUncertainty: number | null;
}

/** Parses "1.00782503223(9)" into { value: 1.00782503223, uncertainty: 0.00000000009 }. */
function parseValueWithUncertainty(raw: string): { value: number; uncertainty: number | null } {
  const match = /^([\d.]+)(?:\((\d+)\))?$/.exec(raw.trim());
  if (!match?.[1]) {
    throw new Error(`Cannot parse value with uncertainty: "${raw}"`);
  }
  const [, valueStr, uncertaintyDigits] = match;
  const value = Number(valueStr);
  if (uncertaintyDigits === undefined) {
    return { value, uncertainty: null };
  }
  // The uncertainty digits apply to the last `uncertaintyDigits.length` decimal
  // places of valueStr, e.g. "4.002602(2)" -> uncertainty 0.000002.
  const decimalPlaces = (valueStr.split('.')[1] ?? '').length;
  const uncertainty = Number(uncertaintyDigits) * Math.pow(10, -decimalPlaces);
  return { value, uncertainty };
}

export function parseNistIsotopes(
  path = 'data/raw/nist_isotopic_compositions.html',
): NistIsotopeRecord[] {
  const text = readFileSync(path, 'utf8');
  const records: NistIsotopeRecord[] = [];

  const blocks = text.split('Atomic Number = ').slice(1);
  for (const block of blocks) {
    const get = (key: string): string => {
      const re = new RegExp(`${key} = (.*)`);
      const match = re.exec(block);
      return match?.[1]?.trim() ?? '';
    };

    const atomicNumber = Number(/^(\d+)/.exec(block)?.[1] ?? '');
    const symbol = get('Atomic Symbol');
    const massNumber = Number(get('Mass Number'));
    const massRaw = get('Relative Atomic Mass');
    const abundanceRaw = get('Isotopic Composition');

    if (abundanceRaw === '' || abundanceRaw === '&nbsp;') {
      continue; // not naturally occurring: no measured abundance
    }
    if (Number.isNaN(atomicNumber) || Number.isNaN(massNumber) || massRaw === '') {
      continue;
    }

    const mass = parseValueWithUncertainty(massRaw);
    const abundance = parseValueWithUncertainty(abundanceRaw);

    records.push({
      atomicNumber,
      massNumber,
      // NIST uses "D" and "T" for deuterium/tritium; normalize to the
      // standard element symbol ("H") since this library indexes isotopes
      // by element symbol + mass number, not by colloquial isotope names.
      symbol: symbol === 'D' || symbol === 'T' ? 'H' : symbol,
      mass: mass.value,
      massUncertainty: mass.uncertainty,
      abundance: abundance.value,
      abundanceUncertainty: abundance.uncertainty,
    });
  }

  return records;
}
