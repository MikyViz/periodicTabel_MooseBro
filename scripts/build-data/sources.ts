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
    "See `AtomicMassKind` in src/types.ts for the 'standard' / 'conventional' / " +
    "'longest-lived-isotope' distinction. 'conventional' applies to exactly 12 elements " +
    '(H, Li, B, C, N, O, Mg, Si, S, Cl, Br, Tl) with IUPAC interval atomic weights; ' +
    "'longest-lived-isotope' applies to elements with no IUPAC standard atomic weight at " +
    'all, where the mass number of the longest-lived known isotope is used by convention.',
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

/**
 * Attribution for the three radius fields. Each uses a different, named
 * physical definition/scale — they are not interchangeable and should not be
 * compared across field (e.g. an element's atomicRadius and covalentRadius
 * come from different underlying definitions, not just different sources).
 */
export const RADIUS_SCALE_SOURCE: DataSource = {
  name:
    'atomicRadius: Slater empirical atomic radii (J.C. Slater, J. Chem. Phys. 41, 3199, 1964); ' +
    'covalentRadius: single-bond covalent radii (Cordero et al., Dalton Trans., 2832-2838, ' +
    '2008); vdwRadius: Bondi-type van der Waals radii (A. Bondi, J. Phys. Chem. 68, 441, 1964), ' +
    'extended per Mantina et al. (J. Phys. Chem. A 113, 5806, 2009) and Alvarez ' +
    '(Dalton Trans. 42, 8617, 2013)',
  license:
    'Values reproduced from these peer-reviewed compilations are factual/physical-constant data',
  retrievedAt: '2026-11-17',
  notes:
    'All three are in picometres (pm). `null` means no reliable value exists under that ' +
    'specific scale for that element (common for transition metals/lanthanides/actinides in ' +
    'the vdwRadius case, and for most elements beyond Cf in all three cases).',
};

/**
 * Attribution for the state/temperature/pressure convention used for the
 * `density` field.
 */
export const DENSITY_CONDITIONS_SOURCE: DataSource = {
  name: 'Density reference conditions',
  license: 'Factual/physical-constant data',
  retrievedAt: '2026-11-17',
  notes:
    'Solids and liquids: density at 298.15 K (25°C) and 1 atm. Gases: density at 273.15 K ' +
    '(0°C) and 1 atm (the conventional STP reference for gas density tables, distinct from ' +
    'the 298.15 K reference used for solids/liquids). `null` if unmeasured.',
};

export const REFERENCE_COMPILATION_SOURCE: DataSource = {
  name: 'Standard reference compilation (CRC Handbook of Chemistry and Physics; NIST WebBook)',
  license: 'Factual/physical-constant data; not copied from any CC BY-SA text',
  retrievedAt: '2026-11-17',
  notes:
    'TODO(maintainer): verify precision/uncertainty digits for radii, electronegativity, ' +
    'ionization energies beyond the first, electron affinity, melting/boiling point, density, ' +
    'and oxidation states against primary literature before relying on them for ' +
    'publication-grade accuracy. A confidence pass (see chat history) already nulled out the ' +
    'lowest-confidence guesses (flat actinide electronegativity filler, several Bk/Cf/Es ' +
    'thermophysical values, unconfirmed Rf/Db/Sg/Cn ionization energies, and the 9 ' +
    'unconfirmed superheavy-element colors) rather than keep them as invented-looking numbers.',
};
