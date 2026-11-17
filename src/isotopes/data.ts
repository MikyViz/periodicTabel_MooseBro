/**
 * GENERATED FILE — do not edit by hand.
 *
 * Produced by `npm run build:isotopes` (scripts/build-isotopes/generate.ts)
 * from data/raw/nist_isotopic_compositions.html and data/raw/nubase2020.txt.
 * Edit the raw data / parsers and regenerate instead of editing this file
 * directly.
 *
 * Generated at: 2026-11-17T20:32:44.753Z
 */
import type { DataSource, Isotope } from '../types.js';

export const NIST_ISOTOPE_SOURCE: DataSource = {
  "name": "NIST \"Atomic Weights and Isotopic Compositions\" (most common isotopes), compiling AME2020 (M. Wang et al., Chinese Phys. C 45, 030003, 2021) for masses and Berglund & Wieser, \"Isotopic compositions of the elements 2009\" (IUPAC Technical Report), Pure Appl. Chem. 83, 397-410 (2011), for abundances",
  "url": "https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=&ascii=ascii2&isotype=some",
  "license": "Public domain (US government work, NIST)",
  "retrievedAt": "2026-11-17",
  "notes": "Used for isotope mass and natural abundance (mole fraction) for every isotope with a non-blank abundance value in the source — this library’s \"natural isotope\" scope. Raw file: data/raw/nist_isotopic_compositions.html (see data/raw/MANIFEST.md)."
};

export const NUBASE_SOURCE: DataSource = {
  "name": "NUBASE2020 (F.G. Kondev, M. Wang, W.J. Huang, S. Naimi, G. Audi, Chinese Phys. C 45, 030001, 2021)",
  "url": "https://amdc.impcas.ac.cn/masstables/Ame2020/nubase_4.mas20",
  "license": "TODO(maintainer): no explicit redistribution license found; AMDC states only that work using these files should cite the original papers, not the electronic files. Verify terms before redistributing data/raw/nubase2020.txt itself.",
  "retrievedAt": "2026-11-17",
  "notes": "Used for half-life, decay modes, and ground-state mass excess (cross-check only) for every isotope. For the 34 elements with no naturally-occurring isotope, also used to determine the longest-lived known isotope by comparing half-lives across all ground-state isotopes of that element, preferring measured half-lives over systematics estimates (NUBASE \"#\" flag) even when the estimated value is nominally larger. Raw file: data/raw/nubase2020.txt (see data/raw/MANIFEST.md)."
};

