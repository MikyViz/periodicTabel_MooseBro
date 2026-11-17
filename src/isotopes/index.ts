/**
 * Isotope subpath entry point (`periodic-table-ts/isotopes`).
 *
 * Kept as a separate build entry so the isotope dataset — the heaviest part
 * of this library — is never pulled into consumers that only need
 * `getElement`/`findElements`/formula parsing. Real exports (`getIsotopes`
 * and the isotope dataset) land in Phase 4.
 */

export type { Isotope } from '../types.js';
