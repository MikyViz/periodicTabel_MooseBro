/**
 * Core lookup and filtering API over the bundled element dataset.
 */
import { ELEMENTS } from '../data/elements.js';
import type { Element, ElementCategory, Block, StandardState } from '../types.js';

/** All 118 elements, ordered by atomic number. Frozen; safe to share by reference. */
export function getElements(): readonly Element[] {
  return ELEMENTS;
}

const BY_NUMBER = new Map<number, Element>(ELEMENTS.map((el) => [el.atomicNumber, el]));

const BY_KEY = new Map<string, Element>();
for (const el of ELEMENTS) {
  BY_KEY.set(el.symbol.toLowerCase(), el);
  for (const localizedName of Object.values(el.names)) {
    BY_KEY.set(localizedName.toLowerCase(), el);
  }
}

/**
 * Looks up a single element by atomic number, IUPAC symbol, or localized
 * name (in any bundled language), case-insensitive for strings.
 *
 * @returns The matching element, or `undefined` if nothing matches.
 */
export function getElement(query: number | string): Element | undefined {
  if (typeof query === 'number') {
    return BY_NUMBER.get(query);
  }
  return BY_KEY.get(query.trim().toLowerCase());
}

/** Inclusive numeric range filter, e.g. for {@link ElementFilter.mass}. */
export interface RangeFilter {
  min?: number;
  max?: number;
}

/** Filter criteria for {@link findElements}. All provided criteria must match (AND). */
export interface ElementFilter {
  block?: Block;
  group?: number;
  period?: number;
  category?: ElementCategory;
  /** Matches against {@link Element.standardState}. */
  state?: StandardState;
  /** Inclusive range over {@link Element.atomicMass}'s value, in u. */
  mass?: RangeFilter;
}

function inRange(value: number, range: RangeFilter): boolean {
  if (range.min !== undefined && value < range.min) return false;
  if (range.max !== undefined && value > range.max) return false;
  return true;
}

/** Finds all elements matching every provided filter criterion. */
export function findElements(filter: ElementFilter): Element[] {
  return ELEMENTS.filter((el) => {
    if (filter.block !== undefined && el.block !== filter.block) return false;
    if (filter.group !== undefined && el.group !== filter.group) return false;
    if (filter.period !== undefined && el.period !== filter.period) return false;
    if (filter.category !== undefined && el.category !== filter.category) return false;
    if (filter.state !== undefined && el.standardState !== filter.state) return false;
    if (filter.mass !== undefined && !inRange(el.atomicMass.value, filter.mass)) return false;
    return true;
  });
}
