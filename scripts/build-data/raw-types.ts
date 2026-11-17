import type {
  Block,
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
 * risk of writing out full configurations by hand.
 */
export interface RawElementInput {
  atomicNumber: number;
  symbol: string;
  names: LocalizedNames;
  atomicMass: { value: number; uncertainty?: number };
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
  cpkColor: string;
  jmolColor: string;
  appearance?: string;
  summary?: string;
}

/** Builds a `LocalizedNames` record; `la` defaults to the English name. */
export function names(en: string, ru: string, he: string, la?: string): LocalizedNames {
  return { en, ru, he, la: la ?? en };
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
