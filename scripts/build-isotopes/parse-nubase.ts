/**
 * Parser for the NUBASE2020 fixed-width ASCII table (data/raw/nubase2020.txt).
 * Column positions are from the file's own embedded format documentation
 * (see the `#     column   quantity` header block at the top of the file).
 */
import { readFileSync } from 'node:fs';

/** 1 unified atomic mass unit, in keV (CODATA). */
const KEV_PER_U = 931494.10242;

const SECONDS_PER_UNIT: Record<string, number> = {
  ys: 1e-24,
  zs: 1e-21,
  as: 1e-18,
  fs: 1e-15,
  ps: 1e-12,
  ns: 1e-9,
  us: 1e-6,
  ms: 1e-3,
  s: 1,
  m: 60,
  h: 3600,
  d: 86400,
  y: 365.25 * 86400,
  ky: 1e3 * 365.25 * 86400,
  My: 1e6 * 365.25 * 86400,
  Gy: 1e9 * 365.25 * 86400,
  Ty: 1e12 * 365.25 * 86400,
  Py: 1e15 * 365.25 * 86400,
  Ey: 1e18 * 365.25 * 86400,
  Zy: 1e21 * 365.25 * 86400,
  Yy: 1e24 * 365.25 * 86400,
};

export interface NubaseRecord {
  atomicNumber: number;
  massNumber: number;
  symbol: string;
  /** Ground-state mass, in u, derived from the mass excess (keV). */
  mass: number;
  massUncertainty: number | null;
  /** `null` for stable nuclides. */
  halfLifeSeconds: number | null;
  /** `true` if the half-life itself (not just the mass) is a systematics estimate, not a measurement. */
  halfLifeEstimated: boolean;
  stable: boolean;
  /** Raw decay-mode labels from the BR field, e.g. "B-", "A", "SF", "EC". */
  decayModes: string[];
  /** `true` if the mass excess is NUBASE-flagged as estimated from systematics ("#"). */
  estimated: boolean;
}

function stripHash(value: string): { value: string; estimated: boolean } {
  return { value: value.replace('#', ''), estimated: value.includes('#') };
}

function parseHalfLife(
  rawValue: string,
  rawUnit: string,
): { seconds: number | null; stable: boolean; estimated: boolean } {
  const value = rawValue.trim();
  const estimated = value.includes('#');
  if (value === 'stbl') {
    return { seconds: null, stable: true, estimated: false };
  }
  if (value === '' || value === 'p-unst') {
    return { seconds: null, stable: false, estimated: false };
  }
  const numeric = Number(value.replace('#', '').replace('>', '').replace('<', '').replace('~', ''));
  const unit = rawUnit.trim();
  const factor = SECONDS_PER_UNIT[unit];
  if (Number.isNaN(numeric) || factor === undefined) {
    return { seconds: null, stable: false, estimated };
  }
  return { seconds: numeric * factor, stable: false, estimated };
}

/** Parses the decay-modes (BR) field into a list of distinct mode labels (e.g. ["A", "SF"]). */
function parseDecayModes(br: string): string[] {
  if (br.trim() === '') return [];
  const modes: string[] = [];
  for (const part of br.split(';')) {
    // Each part looks like "B-=100", "2B-=2.2e-10 3", "IS=99.2742 10", "IT=97.4 4", etc.
    // Strip a leading digit multiplier (e.g. "2B-" -> "B-") and the "=value unc" suffix.
    const match = /^(\d*)([A-Za-z+-]+)[=~]/.exec(part.trim());
    const modeRaw = match?.[2];
    if (!modeRaw) continue;
    if (modeRaw === 'IS') continue; // isotopic abundance, not a decay mode
    if (!modes.includes(modeRaw)) modes.push(modeRaw);
  }
  return modes;
}

/** Parses every ground-state (non-isomer) record from the NUBASE2020 table. */
export function parseNubase(path = 'data/raw/nubase2020.txt'): NubaseRecord[] {
  const lines = readFileSync(path, 'utf8').split('\n');
  const records: NubaseRecord[] = [];

  for (const line of lines) {
    if (line.length < 100 || line.startsWith('#')) continue;

    const zzzi = line.slice(4, 8).trim();
    const isomer = zzzi.slice(3, 4);
    if (isomer !== '0') continue; // ground states only

    const massNumber = Number(line.slice(0, 3).trim());
    const atomicNumber = Number(zzzi.slice(0, 3));
    const symbol = line.slice(11, 16).trim().replace(/^\d+/, '');

    const massExcess = stripHash(line.slice(18, 31).trim());
    const dMassExcess = line.slice(31, 42).trim().replace('#', '');

    const halfLifeRaw = line.slice(69, 78);
    const unitRaw = line.slice(78, 80);
    const { seconds, stable, estimated: halfLifeEstimated } = parseHalfLife(halfLifeRaw, unitRaw);

    const br = line.slice(119);

    const massExcessKeV = Number(massExcess.value);
    if (Number.isNaN(massExcessKeV) || Number.isNaN(massNumber) || Number.isNaN(atomicNumber)) {
      continue;
    }

    records.push({
      atomicNumber,
      massNumber,
      symbol,
      mass: massNumber + massExcessKeV / KEV_PER_U,
      massUncertainty: dMassExcess === '' ? null : Number(dMassExcess) / KEV_PER_U,
      halfLifeSeconds: seconds,
      halfLifeEstimated,
      stable,
      decayModes: parseDecayModes(br),
      estimated: massExcess.estimated,
    });
  }

  return records;
}

/**
 * For a given element, finds the ground-state isotope with the greatest
 * half-life (stable isotopes are treated as having infinite half-life).
 * Isotopes whose half-life is itself a systematics *estimate* (NUBASE "#"),
 * as opposed to a measurement, are only considered if no element isotope
 * has a measured half-life at all — a nominally-longer estimated value
 * should not override a shorter but actually measured one. Ties are broken
 * by lowest mass number for determinism.
 */
export function findLongestLived(
  records: NubaseRecord[],
  atomicNumber: number,
): NubaseRecord | undefined {
  const candidates = records.filter((r) => r.atomicNumber === atomicNumber);
  if (candidates.length === 0) return undefined;

  const measured = candidates.filter((r) => !r.halfLifeEstimated);
  const pool = measured.length > 0 ? measured : candidates;

  return pool.reduce((best, current) => {
    const bestScore = best.stable ? Infinity : (best.halfLifeSeconds ?? -Infinity);
    const currentScore = current.stable ? Infinity : (current.halfLifeSeconds ?? -Infinity);
    if (currentScore > bestScore) return current;
    if (currentScore === bestScore && current.massNumber < best.massNumber) return current;
    return best;
  });
}
