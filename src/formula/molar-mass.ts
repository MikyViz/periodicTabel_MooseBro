/**
 * Molar mass and elemental composition, built on top of the formula parser.
 *
 * Mass rules (see README for the user-facing version of this):
 * - Every atomic mass used is `atomicMass.value` — for `'conventional'`-kind
 *   elements this is already the IUPAC conventional abridged value (not the
 *   interval), so no special-casing is needed here.
 * - Elements with `atomicMass.kind === 'longest-lived-isotope'` have no
 *   IUPAC standard atomic weight; by default this throws
 *   `NoStandardAtomicWeightError` rather than silently using an arbitrary
 *   number. Pass `{ allowUnstable: true }` to use that isotope's mass number
 *   anyway (e.g. for back-of-envelope work with technetium compounds).
 * - No rounding happens inside the calculation. `molarMass` returns the full
 *   floating-point sum; `composition`'s `massPercent` values are likewise
 *   unrounded full-precision numbers — round for display at the call site.
 */
import { NoStandardAtomicWeightError } from '../errors.js';
import { ELEMENTS } from '../data/elements.js';
import type { AtomicMass } from '../types.js';
import { parseFormulaCounts, type FormulaOptions } from './parser.js';

/** Options shared by {@link molarMass} and {@link composition}. */
export interface MolarMassOptions extends FormulaOptions {
  /**
   * When `true`, elements with no IUPAC standard atomic weight use the mass
   * of their longest-lived known isotope instead of throwing
   * {@link NoStandardAtomicWeightError}. Default `false`.
   */
  allowUnstable?: boolean;
}

const MASS_BY_SYMBOL = new Map<string, AtomicMass>(
  ELEMENTS.map((el) => [el.symbol, el.atomicMass]),
);

function resolveAtomicMassValue(symbol: string, options: MolarMassOptions | undefined): number {
  const mass = MASS_BY_SYMBOL.get(symbol);
  if (mass === undefined) {
    // Unreachable via the public API: parseFormulaCounts already validates
    // every symbol against the same 118-element dataset.
    throw new NoStandardAtomicWeightError(symbol);
  }
  if (mass.kind === 'longest-lived-isotope' && options?.allowUnstable !== true) {
    throw new NoStandardAtomicWeightError(symbol);
  }
  return mass.value;
}

/**
 * Computes the molar mass of a formula, in g/mol, as the unrounded sum of
 * `atomicMass.value * count` over every element in the parsed formula.
 */
export function molarMass(formula: string, options?: MolarMassOptions): number {
  const counts = parseFormulaCounts(formula, options);
  let total = 0;
  for (const [symbol, count] of counts) {
    total += resolveAtomicMassValue(symbol, options) * count;
  }
  return total;
}

/** One element's share of a formula's total mass. */
export interface CompositionEntry {
  symbol: string;
  count: number;
  /** Unrounded percentage of the formula's total molar mass contributed by this element. */
  massPercent: number;
}

/**
 * Compares two element symbols in Hill order: if the formula contains
 * carbon, carbon sorts first, hydrogen second, then everything else
 * alphabetically; if the formula contains no carbon, every element
 * (including hydrogen) sorts strictly alphabetically.
 */
function compareHillOrder(a: string, b: string, hasCarbon: boolean): number {
  if (hasCarbon) {
    if (a === 'C' || b === 'C') return a === b ? 0 : a === 'C' ? -1 : 1;
    if (a === 'H' || b === 'H') return a === b ? 0 : a === 'H' ? -1 : 1;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * Computes each element's atom count and percentage contribution to the
 * total molar mass, sorted in Hill order. `massPercent` values are
 * unrounded and sum to 100 only up to floating-point error.
 */
export function composition(formula: string, options?: MolarMassOptions): CompositionEntry[] {
  const counts = parseFormulaCounts(formula, options);
  const massBySymbol = new Map<string, number>();
  let total = 0;
  for (const [symbol, count] of counts) {
    const mass = resolveAtomicMassValue(symbol, options) * count;
    massBySymbol.set(symbol, mass);
    total += mass;
  }

  const hasCarbon = counts.has('C');
  const symbols = [...counts.keys()].sort((a, b) => compareHillOrder(a, b, hasCarbon));

  return symbols.map((symbol) => ({
    symbol,
    count: counts.get(symbol) ?? 0,
    massPercent: ((massBySymbol.get(symbol) ?? 0) / total) * 100,
  }));
}
