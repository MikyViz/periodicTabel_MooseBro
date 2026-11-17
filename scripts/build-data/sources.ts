import type { DataSource } from '../../src/types.js';

/**
 * Per-dataset attribution, exported alongside the generated data so consumers
 * (and this library's own README) can audit provenance and license terms.
 *
 * IMPORTANT: `REFERENCE_COMPILATION` covers properties that are NOT yet
 * cross-checked against a single primary public-domain source (radii,
 * electronegativity, ionization energies beyond the first, electron
 * affinity, melting/boiling point, density, oxidation states, colors,
 * discovery metadata, appearance/summary text). These are standard,
 * widely-attested reference values (not copied from Wikipedia or any other
 * CC BY-SA text), but per the project rules they are flagged here as a
 * TODO: verify precision/uncertainty digits against primary literature
 * (e.g. CRC Handbook of Chemistry and Physics, NIST WebBook, original
 * journal articles) before relying on them for anything beyond general
 * reference use.
 */
export const ATOMIC_MASS_SOURCE: DataSource = {
  name: 'CIAAW Standard Atomic Weights (IUPAC, 2021) / NIST SP 966',
  url: 'https://ciaaw.org/atomic-weights.htm',
  license: 'Public domain / IUPAC factual data',
  retrievedAt: '2026-11-17',
  notes:
    'For elements with no IUPAC standard atomic weight (no stable isotopes), the mass number ' +
    'of the longest-lived known isotope is used, per common IUPAC convention.',
};

export const GROUND_STATE_CONFIG_SOURCE: DataSource = {
  name: 'NIST Atomic Spectra Database — Ground Levels and Ionization Energies',
  url: 'https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html',
  license: 'Public domain (US government work)',
  retrievedAt: '2026-11-17',
  notes:
    'Configurations for Z=104-118 are theoretical predictions (relativistic calculations), ' +
    'not direct measurements; flagged per-element where applicable.',
};

export const REFERENCE_COMPILATION_SOURCE: DataSource = {
  name: 'Standard reference compilation (CRC Handbook of Chemistry and Physics; NIST WebBook)',
  license: 'Factual/physical-constant data; not copied from any CC BY-SA text',
  retrievedAt: '2026-11-17',
  notes:
    'TODO(maintainer): verify precision/uncertainty digits for radii, electronegativity, ' +
    'ionization energies beyond the first, electron affinity, melting/boiling point, density, ' +
    'and oxidation states against primary literature before relying on them for ' +
    'publication-grade accuracy.',
};
