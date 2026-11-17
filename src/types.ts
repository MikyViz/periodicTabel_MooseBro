/**
 * Core data model for `periodic-table-ts`.
 *
 * Unit conventions (documented once here; individual fields reference this
 * section rather than repeating it):
 * - Temperatures are in kelvin (K).
 * - Energies (ionization energy, electron affinity) are in kilojoules per
 *   mole (kJ/mol).
 * - Radii (atomic, covalent, van der Waals) are in picometres (pm).
 * - Density is in grams per cubic centimetre (g/cm³), measured at or near
 *   room temperature for solids/liquids and at standard conditions for gases.
 * - Atomic mass is in unified atomic mass units (u), equivalently g/mol.
 * - Isotope mass is in unified atomic mass units (u).
 * - Half-life is in seconds.
 *
 * Any field that is not applicable, not experimentally determined, or not yet
 * sourced is modeled as optional (`?`) rather than given a placeholder value
 * such as `0` or `null`, so consumers can distinguish "unknown" from
 * "measured as zero".
 */

/** Orbital block an element belongs to. */
export type Block = 's' | 'p' | 'd' | 'f';

/**
 * Chemical category used for coloring/grouping in periodic table UIs.
 * `'unknown'` is used for superheavy elements whose chemistry has not been
 * experimentally confirmed.
 */
export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'lanthanide'
  | 'actinide'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'reactive-nonmetal'
  | 'noble-gas'
  | 'unknown';

/** Physical state at standard conditions (298.15 K, 1 atm). */
export type StandardState = 'solid' | 'liquid' | 'gas' | 'unknown';

/**
 * A decay mode for a radioactive isotope. The union covers the common,
 * well-known modes for autocomplete, while the `string & {}` branch allows
 * other IAEA/NUBASE decay-mode strings without widening to plain `string`
 * (and without losing autocomplete for the common cases).
 */
export type DecayMode =
  | 'alpha'
  | 'beta-minus'
  | 'beta-plus'
  | 'electron-capture'
  | 'isomeric-transition'
  | 'spontaneous-fission'
  | 'proton-emission'
  | 'neutron-emission'
  | (string & {});

/**
 * Localized element names. `en`, `ru`, and `he` are built into the core
 * package; `la` is the Latin name (relevant for elements whose symbol derives
 * from Latin, e.g. `Na` from *natrium*). Additional locale codes may be added
 * via the index signature without a breaking change.
 */
export interface LocalizedNames {
  en: string;
  ru: string;
  he: string;
  /** Latin name, e.g. used to explain symbol etymology (Na = natrium). */
  la: string;
  [locale: string]: string;
}

/**
 * Atomic mass (a.k.a. standard atomic weight), in u (equivalently g/mol).
 * `uncertainty` is the reported standard uncertainty in the last digit(s),
 * in the same unit, when published by the source (e.g. CIAAW).
 */
export interface AtomicMass {
  value: number;
  uncertainty?: number;
}

/**
 * A single ionization energy measurement.
 * `order` is 1 for the first ionization energy, 2 for the second, etc.
 * `value` is in kJ/mol.
 */
export interface IonizationEnergy {
  order: number;
  value: number;
}

/** A known oxidation state for an element. */
export interface OxidationState {
  value: number;
  /** Whether this is one of the element's most commonly observed states. */
  common: boolean;
}

/**
 * Attribution for a dataset, attached per data module (e.g. one per bundled
 * data source) rather than per field, so licensing and provenance can be
 * audited at the dataset level.
 */
export interface DataSource {
  /** Human-readable name of the source, e.g. "NIST SP 966" or "CIAAW 2021". */
  name: string;
  /** Canonical URL for the source, when available. */
  url?: string;
  /** License or usage terms under which the data is redistributed. */
  license: string;
  /** ISO 8601 date the data was retrieved/verified from the source. */
  retrievedAt?: string;
  /** Free-text notes, e.g. caveats about interpolated or estimated values. */
  notes?: string;
}

/**
 * A chemical element and its physical, chemical, and descriptive properties.
 * See the module-level documentation for unit conventions.
 */
export interface Element {
  /** Proton count (Z); also the element's unique identifier within this library. */
  atomicNumber: number;
  /** IUPAC element symbol, e.g. "Fe". Case-sensitive canonical form. */
  symbol: string;
  names: LocalizedNames;
  atomicMass: AtomicMass;
  /** Periodic table group (column), 1-18. `undefined` for most f-block elements. */
  group?: number;
  /** Periodic table period (row), 1-7 (extensible to 8 for future elements). */
  period: number;
  block: Block;
  category: ElementCategory;
  /** Ground-state electron configuration, e.g. "[Ar] 3d6 4s2". */
  electronConfiguration: string;
  /** Electrons per shell, innermost (K) first, e.g. [2, 8, 8, 2] for Ca. */
  shells: readonly number[];
  /** Pauling electronegativity (dimensionless). */
  electronegativityPauling?: number;
  /** Empirical atomic radius, in pm. */
  atomicRadius?: number;
  /** Covalent radius, in pm. */
  covalentRadius?: number;
  /** Van der Waals radius, in pm. */
  vdwRadius?: number;
  /** Successive ionization energies, in kJ/mol, ordered by `order`. */
  ionizationEnergies: readonly IonizationEnergy[];
  /** Electron affinity, in kJ/mol. Positive values denote energy released. */
  electronAffinity?: number;
  oxidationStates: readonly OxidationState[];
  standardState: StandardState;
  /** Melting point, in K. */
  meltingPoint?: number;
  /** Boiling point, in K. */
  boilingPoint?: number;
  /** Density, in g/cm³. */
  density?: number;
  /** Year of discovery or first isolation. `undefined` if known since antiquity. */
  discoveredYear?: number;
  discoveredBy?: string;
  /** CPK color scheme hex color, e.g. "#ffffff". */
  cpkColor: string;
  /** Jmol color scheme hex color, e.g. "#ffffff". */
  jmolColor: string;
  /** Short free-text description of physical appearance, e.g. "silvery-white". */
  appearance?: string;
  /** Short free-text summary for display in UIs. */
  summary?: string;
}

/**
 * A nuclide (specific isotope) of an element.
 */
export interface Isotope {
  /** Proton count (Z), matches the parent {@link Element.atomicNumber}. */
  atomicNumber: number;
  /** Mass number (A), i.e. protons + neutrons. */
  massNumber: number;
  /** Measured isotopic mass, in u. */
  mass: number;
  /** Natural abundance as a fraction in [0, 1]. Omitted for synthetic isotopes. */
  abundance?: number;
  /** Half-life, in seconds. Omitted for stable isotopes. */
  halfLife?: number;
  /** Known decay modes, omitted for stable isotopes. */
  decayModes?: readonly DecayMode[];
  stable: boolean;
}
