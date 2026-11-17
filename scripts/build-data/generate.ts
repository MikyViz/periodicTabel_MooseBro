/**
 * Data build pipeline entry point: raw source data -> validation -> generated
 * TypeScript module (`src/data/elements.ts`). Run via `npm run build:data`
 * (also invoked automatically as part of `npm run build`).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import type { Element } from '../../src/types.js';
import { expandElectronStructure } from './electron-structure.js';
import { RAW_ELEMENTS } from './raw-elements.js';
import {
  ATOMIC_MASS_SOURCE,
  DENSITY_CONDITIONS_SOURCE,
  GROUND_STATE_CONFIG_SOURCE,
  RADIUS_SCALE_SOURCE,
  REFERENCE_COMPILATION_SOURCE,
} from './sources.js';
import { validateElements } from './validate.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, '../../src/data/elements.ts');

function build(): void {
  const elements: Element[] = RAW_ELEMENTS.map((raw) => {
    const { electronConfiguration, shells } = expandElectronStructure(
      raw.nobleGasCore,
      raw.valenceConfig,
    );

    const shellElectronCount = shells.reduce((a, b) => a + b, 0);
    if (shellElectronCount !== raw.atomicNumber) {
      throw new Error(
        `Z=${String(raw.atomicNumber)} (${raw.symbol}): expanded shell electron count ` +
          `${String(shellElectronCount)} does not match atomicNumber.`,
      );
    }

    const element: Element = {
      atomicNumber: raw.atomicNumber,
      symbol: raw.symbol,
      names: raw.names,
      ...(raw.latinName !== undefined ? { latinName: raw.latinName } : {}),
      atomicMass: raw.atomicMass,
      ...(raw.group !== undefined ? { group: raw.group } : {}),
      period: raw.period,
      block: raw.block,
      category: raw.category,
      electronConfiguration,
      shells,
      // Measured-physical-property fields are always present on `Element`,
      // but nullable: an omitted raw field becomes an explicit `null` here
      // (see the nullability convention documented in src/types.ts), rather
      // than silently vanishing from the generated object.
      electronegativityPauling: raw.electronegativityPauling ?? null,
      atomicRadius: raw.atomicRadius ?? null,
      covalentRadius: raw.covalentRadius ?? null,
      vdwRadius: raw.vdwRadius ?? null,
      ionizationEnergies: raw.ionizationEnergies,
      electronAffinity: raw.electronAffinity ?? null,
      oxidationStates: raw.oxidationStates,
      standardState: raw.standardState,
      meltingPoint: raw.meltingPoint ?? null,
      boilingPoint: raw.boilingPoint ?? null,
      density: raw.density ?? null,
      ...(raw.discoveredYear !== undefined ? { discoveredYear: raw.discoveredYear } : {}),
      ...(raw.discoveredBy !== undefined ? { discoveredBy: raw.discoveredBy } : {}),
      cpkColor: raw.cpkColor ?? null,
      jmolColor: raw.jmolColor ?? null,
      ...(raw.appearance !== undefined ? { appearance: raw.appearance } : {}),
      ...(raw.summary !== undefined ? { summary: raw.summary } : {}),
      ...(raw.estimated !== undefined ? { estimated: raw.estimated } : {}),
    };
    return element;
  });

  elements.sort((a, b) => a.atomicNumber - b.atomicNumber);

  validateElements(elements);

  const header = `/**
 * GENERATED FILE — do not edit by hand.
 *
 * Produced by \`npm run build:data\` (scripts/build-data/generate.ts) from
 * scripts/build-data/raw-elements.ts. Edit the raw data and regenerate
 * instead of editing this file directly.
 *
 * Generated at: ${new Date().toISOString()}
 */
import type { DataSource, Element } from '../types.js';

export const ATOMIC_MASS_SOURCE: DataSource = ${JSON.stringify(ATOMIC_MASS_SOURCE, null, 2)};

export const GROUND_STATE_CONFIG_SOURCE: DataSource = ${JSON.stringify(
    GROUND_STATE_CONFIG_SOURCE,
    null,
    2,
  )};

export const RADIUS_SCALE_SOURCE: DataSource = ${JSON.stringify(RADIUS_SCALE_SOURCE, null, 2)};

export const DENSITY_CONDITIONS_SOURCE: DataSource = ${JSON.stringify(
    DENSITY_CONDITIONS_SOURCE,
    null,
    2,
  )};

export const REFERENCE_COMPILATION_SOURCE: DataSource = ${JSON.stringify(
    REFERENCE_COMPILATION_SOURCE,
    null,
    2,
  )};

export const ELEMENTS: readonly Element[] = ${JSON.stringify(elements, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, header, 'utf8');
  console.log(`Wrote ${String(elements.length)} elements to ${OUTPUT_PATH}`);
}

build();
