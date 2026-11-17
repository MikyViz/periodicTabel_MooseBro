/**
 * Core public API barrel.
 *
 * Phase 3 adds the formula parser (`parseFormula`, `molarMass`,
 * `composition`). Isotope data is intentionally excluded from this entry
 * point — see `periodic-table-ts/isotopes` — to keep the core bundle small.
 */

export type {
  AtomicMass,
  AtomicMassKind,
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

export { InvalidFormulaError, NoStandardAtomicWeightError, UnknownElementError } from './errors.js';

export {
  ATOMIC_MASS_SOURCE,
  DENSITY_CONDITIONS_SOURCE,
  GROUND_STATE_CONFIG_SOURCE,
  RADIUS_SCALE_SOURCE,
  REFERENCE_COMPILATION_SOURCE,
} from './data/elements.js';

export { getElement, getElements, findElements } from './lookup/index.js';
export type { ElementFilter, RangeFilter } from './lookup/index.js';

export { parseFormula, molarMass, composition } from './formula/index.js';
export type { FormulaOptions, MolarMassOptions, CompositionEntry } from './formula/index.js';
