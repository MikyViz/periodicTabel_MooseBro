/**
 * Lookup functions over the bundled isotope dataset.
 */
import { ELEMENTS } from '../data/elements.js';
import { UnknownElementError, UnknownIsotopeError } from '../errors.js';
import type { Isotope } from '../types.js';
import { ISOTOPES } from './data.js';

const VALID_SYMBOLS = new Set(ELEMENTS.map((el) => el.symbol));
const SYMBOL_BY_NUMBER = new Map(ELEMENTS.map((el) => [el.atomicNumber, el.symbol]));

function resolveSymbol(query: number | string): string {
  if (typeof query === 'number') {
    const symbol = SYMBOL_BY_NUMBER.get(query);
    if (symbol === undefined) throw new UnknownElementError(query);
    return symbol;
  }
  const trimmed = query.trim();
  if (!VALID_SYMBOLS.has(trimmed)) throw new UnknownElementError(trimmed);
  return trimmed;
}

/**
 * Returns every bundled isotope of an element (by atomic number or exact
 * IUPAC symbol): natural isotopes (stable + primordial radionuclides) plus,
 * for elements with none, the single longest-lived known isotope. Never
 * returns an empty array for a valid element.
 *
 * @throws {UnknownElementError} if `symbolOrNumber` does not match a known element.
 */
export function getIsotopes(symbolOrNumber: number | string): Isotope[] {
  const symbol = resolveSymbol(symbolOrNumber);
  return ISOTOPES.filter((iso) => iso.symbol === symbol);
}

/** Half-life ranking score: stable isotopes sort as infinitely long-lived. */
function longevityScore(iso: Isotope): number {
  return iso.stable ? Infinity : (iso.halfLifeSeconds ?? -Infinity);
}

/**
 * Returns the longest-lived bundled isotope of an element. For elements
 * with two or more stable isotopes (all "infinitely" long-lived), returns
 * the lowest-mass-number one, for a deterministic result.
 *
 * @throws {UnknownElementError} if `symbolOrNumber` does not match a known element.
 */
export function getLongestLivedIsotope(symbolOrNumber: number | string): Isotope {
  const isotopes = getIsotopes(symbolOrNumber);
  return isotopes.reduce((best, current) => {
    const bestScore = longevityScore(best);
    const currentScore = longevityScore(current);
    if (currentScore > bestScore) return current;
    if (currentScore === bestScore && current.massNumber < best.massNumber) return current;
    return best;
  });
}

function parseNotation(query: string): { symbol: string; massNumber: number } {
  const trimmed = query.trim();
  const dashMatch = /^([A-Za-z]+)-(\d+)$/.exec(trimmed);
  if (dashMatch?.[1] !== undefined && dashMatch[2] !== undefined) {
    return { symbol: dashMatch[1], massNumber: Number(dashMatch[2]) };
  }
  const prefixMatch = /^(\d+)([A-Za-z]+)$/.exec(trimmed);
  if (prefixMatch?.[1] !== undefined && prefixMatch[2] !== undefined) {
    return { symbol: prefixMatch[2], massNumber: Number(prefixMatch[1]) };
  }
  // Neither notation matched; there's no symbol to report, so surface the
  // whole query as an "unknown element" rather than inventing a different
  // error shape for "malformed notation".
  throw new UnknownElementError(trimmed);
}

/**
 * Looks up a single isotope by `"U-238"` or `"238U"` notation, or by
 * `{ z, a }` (atomic number, mass number).
 *
 * @throws {UnknownElementError} if the element part doesn't match a known element.
 * @throws {UnknownIsotopeError} if the element is known but that mass number
 *   isn't in the bundled dataset.
 */
export function getIsotope(query: string | { z: number; a: number }): Isotope {
  const { symbol, massNumber } =
    typeof query === 'string'
      ? (() => {
          const parsed = parseNotation(query);
          return { symbol: resolveSymbol(parsed.symbol), massNumber: parsed.massNumber };
        })()
      : { symbol: resolveSymbol(query.z), massNumber: query.a };

  const found = ISOTOPES.find((iso) => iso.symbol === symbol && iso.massNumber === massNumber);
  if (found === undefined) {
    throw new UnknownIsotopeError(symbol, massNumber);
  }
  return found;
}