export const ISOTOPES: readonly Isotope[] = [
  {
    "atomicNumber": 1,
    "massNumber": 1,
    "symbol": "H",
    "mass": {
      "value": 1.00782503223,
      "uncertainty": 9e-11
    },
    "abundance": {
      "value": 0.999885,
      "uncertainty": 0.00007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 1,
    "massNumber": 2,
    "symbol": "H",
    "mass": {
      "value": 2.01410177812,
      "uncertainty": 1.2e-10
    },
    "abundance": {
      "value": 0.000115,
      "uncertainty": 0.00007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 2,
    "massNumber": 3,
    "symbol": "He",
    "mass": {
      "value": 3.0160293201,
      "uncertainty": 2.5e-9
    },
    "abundance": {
      "value": 0.00000134,
      "uncertainty": 3.0000000000000004e-8
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 2,
    "massNumber": 4,
    "symbol": "He",
    "mass": {
      "value": 4.00260325413,
      "uncertainty": 6e-11
    },
    "abundance": {
      "value": 0.99999866,
      "uncertainty": 3.0000000000000004e-8
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 3,
    "massNumber": 6,
    "symbol": "Li",
    "mass": {
      "value": 6.0151228874,
      "uncertainty": 1.6e-9
    },
    "abundance": {
      "value": 0.0759,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 3,
    "massNumber": 7,
    "symbol": "Li",
    "mass": {
      "value": 7.0160034366,
      "uncertainty": 4.5e-9
    },
    "abundance": {
      "value": 0.9241,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 4,
    "massNumber": 9,
    "symbol": "Be",
    "mass": {
      "value": 9.012183065,
      "uncertainty": 8.2e-8
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 5,
    "massNumber": 10,
    "symbol": "B",
    "mass": {
      "value": 10.01293695,
      "uncertainty": 4.1e-7
    },
    "abundance": {
      "value": 0.199,
      "uncertainty": 0.007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 5,
    "massNumber": 11,
    "symbol": "B",
    "mass": {
      "value": 11.00930536,
      "uncertainty": 4.5000000000000003e-7
    },
    "abundance": {
      "value": 0.801,
      "uncertainty": 0.007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 6,
    "massNumber": 12,
    "symbol": "C",
    "mass": {
      "value": 12,
      "uncertainty": 0
    },
    "abundance": {
      "value": 0.9893,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 6,
    "massNumber": 13,
    "symbol": "C",
    "mass": {
      "value": 13.00335483507,
      "uncertainty": 2.2999999999999998e-10
    },
    "abundance": {
      "value": 0.0107,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 7,
    "massNumber": 14,
    "symbol": "N",
    "mass": {
      "value": 14.00307400443,
      "uncertainty": 1.9999999999999998e-10
    },
    "abundance": {
      "value": 0.99636,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 7,
    "massNumber": 15,
    "symbol": "N",
    "mass": {
      "value": 15.00010889888,
      "uncertainty": 6.4e-10
    },
    "abundance": {
      "value": 0.00364,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 8,
    "massNumber": 16,
    "symbol": "O",
    "mass": {
      "value": 15.99491461957,
      "uncertainty": 1.6999999999999998e-10
    },
    "abundance": {
      "value": 0.99757,
      "uncertainty": 0.00016
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 8,
    "massNumber": 17,
    "symbol": "O",
    "mass": {
      "value": 16.9991317565,
      "uncertainty": 6.9e-10
    },
    "abundance": {
      "value": 0.00038,
      "uncertainty": 0.00001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 8,
    "massNumber": 18,
    "symbol": "O",
    "mass": {
      "value": 17.99915961286,
      "uncertainty": 7.6e-10
    },
    "abundance": {
      "value": 0.00205,
      "uncertainty": 0.00014000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 9,
    "massNumber": 19,
    "symbol": "F",
    "mass": {
      "value": 18.99840316273,
      "uncertainty": 9.199999999999999e-10
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 10,
    "massNumber": 20,
    "symbol": "Ne",
    "mass": {
      "value": 19.9924401762,
      "uncertainty": 1.7000000000000001e-9
    },
    "abundance": {
      "value": 0.9048,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 10,
    "massNumber": 21,
    "symbol": "Ne",
    "mass": {
      "value": 20.993846685,
      "uncertainty": 4.1e-8
    },
    "abundance": {
      "value": 0.0027,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 10,
    "massNumber": 22,
    "symbol": "Ne",
    "mass": {
      "value": 21.991385114,
      "uncertainty": 1.8000000000000002e-8
    },
    "abundance": {
      "value": 0.0925,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 11,
    "massNumber": 23,
    "symbol": "Na",
    "mass": {
      "value": 22.989769282,
      "uncertainty": 1.9e-9
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 12,
    "massNumber": 24,
    "symbol": "Mg",
    "mass": {
      "value": 23.985041697,
      "uncertainty": 1.4000000000000001e-8
    },
    "abundance": {
      "value": 0.7899,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 12,
    "massNumber": 25,
    "symbol": "Mg",
    "mass": {
      "value": 24.985836976,
      "uncertainty": 5.0000000000000004e-8
    },
    "abundance": {
      "value": 0.1,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 12,
    "massNumber": 26,
    "symbol": "Mg",
    "mass": {
      "value": 25.982592968,
      "uncertainty": 3.1e-8
    },
    "abundance": {
      "value": 0.1101,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 13,
    "massNumber": 27,
    "symbol": "Al",
    "mass": {
      "value": 26.98153853,
      "uncertainty": 1.1e-7
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 14,
    "massNumber": 28,
    "symbol": "Si",
    "mass": {
      "value": 27.97692653465,
      "uncertainty": 4.4e-10
    },
    "abundance": {
      "value": 0.92223,
      "uncertainty": 0.00019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 14,
    "massNumber": 29,
    "symbol": "Si",
    "mass": {
      "value": 28.9764946649,
      "uncertainty": 5.2e-10
    },
    "abundance": {
      "value": 0.04685,
      "uncertainty": 0.00008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 14,
    "massNumber": 30,
    "symbol": "Si",
    "mass": {
      "value": 29.973770136,
      "uncertainty": 2.3e-8
    },
    "abundance": {
      "value": 0.03092,
      "uncertainty": 0.00011
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 15,
    "massNumber": 31,
    "symbol": "P",
    "mass": {
      "value": 30.97376199842,
      "uncertainty": 7e-10
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 16,
    "massNumber": 32,
    "symbol": "S",
    "mass": {
      "value": 31.9720711744,
      "uncertainty": 1.4000000000000001e-9
    },
    "abundance": {
      "value": 0.9499,
      "uncertainty": 0.0026000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 16,
    "massNumber": 33,
    "symbol": "S",
    "mass": {
      "value": 32.9714589098,
      "uncertainty": 1.5e-9
    },
    "abundance": {
      "value": 0.0075,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 16,
    "massNumber": 34,
    "symbol": "S",
    "mass": {
      "value": 33.967867004,
      "uncertainty": 4.7000000000000004e-8
    },
    "abundance": {
      "value": 0.0425,
      "uncertainty": 0.0024000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 16,
    "massNumber": 36,
    "symbol": "S",
    "mass": {
      "value": 35.96708071,
      "uncertainty": 2e-7
    },
    "abundance": {
      "value": 0.0001,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 17,
    "massNumber": 35,
    "symbol": "Cl",
    "mass": {
      "value": 34.968852682,
      "uncertainty": 3.7e-8
    },
    "abundance": {
      "value": 0.7576,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 17,
    "massNumber": 37,
    "symbol": "Cl",
    "mass": {
      "value": 36.965902602,
      "uncertainty": 5.5e-8
    },
    "abundance": {
      "value": 0.2424,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 18,
    "massNumber": 36,
    "symbol": "Ar",
    "mass": {
      "value": 35.967545105,
      "uncertainty": 2.8000000000000003e-8
    },
    "abundance": {
      "value": 0.003336,
      "uncertainty": 0.000021
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 18,
    "massNumber": 38,
    "symbol": "Ar",
    "mass": {
      "value": 37.96273211,
      "uncertainty": 2.1e-7
    },
    "abundance": {
      "value": 0.000629,
      "uncertainty": 0.000007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 18,
    "massNumber": 40,
    "symbol": "Ar",
    "mass": {
      "value": 39.9623831237,
      "uncertainty": 2.4e-9
    },
    "abundance": {
      "value": 0.996035,
      "uncertainty": 0.000024999999999999998
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 19,
    "massNumber": 39,
    "symbol": "K",
    "mass": {
      "value": 38.9637064864,
      "uncertainty": 4.9e-9
    },
    "abundance": {
      "value": 0.932581,
      "uncertainty": 0.000044
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 19,
    "massNumber": 40,
    "symbol": "K",
    "mass": {
      "value": 39.963998166,
      "uncertainty": 6.000000000000001e-8
    },
    "abundance": {
      "value": 0.000117,
      "uncertainty": 0.000001
    },
    "halfLifeSeconds": 39383884800000000,
    "stable": false,
    "decayModes": [
      "beta-minus",
      "beta-plus"
    ]
  },
  {
    "atomicNumber": 19,
    "massNumber": 41,
    "symbol": "K",
    "mass": {
      "value": 40.9618252579,
      "uncertainty": 4.1e-9
    },
    "abundance": {
      "value": 0.067302,
      "uncertainty": 0.000044
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 20,
    "massNumber": 40,
    "symbol": "Ca",
    "mass": {
      "value": 39.962590863,
      "uncertainty": 2.2000000000000002e-8
    },
    "abundance": {
      "value": 0.96941,
      "uncertainty": 0.0015600000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 20,
    "massNumber": 42,
    "symbol": "Ca",
    "mass": {
      "value": 41.95861783,
      "uncertainty": 1.6e-7
    },
    "abundance": {
      "value": 0.00647,
      "uncertainty": 0.00023
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 20,
    "massNumber": 43,
    "symbol": "Ca",
    "mass": {
      "value": 42.95876644,
      "uncertainty": 2.4000000000000003e-7
    },
    "abundance": {
      "value": 0.00135,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 20,
    "massNumber": 44,
    "symbol": "Ca",
    "mass": {
      "value": 43.95548156,
      "uncertainty": 3.5e-7
    },
    "abundance": {
      "value": 0.02086,
      "uncertainty": 0.0011
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 20,
    "massNumber": 46,
    "symbol": "Ca",
    "mass": {
      "value": 45.953689,
      "uncertainty": 0.0000024
    },
    "abundance": {
      "value": 0.00004,
      "uncertainty": 0.000030000000000000004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 20,
    "massNumber": 48,
    "symbol": "Ca",
    "mass": {
      "value": 47.95252276,
      "uncertainty": 1.3e-7
    },
    "abundance": {
      "value": 0.00187,
      "uncertainty": 0.00021
    },
    "halfLifeSeconds": 1.7672255999999998e+27,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 21,
    "massNumber": 45,
    "symbol": "Sc",
    "mass": {
      "value": 44.95590828,
      "uncertainty": 7.7e-7
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 22,
    "massNumber": 46,
    "symbol": "Ti",
    "mass": {
      "value": 45.95262772,
      "uncertainty": 3.5e-7
    },
    "abundance": {
      "value": 0.0825,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 22,
    "massNumber": 47,
    "symbol": "Ti",
    "mass": {
      "value": 46.95175879,
      "uncertainty": 3.8e-7
    },
    "abundance": {
      "value": 0.0744,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 22,
    "massNumber": 48,
    "symbol": "Ti",
    "mass": {
      "value": 47.94794198,
      "uncertainty": 3.8e-7
    },
    "abundance": {
      "value": 0.7372,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 22,
    "massNumber": 49,
    "symbol": "Ti",
    "mass": {
      "value": 48.94786568,
      "uncertainty": 3.9e-7
    },
    "abundance": {
      "value": 0.0541,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 22,
    "massNumber": 50,
    "symbol": "Ti",
    "mass": {
      "value": 49.94478689,
      "uncertainty": 3.9e-7
    },
    "abundance": {
      "value": 0.0518,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 23,
    "massNumber": 50,
    "symbol": "V",
    "mass": {
      "value": 49.94715601,
      "uncertainty": 9.5e-7
    },
    "abundance": {
      "value": 0.0025,
      "uncertainty": 0.00004
    },
    "halfLifeSeconds": 8.5521096e+24,
    "stable": false,
    "decayModes": [
      "beta-plus"
    ]
  },
  {
    "atomicNumber": 23,
    "massNumber": 51,
    "symbol": "V",
    "mass": {
      "value": 50.94395704,
      "uncertainty": 9.4e-7
    },
    "abundance": {
      "value": 0.9975,
      "uncertainty": 0.00004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 24,
    "massNumber": 50,
    "symbol": "Cr",
    "mass": {
      "value": 49.94604183,
      "uncertainty": 9.4e-7
    },
    "abundance": {
      "value": 0.04345,
      "uncertainty": 0.00013000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 24,
    "massNumber": 52,
    "symbol": "Cr",
    "mass": {
      "value": 51.94050623,
      "uncertainty": 6.3e-7
    },
    "abundance": {
      "value": 0.83789,
      "uncertainty": 0.00018
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 24,
    "massNumber": 53,
    "symbol": "Cr",
    "mass": {
      "value": 52.94064815,
      "uncertainty": 6.2e-7
    },
    "abundance": {
      "value": 0.09501,
      "uncertainty": 0.00017
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 24,
    "massNumber": 54,
    "symbol": "Cr",
    "mass": {
      "value": 53.93887916,
      "uncertainty": 6.1e-7
    },
    "abundance": {
      "value": 0.02365,
      "uncertainty": 0.00007000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 25,
    "massNumber": 55,
    "symbol": "Mn",
    "mass": {
      "value": 54.93804391,
      "uncertainty": 4.800000000000001e-7
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 26,
    "massNumber": 54,
    "symbol": "Fe",
    "mass": {
      "value": 53.93960899,
      "uncertainty": 5.3e-7
    },
    "abundance": {
      "value": 0.05845,
      "uncertainty": 0.00035000000000000005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 26,
    "massNumber": 56,
    "symbol": "Fe",
    "mass": {
      "value": 55.93493633,
      "uncertainty": 4.9e-7
    },
    "abundance": {
      "value": 0.91754,
      "uncertainty": 0.00036
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 26,
    "massNumber": 57,
    "symbol": "Fe",
    "mass": {
      "value": 56.93539284,
      "uncertainty": 4.9e-7
    },
    "abundance": {
      "value": 0.02119,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 26,
    "massNumber": 58,
    "symbol": "Fe",
    "mass": {
      "value": 57.93327443,
      "uncertainty": 5.3e-7
    },
    "abundance": {
      "value": 0.00282,
      "uncertainty": 0.00004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 27,
    "massNumber": 59,
    "symbol": "Co",
    "mass": {
      "value": 58.93319429,
      "uncertainty": 5.6e-7
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 28,
    "massNumber": 58,
    "symbol": "Ni",
    "mass": {
      "value": 57.93534241,
      "uncertainty": 5.2e-7
    },
    "abundance": {
      "value": 0.68077,
      "uncertainty": 0.00019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 28,
    "massNumber": 60,
    "symbol": "Ni",
    "mass": {
      "value": 59.93078588,
      "uncertainty": 5.2e-7
    },
    "abundance": {
      "value": 0.26223,
      "uncertainty": 0.00015000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 28,
    "massNumber": 61,
    "symbol": "Ni",
    "mass": {
      "value": 60.93105557,
      "uncertainty": 5.2e-7
    },
    "abundance": {
      "value": 0.011399,
      "uncertainty": 0.000013
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 28,
    "massNumber": 62,
    "symbol": "Ni",
    "mass": {
      "value": 61.92834537,
      "uncertainty": 5.5e-7
    },
    "abundance": {
      "value": 0.036346,
      "uncertainty": 0.000039999999999999996
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 28,
    "massNumber": 64,
    "symbol": "Ni",
    "mass": {
      "value": 63.92796682,
      "uncertainty": 5.800000000000001e-7
    },
    "abundance": {
      "value": 0.009255,
      "uncertainty": 0.000018999999999999998
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 29,
    "massNumber": 63,
    "symbol": "Cu",
    "mass": {
      "value": 62.92959772,
      "uncertainty": 5.6e-7
    },
    "abundance": {
      "value": 0.6915,
      "uncertainty": 0.0015
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 29,
    "massNumber": 65,
    "symbol": "Cu",
    "mass": {
      "value": 64.9277897,
      "uncertainty": 7.1e-7
    },
    "abundance": {
      "value": 0.3085,
      "uncertainty": 0.0015
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 30,
    "massNumber": 64,
    "symbol": "Zn",
    "mass": {
      "value": 63.92914201,
      "uncertainty": 7.1e-7
    },
    "abundance": {
      "value": 0.4917,
      "uncertainty": 0.007500000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 30,
    "massNumber": 66,
    "symbol": "Zn",
    "mass": {
      "value": 65.92603381,
      "uncertainty": 9.4e-7
    },
    "abundance": {
      "value": 0.2773,
      "uncertainty": 0.0098
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 30,
    "massNumber": 67,
    "symbol": "Zn",
    "mass": {
      "value": 66.92712775,
      "uncertainty": 9.600000000000001e-7
    },
    "abundance": {
      "value": 0.0404,
      "uncertainty": 0.0016
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 30,
    "massNumber": 68,
    "symbol": "Zn",
    "mass": {
      "value": 67.92484455,
      "uncertainty": 9.8e-7
    },
    "abundance": {
      "value": 0.1845,
      "uncertainty": 0.0063
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 30,
    "massNumber": 70,
    "symbol": "Zn",
    "mass": {
      "value": 69.9253192,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 0.0061,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 31,
    "massNumber": 69,
    "symbol": "Ga",
    "mass": {
      "value": 68.9255735,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.60108,
      "uncertainty": 0.00009
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 31,
    "massNumber": 71,
    "symbol": "Ga",
    "mass": {
      "value": 70.92470258,
      "uncertainty": 8.7e-7
    },
    "abundance": {
      "value": 0.39892,
      "uncertainty": 0.00009
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 32,
    "massNumber": 70,
    "symbol": "Ge",
    "mass": {
      "value": 69.92424875,
      "uncertainty": 9.000000000000001e-7
    },
    "abundance": {
      "value": 0.2057,
      "uncertainty": 0.0027
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 32,
    "massNumber": 72,
    "symbol": "Ge",
    "mass": {
      "value": 71.922075826,
      "uncertainty": 8.100000000000001e-8
    },
    "abundance": {
      "value": 0.2745,
      "uncertainty": 0.0032
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 32,
    "massNumber": 73,
    "symbol": "Ge",
    "mass": {
      "value": 72.923458956,
      "uncertainty": 6.1e-8
    },
    "abundance": {
      "value": 0.0775,
      "uncertainty": 0.0012000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 32,
    "massNumber": 74,
    "symbol": "Ge",
    "mass": {
      "value": 73.921177761,
      "uncertainty": 1.3e-8
    },
    "abundance": {
      "value": 0.365,
      "uncertainty": 0.002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 32,
    "massNumber": 76,
    "symbol": "Ge",
    "mass": {
      "value": 75.921402726,
      "uncertainty": 1.9e-8
    },
    "abundance": {
      "value": 0.0773,
      "uncertainty": 0.0012000000000000001
    },
    "halfLifeSeconds": 5.9328287999999986e+28,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 33,
    "massNumber": 75,
    "symbol": "As",
    "mass": {
      "value": 74.92159457,
      "uncertainty": 9.5e-7
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 34,
    "massNumber": 74,
    "symbol": "Se",
    "mass": {
      "value": 73.922475934,
      "uncertainty": 1.5000000000000002e-8
    },
    "abundance": {
      "value": 0.0089,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 34,
    "massNumber": 76,
    "symbol": "Se",
    "mass": {
      "value": 75.919213704,
      "uncertainty": 1.7e-8
    },
    "abundance": {
      "value": 0.0937,
      "uncertainty": 0.0029000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 34,
    "massNumber": 77,
    "symbol": "Se",
    "mass": {
      "value": 76.919914154,
      "uncertainty": 6.7e-8
    },
    "abundance": {
      "value": 0.0763,
      "uncertainty": 0.0016
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 34,
    "massNumber": 78,
    "symbol": "Se",
    "mass": {
      "value": 77.91730928,
      "uncertainty": 2e-7
    },
    "abundance": {
      "value": 0.2377,
      "uncertainty": 0.0028
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 34,
    "massNumber": 80,
    "symbol": "Se",
    "mass": {
      "value": 79.9165218,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.4961,
      "uncertainty": 0.0041
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 34,
    "massNumber": 82,
    "symbol": "Se",
    "mass": {
      "value": 81.9166995,
      "uncertainty": 0.0000015
    },
    "abundance": {
      "value": 0.0873,
      "uncertainty": 0.0022
    },
    "halfLifeSeconds": 2.7644457599999995e+27,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 35,
    "massNumber": 79,
    "symbol": "Br",
    "mass": {
      "value": 78.9183376,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.5069,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 35,
    "massNumber": 81,
    "symbol": "Br",
    "mass": {
      "value": 80.9162897,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.4931,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 36,
    "massNumber": 78,
    "symbol": "Kr",
    "mass": {
      "value": 77.92036494,
      "uncertainty": 7.6e-7
    },
    "abundance": {
      "value": 0.00355,
      "uncertainty": 0.000030000000000000004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 36,
    "massNumber": 80,
    "symbol": "Kr",
    "mass": {
      "value": 79.91637808,
      "uncertainty": 7.5e-7
    },
    "abundance": {
      "value": 0.02286,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 36,
    "massNumber": 82,
    "symbol": "Kr",
    "mass": {
      "value": 81.91348273,
      "uncertainty": 9.4e-7
    },
    "abundance": {
      "value": 0.11593,
      "uncertainty": 0.00031
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 36,
    "massNumber": 83,
    "symbol": "Kr",
    "mass": {
      "value": 82.91412716,
      "uncertainty": 3.2e-7
    },
    "abundance": {
      "value": 0.115,
      "uncertainty": 0.00019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 36,
    "massNumber": 84,
    "symbol": "Kr",
    "mass": {
      "value": 83.9114977282,
      "uncertainty": 4.4000000000000005e-9
    },
    "abundance": {
      "value": 0.56987,
      "uncertainty": 0.00015000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 36,
    "massNumber": 86,
    "symbol": "Kr",
    "mass": {
      "value": 85.9106106269,
      "uncertainty": 4.1e-9
    },
    "abundance": {
      "value": 0.17279,
      "uncertainty": 0.00041000000000000005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 37,
    "massNumber": 85,
    "symbol": "Rb",
    "mass": {
      "value": 84.9117897379,
      "uncertainty": 5.4e-9
    },
    "abundance": {
      "value": 0.7217,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 37,
    "massNumber": 87,
    "symbol": "Rb",
    "mass": {
      "value": 86.909180531,
      "uncertainty": 6e-9
    },
    "abundance": {
      "value": 0.2783,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": 1568412720000000000,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 38,
    "massNumber": 84,
    "symbol": "Sr",
    "mass": {
      "value": 83.9134191,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.0056,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 38,
    "massNumber": 86,
    "symbol": "Sr",
    "mass": {
      "value": 85.9092606,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.0986,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 38,
    "massNumber": 87,
    "symbol": "Sr",
    "mass": {
      "value": 86.9088775,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.07,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 38,
    "massNumber": 88,
    "symbol": "Sr",
    "mass": {
      "value": 87.9056125,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.8258,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 39,
    "massNumber": 89,
    "symbol": "Y",
    "mass": {
      "value": 88.9058403,
      "uncertainty": 0.0000024
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 40,
    "massNumber": 90,
    "symbol": "Zr",
    "mass": {
      "value": 89.9046977,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.5145,
      "uncertainty": 0.004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 40,
    "massNumber": 91,
    "symbol": "Zr",
    "mass": {
      "value": 90.9056396,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.1122,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 40,
    "massNumber": 92,
    "symbol": "Zr",
    "mass": {
      "value": 91.9050347,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.1715,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 40,
    "massNumber": 94,
    "symbol": "Zr",
    "mass": {
      "value": 93.9063108,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.1738,
      "uncertainty": 0.0028
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 40,
    "massNumber": 96,
    "symbol": "Zr",
    "mass": {
      "value": 95.9082714,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 0.028,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": 7.3844784e+26,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 41,
    "massNumber": 93,
    "symbol": "Nb",
    "mass": {
      "value": 92.906373,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 92,
    "symbol": "Mo",
    "mass": {
      "value": 91.90680796,
      "uncertainty": 8.4e-7
    },
    "abundance": {
      "value": 0.1453,
      "uncertainty": 0.003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 94,
    "symbol": "Mo",
    "mass": {
      "value": 93.9050849,
      "uncertainty": 4.800000000000001e-7
    },
    "abundance": {
      "value": 0.0915,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 95,
    "symbol": "Mo",
    "mass": {
      "value": 94.90583877,
      "uncertainty": 4.7e-7
    },
    "abundance": {
      "value": 0.1584,
      "uncertainty": 0.0011
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 96,
    "symbol": "Mo",
    "mass": {
      "value": 95.90467612,
      "uncertainty": 4.7e-7
    },
    "abundance": {
      "value": 0.1667,
      "uncertainty": 0.0015
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 97,
    "symbol": "Mo",
    "mass": {
      "value": 96.90601812,
      "uncertainty": 4.9e-7
    },
    "abundance": {
      "value": 0.096,
      "uncertainty": 0.0014
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 98,
    "symbol": "Mo",
    "mass": {
      "value": 97.90540482,
      "uncertainty": 4.9e-7
    },
    "abundance": {
      "value": 0.2439,
      "uncertainty": 0.0037
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 42,
    "massNumber": 100,
    "symbol": "Mo",
    "mass": {
      "value": 99.9074718,
      "uncertainty": 0.0000011
    },
    "abundance": {
      "value": 0.0982,
      "uncertainty": 0.0031000000000000003
    },
    "halfLifeSeconds": 2.23112232e+26,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 43,
    "massNumber": 97,
    "symbol": "Tc",
    "mass": {
      "value": 96.90636118921913,
      "uncertainty": 0.0000042941764092849256
    },
    "abundance": null,
    "halfLifeSeconds": 132857496000000,
    "stable": false,
    "decayModes": [
      "electron-capture"
    ]
  },
  {
    "atomicNumber": 44,
    "massNumber": 96,
    "symbol": "Ru",
    "mass": {
      "value": 95.90759025,
      "uncertainty": 4.9e-7
    },
    "abundance": {
      "value": 0.0554,
      "uncertainty": 0.0014
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 44,
    "massNumber": 98,
    "symbol": "Ru",
    "mass": {
      "value": 97.9052868,
      "uncertainty": 0.0000069
    },
    "abundance": {
      "value": 0.0187,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 44,
    "massNumber": 99,
    "symbol": "Ru",
    "mass": {
      "value": 98.9059341,
      "uncertainty": 0.0000011
    },
    "abundance": {
      "value": 0.1276,
      "uncertainty": 0.0014
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 44,
    "massNumber": 100,
    "symbol": "Ru",
    "mass": {
      "value": 99.9042143,
      "uncertainty": 0.0000011
    },
    "abundance": {
      "value": 0.126,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 44,
    "massNumber": 101,
    "symbol": "Ru",
    "mass": {
      "value": 100.9055769,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.1706,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 44,
    "massNumber": 102,
    "symbol": "Ru",
    "mass": {
      "value": 101.9043441,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.3155,
      "uncertainty": 0.0014
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 44,
    "massNumber": 104,
    "symbol": "Ru",
    "mass": {
      "value": 103.9054275,
      "uncertainty": 0.0000028
    },
    "abundance": {
      "value": 0.1862,
      "uncertainty": 0.0027
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 45,
    "massNumber": 103,
    "symbol": "Rh",
    "mass": {
      "value": 102.905498,
      "uncertainty": 0.0000025999999999999997
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 46,
    "massNumber": 102,
    "symbol": "Pd",
    "mass": {
      "value": 101.9056022,
      "uncertainty": 0.0000028
    },
    "abundance": {
      "value": 0.0102,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 46,
    "massNumber": 104,
    "symbol": "Pd",
    "mass": {
      "value": 103.9040305,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.1114,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 46,
    "massNumber": 105,
    "symbol": "Pd",
    "mass": {
      "value": 104.9050796,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.2233,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 46,
    "massNumber": 106,
    "symbol": "Pd",
    "mass": {
      "value": 105.9034804,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.2733,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 46,
    "massNumber": 108,
    "symbol": "Pd",
    "mass": {
      "value": 107.9038916,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.2646,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 46,
    "massNumber": 110,
    "symbol": "Pd",
    "mass": {
      "value": 109.9051722,
      "uncertainty": 7.5e-7
    },
    "abundance": {
      "value": 0.1172,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 47,
    "massNumber": 107,
    "symbol": "Ag",
    "mass": {
      "value": 106.9050916,
      "uncertainty": 0.0000025999999999999997
    },
    "abundance": {
      "value": 0.51839,
      "uncertainty": 0.00008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 47,
    "massNumber": 109,
    "symbol": "Ag",
    "mass": {
      "value": 108.9047553,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.48161,
      "uncertainty": 0.00008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 106,
    "symbol": "Cd",
    "mass": {
      "value": 105.9064599,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.0125,
      "uncertainty": 0.0006000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 108,
    "symbol": "Cd",
    "mass": {
      "value": 107.9041834,
      "uncertainty": 0.0000012
    },
    "abundance": {
      "value": 0.0089,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 110,
    "symbol": "Cd",
    "mass": {
      "value": 109.90300661,
      "uncertainty": 6.1e-7
    },
    "abundance": {
      "value": 0.1249,
      "uncertainty": 0.0018000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 111,
    "symbol": "Cd",
    "mass": {
      "value": 110.90418287,
      "uncertainty": 6.1e-7
    },
    "abundance": {
      "value": 0.128,
      "uncertainty": 0.0012000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 112,
    "symbol": "Cd",
    "mass": {
      "value": 111.90276287,
      "uncertainty": 6e-7
    },
    "abundance": {
      "value": 0.2413,
      "uncertainty": 0.0021000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 113,
    "symbol": "Cd",
    "mass": {
      "value": 112.90440813,
      "uncertainty": 4.5000000000000003e-7
    },
    "abundance": {
      "value": 0.1222,
      "uncertainty": 0.0012000000000000001
    },
    "halfLifeSeconds": 2.53723104e+23,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 48,
    "massNumber": 114,
    "symbol": "Cd",
    "mass": {
      "value": 113.90336509,
      "uncertainty": 4.3e-7
    },
    "abundance": {
      "value": 0.2873,
      "uncertainty": 0.004200000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 48,
    "massNumber": 116,
    "symbol": "Cd",
    "mass": {
      "value": 115.90476315,
      "uncertainty": 1.7000000000000001e-7
    },
    "abundance": {
      "value": 0.0749,
      "uncertainty": 0.0018000000000000002
    },
    "halfLifeSeconds": 8.4889944e+26,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 49,
    "massNumber": 113,
    "symbol": "In",
    "mass": {
      "value": 112.90406184,
      "uncertainty": 9.1e-7
    },
    "abundance": {
      "value": 0.0429,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 49,
    "massNumber": 115,
    "symbol": "In",
    "mass": {
      "value": 114.903878776,
      "uncertainty": 1.2000000000000002e-8
    },
    "abundance": {
      "value": 0.9571,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": 1.39169016e+22,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 50,
    "massNumber": 112,
    "symbol": "Sn",
    "mass": {
      "value": 111.90482387,
      "uncertainty": 6.1e-7
    },
    "abundance": {
      "value": 0.0097,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 114,
    "symbol": "Sn",
    "mass": {
      "value": 113.9027827,
      "uncertainty": 0.000001
    },
    "abundance": {
      "value": 0.0066,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 115,
    "symbol": "Sn",
    "mass": {
      "value": 114.903344699,
      "uncertainty": 1.6e-8
    },
    "abundance": {
      "value": 0.0034,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 116,
    "symbol": "Sn",
    "mass": {
      "value": 115.9017428,
      "uncertainty": 1e-7
    },
    "abundance": {
      "value": 0.1454,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 117,
    "symbol": "Sn",
    "mass": {
      "value": 116.90295398,
      "uncertainty": 5.2e-7
    },
    "abundance": {
      "value": 0.0768,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 118,
    "symbol": "Sn",
    "mass": {
      "value": 117.90160657,
      "uncertainty": 5.4e-7
    },
    "abundance": {
      "value": 0.2422,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 119,
    "symbol": "Sn",
    "mass": {
      "value": 118.90331117,
      "uncertainty": 7.8e-7
    },
    "abundance": {
      "value": 0.0859,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 120,
    "symbol": "Sn",
    "mass": {
      "value": 119.90220163,
      "uncertainty": 9.7e-7
    },
    "abundance": {
      "value": 0.3258,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 122,
    "symbol": "Sn",
    "mass": {
      "value": 121.9034438,
      "uncertainty": 0.0000025999999999999997
    },
    "abundance": {
      "value": 0.0463,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 50,
    "massNumber": 124,
    "symbol": "Sn",
    "mass": {
      "value": 123.9052766,
      "uncertainty": 0.0000011
    },
    "abundance": {
      "value": 0.0579,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 51,
    "massNumber": 121,
    "symbol": "Sb",
    "mass": {
      "value": 120.903812,
      "uncertainty": 0.000003
    },
    "abundance": {
      "value": 0.5721,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 51,
    "massNumber": 123,
    "symbol": "Sb",
    "mass": {
      "value": 122.9042132,
      "uncertainty": 0.0000023
    },
    "abundance": {
      "value": 0.4279,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 52,
    "massNumber": 120,
    "symbol": "Te",
    "mass": {
      "value": 119.9040593,
      "uncertainty": 0.0000032999999999999997
    },
    "abundance": {
      "value": 0.0009,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 52,
    "massNumber": 122,
    "symbol": "Te",
    "mass": {
      "value": 121.9030435,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.0255,
      "uncertainty": 0.0012000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 52,
    "massNumber": 123,
    "symbol": "Te",
    "mass": {
      "value": 122.9042698,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.0089,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": [
      "electron-capture"
    ]
  },
  {
    "atomicNumber": 52,
    "massNumber": 124,
    "symbol": "Te",
    "mass": {
      "value": 123.9028171,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.0474,
      "uncertainty": 0.0014
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 52,
    "massNumber": 125,
    "symbol": "Te",
    "mass": {
      "value": 124.9044299,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.0707,
      "uncertainty": 0.0015
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 52,
    "massNumber": 126,
    "symbol": "Te",
    "mass": {
      "value": 125.9033109,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.1884,
      "uncertainty": 0.0025
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 52,
    "massNumber": 128,
    "symbol": "Te",
    "mass": {
      "value": 127.90446128,
      "uncertainty": 9.3e-7
    },
    "abundance": {
      "value": 0.3174,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": 7.100460000000001e+31,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 52,
    "massNumber": 130,
    "symbol": "Te",
    "mass": {
      "value": 129.906222748,
      "uncertainty": 1.2000000000000002e-8
    },
    "abundance": {
      "value": 0.3408,
      "uncertainty": 0.006200000000000001
    },
    "halfLifeSeconds": 2.49620616e+28,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 53,
    "massNumber": 127,
    "symbol": "I",
    "mass": {
      "value": 126.9044719,
      "uncertainty": 0.0000039
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 124,
    "symbol": "Xe",
    "mass": {
      "value": 123.905892,
      "uncertainty": 0.0000019
    },
    "abundance": {
      "value": 0.000952,
      "uncertainty": 0.000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 126,
    "symbol": "Xe",
    "mass": {
      "value": 125.9042983,
      "uncertainty": 0.0000038
    },
    "abundance": {
      "value": 0.00089,
      "uncertainty": 0.000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 128,
    "symbol": "Xe",
    "mass": {
      "value": 127.903531,
      "uncertainty": 0.0000011
    },
    "abundance": {
      "value": 0.019102,
      "uncertainty": 0.000008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 129,
    "symbol": "Xe",
    "mass": {
      "value": 128.9047808611,
      "uncertainty": 6e-9
    },
    "abundance": {
      "value": 0.264006,
      "uncertainty": 0.000082
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 130,
    "symbol": "Xe",
    "mass": {
      "value": 129.903509349,
      "uncertainty": 1e-8
    },
    "abundance": {
      "value": 0.04071,
      "uncertainty": 0.000013
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 131,
    "symbol": "Xe",
    "mass": {
      "value": 130.90508406,
      "uncertainty": 2.4000000000000003e-7
    },
    "abundance": {
      "value": 0.212324,
      "uncertainty": 0.000029999999999999997
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 132,
    "symbol": "Xe",
    "mass": {
      "value": 131.9041550856,
      "uncertainty": 5.6000000000000005e-9
    },
    "abundance": {
      "value": 0.269086,
      "uncertainty": 0.000032999999999999996
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 134,
    "symbol": "Xe",
    "mass": {
      "value": 133.90539466,
      "uncertainty": 9.000000000000001e-7
    },
    "abundance": {
      "value": 0.104357,
      "uncertainty": 0.000021
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 54,
    "massNumber": 136,
    "symbol": "Xe",
    "mass": {
      "value": 135.907214484,
      "uncertainty": 1.1000000000000001e-8
    },
    "abundance": {
      "value": 0.088573,
      "uncertainty": 0.000044
    },
    "halfLifeSeconds": 6.879556799999999e+28,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 55,
    "massNumber": 133,
    "symbol": "Cs",
    "mass": {
      "value": 132.905451961,
      "uncertainty": 8e-9
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 130,
    "symbol": "Ba",
    "mass": {
      "value": 129.9063207,
      "uncertainty": 0.0000028
    },
    "abundance": {
      "value": 0.00106,
      "uncertainty": 0.00001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 132,
    "symbol": "Ba",
    "mass": {
      "value": 131.9050611,
      "uncertainty": 0.0000011
    },
    "abundance": {
      "value": 0.00101,
      "uncertainty": 0.00001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 134,
    "symbol": "Ba",
    "mass": {
      "value": 133.90450818,
      "uncertainty": 3e-7
    },
    "abundance": {
      "value": 0.02417,
      "uncertainty": 0.00018
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 135,
    "symbol": "Ba",
    "mass": {
      "value": 134.90568838,
      "uncertainty": 2.9000000000000003e-7
    },
    "abundance": {
      "value": 0.06592,
      "uncertainty": 0.00012000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 136,
    "symbol": "Ba",
    "mass": {
      "value": 135.90457573,
      "uncertainty": 2.9000000000000003e-7
    },
    "abundance": {
      "value": 0.07854,
      "uncertainty": 0.00024000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 137,
    "symbol": "Ba",
    "mass": {
      "value": 136.90582714,
      "uncertainty": 3e-7
    },
    "abundance": {
      "value": 0.11232,
      "uncertainty": 0.00024000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 56,
    "massNumber": 138,
    "symbol": "Ba",
    "mass": {
      "value": 137.905247,
      "uncertainty": 3.1e-7
    },
    "abundance": {
      "value": 0.71698,
      "uncertainty": 0.00042
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 57,
    "massNumber": 138,
    "symbol": "La",
    "mass": {
      "value": 137.9071149,
      "uncertainty": 0.0000036999999999999997
    },
    "abundance": {
      "value": 0.0008881,
      "uncertainty": 0.0000071
    },
    "halfLifeSeconds": 3250432800000000000,
    "stable": false,
    "decayModes": [
      "beta-plus",
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 57,
    "massNumber": 139,
    "symbol": "La",
    "mass": {
      "value": 138.9063563,
      "uncertainty": 0.0000024
    },
    "abundance": {
      "value": 0.9991119,
      "uncertainty": 0.0000071
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 58,
    "massNumber": 136,
    "symbol": "Ce",
    "mass": {
      "value": 135.90712921,
      "uncertainty": 4.1e-7
    },
    "abundance": {
      "value": 0.00185,
      "uncertainty": 0.00002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 58,
    "massNumber": 138,
    "symbol": "Ce",
    "mass": {
      "value": 137.905991,
      "uncertainty": 0.000011
    },
    "abundance": {
      "value": 0.00251,
      "uncertainty": 0.00002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 58,
    "massNumber": 140,
    "symbol": "Ce",
    "mass": {
      "value": 139.9054431,
      "uncertainty": 0.0000023
    },
    "abundance": {
      "value": 0.8845,
      "uncertainty": 0.00051
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 58,
    "massNumber": 142,
    "symbol": "Ce",
    "mass": {
      "value": 141.9092504,
      "uncertainty": 0.0000028999999999999998
    },
    "abundance": {
      "value": 0.11114,
      "uncertainty": 0.00051
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 59,
    "massNumber": 141,
    "symbol": "Pr",
    "mass": {
      "value": 140.9076576,
      "uncertainty": 0.0000023
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 60,
    "massNumber": 142,
    "symbol": "Nd",
    "mass": {
      "value": 141.907729,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.27152,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 60,
    "massNumber": 143,
    "symbol": "Nd",
    "mass": {
      "value": 142.90982,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.12174,
      "uncertainty": 0.00026000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 60,
    "massNumber": 144,
    "symbol": "Nd",
    "mass": {
      "value": 143.910093,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.23798,
      "uncertainty": 0.00019
    },
    "halfLifeSeconds": 7.2266904e+22,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 60,
    "massNumber": 145,
    "symbol": "Nd",
    "mass": {
      "value": 144.9125793,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.08293,
      "uncertainty": 0.00012000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 60,
    "massNumber": 146,
    "symbol": "Nd",
    "mass": {
      "value": 145.9131226,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.17189,
      "uncertainty": 0.00032
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 60,
    "massNumber": 148,
    "symbol": "Nd",
    "mass": {
      "value": 147.9168993,
      "uncertainty": 0.0000025999999999999997
    },
    "abundance": {
      "value": 0.05756,
      "uncertainty": 0.00021
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 60,
    "massNumber": 150,
    "symbol": "Nd",
    "mass": {
      "value": 149.9209022,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.05638,
      "uncertainty": 0.00028000000000000003
    },
    "halfLifeSeconds": 2.9348568e+26,
    "stable": false,
    "decayModes": [
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 61,
    "massNumber": 145,
    "symbol": "Pm",
    "mass": {
      "value": 144.9127557546646,
      "uncertainty": 0.0000030059234864994476
    },
    "abundance": null,
    "halfLifeSeconds": 558569520,
    "stable": false,
    "decayModes": [
      "electron-capture",
      "alpha"
    ]
  },
  {
    "atomicNumber": 62,
    "massNumber": 144,
    "symbol": "Sm",
    "mass": {
      "value": 143.9120065,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 0.0307,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 62,
    "massNumber": 147,
    "symbol": "Sm",
    "mass": {
      "value": 146.9149044,
      "uncertainty": 0.0000019
    },
    "abundance": {
      "value": 0.1499,
      "uncertainty": 0.0018000000000000002
    },
    "halfLifeSeconds": 3364040160000000000,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 62,
    "massNumber": 148,
    "symbol": "Sm",
    "mass": {
      "value": 147.9148292,
      "uncertainty": 0.0000019
    },
    "abundance": {
      "value": 0.1124,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": 1.9881288e+23,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 62,
    "massNumber": 149,
    "symbol": "Sm",
    "mass": {
      "value": 148.9171921,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.1382,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 62,
    "massNumber": 150,
    "symbol": "Sm",
    "mass": {
      "value": 149.9172829,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.0738,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 62,
    "massNumber": 152,
    "symbol": "Sm",
    "mass": {
      "value": 151.9197397,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.2675,
      "uncertainty": 0.0016
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 62,
    "massNumber": 154,
    "symbol": "Sm",
    "mass": {
      "value": 153.9222169,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.2275,
      "uncertainty": 0.0029000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 63,
    "massNumber": 151,
    "symbol": "Eu",
    "mass": {
      "value": 150.9198578,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.4781,
      "uncertainty": 0.0006000000000000001
    },
    "halfLifeSeconds": 1.4516495999999999e+26,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 63,
    "massNumber": 153,
    "symbol": "Eu",
    "mass": {
      "value": 152.921238,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.5219,
      "uncertainty": 0.0006000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 64,
    "massNumber": 152,
    "symbol": "Gd",
    "mass": {
      "value": 151.9197995,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.002,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": 3.4082208e+21,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 64,
    "massNumber": 154,
    "symbol": "Gd",
    "mass": {
      "value": 153.9208741,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.0218,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 64,
    "massNumber": 155,
    "symbol": "Gd",
    "mass": {
      "value": 154.9226305,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.148,
      "uncertainty": 0.0012000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 64,
    "massNumber": 156,
    "symbol": "Gd",
    "mass": {
      "value": 155.9221312,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.2047,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 64,
    "massNumber": 157,
    "symbol": "Gd",
    "mass": {
      "value": 156.9239686,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.1565,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 64,
    "massNumber": 158,
    "symbol": "Gd",
    "mass": {
      "value": 157.9241123,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.2484,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 64,
    "massNumber": 160,
    "symbol": "Gd",
    "mass": {
      "value": 159.9270624,
      "uncertainty": 0.0000018
    },
    "abundance": {
      "value": 0.2186,
      "uncertainty": 0.0019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 65,
    "massNumber": 159,
    "symbol": "Tb",
    "mass": {
      "value": 158.9253547,
      "uncertainty": 0.0000019
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 156,
    "symbol": "Dy",
    "mass": {
      "value": 155.9242847,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.00056,
      "uncertainty": 0.000030000000000000004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 158,
    "symbol": "Dy",
    "mass": {
      "value": 157.9244159,
      "uncertainty": 0.0000031
    },
    "abundance": {
      "value": 0.00095,
      "uncertainty": 0.000030000000000000004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 160,
    "symbol": "Dy",
    "mass": {
      "value": 159.9252046,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.02329,
      "uncertainty": 0.00018
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 161,
    "symbol": "Dy",
    "mass": {
      "value": 160.9269405,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.18889,
      "uncertainty": 0.00042
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 162,
    "symbol": "Dy",
    "mass": {
      "value": 161.9268056,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.25475,
      "uncertainty": 0.00036
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 163,
    "symbol": "Dy",
    "mass": {
      "value": 162.9287383,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.24896,
      "uncertainty": 0.00042
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 66,
    "massNumber": 164,
    "symbol": "Dy",
    "mass": {
      "value": 163.9291819,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.2826,
      "uncertainty": 0.00054
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 67,
    "massNumber": 165,
    "symbol": "Ho",
    "mass": {
      "value": 164.9303288,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 68,
    "massNumber": 162,
    "symbol": "Er",
    "mass": {
      "value": 161.9287884,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.00139,
      "uncertainty": 0.00005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 68,
    "massNumber": 164,
    "symbol": "Er",
    "mass": {
      "value": 163.9292088,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.01601,
      "uncertainty": 0.000030000000000000004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 68,
    "massNumber": 166,
    "symbol": "Er",
    "mass": {
      "value": 165.9302995,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.33503,
      "uncertainty": 0.00036
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 68,
    "massNumber": 167,
    "symbol": "Er",
    "mass": {
      "value": 166.9320546,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.22869,
      "uncertainty": 0.00009
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 68,
    "massNumber": 168,
    "symbol": "Er",
    "mass": {
      "value": 167.9323767,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.26978,
      "uncertainty": 0.00018
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 68,
    "massNumber": 170,
    "symbol": "Er",
    "mass": {
      "value": 169.9354702,
      "uncertainty": 0.0000025999999999999997
    },
    "abundance": {
      "value": 0.1491,
      "uncertainty": 0.00036
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 69,
    "massNumber": 169,
    "symbol": "Tm",
    "mass": {
      "value": 168.9342179,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 168,
    "symbol": "Yb",
    "mass": {
      "value": 167.9338896,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.00123,
      "uncertainty": 0.000030000000000000004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 170,
    "symbol": "Yb",
    "mass": {
      "value": 169.9347664,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.02982,
      "uncertainty": 0.00039000000000000005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 171,
    "symbol": "Yb",
    "mass": {
      "value": 170.9363302,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.1409,
      "uncertainty": 0.0014
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 172,
    "symbol": "Yb",
    "mass": {
      "value": 171.9363859,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.2168,
      "uncertainty": 0.0013000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 173,
    "symbol": "Yb",
    "mass": {
      "value": 172.9382151,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.16103,
      "uncertainty": 0.00063
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 174,
    "symbol": "Yb",
    "mass": {
      "value": 173.9388664,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.32026,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 70,
    "massNumber": 176,
    "symbol": "Yb",
    "mass": {
      "value": 175.9425764,
      "uncertainty": 0.0000024
    },
    "abundance": {
      "value": 0.12996,
      "uncertainty": 0.0008300000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 71,
    "massNumber": 175,
    "symbol": "Lu",
    "mass": {
      "value": 174.9407752,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.97401,
      "uncertainty": 0.00013000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 71,
    "massNumber": 176,
    "symbol": "Lu",
    "mass": {
      "value": 175.9426897,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.02599,
      "uncertainty": 0.00013000000000000002
    },
    "halfLifeSeconds": 1167946776000000000,
    "stable": false,
    "decayModes": [
      "beta-minus",
      "beta-plus"
    ]
  },
  {
    "atomicNumber": 72,
    "massNumber": 174,
    "symbol": "Hf",
    "mass": {
      "value": 173.9400461,
      "uncertainty": 0.0000028
    },
    "abundance": {
      "value": 0.0016,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": 6.31152e+22,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 72,
    "massNumber": 176,
    "symbol": "Hf",
    "mass": {
      "value": 175.9414076,
      "uncertainty": 0.0000022
    },
    "abundance": {
      "value": 0.0526,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 72,
    "massNumber": 177,
    "symbol": "Hf",
    "mass": {
      "value": 176.9432277,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.186,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 72,
    "massNumber": 178,
    "symbol": "Hf",
    "mass": {
      "value": 177.9437058,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.2728,
      "uncertainty": 0.0007
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 72,
    "massNumber": 179,
    "symbol": "Hf",
    "mass": {
      "value": 178.9458232,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.1362,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 72,
    "massNumber": 180,
    "symbol": "Hf",
    "mass": {
      "value": 179.946557,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.3508,
      "uncertainty": 0.0016
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 73,
    "massNumber": 180,
    "symbol": "Ta",
    "mass": {
      "value": 179.9474648,
      "uncertainty": 0.0000024
    },
    "abundance": {
      "value": 0.0001201,
      "uncertainty": 0.0000032
    },
    "halfLifeSeconds": 29354.4,
    "stable": false,
    "decayModes": [
      "electron-capture",
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 73,
    "massNumber": 181,
    "symbol": "Ta",
    "mass": {
      "value": 180.9479958,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.9998799,
      "uncertainty": 0.0000032
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 74,
    "massNumber": 180,
    "symbol": "W",
    "mass": {
      "value": 179.9467108,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.0012,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": 5.0176584e+25,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 74,
    "massNumber": 182,
    "symbol": "W",
    "mass": {
      "value": 181.94820394,
      "uncertainty": 9.1e-7
    },
    "abundance": {
      "value": 0.265,
      "uncertainty": 0.0016
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 74,
    "massNumber": 183,
    "symbol": "W",
    "mass": {
      "value": 182.95022275,
      "uncertainty": 9.000000000000001e-7
    },
    "abundance": {
      "value": 0.1431,
      "uncertainty": 0.0004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 74,
    "massNumber": 184,
    "symbol": "W",
    "mass": {
      "value": 183.95093092,
      "uncertainty": 9.4e-7
    },
    "abundance": {
      "value": 0.3064,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 74,
    "massNumber": 186,
    "symbol": "W",
    "mass": {
      "value": 185.9543628,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.2843,
      "uncertainty": 0.0019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 75,
    "massNumber": 185,
    "symbol": "Re",
    "mass": {
      "value": 184.9529545,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.374,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 75,
    "massNumber": 187,
    "symbol": "Re",
    "mass": {
      "value": 186.9557501,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.626,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": 1312796160000000000,
    "stable": false,
    "decayModes": [
      "beta-minus",
      "alpha"
    ]
  },
  {
    "atomicNumber": 76,
    "massNumber": 184,
    "symbol": "Os",
    "mass": {
      "value": 183.9524885,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.0002,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": 353445120000000000000,
    "stable": false,
    "decayModes": []
  },
  {
    "atomicNumber": 76,
    "massNumber": 186,
    "symbol": "Os",
    "mass": {
      "value": 185.953835,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.0159,
      "uncertainty": 0.00030000000000000003
    },
    "halfLifeSeconds": 6.31152e+22,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 76,
    "massNumber": 187,
    "symbol": "Os",
    "mass": {
      "value": 186.9557474,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.0196,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 76,
    "massNumber": 188,
    "symbol": "Os",
    "mass": {
      "value": 187.9558352,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 0.1324,
      "uncertainty": 0.0008
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 76,
    "massNumber": 189,
    "symbol": "Os",
    "mass": {
      "value": 188.9581442,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.1615,
      "uncertainty": 0.0005
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 76,
    "massNumber": 190,
    "symbol": "Os",
    "mass": {
      "value": 189.9584437,
      "uncertainty": 0.0000016999999999999998
    },
    "abundance": {
      "value": 0.2626,
      "uncertainty": 0.0002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 76,
    "massNumber": 192,
    "symbol": "Os",
    "mass": {
      "value": 191.961477,
      "uncertainty": 0.0000028999999999999998
    },
    "abundance": {
      "value": 0.4078,
      "uncertainty": 0.0019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 77,
    "massNumber": 191,
    "symbol": "Ir",
    "mass": {
      "value": 190.9605893,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 0.373,
      "uncertainty": 0.002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 77,
    "massNumber": 193,
    "symbol": "Ir",
    "mass": {
      "value": 192.9629216,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 0.627,
      "uncertainty": 0.002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 78,
    "massNumber": 190,
    "symbol": "Pt",
    "mass": {
      "value": 189.9599297,
      "uncertainty": 0.0000063
    },
    "abundance": {
      "value": 0.00012,
      "uncertainty": 0.00002
    },
    "halfLifeSeconds": 15242320800000000000,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 78,
    "massNumber": 192,
    "symbol": "Pt",
    "mass": {
      "value": 191.9610387,
      "uncertainty": 0.0000032
    },
    "abundance": {
      "value": 0.00782,
      "uncertainty": 0.00024000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 78,
    "massNumber": 194,
    "symbol": "Pt",
    "mass": {
      "value": 193.9626809,
      "uncertainty": 0.000001
    },
    "abundance": {
      "value": 0.3286,
      "uncertainty": 0.004
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 78,
    "massNumber": 195,
    "symbol": "Pt",
    "mass": {
      "value": 194.9647917,
      "uncertainty": 0.000001
    },
    "abundance": {
      "value": 0.3378,
      "uncertainty": 0.0024000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 78,
    "massNumber": 196,
    "symbol": "Pt",
    "mass": {
      "value": 195.96495209,
      "uncertainty": 9.9e-7
    },
    "abundance": {
      "value": 0.2521,
      "uncertainty": 0.0034000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 78,
    "massNumber": 198,
    "symbol": "Pt",
    "mass": {
      "value": 197.9678949,
      "uncertainty": 0.0000023
    },
    "abundance": {
      "value": 0.07356,
      "uncertainty": 0.0013000000000000002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 79,
    "massNumber": 197,
    "symbol": "Au",
    "mass": {
      "value": 196.96656879,
      "uncertainty": 7.1e-7
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 196,
    "symbol": "Hg",
    "mass": {
      "value": 195.9658326,
      "uncertainty": 0.0000032
    },
    "abundance": {
      "value": 0.0015,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 198,
    "symbol": "Hg",
    "mass": {
      "value": 197.9667686,
      "uncertainty": 5.2e-7
    },
    "abundance": {
      "value": 0.0997,
      "uncertainty": 0.002
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 199,
    "symbol": "Hg",
    "mass": {
      "value": 198.96828064,
      "uncertainty": 4.6e-7
    },
    "abundance": {
      "value": 0.1687,
      "uncertainty": 0.0022
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 200,
    "symbol": "Hg",
    "mass": {
      "value": 199.96832659,
      "uncertainty": 4.7e-7
    },
    "abundance": {
      "value": 0.231,
      "uncertainty": 0.0019
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 201,
    "symbol": "Hg",
    "mass": {
      "value": 200.97030284,
      "uncertainty": 6.900000000000001e-7
    },
    "abundance": {
      "value": 0.1318,
      "uncertainty": 0.0009000000000000001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 202,
    "symbol": "Hg",
    "mass": {
      "value": 201.9706434,
      "uncertainty": 6.900000000000001e-7
    },
    "abundance": {
      "value": 0.2986,
      "uncertainty": 0.0026000000000000003
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 80,
    "massNumber": 204,
    "symbol": "Hg",
    "mass": {
      "value": 203.97349398,
      "uncertainty": 5.3e-7
    },
    "abundance": {
      "value": 0.0687,
      "uncertainty": 0.0015
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 81,
    "massNumber": 203,
    "symbol": "Tl",
    "mass": {
      "value": 202.9723446,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.2952,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 81,
    "massNumber": 205,
    "symbol": "Tl",
    "mass": {
      "value": 204.9744278,
      "uncertainty": 0.0000014
    },
    "abundance": {
      "value": 0.7048,
      "uncertainty": 0.0001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 82,
    "massNumber": 204,
    "symbol": "Pb",
    "mass": {
      "value": 203.973044,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.014,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 82,
    "massNumber": 206,
    "symbol": "Pb",
    "mass": {
      "value": 205.9744657,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.241,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 82,
    "massNumber": 207,
    "symbol": "Pb",
    "mass": {
      "value": 206.9758973,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.221,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 82,
    "massNumber": 208,
    "symbol": "Pb",
    "mass": {
      "value": 207.9766525,
      "uncertainty": 0.0000012999999999999998
    },
    "abundance": {
      "value": 0.524,
      "uncertainty": 0.001
    },
    "halfLifeSeconds": null,
    "stable": true,
    "decayModes": []
  },
  {
    "atomicNumber": 83,
    "massNumber": 209,
    "symbol": "Bi",
    "mass": {
      "value": 208.9803991,
      "uncertainty": 0.0000016
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": 6.3430776e+26,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 84,
    "massNumber": 209,
    "symbol": "Po",
    "mass": {
      "value": 208.98243037722142,
      "uncertainty": 0.0000019323793841782162
    },
    "abundance": null,
    "halfLifeSeconds": 3913142400,
    "stable": false,
    "decayModes": [
      "alpha",
      "beta-plus"
    ]
  },
  {
    "atomicNumber": 85,
    "massNumber": 210,
    "symbol": "At",
    "mass": {
      "value": 209.987147530007,
      "uncertainty": 0.000008588352818569851
    },
    "abundance": null,
    "halfLifeSeconds": 29160,
    "stable": false,
    "decayModes": [
      "beta-plus",
      "alpha"
    ]
  },
  {
    "atomicNumber": 86,
    "massNumber": 222,
    "symbol": "Rn",
    "mass": {
      "value": 222.0175760640432,
      "uncertainty": 0.0000020397337944103393
    },
    "abundance": null,
    "halfLifeSeconds": 330177.6,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 87,
    "massNumber": 223,
    "symbol": "Fr",
    "mass": {
      "value": 223.0197342097521,
      "uncertainty": 0.0000020397337944103393
    },
    "abundance": null,
    "halfLifeSeconds": 1320,
    "stable": false,
    "decayModes": [
      "beta-minus",
      "alpha"
    ]
  },
  {
    "atomicNumber": 88,
    "massNumber": 226,
    "symbol": "Ra",
    "mass": {
      "value": 226.0254082123961,
      "uncertainty": 0.0000020397337944103393
    },
    "abundance": null,
    "halfLifeSeconds": 50492160000,
    "stable": false,
    "decayModes": [
      "alpha",
      "C"
    ]
  },
  {
    "atomicNumber": 89,
    "massNumber": 227,
    "symbol": "Ac",
    "mass": {
      "value": 227.02775057827296,
      "uncertainty": 0.0000020397337944103393
    },
    "abundance": null,
    "halfLifeSeconds": 687072067.1999999,
    "stable": false,
    "decayModes": [
      "beta-minus",
      "alpha"
    ]
  },
  {
    "atomicNumber": 90,
    "massNumber": 232,
    "symbol": "Th",
    "mass": {
      "value": 232.0380558,
      "uncertainty": 0.0000021
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": 441806400000000000,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 91,
    "massNumber": 231,
    "symbol": "Pa",
    "mass": {
      "value": 231.0358842,
      "uncertainty": 0.0000024
    },
    "abundance": {
      "value": 1,
      "uncertainty": null
    },
    "halfLifeSeconds": 1030355640000,
    "stable": false,
    "decayModes": [
      "alpha",
      "Ne",
      "F"
    ]
  },
  {
    "atomicNumber": 92,
    "massNumber": 234,
    "symbol": "U",
    "mass": {
      "value": 234.0409523,
      "uncertainty": 0.0000019
    },
    "abundance": {
      "value": 0.000054,
      "uncertainty": 0.0000049999999999999996
    },
    "halfLifeSeconds": 7747390800000,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission",
      "Mg"
    ]
  },
  {
    "atomicNumber": 92,
    "massNumber": 235,
    "symbol": "U",
    "mass": {
      "value": 235.0439301,
      "uncertainty": 0.0000019
    },
    "abundance": {
      "value": 0.007204,
      "uncertainty": 0.000006
    },
    "halfLifeSeconds": 22216550400000000,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission",
      "Ne",
      "Mg"
    ]
  },
  {
    "atomicNumber": 92,
    "massNumber": 238,
    "symbol": "U",
    "mass": {
      "value": 238.0507884,
      "uncertainty": 0.000002
    },
    "abundance": {
      "value": 0.992742,
      "uncertainty": 0.000009999999999999999
    },
    "halfLifeSeconds": 140841568800000000,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission",
      "beta-minus"
    ]
  },
  {
    "atomicNumber": 93,
    "massNumber": 237,
    "symbol": "Np",
    "mass": {
      "value": 237.04817164154173,
      "uncertainty": 0.0000011808985125533544
    },
    "abundance": null,
    "halfLifeSeconds": 67659494400000.01,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 94,
    "massNumber": 244,
    "symbol": "Pu",
    "mass": {
      "value": 244.0642043785834,
      "uncertainty": 0.000002469151435338832
    },
    "abundance": null,
    "halfLifeSeconds": 2565632880000000,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 95,
    "massNumber": 243,
    "symbol": "Am",
    "mass": {
      "value": 243.0613798840502,
      "uncertainty": 0.0000015029617432497238
    },
    "abundance": null,
    "halfLifeSeconds": 231948360000,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 96,
    "massNumber": 247,
    "symbol": "Cm",
    "mass": {
      "value": 247.07035256565743,
      "uncertainty": 0.0000042941764092849256
    },
    "abundance": null,
    "halfLifeSeconds": 492298560000000,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 97,
    "massNumber": 247,
    "symbol": "Bk",
    "mass": {
      "value": 247.07030640326101,
      "uncertainty": 0.000005367720511606156
    },
    "abundance": null,
    "halfLifeSeconds": 43549488000,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 98,
    "massNumber": 251,
    "symbol": "Cf",
    "mass": {
      "value": 251.07958719202557,
      "uncertainty": 0.0000042941764092849256
    },
    "abundance": null,
    "halfLifeSeconds": 28338724800,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 99,
    "massNumber": 252,
    "symbol": "Es",
    "mass": {
      "value": 252.0829742236684,
      "uncertainty": 0.00005367720511606157
    },
    "abundance": null,
    "halfLifeSeconds": 40754880,
    "stable": false,
    "decayModes": [
      "alpha",
      "electron-capture"
    ]
  },
  {
    "atomicNumber": 100,
    "massNumber": 257,
    "symbol": "Fm",
    "mass": {
      "value": 257.0951052720246,
      "uncertainty": 0.0000042941764092849256
    },
    "abundance": null,
    "halfLifeSeconds": 8683200,
    "stable": false,
    "decayModes": [
      "alpha",
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 101,
    "massNumber": 258,
    "symbol": "Md",
    "mass": {
      "value": 258.0984332587418,
      "uncertainty": 0.0000032206323069636937
    },
    "abundance": null,
    "halfLifeSeconds": 4457376,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 102,
    "massNumber": 259,
    "symbol": "No",
    "mass": {
      "value": 259.1009979556023,
      "uncertainty": 0.0000064412646139273875
    },
    "abundance": null,
    "halfLifeSeconds": 3480,
    "stable": false,
    "decayModes": [
      "alpha",
      "electron-capture"
    ]
  },
  {
    "atomicNumber": 103,
    "massNumber": 266,
    "symbol": "Lr",
    "mass": {
      "value": 266.1198719344652,
      "uncertainty": 0.0005797138152534649
    },
    "abundance": null,
    "halfLifeSeconds": 79200,
    "stable": false,
    "decayModes": [
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 104,
    "massNumber": 267,
    "symbol": "Rf",
    "mass": {
      "value": 267.1217828429673,
      "uncertainty": 0.0006226555793463141
    },
    "abundance": null,
    "halfLifeSeconds": 9000,
    "stable": false,
    "decayModes": [
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 105,
    "massNumber": 268,
    "symbol": "Db",
    "mass": {
      "value": 268.1256690726177,
      "uncertainty": 0.0005689783742302526
    },
    "abundance": null,
    "halfLifeSeconds": 104400,
    "stable": false,
    "decayModes": [
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 106,
    "massNumber": 269,
    "symbol": "Sg",
    "mass": {
      "value": 269.1284924936068,
      "uncertainty": 0.00039721131785885557
    },
    "abundance": null,
    "halfLifeSeconds": 300,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 107,
    "massNumber": 270,
    "symbol": "Bh",
    "mass": {
      "value": 270.13336638383134,
      "uncertainty": 0.0003220632306963694
    },
    "abundance": null,
    "halfLifeSeconds": 228,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 108,
    "massNumber": 269,
    "symbol": "Hs",
    "mass": {
      "value": 269.133645505298,
      "uncertainty": 0.00013956073330176008
    },
    "abundance": null,
    "halfLifeSeconds": 15,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 109,
    "massNumber": 277,
    "symbol": "Mt",
    "mass": {
      "value": 277.15352754207294,
      "uncertainty": 0.0007085391075320127
    },
    "abundance": null,
    "halfLifeSeconds": 9,
    "stable": false,
    "decayModes": [
      "spontaneous-fission"
    ]
  },
  {
    "atomicNumber": 110,
    "massNumber": 282,
    "symbol": "Ds",
    "mass": {
      "value": 282.1661738915983,
      "uncertainty": 0.0003220632306963694
    },
    "abundance": null,
    "halfLifeSeconds": 252,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 111,
    "massNumber": 282,
    "symbol": "Rg",
    "mass": {
      "value": 282.16934084670015,
      "uncertainty": 0.0006333910203695265
    },
    "abundance": null,
    "halfLifeSeconds": 130,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 112,
    "massNumber": 285,
    "symbol": "Cn",
    "mass": {
      "value": 285.17723139585223,
      "uncertainty": 0.000547507492183828
    },
    "abundance": null,
    "halfLifeSeconds": 30,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 113,
    "massNumber": 286,
    "symbol": "Nh",
    "mass": {
      "value": 286.18245955563054,
      "uncertainty": 0.0006333910203695265
    },
    "abundance": null,
    "halfLifeSeconds": 12,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 114,
    "massNumber": 290,
    "symbol": "Fl",
    "mass": {
      "value": 290.1918745374079,
      "uncertainty": 0.0007514808716248619
    },
    "abundance": null,
    "halfLifeSeconds": 80,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 115,
    "massNumber": 290,
    "symbol": "Mc",
    "mass": {
      "value": 290.1962331264633,
      "uncertainty": 0.0006333910203695265
    },
    "abundance": null,
    "halfLifeSeconds": 0.84,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 116,
    "massNumber": 293,
    "symbol": "Lv",
    "mass": {
      "value": 293.2045852995794,
      "uncertainty": 0.0005582429332070403
    },
    "abundance": null,
    "halfLifeSeconds": 0.07,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 117,
    "massNumber": 294,
    "symbol": "Ts",
    "mass": {
      "value": 294.21084406169587,
      "uncertainty": 0.0006333910203695265
    },
    "abundance": null,
    "halfLifeSeconds": 0.07,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  },
  {
    "atomicNumber": 118,
    "massNumber": 295,
    "symbol": "Og",
    "mass": {
      "value": 295.21617957588444,
      "uncertainty": 0.0007085391075320127
    },
    "abundance": null,
    "halfLifeSeconds": 0.68,
    "stable": false,
    "decayModes": [
      "alpha"
    ]
  }
];
