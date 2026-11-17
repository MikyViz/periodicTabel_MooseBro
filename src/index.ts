/**
 * Core public API barrel.
 *
 * Phase 1: types and error classes only. `getElement`, `getElements`,
 * `findElements`, `parseFormula`, `molarMass`, and `composition` are added in
 * Phases 2-3. Isotope data is intentionally excluded from this entry point —
 * see `periodic-table-ts/isotopes` — to keep the core bundle small.
 */

export type {
  AtomicMass,
  Block,
  DataSource,
  DecayMode,
  Element,
  ElementCategory,
  IonizationEnergy,
  Isotope,
  LocalizedNames,
  OxidationState,
  StandardState,
} from './types.js';

export { InvalidFormulaError, UnknownElementError } from './errors.js';
