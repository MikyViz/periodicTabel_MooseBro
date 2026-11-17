/**
 * Isotope subpath entry point (`periodic-table-ts/isotopes`).
 *
 * Kept as a separate build entry so the isotope dataset — the heaviest part
 * of this library — is never pulled into consumers that only need
 * `getElement`/`findElements`/formula parsing from the core entry point.
 *
 * Scope (v1): every naturally occurring isotope (stable and primordial
 * radionuclides) plus the longest-lived known isotope of every element
 * Z=1..118. The full nuclide chart (thousands of synthetic isotopes) is out
 * of scope — see README.md and data/raw/MANIFEST.md for sources.
 */

export type { Isotope } from '../types.js';
export { UnknownIsotopeError } from '../errors.js';
export { ISOTOPES, NIST_ISOTOPE_SOURCE, NUBASE_SOURCE } from './data.js';
export { getIsotopes, getIsotope, getLongestLivedIsotope } from './lookup.js';
