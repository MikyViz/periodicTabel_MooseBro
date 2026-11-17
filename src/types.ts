/**
 * Core data model for `periodic-table-ts`.
 *
 * Unit conventions (documented once here; individual fields reference this
 * section rather than repeating it):
 * - Temperatures are in kelvin (K).
 * - Energies (ionization energy, electron affinity) are in kilojoules per
 *   mole (kJ/mol).
 * - Radii (atomic, covalent, van der Waals) are in picometres (pm). See each
 *   field's JSDoc below for the specific scale/source, since "atomic radius"
 *   in particular is not a single well-defined physical quantity.
 * - Density is in grams per cubic centimetre (g/cm³). Solids and liquids are
 *   at 298.15 K (25°C) and 1 atm; gases are at 273.15 K (0°C) and 1 atm
 *   (the conventional STP reference used for gas density tables), unless a
 *   dataset note says otherwise.
 * - Atomic mass is in unified atomic mass units (u), equivalently g/mol.
 * - Isotope mass is in unified atomic mass units (u).
 * - Half-life is in seconds.
 *
 * Nullability convention: fields modeling a *measured physical property*
 * (electronegativity, radii, electron affinity, melting/boiling point,
 * density, the CPK/Jmol colors) are always present but typed `T | null`:
 * `null` means the property was considered but no reliable value exists for
 * this element (e.g. He has no melting point at 1 atm; several superheavy
 * elements have never been characterized). Fields that are optional (`?`)
 * instead model something that may not *apply* at all (e.g. `group` for
 * f-block elements, `latinName` for elements with no distinct classical
 * Latin name, `discoveredYear` for elements known since antiquity).
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
 * Localized element names (`en`, `ru`, `he` are built into the core
 * package). The classical Latin name, where it differs from the English
 * name (e.g. `Na` from *natrium*), is modeled separately on
 * {@link Element.latinName} rather than here, since it is only defined for
 * ~11 elements with historical Latin symbol etymology, not all 118.
 * Additional locale codes may be added via the index signature without a
 * breaking change.
 */
export interface LocalizedNames {
  en: string;
  ru: string;
  he: string;
  [locale: string]: string;
}

/**
 * How an element's standard atomic mass was determined, per IUPAC/CIAAW
 * convention:
 * - `'standard'`: a single IUPAC standard atomic weight with a reported
 *   uncertainty, from a consistent terrestrial isotopic composition. This
 *   also covers Th, Pa, and U, which have IUPAC standard atomic weights
 *   despite being radioactive (their natural isotopic composition is
 *   consistent enough to support one).
 * - `'conventional'`: the element's natural isotopic composition varies
 *   measurably by source material, so IUPAC publishes an interval; `value`
 *   here is IUPAC's conventional abridged value for general use (no
 *   `uncertainty`, since it is not a measurement uncertainty). Exactly 12
 *   elements currently have this status: H, Li, B, C, N, O, Mg, Si, S, Cl,
 *   Br, Tl.
 * - `'longest-lived-isotope'`: the element has no IUPAC standard atomic
 *   weight at all (no stable isotope and no consistent natural abundance);
 *   `value` is the mass number of the longest-lived known isotope, per
 *   common IUPAC bracket-notation convention (e.g. technetium, "[97]").
 */
export type AtomicMassKind = 'standard' | 'conventional' | 'longest-lived-isotope';

/**
 * Atomic mass (a.k.a. standard atomic weight), in u (equivalently g/mol).
 * `uncertainty` is the reported standard uncertainty in the last digit(s),
 * in the same unit, when published by the source (e.g. CIAAW); it is only
 * ever present when `kind` is `'standard'`.
 */
export interface AtomicMass {
  value: number;
  uncertainty?: number;
  kind: AtomicMassKind;
}

/**
 * A single ionization energy measurement.
 * `order` is 1 for the first ionization energy, 2 for the second, etc. A
 * shorter array (or an empty one) simply means higher orders are not known
 * with enough confidence to include — there is no `null` entry for "unknown
 * order N", since the array length already encodes that.
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
 * See the module-level documentation for unit conventions and the
 * `T | null` vs `T | undefined` nullability convention.
 */
export interface Element {
  /** Proton count (Z); also the element's unique identifier within this library. */
  atomicNumber: number;
  /** IUPAC element symbol, e.g. "Fe". Case-sensitive canonical form. */
  symbol: string;
  names: LocalizedNames;
  /**
   * Classical Latin name, only present for the handful of elements whose
   * symbol derives from a distinct historical Latin name (e.g. `Na` from
   * *natrium*, `Fe` from *ferrum*). `undefined` for the other ~107
   * elements, including modern elements whose English name is already a
   * Neo-Latin scientific coinage.
   */
  latinName?: string;
  atomicMass: AtomicMass;
  /** Periodic table group (column), 1-18. `undefined` for f-block elements. */
  group?: number;
  /** Periodic table period (row), 1-7 (extensible to 8 for future elements). */
  period: number;
  block: Block;
  category: ElementCategory;
  /** Ground-state electron configuration, e.g. "[Ar] 3d6 4s2". */
  electronConfiguration: string;
  /** Electrons per shell, innermost (K) first, e.g. [2, 8, 8, 2] for Ca. */
  shells: readonly number[];
  /** Pauling electronegativity (dimensionless); `null` if not assigned/known. */
  electronegativityPauling: number | null;
  /**
   * Empirical atomic radius, in pm — the Slater-type empirical radius
   * compiled by J.C. Slater (1964) and widely reproduced in general
   * chemistry references. `null` if no reliable value exists.
   */
  atomicRadius: number | null;
  /**
   * Single-bond covalent radius, in pm, per Cordero et al. (2008),
   * "Covalent radii revisited", Dalton Trans., 2832-2838. `null` if unknown.
   */
  covalentRadius: number | null;
  /**
   * Van der Waals radius, in pm, Bondi-type (1964) as commonly extended by
   * later compilations (e.g. Mantina et al. 2009; Alvarez 2013). `null` if
   * unknown — most transition metals, lanthanides/actinides, and
   * superheavy elements have no well-established value.
   */
  vdwRadius: number | null;
  /** Successive ionization energies, in kJ/mol, ordered by `order`. */
  ionizationEnergies: readonly IonizationEnergy[];
  /**
   * Electron affinity, in kJ/mol. Positive values denote energy released.
   * `null` if not applicable (e.g. no stable anion forms) or not known.
   */
  electronAffinity: number | null;
  oxidationStates: readonly OxidationState[];
  standardState: StandardState;
  /** Melting point, in K; `null` if unmeasured or not applicable at 1 atm. */
  meltingPoint: number | null;
  /** Boiling point, in K; `null` if unmeasured or not applicable at 1 atm. */
  boilingPoint: number | null;
  /** Density, in g/cm³ (see module docs for the temperature/pressure convention); `null` if unmeasured. */
  density: number | null;
  /** Year of discovery or first isolation. `undefined` if known since antiquity. */
  discoveredYear?: number;
  discoveredBy?: string;
  /** CPK color scheme hex color, e.g. "#ffffff"; `null` if no confirmed value exists. */
  cpkColor: string | null;
  /** Jmol color scheme hex color, e.g. "#ffffff"; `null` if no confirmed value exists. */
  jmolColor: string | null;
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
