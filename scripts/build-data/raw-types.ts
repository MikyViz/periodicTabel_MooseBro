import type {
  AtomicMass,
  Block,
  Element,
  ElementCategory,
  IonizationEnergy,
  LocalizedNames,
  OxidationState,
  StandardState,
} from '../../src/types.js';

/**
 * Input shape for the data build pipeline (`scripts/build-data/raw-elements.ts`).
 *
 * This is deliberately *not* the public `Element` shape: `electronConfiguration`
 * and `shells` are derived (see `electron-structure.ts`) from `nobleGasCore` +
 * `valenceConfig` rather than hand-typed, to avoid the 118-way transcription
 * risk of writing out full configurations by hand. Fields that are nullable
 * (not just optional) on `Element` — radii, electronegativity, electron
 * affinity, melting/boiling point, density, the two colors — stay plain
 * optional (`?`) here for terser authoring; `generate.ts` coerces an omitted
 * field to explicit `null` in the final `Element` record.
 */
export interface RawElementInput {
  atomicNumber: number;
  symbol: string;
  names: LocalizedNames;
  /** Only present for the ~11 elements with a classical Latin symbol etymology. */
  latinName?: string;
  atomicMass: AtomicMass;
  period: number;
  group?: number;
  block: Block;
  category: ElementCategory;
  /** Noble gas core symbol (He/Ne/Ar/Kr/Xe/Rn), or undefined for Z=1-2. */
  nobleGasCore?: string;
  /** Subshells beyond the noble gas core, e.g. "3d6 4s2". */
  valenceConfig: string;
  electronegativityPauling?: number;
  atomicRadius?: number;
  covalentRadius?: number;
  vdwRadius?: number;
  ionizationEnergies: readonly IonizationEnergy[];
  electronAffinity?: number;
  oxidationStates: readonly OxidationState[];
  standardState: StandardState;
  meltingPoint?: number;
  boilingPoint?: number;
  density?: number;
  discoveredYear?: number;
  discoveredBy?: string;
  cpkColor?: string;
  jmolColor?: string;
  appearance?: string;
  summary?: string;
  /** See `Element.estimated` — fields whose value here is estimated/predicted, not measured. */
  estimated?: (keyof Element)[];
}

/** Builds a `LocalizedNames` record (en/ru/he only — see `latinName` for Latin). */
export function names(en: string, ru: string, he: string): LocalizedNames {
  return { en, ru, he };
}

/** Builds an `AtomicMass` with `kind: 'standard'` (a single IUPAC standard atomic weight). */
export function standardMass(value: number, uncertainty?: number): AtomicMass {
  return uncertainty === undefined
    ? { value, kind: 'standard' }
    : { value, uncertainty, kind: 'standard' };
}

/**
 * Builds an `AtomicMass` with `kind: 'conventional'` (one of the 14 IUPAC
 * interval elements). `interval` must be the exact `[lower, upper]` bound
 * published by CIAAW (https://ciaaw.org/atomic-weights.htm) — not an
 * estimate.
 */
export function conventionalMass(value: number, interval: readonly [number, number]): AtomicMass {
  return { value, kind: 'conventional', interval };
}

/** Builds an `AtomicMass` with `kind: 'longest-lived-isotope'` (no IUPAC standard atomic weight). */
export function isotopeMass(value: number): AtomicMass {
  return { value, kind: 'longest-lived-isotope' };
}

/** Builds successive ionization energies (kJ/mol) starting at order 1. */
export function ie(...values: number[]): IonizationEnergy[] {
  return values.map((value, i) => ({ order: i + 1, value }));
}

/** Builds an oxidation state list: common values, then other known values. */
export function states(common: number[], other: number[] = []): OxidationState[] {
  return [
    ...common.map((value) => ({ value, common: true })),
    ...other.map((value) => ({ value, common: false })),
  ];
}
