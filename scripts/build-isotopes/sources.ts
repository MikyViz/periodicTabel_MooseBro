import type { DataSource } from '../../src/types.js';

export const NIST_ISOTOPE_SOURCE: DataSource = {
  name:
    'NIST "Atomic Weights and Isotopic Compositions" (most common isotopes), compiling ' +
    'AME2020 (M. Wang et al., Chinese Phys. C 45, 030003, 2021) for masses and Berglund & ' +
    'Wieser, "Isotopic compositions of the elements 2009" (IUPAC Technical Report), Pure ' +
    'Appl. Chem. 83, 397-410 (2011), for abundances',
  url: 'https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=&ascii=ascii2&isotype=some',
  license: 'Public domain (US government work, NIST)',
  retrievedAt: '2026-11-17',
  notes:
    'Used for isotope mass and natural abundance (mole fraction) for every isotope with a ' +
    'non-blank abundance value in the source — this library\u2019s "natural isotope" scope. ' +
    'Raw file: data/raw/nist_isotopic_compositions.html (see data/raw/MANIFEST.md).',
};

export const NUBASE_SOURCE: DataSource = {
  name: 'NUBASE2020 (F.G. Kondev, M. Wang, W.J. Huang, S. Naimi, G. Audi, Chinese Phys. C 45, 030001, 2021)',
  url: 'https://amdc.impcas.ac.cn/masstables/Ame2020/nubase_4.mas20',
  license:
    'TODO(maintainer): no explicit redistribution license found; AMDC states only that work ' +
    'using these files should cite the original papers, not the electronic files. Verify ' +
    'terms before redistributing data/raw/nubase2020.txt itself.',
  retrievedAt: '2026-11-17',
  notes:
    'Used for half-life, decay modes, and ground-state mass excess (cross-check only) for ' +
    'every isotope. For the 34 elements with no naturally-occurring isotope, also used to ' +
    'determine the longest-lived known isotope by comparing half-lives across all ground-' +
    'state isotopes of that element, preferring measured half-lives over systematics ' +
    'estimates (NUBASE "#" flag) even when the estimated value is nominally larger. Raw ' +
    'file: data/raw/nubase2020.txt (see data/raw/MANIFEST.md).',
};
