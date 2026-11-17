/**
 * GENERATED FILE — do not edit by hand.
 *
 * Produced by `npm run build:data` (scripts/build-data/generate.ts) from
 * scripts/build-data/raw-elements.ts. Edit the raw data and regenerate
 * instead of editing this file directly.
 *
 * Generated at: 2026-11-17T19:53:17.277Z
 */
import type { DataSource, Element } from '../types.js';

export const ATOMIC_MASS_SOURCE: DataSource = {
  "name": "CIAAW Standard Atomic Weights 2024 table (IUPAC \"Atomic Weights 2021\" report, with gadolinium/lutetium/zirconium revised by CIAAW in 2024) / NIST SP 966",
  "url": "https://ciaaw.org/atomic-weights.htm",
  "license": "Public domain / IUPAC factual data",
  "retrievedAt": "2026-11-17",
  "notes": "See `AtomicMassKind` in src/types.ts for the 'standard' / 'conventional' / 'longest-lived-isotope' distinction. 'conventional' applies to exactly 14 elements (H, Li, B, C, N, O, Mg, Si, S, Cl, Ar, Br, Tl, Pb) with IUPAC interval atomic weights (see each element's `atomicMass.interval`); 'longest-lived-isotope' applies to elements with no IUPAC standard atomic weight at all, where the mass number of the longest-lived known isotope is used by convention. All values fetched directly from the live CIAAW table on 2026-11-17, not from memory. IMPORTANT: Gd (157.249(2)), Lu (174.966 69(5)), and Zr (91.222(3)) reflect the 2024 CIAAW revision and differ from older (pre-2024) reference tables you may be used to — please independently verify these three against the live CIAAW page before relying on them."
};

export const GROUND_STATE_CONFIG_SOURCE: DataSource = {
  "name": "NIST Atomic Spectra Database — Ground Levels and Ionization Energies",
  "url": "https://physics.nist.gov/PhysRefData/ASD/ionEnergy.html",
  "license": "Public domain (US government work)",
  "retrievedAt": "2026-11-17",
  "notes": "Configurations for Z=104-118 are theoretical predictions (relativistic calculations), not direct measurements; flagged per-element where applicable."
};

export const RADIUS_SCALE_SOURCE: DataSource = {
  "name": "atomicRadius: Slater empirical atomic radii (J.C. Slater, J. Chem. Phys. 41, 3199, 1964); covalentRadius: single-bond covalent radii (Cordero et al., Dalton Trans., 2832-2838, 2008); vdwRadius: Bondi-type van der Waals radii (A. Bondi, J. Phys. Chem. 68, 441, 1964), extended per Mantina et al. (J. Phys. Chem. A 113, 5806, 2009) and Alvarez (Dalton Trans. 42, 8617, 2013)",
  "license": "Values reproduced from these peer-reviewed compilations are factual/physical-constant data",
  "retrievedAt": "2026-11-17",
  "notes": "All three are in picometres (pm). `null` means no reliable value exists under that specific scale for that element (common for transition metals/lanthanides/actinides in the vdwRadius case, and for most elements beyond Cf in all three cases)."
};

export const DENSITY_CONDITIONS_SOURCE: DataSource = {
  "name": "Density reference conditions",
  "license": "Factual/physical-constant data",
  "retrievedAt": "2026-11-17",
  "notes": "Solids and liquids: density at 298.15 K (25°C) and 1 atm. Gases: density at 273.15 K (0°C) and 1 atm (the conventional STP reference for gas density tables, distinct from the 298.15 K reference used for solids/liquids). `null` if unmeasured."
};

export const REFERENCE_COMPILATION_SOURCE: DataSource = {
  "name": "Standard reference compilation (CRC Handbook of Chemistry and Physics; NIST WebBook)",
  "license": "Factual/physical-constant data; not copied from any CC BY-SA text",
  "retrievedAt": "2026-11-17",
  "notes": "TODO(maintainer): verify precision/uncertainty digits for radii, electronegativity, ionization energies beyond the first, electron affinity, melting/boiling point, density, and oxidation states against primary literature before relying on them for publication-grade accuracy. A confidence pass (see chat history) already nulled out the lowest-confidence guesses (flat actinide electronegativity filler, several Bk/Cf/Es thermophysical values, unconfirmed Rf/Db/Sg/Cn ionization energies, and the 9 unconfirmed superheavy-element colors) rather than keep them as invented-looking numbers."
};

export const ELEMENTS: readonly Element[] = [
  {
    "atomicNumber": 1,
    "symbol": "H",
    "names": {
      "en": "Hydrogen",
      "ru": "Водород",
      "he": "מימן"
    },
    "atomicMass": {
      "value": 1.008,
      "kind": "conventional",
      "interval": [
        1.00784,
        1.00811
      ]
    },
    "group": 1,
    "period": 1,
    "block": "s",
    "category": "reactive-nonmetal",
    "electronConfiguration": "1s1",
    "shells": [
      1
    ],
    "electronegativityPauling": 2.2,
    "atomicRadius": 53,
    "covalentRadius": 31,
    "vdwRadius": 120,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1312
      }
    ],
    "electronAffinity": 72.8,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      },
      {
        "value": -1,
        "common": true
      }
    ],
    "standardState": "gas",
    "meltingPoint": 13.99,
    "boilingPoint": 20.271,
    "density": 0.00008988,
    "discoveredYear": 1766,
    "discoveredBy": "Henry Cavendish",
    "cpkColor": "#FFFFFF",
    "jmolColor": "#FFFFFF",
    "appearance": "colorless gas",
    "summary": "The lightest and most abundant element in the universe; occurs mainly as H2 gas."
  },
  {
    "atomicNumber": 2,
    "symbol": "He",
    "names": {
      "en": "Helium",
      "ru": "Гелий",
      "he": "הליום"
    },
    "atomicMass": {
      "value": 4.002602,
      "uncertainty": 0.000002,
      "kind": "standard"
    },
    "group": 18,
    "period": 1,
    "block": "s",
    "category": "noble-gas",
    "electronConfiguration": "1s2",
    "shells": [
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": 31,
    "covalentRadius": 28,
    "vdwRadius": 140,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 2372.3
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "gas",
    "meltingPoint": null,
    "boilingPoint": 4.222,
    "density": 0.0001786,
    "discoveredYear": 1868,
    "discoveredBy": "Pierre Janssen and Norman Lockyer",
    "cpkColor": "#D9FFFF",
    "jmolColor": "#D9FFFF",
    "appearance": "colorless gas",
    "summary": "Second lightest element; a chemically inert noble gas that resists solidification."
  },
  {
    "atomicNumber": 3,
    "symbol": "Li",
    "names": {
      "en": "Lithium",
      "ru": "Литий",
      "he": "ליתיום"
    },
    "atomicMass": {
      "value": 6.94,
      "kind": "conventional",
      "interval": [
        6.938,
        6.997
      ]
    },
    "group": 1,
    "period": 2,
    "block": "s",
    "category": "alkali-metal",
    "electronConfiguration": "[He] 2s1",
    "shells": [
      2,
      1
    ],
    "electronegativityPauling": 0.98,
    "atomicRadius": 152,
    "covalentRadius": 128,
    "vdwRadius": 182,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 520.2
      }
    ],
    "electronAffinity": 59.6,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 453.65,
    "boilingPoint": 1603,
    "density": 0.534,
    "discoveredYear": 1817,
    "discoveredBy": "Johan August Arfwedson",
    "cpkColor": "#CC80FF",
    "jmolColor": "#CC80FF",
    "appearance": "soft, silvery-white metal",
    "summary": "The lightest metal and least dense solid element at room temperature."
  },
  {
    "atomicNumber": 4,
    "symbol": "Be",
    "names": {
      "en": "Beryllium",
      "ru": "Бериллий",
      "he": "בריליום"
    },
    "atomicMass": {
      "value": 9.0121831,
      "uncertainty": 5e-7,
      "kind": "standard"
    },
    "group": 2,
    "period": 2,
    "block": "s",
    "category": "alkaline-earth-metal",
    "electronConfiguration": "[He] 2s2",
    "shells": [
      2,
      2
    ],
    "electronegativityPauling": 1.57,
    "atomicRadius": 112,
    "covalentRadius": 96,
    "vdwRadius": 153,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 899.5
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1560,
    "boilingPoint": 2742,
    "density": 1.85,
    "discoveredYear": 1798,
    "discoveredBy": "Louis-Nicolas Vauquelin",
    "cpkColor": "#C2FF00",
    "jmolColor": "#C2FF00",
    "appearance": "steel-gray, hard, brittle metal"
  },
  {
    "atomicNumber": 5,
    "symbol": "B",
    "names": {
      "en": "Boron",
      "ru": "Бор",
      "he": "בורון"
    },
    "atomicMass": {
      "value": 10.81,
      "kind": "conventional",
      "interval": [
        10.806,
        10.821
      ]
    },
    "group": 13,
    "period": 2,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[He] 2s2 2p1",
    "shells": [
      2,
      3
    ],
    "electronegativityPauling": 2.04,
    "atomicRadius": 85,
    "covalentRadius": 84,
    "vdwRadius": 192,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 800.6
      }
    ],
    "electronAffinity": 26.7,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2349,
    "boilingPoint": 4200,
    "density": 2.34,
    "discoveredYear": 1808,
    "discoveredBy": "Joseph Louis Gay-Lussac and Louis Jacques Thénard",
    "cpkColor": "#FFB5B5",
    "jmolColor": "#FFB5B5",
    "appearance": "black-brown metalloid"
  },
  {
    "atomicNumber": 6,
    "symbol": "C",
    "names": {
      "en": "Carbon",
      "ru": "Углерод",
      "he": "פחמן"
    },
    "atomicMass": {
      "value": 12.011,
      "kind": "conventional",
      "interval": [
        12.0096,
        12.0116
      ]
    },
    "group": 14,
    "period": 2,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[He] 2s2 2p2",
    "shells": [
      2,
      4
    ],
    "electronegativityPauling": 2.55,
    "atomicRadius": 70,
    "covalentRadius": 76,
    "vdwRadius": 170,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1086.5
      }
    ],
    "electronAffinity": 121.8,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      },
      {
        "value": -4,
        "common": true
      },
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 3823,
    "boilingPoint": 4098,
    "density": 2.267,
    "cpkColor": "#909090",
    "jmolColor": "#909090",
    "appearance": "black (graphite) or colorless/transparent crystalline (diamond) solid",
    "summary": "Basis of organic chemistry; occurs in allotropes including graphite and diamond."
  },
  {
    "atomicNumber": 7,
    "symbol": "N",
    "names": {
      "en": "Nitrogen",
      "ru": "Азот",
      "he": "חנקן"
    },
    "atomicMass": {
      "value": 14.007,
      "kind": "conventional",
      "interval": [
        14.00643,
        14.00728
      ]
    },
    "group": 15,
    "period": 2,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[He] 2s2 2p3",
    "shells": [
      2,
      5
    ],
    "electronegativityPauling": 3.04,
    "atomicRadius": 65,
    "covalentRadius": 71,
    "vdwRadius": 155,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1402.3
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": -3,
        "common": true
      },
      {
        "value": 5,
        "common": true
      },
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "gas",
    "meltingPoint": 63.15,
    "boilingPoint": 77.36,
    "density": 0.0012506,
    "discoveredYear": 1772,
    "discoveredBy": "Daniel Rutherford",
    "cpkColor": "#3050F8",
    "jmolColor": "#3050F8",
    "appearance": "colorless gas",
    "summary": "Makes up about 78% of Earth’s atmosphere as diatomic N2 gas."
  },
  {
    "atomicNumber": 8,
    "symbol": "O",
    "names": {
      "en": "Oxygen",
      "ru": "Кислород",
      "he": "חמצן"
    },
    "atomicMass": {
      "value": 15.999,
      "kind": "conventional",
      "interval": [
        15.99903,
        15.99977
      ]
    },
    "group": 16,
    "period": 2,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[He] 2s2 2p4",
    "shells": [
      2,
      6
    ],
    "electronegativityPauling": 3.44,
    "atomicRadius": 60,
    "covalentRadius": 66,
    "vdwRadius": 152,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1313.9
      }
    ],
    "electronAffinity": 141,
    "oxidationStates": [
      {
        "value": -2,
        "common": true
      },
      {
        "value": -1,
        "common": false
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "gas",
    "meltingPoint": 54.36,
    "boilingPoint": 90.19,
    "density": 0.001429,
    "discoveredYear": 1774,
    "discoveredBy": "Carl Wilhelm Scheele and Joseph Priestley",
    "cpkColor": "#FF0D0D",
    "jmolColor": "#FF0D0D",
    "appearance": "colorless gas (pale blue liquid)",
    "summary": "Essential for respiration; the most abundant element in Earth’s crust by mass."
  },
  {
    "atomicNumber": 9,
    "symbol": "F",
    "names": {
      "en": "Fluorine",
      "ru": "Фтор",
      "he": "פלואור"
    },
    "atomicMass": {
      "value": 18.998403162,
      "uncertainty": 5e-9,
      "kind": "standard"
    },
    "group": 17,
    "period": 2,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[He] 2s2 2p5",
    "shells": [
      2,
      7
    ],
    "electronegativityPauling": 3.98,
    "atomicRadius": 50,
    "covalentRadius": 57,
    "vdwRadius": 147,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1681
      }
    ],
    "electronAffinity": 328,
    "oxidationStates": [
      {
        "value": -1,
        "common": true
      }
    ],
    "standardState": "gas",
    "meltingPoint": 53.48,
    "boilingPoint": 85.03,
    "density": 0.001696,
    "discoveredYear": 1886,
    "discoveredBy": "Henri Moissan",
    "cpkColor": "#90E050",
    "jmolColor": "#90E050",
    "appearance": "pale yellow-green gas",
    "summary": "The most electronegative and reactive element; never found uncombined in nature."
  },
  {
    "atomicNumber": 10,
    "symbol": "Ne",
    "names": {
      "en": "Neon",
      "ru": "Неон",
      "he": "ניאון"
    },
    "atomicMass": {
      "value": 20.1797,
      "uncertainty": 0.0006,
      "kind": "standard"
    },
    "group": 18,
    "period": 2,
    "block": "p",
    "category": "noble-gas",
    "electronConfiguration": "[He] 2s2 2p6",
    "shells": [
      2,
      8
    ],
    "electronegativityPauling": null,
    "atomicRadius": 38,
    "covalentRadius": 58,
    "vdwRadius": 154,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 2080.7
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "gas",
    "meltingPoint": 24.56,
    "boilingPoint": 27.07,
    "density": 0.0008999,
    "discoveredYear": 1898,
    "discoveredBy": "William Ramsay and Morris Travers",
    "cpkColor": "#B3E3F5",
    "jmolColor": "#B3E3F5",
    "appearance": "colorless gas",
    "summary": "An inert noble gas famous for the orange-red glow of neon signage."
  },
  {
    "atomicNumber": 11,
    "symbol": "Na",
    "names": {
      "en": "Sodium",
      "ru": "Натрий",
      "he": "נתרן"
    },
    "latinName": "Natrium",
    "atomicMass": {
      "value": 22.98976928,
      "uncertainty": 2e-8,
      "kind": "standard"
    },
    "group": 1,
    "period": 3,
    "block": "s",
    "category": "alkali-metal",
    "electronConfiguration": "[Ne] 3s1",
    "shells": [
      2,
      8,
      1
    ],
    "electronegativityPauling": 0.93,
    "atomicRadius": 186,
    "covalentRadius": 166,
    "vdwRadius": 227,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 495.8
      }
    ],
    "electronAffinity": 52.8,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 370.944,
    "boilingPoint": 1156.09,
    "density": 0.971,
    "discoveredYear": 1807,
    "discoveredBy": "Humphry Davy",
    "cpkColor": "#AB5CF2",
    "jmolColor": "#AB5CF2",
    "appearance": "soft, silvery-white metal"
  },
  {
    "atomicNumber": 12,
    "symbol": "Mg",
    "names": {
      "en": "Magnesium",
      "ru": "Магний",
      "he": "מגנזיום"
    },
    "atomicMass": {
      "value": 24.305,
      "kind": "conventional",
      "interval": [
        24.304,
        24.307
      ]
    },
    "group": 2,
    "period": 3,
    "block": "s",
    "category": "alkaline-earth-metal",
    "electronConfiguration": "[Ne] 3s2",
    "shells": [
      2,
      8,
      2
    ],
    "electronegativityPauling": 1.31,
    "atomicRadius": 160,
    "covalentRadius": 141,
    "vdwRadius": 173,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 737.7
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 923,
    "boilingPoint": 1363,
    "density": 1.738,
    "discoveredYear": 1755,
    "discoveredBy": "Joseph Black",
    "cpkColor": "#8AFF00",
    "jmolColor": "#8AFF00",
    "appearance": "shiny gray solid"
  },
  {
    "atomicNumber": 13,
    "symbol": "Al",
    "names": {
      "en": "Aluminium",
      "ru": "Алюминий",
      "he": "אלומיניום"
    },
    "atomicMass": {
      "value": 26.9815384,
      "uncertainty": 3e-7,
      "kind": "standard"
    },
    "group": 13,
    "period": 3,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Ne] 3s2 3p1",
    "shells": [
      2,
      8,
      3
    ],
    "electronegativityPauling": 1.61,
    "atomicRadius": 143,
    "covalentRadius": 121,
    "vdwRadius": 184,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 577.5
      }
    ],
    "electronAffinity": 41.8,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 933.47,
    "boilingPoint": 2743,
    "density": 2.7,
    "discoveredYear": 1825,
    "discoveredBy": "Hans Christian Ørsted",
    "cpkColor": "#BFA6A6",
    "jmolColor": "#BFA6A6",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 14,
    "symbol": "Si",
    "names": {
      "en": "Silicon",
      "ru": "Кремний",
      "he": "צורן"
    },
    "atomicMass": {
      "value": 28.085,
      "kind": "conventional",
      "interval": [
        28.084,
        28.086
      ]
    },
    "group": 14,
    "period": 3,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[Ne] 3s2 3p2",
    "shells": [
      2,
      8,
      4
    ],
    "electronegativityPauling": 1.9,
    "atomicRadius": 111,
    "covalentRadius": 111,
    "vdwRadius": 210,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 786.5
      }
    ],
    "electronAffinity": 134.1,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      },
      {
        "value": -4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1687,
    "boilingPoint": 3538,
    "density": 2.3296,
    "discoveredYear": 1824,
    "discoveredBy": "Jöns Jacob Berzelius",
    "cpkColor": "#F0C8A0",
    "jmolColor": "#F0C8A0",
    "appearance": "crystalline, blue-gray metalloid",
    "summary": "Second most abundant element in Earth’s crust; the base material of semiconductors."
  },
  {
    "atomicNumber": 15,
    "symbol": "P",
    "names": {
      "en": "Phosphorus",
      "ru": "Фосфор",
      "he": "זרחן"
    },
    "atomicMass": {
      "value": 30.973761998,
      "uncertainty": 5e-9,
      "kind": "standard"
    },
    "group": 15,
    "period": 3,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[Ne] 3s2 3p3",
    "shells": [
      2,
      8,
      5
    ],
    "electronegativityPauling": 2.19,
    "atomicRadius": 107,
    "covalentRadius": 107,
    "vdwRadius": 180,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1011.8
      }
    ],
    "electronAffinity": 72,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      },
      {
        "value": 3,
        "common": true
      },
      {
        "value": -3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 317.3,
    "boilingPoint": 553.7,
    "density": 1.82,
    "discoveredYear": 1669,
    "discoveredBy": "Hennig Brand",
    "cpkColor": "#FF8000",
    "jmolColor": "#FF8000",
    "appearance": "waxy white, red, or black solid depending on allotrope"
  },
  {
    "atomicNumber": 16,
    "symbol": "S",
    "names": {
      "en": "Sulfur",
      "ru": "Сера",
      "he": "גופרית"
    },
    "atomicMass": {
      "value": 32.06,
      "kind": "conventional",
      "interval": [
        32.059,
        32.076
      ]
    },
    "group": 16,
    "period": 3,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[Ne] 3s2 3p4",
    "shells": [
      2,
      8,
      6
    ],
    "electronegativityPauling": 2.58,
    "atomicRadius": 105,
    "covalentRadius": 105,
    "vdwRadius": 180,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 999.6
      }
    ],
    "electronAffinity": 200,
    "oxidationStates": [
      {
        "value": -2,
        "common": true
      },
      {
        "value": 6,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 388.36,
    "boilingPoint": 717.8,
    "density": 2.067,
    "cpkColor": "#FFFF30",
    "jmolColor": "#FFFF30",
    "appearance": "yellow crystalline solid"
  },
  {
    "atomicNumber": 17,
    "symbol": "Cl",
    "names": {
      "en": "Chlorine",
      "ru": "Хлор",
      "he": "כלור"
    },
    "atomicMass": {
      "value": 35.45,
      "kind": "conventional",
      "interval": [
        35.446,
        35.457
      ]
    },
    "group": 17,
    "period": 3,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[Ne] 3s2 3p5",
    "shells": [
      2,
      8,
      7
    ],
    "electronegativityPauling": 3.16,
    "atomicRadius": 102,
    "covalentRadius": 102,
    "vdwRadius": 175,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1251.2
      }
    ],
    "electronAffinity": 349,
    "oxidationStates": [
      {
        "value": -1,
        "common": true
      },
      {
        "value": 1,
        "common": false
      },
      {
        "value": 3,
        "common": false
      },
      {
        "value": 5,
        "common": false
      },
      {
        "value": 7,
        "common": false
      }
    ],
    "standardState": "gas",
    "meltingPoint": 171.6,
    "boilingPoint": 239.11,
    "density": 0.003214,
    "discoveredYear": 1774,
    "discoveredBy": "Carl Wilhelm Scheele",
    "cpkColor": "#1FF01F",
    "jmolColor": "#1FF01F",
    "appearance": "pale yellow-green gas"
  },
  {
    "atomicNumber": 18,
    "symbol": "Ar",
    "names": {
      "en": "Argon",
      "ru": "Аргон",
      "he": "ארגון"
    },
    "atomicMass": {
      "value": 39.95,
      "kind": "conventional",
      "interval": [
        39.792,
        39.963
      ]
    },
    "group": 18,
    "period": 3,
    "block": "p",
    "category": "noble-gas",
    "electronConfiguration": "[Ne] 3s2 3p6",
    "shells": [
      2,
      8,
      8
    ],
    "electronegativityPauling": null,
    "atomicRadius": 71,
    "covalentRadius": 106,
    "vdwRadius": 188,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1520.6
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "gas",
    "meltingPoint": 83.8,
    "boilingPoint": 87.3,
    "density": 0.0017837,
    "discoveredYear": 1894,
    "discoveredBy": "Lord Rayleigh and William Ramsay",
    "cpkColor": "#80D1E3",
    "jmolColor": "#80D1E3",
    "appearance": "colorless gas"
  },
  {
    "atomicNumber": 19,
    "symbol": "K",
    "names": {
      "en": "Potassium",
      "ru": "Калий",
      "he": "אשלגן"
    },
    "latinName": "Kalium",
    "atomicMass": {
      "value": 39.0983,
      "uncertainty": 0.0001,
      "kind": "standard"
    },
    "group": 1,
    "period": 4,
    "block": "s",
    "category": "alkali-metal",
    "electronConfiguration": "[Ar] 4s1",
    "shells": [
      2,
      8,
      8,
      1
    ],
    "electronegativityPauling": 0.82,
    "atomicRadius": 227,
    "covalentRadius": 203,
    "vdwRadius": 275,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 418.8
      }
    ],
    "electronAffinity": 48.4,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 336.7,
    "boilingPoint": 1032,
    "density": 0.862,
    "discoveredYear": 1807,
    "discoveredBy": "Humphry Davy",
    "cpkColor": "#8F40D4",
    "jmolColor": "#8F40D4",
    "appearance": "soft, silvery-white metal"
  },
  {
    "atomicNumber": 20,
    "symbol": "Ca",
    "names": {
      "en": "Calcium",
      "ru": "Кальций",
      "he": "סידן"
    },
    "atomicMass": {
      "value": 40.078,
      "uncertainty": 0.004,
      "kind": "standard"
    },
    "group": 2,
    "period": 4,
    "block": "s",
    "category": "alkaline-earth-metal",
    "electronConfiguration": "[Ar] 4s2",
    "shells": [
      2,
      8,
      8,
      2
    ],
    "electronegativityPauling": 1,
    "atomicRadius": 197,
    "covalentRadius": 176,
    "vdwRadius": 231,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 589.8
      }
    ],
    "electronAffinity": 2.37,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1115,
    "boilingPoint": 1757,
    "density": 1.55,
    "discoveredYear": 1808,
    "discoveredBy": "Humphry Davy",
    "cpkColor": "#3DFF00",
    "jmolColor": "#3DFF00",
    "appearance": "dull gray, silvery metal"
  },
  {
    "atomicNumber": 21,
    "symbol": "Sc",
    "names": {
      "en": "Scandium",
      "ru": "Скандий",
      "he": "סקנדיום"
    },
    "atomicMass": {
      "value": 44.955907,
      "uncertainty": 0.000004,
      "kind": "standard"
    },
    "group": 3,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d1 4s2",
    "shells": [
      2,
      8,
      9,
      2
    ],
    "electronegativityPauling": 1.36,
    "atomicRadius": 162,
    "covalentRadius": 170,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 633.1
      }
    ],
    "electronAffinity": 18.1,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1814,
    "boilingPoint": 3109,
    "density": 2.985,
    "discoveredYear": 1879,
    "discoveredBy": "Lars Fredrik Nilson",
    "cpkColor": "#E6E6E6",
    "jmolColor": "#E6E6E6",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 22,
    "symbol": "Ti",
    "names": {
      "en": "Titanium",
      "ru": "Титан",
      "he": "טיטניום"
    },
    "atomicMass": {
      "value": 47.867,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "group": 4,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d2 4s2",
    "shells": [
      2,
      8,
      10,
      2
    ],
    "electronegativityPauling": 1.54,
    "atomicRadius": 147,
    "covalentRadius": 160,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 658.8
      }
    ],
    "electronAffinity": 7.6,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      },
      {
        "value": 3,
        "common": false
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1941,
    "boilingPoint": 3560,
    "density": 4.506,
    "discoveredYear": 1791,
    "discoveredBy": "William Gregor",
    "cpkColor": "#BFC2C7",
    "jmolColor": "#BFC2C7",
    "appearance": "lustrous silvery metal"
  },
  {
    "atomicNumber": 23,
    "symbol": "V",
    "names": {
      "en": "Vanadium",
      "ru": "Ванадий",
      "he": "ונדיום"
    },
    "atomicMass": {
      "value": 50.9415,
      "uncertainty": 0.0001,
      "kind": "standard"
    },
    "group": 5,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d3 4s2",
    "shells": [
      2,
      8,
      11,
      2
    ],
    "electronegativityPauling": 1.63,
    "atomicRadius": 134,
    "covalentRadius": 153,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 650.9
      }
    ],
    "electronAffinity": 50.6,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      },
      {
        "value": 4,
        "common": false
      },
      {
        "value": 3,
        "common": false
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2183,
    "boilingPoint": 3680,
    "density": 6,
    "discoveredYear": 1801,
    "discoveredBy": "Andrés Manuel del Río",
    "cpkColor": "#A6A6AB",
    "jmolColor": "#A6A6AB",
    "appearance": "bluish-silver metal"
  },
  {
    "atomicNumber": 24,
    "symbol": "Cr",
    "names": {
      "en": "Chromium",
      "ru": "Хром",
      "he": "כרום"
    },
    "atomicMass": {
      "value": 51.9961,
      "uncertainty": 0.0006,
      "kind": "standard"
    },
    "group": 6,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d5 4s1",
    "shells": [
      2,
      8,
      13,
      1
    ],
    "electronegativityPauling": 1.66,
    "atomicRadius": 128,
    "covalentRadius": 139,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 652.9
      }
    ],
    "electronAffinity": 64.3,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 6,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2180,
    "boilingPoint": 2944,
    "density": 7.15,
    "discoveredYear": 1797,
    "discoveredBy": "Louis Nicolas Vauquelin",
    "cpkColor": "#8A99C7",
    "jmolColor": "#8A99C7",
    "appearance": "lustrous steel-gray metal"
  },
  {
    "atomicNumber": 25,
    "symbol": "Mn",
    "names": {
      "en": "Manganese",
      "ru": "Марганец",
      "he": "מנגן"
    },
    "atomicMass": {
      "value": 54.938043,
      "uncertainty": 0.000002,
      "kind": "standard"
    },
    "group": 7,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d5 4s2",
    "shells": [
      2,
      8,
      13,
      2
    ],
    "electronegativityPauling": 1.55,
    "atomicRadius": 127,
    "covalentRadius": 139,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 717.3
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      },
      {
        "value": 7,
        "common": true
      },
      {
        "value": 3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1519,
    "boilingPoint": 2334,
    "density": 7.21,
    "discoveredYear": 1774,
    "discoveredBy": "Johan Gottlieb Gahn",
    "cpkColor": "#9C7AC7",
    "jmolColor": "#9C7AC7",
    "appearance": "silvery metal"
  },
  {
    "atomicNumber": 26,
    "symbol": "Fe",
    "names": {
      "en": "Iron",
      "ru": "Железо",
      "he": "ברזל"
    },
    "latinName": "Ferrum",
    "atomicMass": {
      "value": 55.845,
      "uncertainty": 0.002,
      "kind": "standard"
    },
    "group": 8,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d6 4s2",
    "shells": [
      2,
      8,
      14,
      2
    ],
    "electronegativityPauling": 1.83,
    "atomicRadius": 126,
    "covalentRadius": 132,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 762.5
      }
    ],
    "electronAffinity": 15.7,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1811,
    "boilingPoint": 3134,
    "density": 7.874,
    "cpkColor": "#E06633",
    "jmolColor": "#E06633",
    "appearance": "lustrous metallic with a grayish tinge",
    "summary": "The most widely used structural metal; known since antiquity and core of Earth’s inner structure."
  },
  {
    "atomicNumber": 27,
    "symbol": "Co",
    "names": {
      "en": "Cobalt",
      "ru": "Кобальт",
      "he": "קובלט"
    },
    "atomicMass": {
      "value": 58.933194,
      "uncertainty": 0.000003,
      "kind": "standard"
    },
    "group": 9,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d7 4s2",
    "shells": [
      2,
      8,
      15,
      2
    ],
    "electronegativityPauling": 1.88,
    "atomicRadius": 125,
    "covalentRadius": 126,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 760.4
      }
    ],
    "electronAffinity": 63.7,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1768,
    "boilingPoint": 3200,
    "density": 8.9,
    "discoveredYear": 1735,
    "discoveredBy": "Georg Brandt",
    "cpkColor": "#F090A0",
    "jmolColor": "#F090A0",
    "appearance": "hard, lustrous, silver-gray metal"
  },
  {
    "atomicNumber": 28,
    "symbol": "Ni",
    "names": {
      "en": "Nickel",
      "ru": "Никель",
      "he": "ניקל"
    },
    "atomicMass": {
      "value": 58.6934,
      "uncertainty": 0.0004,
      "kind": "standard"
    },
    "group": 10,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d8 4s2",
    "shells": [
      2,
      8,
      16,
      2
    ],
    "electronegativityPauling": 1.91,
    "atomicRadius": 124,
    "covalentRadius": 124,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 737.1
      }
    ],
    "electronAffinity": 112,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1728,
    "boilingPoint": 3186,
    "density": 8.908,
    "discoveredYear": 1751,
    "discoveredBy": "Axel Fredrik Cronstedt",
    "cpkColor": "#50D050",
    "jmolColor": "#50D050",
    "appearance": "lustrous, metallic, silvery-white"
  },
  {
    "atomicNumber": 29,
    "symbol": "Cu",
    "names": {
      "en": "Copper",
      "ru": "Медь",
      "he": "נחושת"
    },
    "latinName": "Cuprum",
    "atomicMass": {
      "value": 63.546,
      "uncertainty": 0.003,
      "kind": "standard"
    },
    "group": 11,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d10 4s1",
    "shells": [
      2,
      8,
      18,
      1
    ],
    "electronegativityPauling": 1.9,
    "atomicRadius": 128,
    "covalentRadius": 132,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 745.5
      }
    ],
    "electronAffinity": 118.4,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 1,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1357.77,
    "boilingPoint": 2835,
    "density": 8.96,
    "cpkColor": "#C88033",
    "jmolColor": "#C88033",
    "appearance": "reddish-orange metallic luster",
    "summary": "A highly conductive metal known since antiquity, widely used in wiring and alloys."
  },
  {
    "atomicNumber": 30,
    "symbol": "Zn",
    "names": {
      "en": "Zinc",
      "ru": "Цинк",
      "he": "אבץ"
    },
    "atomicMass": {
      "value": 65.38,
      "uncertainty": 0.02,
      "kind": "standard"
    },
    "group": 12,
    "period": 4,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Ar] 3d10 4s2",
    "shells": [
      2,
      8,
      18,
      2
    ],
    "electronegativityPauling": 1.65,
    "atomicRadius": 134,
    "covalentRadius": 122,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 906.4
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 692.68,
    "boilingPoint": 1180,
    "density": 7.14,
    "discoveredYear": 1746,
    "discoveredBy": "Andreas Sigismund Marggraf",
    "cpkColor": "#7D80B0",
    "jmolColor": "#7D80B0",
    "appearance": "silvery-bluish-gray metal"
  },
  {
    "atomicNumber": 31,
    "symbol": "Ga",
    "names": {
      "en": "Gallium",
      "ru": "Галлий",
      "he": "גליום"
    },
    "atomicMass": {
      "value": 69.723,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "group": 13,
    "period": 4,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Ar] 3d10 4s2 4p1",
    "shells": [
      2,
      8,
      18,
      3
    ],
    "electronegativityPauling": 1.81,
    "atomicRadius": 122,
    "covalentRadius": 122,
    "vdwRadius": 187,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 578.8
      }
    ],
    "electronAffinity": 28.9,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 302.9146,
    "boilingPoint": 2673,
    "density": 5.91,
    "discoveredYear": 1875,
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "cpkColor": "#C28F8F",
    "jmolColor": "#C28F8F",
    "appearance": "silvery metal, liquid near room temperature"
  },
  {
    "atomicNumber": 32,
    "symbol": "Ge",
    "names": {
      "en": "Germanium",
      "ru": "Германий",
      "he": "גרמניום"
    },
    "atomicMass": {
      "value": 72.63,
      "uncertainty": 0.008,
      "kind": "standard"
    },
    "group": 14,
    "period": 4,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[Ar] 3d10 4s2 4p2",
    "shells": [
      2,
      8,
      18,
      4
    ],
    "electronegativityPauling": 2.01,
    "atomicRadius": 122,
    "covalentRadius": 120,
    "vdwRadius": 211,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 762.2
      }
    ],
    "electronAffinity": 119,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1211.4,
    "boilingPoint": 3106,
    "density": 5.323,
    "discoveredYear": 1886,
    "discoveredBy": "Clemens Winkler",
    "cpkColor": "#668F8F",
    "jmolColor": "#668F8F",
    "appearance": "grayish-white metalloid"
  },
  {
    "atomicNumber": 33,
    "symbol": "As",
    "names": {
      "en": "Arsenic",
      "ru": "Мышьяк",
      "he": "ארסן"
    },
    "atomicMass": {
      "value": 74.921595,
      "uncertainty": 0.000006,
      "kind": "standard"
    },
    "group": 15,
    "period": 4,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[Ar] 3d10 4s2 4p3",
    "shells": [
      2,
      8,
      18,
      5
    ],
    "electronegativityPauling": 2.18,
    "atomicRadius": 119,
    "covalentRadius": 119,
    "vdwRadius": 185,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 947
      }
    ],
    "electronAffinity": 78.2,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 5,
        "common": true
      },
      {
        "value": -3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1090,
    "boilingPoint": 887,
    "density": 5.776,
    "discoveredYear": 1250,
    "discoveredBy": "Albertus Magnus",
    "cpkColor": "#BD80E3",
    "jmolColor": "#BD80E3",
    "appearance": "metallic gray solid"
  },
  {
    "atomicNumber": 34,
    "symbol": "Se",
    "names": {
      "en": "Selenium",
      "ru": "Селен",
      "he": "סלניום"
    },
    "atomicMass": {
      "value": 78.971,
      "uncertainty": 0.008,
      "kind": "standard"
    },
    "group": 16,
    "period": 4,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[Ar] 3d10 4s2 4p4",
    "shells": [
      2,
      8,
      18,
      6
    ],
    "electronegativityPauling": 2.55,
    "atomicRadius": 120,
    "covalentRadius": 120,
    "vdwRadius": 190,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 941
      }
    ],
    "electronAffinity": 195,
    "oxidationStates": [
      {
        "value": -2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      },
      {
        "value": 6,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 494,
    "boilingPoint": 958,
    "density": 4.809,
    "discoveredYear": 1817,
    "discoveredBy": "Jöns Jacob Berzelius",
    "cpkColor": "#FFA100",
    "jmolColor": "#FFA100",
    "appearance": "gray metallic or red/black nonmetallic allotropes"
  },
  {
    "atomicNumber": 35,
    "symbol": "Br",
    "names": {
      "en": "Bromine",
      "ru": "Бром",
      "he": "ברום"
    },
    "atomicMass": {
      "value": 79.904,
      "kind": "conventional",
      "interval": [
        79.901,
        79.907
      ]
    },
    "group": 17,
    "period": 4,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[Ar] 3d10 4s2 4p5",
    "shells": [
      2,
      8,
      18,
      7
    ],
    "electronegativityPauling": 2.96,
    "atomicRadius": 120,
    "covalentRadius": 120,
    "vdwRadius": 185,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1139.9
      }
    ],
    "electronAffinity": 324.6,
    "oxidationStates": [
      {
        "value": -1,
        "common": true
      },
      {
        "value": 1,
        "common": false
      },
      {
        "value": 5,
        "common": false
      }
    ],
    "standardState": "liquid",
    "meltingPoint": 265.8,
    "boilingPoint": 332,
    "density": 3.1028,
    "discoveredYear": 1826,
    "discoveredBy": "Antoine Jérôme Balard",
    "cpkColor": "#A62929",
    "jmolColor": "#A62929",
    "appearance": "reddish-brown fuming liquid",
    "summary": "One of only two elements that are liquid at room temperature."
  },
  {
    "atomicNumber": 36,
    "symbol": "Kr",
    "names": {
      "en": "Krypton",
      "ru": "Криптон",
      "he": "קריפטון"
    },
    "atomicMass": {
      "value": 83.798,
      "uncertainty": 0.002,
      "kind": "standard"
    },
    "group": 18,
    "period": 4,
    "block": "p",
    "category": "noble-gas",
    "electronConfiguration": "[Ar] 3d10 4s2 4p6",
    "shells": [
      2,
      8,
      18,
      8
    ],
    "electronegativityPauling": null,
    "atomicRadius": 88,
    "covalentRadius": 116,
    "vdwRadius": 202,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1350.8
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "gas",
    "meltingPoint": 115.78,
    "boilingPoint": 119.93,
    "density": 0.003733,
    "discoveredYear": 1898,
    "discoveredBy": "William Ramsay and Morris Travers",
    "cpkColor": "#5CB8D1",
    "jmolColor": "#5CB8D1",
    "appearance": "colorless gas"
  },
  {
    "atomicNumber": 37,
    "symbol": "Rb",
    "names": {
      "en": "Rubidium",
      "ru": "Рубидий",
      "he": "רובידיום"
    },
    "atomicMass": {
      "value": 85.4678,
      "uncertainty": 0.0003,
      "kind": "standard"
    },
    "group": 1,
    "period": 5,
    "block": "s",
    "category": "alkali-metal",
    "electronConfiguration": "[Kr] 5s1",
    "shells": [
      2,
      8,
      18,
      8,
      1
    ],
    "electronegativityPauling": 0.82,
    "atomicRadius": 248,
    "covalentRadius": 220,
    "vdwRadius": 303,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 403
      }
    ],
    "electronAffinity": 46.9,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 312.46,
    "boilingPoint": 961,
    "density": 1.532,
    "discoveredYear": 1861,
    "discoveredBy": "Robert Bunsen and Gustav Kirchhoff",
    "cpkColor": "#702EB0",
    "jmolColor": "#702EB0",
    "appearance": "soft, silvery-white metal"
  },
  {
    "atomicNumber": 38,
    "symbol": "Sr",
    "names": {
      "en": "Strontium",
      "ru": "Стронций",
      "he": "סטרונציום"
    },
    "atomicMass": {
      "value": 87.62,
      "uncertainty": 0.01,
      "kind": "standard"
    },
    "group": 2,
    "period": 5,
    "block": "s",
    "category": "alkaline-earth-metal",
    "electronConfiguration": "[Kr] 5s2",
    "shells": [
      2,
      8,
      18,
      8,
      2
    ],
    "electronegativityPauling": 0.95,
    "atomicRadius": 215,
    "covalentRadius": 195,
    "vdwRadius": 249,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 549.5
      }
    ],
    "electronAffinity": 5.03,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1050,
    "boilingPoint": 1655,
    "density": 2.64,
    "discoveredYear": 1790,
    "discoveredBy": "Adair Crawford",
    "cpkColor": "#00FF00",
    "jmolColor": "#00FF00",
    "appearance": "silvery metal with a yellowish tinge"
  },
  {
    "atomicNumber": 39,
    "symbol": "Y",
    "names": {
      "en": "Yttrium",
      "ru": "Иттрий",
      "he": "איטריום"
    },
    "atomicMass": {
      "value": 88.905838,
      "uncertainty": 0.000002,
      "kind": "standard"
    },
    "group": 3,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d1 5s2",
    "shells": [
      2,
      8,
      18,
      9,
      2
    ],
    "electronegativityPauling": 1.22,
    "atomicRadius": 180,
    "covalentRadius": 190,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 600
      }
    ],
    "electronAffinity": 29.6,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1799,
    "boilingPoint": 3609,
    "density": 4.472,
    "discoveredYear": 1794,
    "discoveredBy": "Johan Gadolin",
    "cpkColor": "#94FFFF",
    "jmolColor": "#94FFFF",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 40,
    "symbol": "Zr",
    "names": {
      "en": "Zirconium",
      "ru": "Цирконий",
      "he": "זירקוניום"
    },
    "atomicMass": {
      "value": 91.222,
      "uncertainty": 0.003,
      "kind": "standard"
    },
    "group": 4,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d2 5s2",
    "shells": [
      2,
      8,
      18,
      10,
      2
    ],
    "electronegativityPauling": 1.33,
    "atomicRadius": 160,
    "covalentRadius": 175,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 640.1
      }
    ],
    "electronAffinity": 41.1,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2128,
    "boilingPoint": 4682,
    "density": 6.52,
    "discoveredYear": 1789,
    "discoveredBy": "Martin Heinrich Klaproth",
    "cpkColor": "#94E0E0",
    "jmolColor": "#94E0E0",
    "appearance": "grayish-white metal"
  },
  {
    "atomicNumber": 41,
    "symbol": "Nb",
    "names": {
      "en": "Niobium",
      "ru": "Ниобий",
      "he": "נביוביום"
    },
    "atomicMass": {
      "value": 92.90637,
      "uncertainty": 0.00001,
      "kind": "standard"
    },
    "group": 5,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d4 5s1",
    "shells": [
      2,
      8,
      18,
      12,
      1
    ],
    "electronegativityPauling": 1.6,
    "atomicRadius": 146,
    "covalentRadius": 164,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 652.1
      }
    ],
    "electronAffinity": 86.1,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2750,
    "boilingPoint": 5017,
    "density": 8.57,
    "discoveredYear": 1801,
    "discoveredBy": "Charles Hatchett",
    "cpkColor": "#73C2C9",
    "jmolColor": "#73C2C9",
    "appearance": "gray, ductile metal"
  },
  {
    "atomicNumber": 42,
    "symbol": "Mo",
    "names": {
      "en": "Molybdenum",
      "ru": "Молибден",
      "he": "מוליבדן"
    },
    "atomicMass": {
      "value": 95.95,
      "uncertainty": 0.01,
      "kind": "standard"
    },
    "group": 6,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d5 5s1",
    "shells": [
      2,
      8,
      18,
      13,
      1
    ],
    "electronegativityPauling": 2.16,
    "atomicRadius": 139,
    "covalentRadius": 154,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 684.3
      }
    ],
    "electronAffinity": 71.9,
    "oxidationStates": [
      {
        "value": 6,
        "common": true
      },
      {
        "value": 4,
        "common": false
      },
      {
        "value": 3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2896,
    "boilingPoint": 4912,
    "density": 10.28,
    "discoveredYear": 1781,
    "discoveredBy": "Carl Wilhelm Scheele",
    "cpkColor": "#54B5B5",
    "jmolColor": "#54B5B5",
    "appearance": "gray metallic solid"
  },
  {
    "atomicNumber": 43,
    "symbol": "Tc",
    "names": {
      "en": "Technetium",
      "ru": "Технеций",
      "he": "טכנציום"
    },
    "atomicMass": {
      "value": 97,
      "kind": "longest-lived-isotope"
    },
    "group": 7,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d5 5s2",
    "shells": [
      2,
      8,
      18,
      13,
      2
    ],
    "electronegativityPauling": 1.9,
    "atomicRadius": 136,
    "covalentRadius": 147,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 702
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 7,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2430,
    "boilingPoint": 4538,
    "density": 11,
    "discoveredYear": 1937,
    "discoveredBy": "Carlo Perrier and Emilio Segrè",
    "cpkColor": "#3B9E9E",
    "jmolColor": "#3B9E9E",
    "appearance": "silvery-gray radioactive metal",
    "summary": "The lightest element with no stable isotopes; first produced artificially."
  },
  {
    "atomicNumber": 44,
    "symbol": "Ru",
    "names": {
      "en": "Ruthenium",
      "ru": "Рутений",
      "he": "רותניום"
    },
    "atomicMass": {
      "value": 101.07,
      "uncertainty": 0.02,
      "kind": "standard"
    },
    "group": 8,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d7 5s1",
    "shells": [
      2,
      8,
      18,
      15,
      1
    ],
    "electronegativityPauling": 2.2,
    "atomicRadius": 134,
    "covalentRadius": 146,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 710.2
      }
    ],
    "electronAffinity": 101.3,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2607,
    "boilingPoint": 4423,
    "density": 12.45,
    "discoveredYear": 1844,
    "discoveredBy": "Karl Ernst Claus",
    "cpkColor": "#248F8F",
    "jmolColor": "#248F8F",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 45,
    "symbol": "Rh",
    "names": {
      "en": "Rhodium",
      "ru": "Родий",
      "he": "רודיום"
    },
    "atomicMass": {
      "value": 102.90549,
      "uncertainty": 0.00002,
      "kind": "standard"
    },
    "group": 9,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d8 5s1",
    "shells": [
      2,
      8,
      18,
      16,
      1
    ],
    "electronegativityPauling": 2.28,
    "atomicRadius": 134,
    "covalentRadius": 142,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 719.7
      }
    ],
    "electronAffinity": 110.3,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2237,
    "boilingPoint": 3968,
    "density": 12.41,
    "discoveredYear": 1803,
    "discoveredBy": "William Hyde Wollaston",
    "cpkColor": "#0A7D8C",
    "jmolColor": "#0A7D8C",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 46,
    "symbol": "Pd",
    "names": {
      "en": "Palladium",
      "ru": "Палладий",
      "he": "פלדיום"
    },
    "atomicMass": {
      "value": 106.42,
      "uncertainty": 0.01,
      "kind": "standard"
    },
    "group": 10,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d10",
    "shells": [
      2,
      8,
      18,
      18
    ],
    "electronegativityPauling": 2.2,
    "atomicRadius": 137,
    "covalentRadius": 139,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 804.4
      }
    ],
    "electronAffinity": 53.7,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1828.05,
    "boilingPoint": 3236,
    "density": 12.02,
    "discoveredYear": 1803,
    "discoveredBy": "William Hyde Wollaston",
    "cpkColor": "#006985",
    "jmolColor": "#006985",
    "appearance": "silvery-white metal",
    "summary": "The only element whose ground-state atom has no electrons in its outermost shell (4d10 5s0)."
  },
  {
    "atomicNumber": 47,
    "symbol": "Ag",
    "names": {
      "en": "Silver",
      "ru": "Серебро",
      "he": "כסף"
    },
    "latinName": "Argentum",
    "atomicMass": {
      "value": 107.8682,
      "uncertainty": 0.0002,
      "kind": "standard"
    },
    "group": 11,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d10 5s1",
    "shells": [
      2,
      8,
      18,
      18,
      1
    ],
    "electronegativityPauling": 1.93,
    "atomicRadius": 144,
    "covalentRadius": 145,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 731
      }
    ],
    "electronAffinity": 125.6,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1234.93,
    "boilingPoint": 2435,
    "density": 10.49,
    "cpkColor": "#C0C0C0",
    "jmolColor": "#C0C0C0",
    "appearance": "lustrous white metal",
    "summary": "Has the highest electrical and thermal conductivity of any element; known since antiquity."
  },
  {
    "atomicNumber": 48,
    "symbol": "Cd",
    "names": {
      "en": "Cadmium",
      "ru": "Кадмий",
      "he": "קדמיום"
    },
    "atomicMass": {
      "value": 112.414,
      "uncertainty": 0.004,
      "kind": "standard"
    },
    "group": 12,
    "period": 5,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Kr] 4d10 5s2",
    "shells": [
      2,
      8,
      18,
      18,
      2
    ],
    "electronegativityPauling": 1.69,
    "atomicRadius": 151,
    "covalentRadius": 144,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 867.8
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 594.22,
    "boilingPoint": 1040,
    "density": 8.65,
    "discoveredYear": 1817,
    "discoveredBy": "Friedrich Stromeyer",
    "cpkColor": "#FFD98F",
    "jmolColor": "#FFD98F",
    "appearance": "silvery-bluish-gray metal"
  },
  {
    "atomicNumber": 49,
    "symbol": "In",
    "names": {
      "en": "Indium",
      "ru": "Индий",
      "he": "אינדיום"
    },
    "atomicMass": {
      "value": 114.818,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "group": 13,
    "period": 5,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Kr] 4d10 5s2 5p1",
    "shells": [
      2,
      8,
      18,
      18,
      3
    ],
    "electronegativityPauling": 1.78,
    "atomicRadius": 167,
    "covalentRadius": 142,
    "vdwRadius": 193,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 558.3
      }
    ],
    "electronAffinity": 28.9,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 429.75,
    "boilingPoint": 2345,
    "density": 7.31,
    "discoveredYear": 1863,
    "discoveredBy": "Ferdinand Reich and Hieronymous Theodor Richter",
    "cpkColor": "#A67573",
    "jmolColor": "#A67573",
    "appearance": "silvery-white, soft metal"
  },
  {
    "atomicNumber": 50,
    "symbol": "Sn",
    "names": {
      "en": "Tin",
      "ru": "Олово",
      "he": "בדיל"
    },
    "latinName": "Stannum",
    "atomicMass": {
      "value": 118.71,
      "uncertainty": 0.007,
      "kind": "standard"
    },
    "group": 14,
    "period": 5,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Kr] 4d10 5s2 5p2",
    "shells": [
      2,
      8,
      18,
      18,
      4
    ],
    "electronegativityPauling": 1.96,
    "atomicRadius": 140,
    "covalentRadius": 139,
    "vdwRadius": 217,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 708.6
      }
    ],
    "electronAffinity": 107.3,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      },
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 505.08,
    "boilingPoint": 2875,
    "density": 7.265,
    "cpkColor": "#668080",
    "jmolColor": "#668080",
    "appearance": "silvery-white, malleable metal"
  },
  {
    "atomicNumber": 51,
    "symbol": "Sb",
    "names": {
      "en": "Antimony",
      "ru": "Сурьма",
      "he": "אנטימון"
    },
    "latinName": "Stibium",
    "atomicMass": {
      "value": 121.76,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "group": 15,
    "period": 5,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[Kr] 4d10 5s2 5p3",
    "shells": [
      2,
      8,
      18,
      18,
      5
    ],
    "electronegativityPauling": 2.05,
    "atomicRadius": 140,
    "covalentRadius": 139,
    "vdwRadius": 206,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 834
      }
    ],
    "electronAffinity": 103.2,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 5,
        "common": true
      },
      {
        "value": -3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 903.78,
    "boilingPoint": 1860,
    "density": 6.697,
    "cpkColor": "#9E63B5",
    "jmolColor": "#9E63B5",
    "appearance": "silvery, lustrous gray metalloid"
  },
  {
    "atomicNumber": 52,
    "symbol": "Te",
    "names": {
      "en": "Tellurium",
      "ru": "Теллур",
      "he": "טלוריום"
    },
    "atomicMass": {
      "value": 127.6,
      "uncertainty": 0.03,
      "kind": "standard"
    },
    "group": 16,
    "period": 5,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[Kr] 4d10 5s2 5p4",
    "shells": [
      2,
      8,
      18,
      18,
      6
    ],
    "electronegativityPauling": 2.1,
    "atomicRadius": 140,
    "covalentRadius": 138,
    "vdwRadius": 206,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 869.3
      }
    ],
    "electronAffinity": 190.2,
    "oxidationStates": [
      {
        "value": -2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      },
      {
        "value": 6,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 722.66,
    "boilingPoint": 1261,
    "density": 6.232,
    "discoveredYear": 1782,
    "discoveredBy": "Franz-Joseph Müller von Reichenstein",
    "cpkColor": "#D47A00",
    "jmolColor": "#D47A00",
    "appearance": "silvery, lustrous gray metalloid"
  },
  {
    "atomicNumber": 53,
    "symbol": "I",
    "names": {
      "en": "Iodine",
      "ru": "Йод",
      "he": "יוד"
    },
    "atomicMass": {
      "value": 126.90447,
      "uncertainty": 0.00003,
      "kind": "standard"
    },
    "group": 17,
    "period": 5,
    "block": "p",
    "category": "reactive-nonmetal",
    "electronConfiguration": "[Kr] 4d10 5s2 5p5",
    "shells": [
      2,
      8,
      18,
      18,
      7
    ],
    "electronegativityPauling": 2.66,
    "atomicRadius": 140,
    "covalentRadius": 139,
    "vdwRadius": 198,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1008.4
      }
    ],
    "electronAffinity": 295.2,
    "oxidationStates": [
      {
        "value": -1,
        "common": true
      },
      {
        "value": 1,
        "common": false
      },
      {
        "value": 5,
        "common": false
      },
      {
        "value": 7,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 386.85,
    "boilingPoint": 457.4,
    "density": 4.933,
    "discoveredYear": 1811,
    "discoveredBy": "Bernard Courtois",
    "cpkColor": "#940094",
    "jmolColor": "#940094",
    "appearance": "lustrous, metallic blue-black solid; violet vapor"
  },
  {
    "atomicNumber": 54,
    "symbol": "Xe",
    "names": {
      "en": "Xenon",
      "ru": "Ксенон",
      "he": "קסנון"
    },
    "atomicMass": {
      "value": 131.293,
      "uncertainty": 0.006,
      "kind": "standard"
    },
    "group": 18,
    "period": 5,
    "block": "p",
    "category": "noble-gas",
    "electronConfiguration": "[Kr] 4d10 5s2 5p6",
    "shells": [
      2,
      8,
      18,
      18,
      8
    ],
    "electronegativityPauling": null,
    "atomicRadius": 108,
    "covalentRadius": 140,
    "vdwRadius": 216,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1170.4
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": false
      },
      {
        "value": 4,
        "common": false
      },
      {
        "value": 6,
        "common": false
      }
    ],
    "standardState": "gas",
    "meltingPoint": 161.4,
    "boilingPoint": 165.051,
    "density": 0.005894,
    "discoveredYear": 1898,
    "discoveredBy": "William Ramsay and Morris Travers",
    "cpkColor": "#429EB0",
    "jmolColor": "#429EB0",
    "appearance": "colorless, dense gas"
  },
  {
    "atomicNumber": 55,
    "symbol": "Cs",
    "names": {
      "en": "Caesium",
      "ru": "Цезий",
      "he": "צזיום"
    },
    "atomicMass": {
      "value": 132.90545196,
      "uncertainty": 6e-8,
      "kind": "standard"
    },
    "group": 1,
    "period": 6,
    "block": "s",
    "category": "alkali-metal",
    "electronConfiguration": "[Xe] 6s1",
    "shells": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "electronegativityPauling": 0.79,
    "atomicRadius": 265,
    "covalentRadius": 244,
    "vdwRadius": 343,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 375.7
      }
    ],
    "electronAffinity": 45.5,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 301.59,
    "boilingPoint": 944,
    "density": 1.93,
    "discoveredYear": 1860,
    "discoveredBy": "Robert Bunsen and Gustav Kirchhoff",
    "cpkColor": "#57178F",
    "jmolColor": "#57178F",
    "appearance": "soft, pale gold metal"
  },
  {
    "atomicNumber": 56,
    "symbol": "Ba",
    "names": {
      "en": "Barium",
      "ru": "Барий",
      "he": "בריום"
    },
    "atomicMass": {
      "value": 137.327,
      "uncertainty": 0.007,
      "kind": "standard"
    },
    "group": 2,
    "period": 6,
    "block": "s",
    "category": "alkaline-earth-metal",
    "electronConfiguration": "[Xe] 6s2",
    "shells": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "electronegativityPauling": 0.89,
    "atomicRadius": 222,
    "covalentRadius": 215,
    "vdwRadius": 268,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 502.9
      }
    ],
    "electronAffinity": 13.95,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1000,
    "boilingPoint": 2170,
    "density": 3.51,
    "discoveredYear": 1808,
    "discoveredBy": "Humphry Davy",
    "cpkColor": "#00C900",
    "jmolColor": "#00C900",
    "appearance": "silvery-gray metal"
  },
  {
    "atomicNumber": 57,
    "symbol": "La",
    "names": {
      "en": "Lanthanum",
      "ru": "Лантан",
      "he": "לנתן"
    },
    "atomicMass": {
      "value": 138.90547,
      "uncertainty": 0.00007,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 5d1 6s2",
    "shells": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "electronegativityPauling": 1.1,
    "atomicRadius": 187,
    "covalentRadius": 207,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 538.1
      }
    ],
    "electronAffinity": 48,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1193,
    "boilingPoint": 3737,
    "density": 6.145,
    "discoveredYear": 1839,
    "discoveredBy": "Carl Gustaf Mosander",
    "cpkColor": "#70D4FF",
    "jmolColor": "#70D4FF",
    "appearance": "silvery-white, malleable metal"
  },
  {
    "atomicNumber": 58,
    "symbol": "Ce",
    "names": {
      "en": "Cerium",
      "ru": "Церий",
      "he": "צריום"
    },
    "atomicMass": {
      "value": 140.116,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f1 5d1 6s2",
    "shells": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "electronegativityPauling": 1.12,
    "atomicRadius": 182,
    "covalentRadius": 204,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 534.4
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1068,
    "boilingPoint": 3716,
    "density": 6.77,
    "discoveredYear": 1803,
    "discoveredBy": "Jöns Jacob Berzelius and Wilhelm Hisinger",
    "cpkColor": "#FFFFC7",
    "jmolColor": "#FFFFC7",
    "appearance": "silvery, iron-gray metal"
  },
  {
    "atomicNumber": 59,
    "symbol": "Pr",
    "names": {
      "en": "Praseodymium",
      "ru": "Празеодим",
      "he": "פראזאודימיום"
    },
    "atomicMass": {
      "value": 140.90766,
      "uncertainty": 0.00001,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f3 6s2",
    "shells": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "electronegativityPauling": 1.13,
    "atomicRadius": 182,
    "covalentRadius": 203,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 527
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1208,
    "boilingPoint": 3403,
    "density": 6.77,
    "discoveredYear": 1885,
    "discoveredBy": "Carl Auer von Welsbach",
    "cpkColor": "#D9FFC7",
    "jmolColor": "#D9FFC7",
    "appearance": "silvery, slightly yellow-tinged metal"
  },
  {
    "atomicNumber": 60,
    "symbol": "Nd",
    "names": {
      "en": "Neodymium",
      "ru": "Неодим",
      "he": "נאודימיום"
    },
    "atomicMass": {
      "value": 144.242,
      "uncertainty": 0.003,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f4 6s2",
    "shells": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "electronegativityPauling": 1.14,
    "atomicRadius": 182,
    "covalentRadius": 201,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 533.1
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1297,
    "boilingPoint": 3347,
    "density": 7.01,
    "discoveredYear": 1885,
    "discoveredBy": "Carl Auer von Welsbach",
    "cpkColor": "#C7FFC7",
    "jmolColor": "#C7FFC7",
    "appearance": "silvery metal, tarnishes to yellow/violet"
  },
  {
    "atomicNumber": 61,
    "symbol": "Pm",
    "names": {
      "en": "Promethium",
      "ru": "Прометий",
      "he": "פרומתיום"
    },
    "atomicMass": {
      "value": 145,
      "kind": "longest-lived-isotope"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f5 6s2",
    "shells": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "electronegativityPauling": 1.13,
    "atomicRadius": 181,
    "covalentRadius": 199,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 540
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1315,
    "boilingPoint": 3273,
    "density": 7.26,
    "discoveredYear": 1945,
    "discoveredBy": "Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell",
    "cpkColor": "#A3FFC7",
    "jmolColor": "#A3FFC7",
    "appearance": "silvery metal (presumed; intensely radioactive)"
  },
  {
    "atomicNumber": 62,
    "symbol": "Sm",
    "names": {
      "en": "Samarium",
      "ru": "Самарий",
      "he": "סמריום"
    },
    "atomicMass": {
      "value": 150.36,
      "uncertainty": 0.02,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f6 6s2",
    "shells": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "electronegativityPauling": 1.17,
    "atomicRadius": 180,
    "covalentRadius": 198,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 544.5
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1345,
    "boilingPoint": 2173,
    "density": 7.52,
    "discoveredYear": 1879,
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "cpkColor": "#8FFFC7",
    "jmolColor": "#8FFFC7",
    "appearance": "silvery metal"
  },
  {
    "atomicNumber": 63,
    "symbol": "Eu",
    "names": {
      "en": "Europium",
      "ru": "Европий",
      "he": "אירופיום"
    },
    "atomicMass": {
      "value": 151.964,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f7 6s2",
    "shells": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": 204,
    "covalentRadius": 198,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 547.1
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1099,
    "boilingPoint": 1802,
    "density": 5.264,
    "discoveredYear": 1901,
    "discoveredBy": "Eugène-Anatole Demarçay",
    "cpkColor": "#61FFC7",
    "jmolColor": "#61FFC7",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 64,
    "symbol": "Gd",
    "names": {
      "en": "Gadolinium",
      "ru": "Гадолиний",
      "he": "גדוליניום"
    },
    "atomicMass": {
      "value": 157.249,
      "uncertainty": 0.002,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f7 5d1 6s2",
    "shells": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "electronegativityPauling": 1.2,
    "atomicRadius": 180,
    "covalentRadius": 196,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 593.4
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1585,
    "boilingPoint": 3273,
    "density": 7.9,
    "discoveredYear": 1880,
    "discoveredBy": "Jean Charles Galissard de Marignac",
    "cpkColor": "#45FFC7",
    "jmolColor": "#45FFC7",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 65,
    "symbol": "Tb",
    "names": {
      "en": "Terbium",
      "ru": "Тербий",
      "he": "טרביום"
    },
    "atomicMass": {
      "value": 158.925354,
      "uncertainty": 0.000007,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f9 6s2",
    "shells": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": 178,
    "covalentRadius": 194,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 565.8
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1629,
    "boilingPoint": 3396,
    "density": 8.23,
    "discoveredYear": 1843,
    "discoveredBy": "Carl Gustaf Mosander",
    "cpkColor": "#30FFC7",
    "jmolColor": "#30FFC7",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 66,
    "symbol": "Dy",
    "names": {
      "en": "Dysprosium",
      "ru": "Диспрозий",
      "he": "דיספרוזיום"
    },
    "atomicMass": {
      "value": 162.5,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f10 6s2",
    "shells": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "electronegativityPauling": 1.22,
    "atomicRadius": 177,
    "covalentRadius": 192,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 573
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1680,
    "boilingPoint": 2840,
    "density": 8.54,
    "discoveredYear": 1886,
    "discoveredBy": "Paul-Émile Lecoq de Boisbaudran",
    "cpkColor": "#1FFFC7",
    "jmolColor": "#1FFFC7",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 67,
    "symbol": "Ho",
    "names": {
      "en": "Holmium",
      "ru": "Гольмий",
      "he": "הולמיום"
    },
    "atomicMass": {
      "value": 164.930329,
      "uncertainty": 0.000005,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f11 6s2",
    "shells": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "electronegativityPauling": 1.23,
    "atomicRadius": 176.6,
    "covalentRadius": 192,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 581
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1734,
    "boilingPoint": 2993,
    "density": 8.79,
    "discoveredYear": 1878,
    "discoveredBy": "Marc Delafontaine and Jacques-Louis Soret",
    "cpkColor": "#00FF9C",
    "jmolColor": "#00FF9C",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 68,
    "symbol": "Er",
    "names": {
      "en": "Erbium",
      "ru": "Эрбий",
      "he": "ארביום"
    },
    "atomicMass": {
      "value": 167.259,
      "uncertainty": 0.003,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f12 6s2",
    "shells": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "electronegativityPauling": 1.24,
    "atomicRadius": 175.7,
    "covalentRadius": 189,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 589.3
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1802,
    "boilingPoint": 3141,
    "density": 9.07,
    "discoveredYear": 1843,
    "discoveredBy": "Carl Gustaf Mosander",
    "cpkColor": "#00E675",
    "jmolColor": "#00E675",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 69,
    "symbol": "Tm",
    "names": {
      "en": "Thulium",
      "ru": "Тулий",
      "he": "תוליום"
    },
    "atomicMass": {
      "value": 168.934219,
      "uncertainty": 0.000005,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f13 6s2",
    "shells": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "electronegativityPauling": 1.25,
    "atomicRadius": 174.6,
    "covalentRadius": 190,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 596.7
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1818,
    "boilingPoint": 2223,
    "density": 9.32,
    "discoveredYear": 1879,
    "discoveredBy": "Per Teodor Cleve",
    "cpkColor": "#00D452",
    "jmolColor": "#00D452",
    "appearance": "silvery-gray metal"
  },
  {
    "atomicNumber": 70,
    "symbol": "Yb",
    "names": {
      "en": "Ytterbium",
      "ru": "Иттербий",
      "he": "איטרביום"
    },
    "atomicMass": {
      "value": 173.045,
      "uncertainty": 0.01,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f14 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": 194,
    "covalentRadius": 187,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 603.4
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1097,
    "boilingPoint": 1469,
    "density": 6.9,
    "discoveredYear": 1878,
    "discoveredBy": "Jean Charles Galissard de Marignac",
    "cpkColor": "#00BF38",
    "jmolColor": "#00BF38",
    "appearance": "silvery metal"
  },
  {
    "atomicNumber": 71,
    "symbol": "Lu",
    "names": {
      "en": "Lutetium",
      "ru": "Лютеций",
      "he": "לוטציום"
    },
    "atomicMass": {
      "value": 174.96669,
      "uncertainty": 0.00005,
      "kind": "standard"
    },
    "period": 6,
    "block": "f",
    "category": "lanthanide",
    "electronConfiguration": "[Xe] 4f14 5d1 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "electronegativityPauling": 1.27,
    "atomicRadius": 173.4,
    "covalentRadius": 187,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 523.5
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1925,
    "boilingPoint": 3675,
    "density": 9.84,
    "discoveredYear": 1906,
    "discoveredBy": "Georges Urbain",
    "cpkColor": "#00AB24",
    "jmolColor": "#00AB24",
    "appearance": "silvery-white metal",
    "summary": "The last and heaviest of the lanthanides; its chemistry closely resembles yttrium."
  },
  {
    "atomicNumber": 72,
    "symbol": "Hf",
    "names": {
      "en": "Hafnium",
      "ru": "Гафний",
      "he": "הפניום"
    },
    "atomicMass": {
      "value": 178.486,
      "uncertainty": 0.006,
      "kind": "standard"
    },
    "group": 4,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d2 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "electronegativityPauling": 1.3,
    "atomicRadius": 159,
    "covalentRadius": 175,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 658.5
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2506,
    "boilingPoint": 4876,
    "density": 13.31,
    "discoveredYear": 1923,
    "discoveredBy": "Dirk Coster and George de Hevesy",
    "cpkColor": "#4DC2FF",
    "jmolColor": "#4DC2FF",
    "appearance": "silvery, ductile metal"
  },
  {
    "atomicNumber": 73,
    "symbol": "Ta",
    "names": {
      "en": "Tantalum",
      "ru": "Тантал",
      "he": "טנטל"
    },
    "atomicMass": {
      "value": 180.94788,
      "uncertainty": 0.00002,
      "kind": "standard"
    },
    "group": 5,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d3 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "electronegativityPauling": 1.5,
    "atomicRadius": 146,
    "covalentRadius": 170,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 761
      }
    ],
    "electronAffinity": 31,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 3290,
    "boilingPoint": 5731,
    "density": 16.69,
    "discoveredYear": 1802,
    "discoveredBy": "Anders Gustaf Ekeberg",
    "cpkColor": "#4DA6FF",
    "jmolColor": "#4DA6FF",
    "appearance": "gray, dense, hard metal"
  },
  {
    "atomicNumber": 74,
    "symbol": "W",
    "names": {
      "en": "Tungsten",
      "ru": "Вольфрам",
      "he": "טונגסטן"
    },
    "latinName": "Wolframium",
    "atomicMass": {
      "value": 183.84,
      "uncertainty": 0.01,
      "kind": "standard"
    },
    "group": 6,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d4 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "electronegativityPauling": 2.36,
    "atomicRadius": 139,
    "covalentRadius": 162,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 770
      }
    ],
    "electronAffinity": 78.6,
    "oxidationStates": [
      {
        "value": 6,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 3695,
    "boilingPoint": 5828,
    "density": 19.25,
    "discoveredYear": 1783,
    "discoveredBy": "Juan José Elhuyar and Fausto Elhuyar",
    "cpkColor": "#2194D6",
    "jmolColor": "#2194D6",
    "appearance": "gray-white, dense, hard metal",
    "summary": "Has the highest melting point of any metal; used in incandescent filaments."
  },
  {
    "atomicNumber": 75,
    "symbol": "Re",
    "names": {
      "en": "Rhenium",
      "ru": "Рений",
      "he": "רניום"
    },
    "atomicMass": {
      "value": 186.207,
      "uncertainty": 0.001,
      "kind": "standard"
    },
    "group": 7,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d5 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "electronegativityPauling": 1.9,
    "atomicRadius": 137,
    "covalentRadius": 151,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 760
      }
    ],
    "electronAffinity": 14.5,
    "oxidationStates": [
      {
        "value": 7,
        "common": true
      },
      {
        "value": 4,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 3459,
    "boilingPoint": 5869,
    "density": 21.02,
    "discoveredYear": 1925,
    "discoveredBy": "Walter Noddack, Ida Noddack, and Otto Berg",
    "cpkColor": "#267DAB",
    "jmolColor": "#267DAB",
    "appearance": "silvery-gray metal"
  },
  {
    "atomicNumber": 76,
    "symbol": "Os",
    "names": {
      "en": "Osmium",
      "ru": "Осмий",
      "he": "אוסמיום"
    },
    "atomicMass": {
      "value": 190.23,
      "uncertainty": 0.03,
      "kind": "standard"
    },
    "group": 8,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d6 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "electronegativityPauling": 2.2,
    "atomicRadius": 135,
    "covalentRadius": 144,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 840
      }
    ],
    "electronAffinity": 106.1,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 3306,
    "boilingPoint": 5285,
    "density": 22.59,
    "discoveredYear": 1803,
    "discoveredBy": "Smithson Tennant",
    "cpkColor": "#266696",
    "jmolColor": "#266696",
    "appearance": "silvery, blue-tinged metal",
    "summary": "The densest naturally occurring element."
  },
  {
    "atomicNumber": 77,
    "symbol": "Ir",
    "names": {
      "en": "Iridium",
      "ru": "Иридий",
      "he": "אירידיום"
    },
    "atomicMass": {
      "value": 192.217,
      "uncertainty": 0.002,
      "kind": "standard"
    },
    "group": 9,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d7 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "electronegativityPauling": 2.2,
    "atomicRadius": 136,
    "covalentRadius": 141,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 880
      }
    ],
    "electronAffinity": 151,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2719,
    "boilingPoint": 4403,
    "density": 22.56,
    "discoveredYear": 1803,
    "discoveredBy": "Smithson Tennant",
    "cpkColor": "#175487",
    "jmolColor": "#175487",
    "appearance": "silvery-white metal",
    "summary": "Among the most corrosion-resistant metals known; second densest element."
  },
  {
    "atomicNumber": 78,
    "symbol": "Pt",
    "names": {
      "en": "Platinum",
      "ru": "Платина",
      "he": "פלטינה"
    },
    "atomicMass": {
      "value": 195.084,
      "uncertainty": 0.009,
      "kind": "standard"
    },
    "group": 10,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d9 6s1",
    "shells": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "electronegativityPauling": 2.28,
    "atomicRadius": 139,
    "covalentRadius": 136,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 870
      }
    ],
    "electronAffinity": 205.3,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2041.4,
    "boilingPoint": 4098,
    "density": 21.45,
    "discoveredYear": 1735,
    "discoveredBy": "Antonio de Ulloa",
    "cpkColor": "#D0D0E0",
    "jmolColor": "#D0D0E0",
    "appearance": "silvery-white, dense, malleable metal"
  },
  {
    "atomicNumber": 79,
    "symbol": "Au",
    "names": {
      "en": "Gold",
      "ru": "Золото",
      "he": "זהב"
    },
    "latinName": "Aurum",
    "atomicMass": {
      "value": 196.96657,
      "uncertainty": 0.000004,
      "kind": "standard"
    },
    "group": 11,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d10 6s1",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "electronegativityPauling": 2.54,
    "atomicRadius": 144,
    "covalentRadius": 136,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 890.1
      }
    ],
    "electronAffinity": 222.8,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1337.33,
    "boilingPoint": 3129,
    "density": 19.3,
    "cpkColor": "#FFD123",
    "jmolColor": "#FFD123",
    "appearance": "bright, slightly reddish yellow, dense, soft metal",
    "summary": "A highly unreactive precious metal known and prized since antiquity."
  },
  {
    "atomicNumber": 80,
    "symbol": "Hg",
    "names": {
      "en": "Mercury",
      "ru": "Ртуть",
      "he": "כספית"
    },
    "latinName": "Hydrargyrum",
    "atomicMass": {
      "value": 200.592,
      "uncertainty": 0.003,
      "kind": "standard"
    },
    "group": 12,
    "period": 6,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "electronegativityPauling": 2,
    "atomicRadius": 151,
    "covalentRadius": 132,
    "vdwRadius": 223,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1007.1
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "liquid",
    "meltingPoint": 234.321,
    "boilingPoint": 629.88,
    "density": 13.534,
    "cpkColor": "#B8B8D0",
    "jmolColor": "#B8B8D0",
    "appearance": "silvery, liquid metal at room temperature",
    "summary": "The only metal that is liquid at standard temperature and pressure."
  },
  {
    "atomicNumber": 81,
    "symbol": "Tl",
    "names": {
      "en": "Thallium",
      "ru": "Таллий",
      "he": "תליום"
    },
    "atomicMass": {
      "value": 204.38,
      "kind": "conventional",
      "interval": [
        204.382,
        204.385
      ]
    },
    "group": 13,
    "period": 6,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p1",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "electronegativityPauling": 1.62,
    "atomicRadius": 170,
    "covalentRadius": 145,
    "vdwRadius": 196,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 589.4
      }
    ],
    "electronAffinity": 19.2,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      },
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 577,
    "boilingPoint": 1746,
    "density": 11.85,
    "discoveredYear": 1861,
    "discoveredBy": "William Crookes",
    "cpkColor": "#A6544D",
    "jmolColor": "#A6544D",
    "appearance": "silvery-white metal"
  },
  {
    "atomicNumber": 82,
    "symbol": "Pb",
    "names": {
      "en": "Lead",
      "ru": "Свинец",
      "he": "עופרת"
    },
    "latinName": "Plumbum",
    "atomicMass": {
      "value": 207.2,
      "kind": "conventional",
      "interval": [
        206.14,
        207.94
      ]
    },
    "group": 14,
    "period": 6,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p2",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "electronegativityPauling": 2.33,
    "atomicRadius": 175,
    "covalentRadius": 146,
    "vdwRadius": 202,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 715.6
      }
    ],
    "electronAffinity": 35.1,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 600.61,
    "boilingPoint": 2022,
    "density": 11.34,
    "cpkColor": "#575961",
    "jmolColor": "#575961",
    "appearance": "bluish-white, dense, soft metal that tarnishes dull gray",
    "summary": "A dense, soft, highly malleable metal known since antiquity."
  },
  {
    "atomicNumber": 83,
    "symbol": "Bi",
    "names": {
      "en": "Bismuth",
      "ru": "Висмут",
      "he": "ביסמוט"
    },
    "atomicMass": {
      "value": 208.9804,
      "uncertainty": 0.0001,
      "kind": "standard"
    },
    "group": 15,
    "period": 6,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p3",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "electronegativityPauling": 2.02,
    "atomicRadius": 156,
    "covalentRadius": 148,
    "vdwRadius": 207,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 703
      }
    ],
    "electronAffinity": 91.2,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 5,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 544.7,
    "boilingPoint": 1837,
    "density": 9.78,
    "discoveredYear": 1753,
    "discoveredBy": "Claude François Geoffroy",
    "cpkColor": "#9E4FB5",
    "jmolColor": "#9E4FB5",
    "appearance": "lustrous, silvery-pink metal"
  },
  {
    "atomicNumber": 84,
    "symbol": "Po",
    "names": {
      "en": "Polonium",
      "ru": "Полоний",
      "he": "פולוניום"
    },
    "atomicMass": {
      "value": 209,
      "kind": "longest-lived-isotope"
    },
    "group": 16,
    "period": 6,
    "block": "p",
    "category": "post-transition-metal",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p4",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "electronegativityPauling": 2,
    "atomicRadius": null,
    "covalentRadius": 140,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 812.1
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 527,
    "boilingPoint": 1235,
    "density": 9.32,
    "discoveredYear": 1898,
    "discoveredBy": "Marie Curie and Pierre Curie",
    "cpkColor": "#AB5C00",
    "jmolColor": "#AB5C00",
    "appearance": "silvery, radioactive metal"
  },
  {
    "atomicNumber": 85,
    "symbol": "At",
    "names": {
      "en": "Astatine",
      "ru": "Астат",
      "he": "אסטטין"
    },
    "atomicMass": {
      "value": 210,
      "kind": "longest-lived-isotope"
    },
    "group": 17,
    "period": 6,
    "block": "p",
    "category": "metalloid",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p5",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "electronegativityPauling": 2.2,
    "atomicRadius": null,
    "covalentRadius": 150,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 899
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": -1,
        "common": true
      },
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 575,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1940,
    "discoveredBy": "Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè",
    "cpkColor": "#754F45",
    "jmolColor": "#754F45",
    "appearance": "unknown; presumed a dark, metallic solid (never produced in visible quantities, predicted)",
    "estimated": [
      "meltingPoint"
    ]
  },
  {
    "atomicNumber": 86,
    "symbol": "Rn",
    "names": {
      "en": "Radon",
      "ru": "Радон",
      "he": "רדון"
    },
    "atomicMass": {
      "value": 222,
      "kind": "longest-lived-isotope"
    },
    "group": 18,
    "period": 6,
    "block": "p",
    "category": "noble-gas",
    "electronConfiguration": "[Xe] 4f14 5d10 6s2 6p6",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "electronegativityPauling": null,
    "atomicRadius": 120,
    "covalentRadius": 150,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 1037
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "gas",
    "meltingPoint": 202,
    "boilingPoint": 211.5,
    "density": 0.00973,
    "discoveredYear": 1900,
    "discoveredBy": "Friedrich Ernst Dorn",
    "cpkColor": "#428296",
    "jmolColor": "#428296",
    "appearance": "colorless, dense radioactive gas"
  },
  {
    "atomicNumber": 87,
    "symbol": "Fr",
    "names": {
      "en": "Francium",
      "ru": "Франций",
      "he": "פרנציום"
    },
    "atomicMass": {
      "value": 223,
      "kind": "longest-lived-isotope"
    },
    "group": 1,
    "period": 7,
    "block": "s",
    "category": "alkali-metal",
    "electronConfiguration": "[Rn] 7s1",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "electronegativityPauling": 0.7,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 380
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1939,
    "discoveredBy": "Marguerite Perey",
    "cpkColor": "#420066",
    "jmolColor": "#420066",
    "appearance": "presumed silvery-white metal (never produced in visible quantities, extremely radioactive)"
  },
  {
    "atomicNumber": 88,
    "symbol": "Ra",
    "names": {
      "en": "Radium",
      "ru": "Радий",
      "he": "רדיום"
    },
    "atomicMass": {
      "value": 226,
      "kind": "longest-lived-isotope"
    },
    "group": 2,
    "period": 7,
    "block": "s",
    "category": "alkaline-earth-metal",
    "electronConfiguration": "[Rn] 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "electronegativityPauling": 0.9,
    "atomicRadius": null,
    "covalentRadius": 221,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 509.3
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 973,
    "boilingPoint": 2010,
    "density": 5.5,
    "discoveredYear": 1898,
    "discoveredBy": "Marie Curie and Pierre Curie",
    "cpkColor": "#007D00",
    "jmolColor": "#007D00",
    "appearance": "silvery-white metal that blackens on exposure to air"
  },
  {
    "atomicNumber": 89,
    "symbol": "Ac",
    "names": {
      "en": "Actinium",
      "ru": "Актиний",
      "he": "אקטיניום"
    },
    "atomicMass": {
      "value": 227,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 6d1 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "electronegativityPauling": 1.1,
    "atomicRadius": null,
    "covalentRadius": 215,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 499
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1500,
    "boilingPoint": 3500,
    "density": 10.07,
    "discoveredYear": 1899,
    "discoveredBy": "André-Louis Debierne",
    "cpkColor": "#70ABFA",
    "jmolColor": "#70ABFA",
    "appearance": "silvery, radioactive metal that glows faintly blue in the dark",
    "estimated": [
      "meltingPoint",
      "boilingPoint",
      "density"
    ]
  },
  {
    "atomicNumber": 90,
    "symbol": "Th",
    "names": {
      "en": "Thorium",
      "ru": "Торий",
      "he": "תוריום"
    },
    "atomicMass": {
      "value": 232.0377,
      "uncertainty": 0.0004,
      "kind": "standard"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 6d2 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "electronegativityPauling": 1.3,
    "atomicRadius": null,
    "covalentRadius": 206,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 587
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 2023,
    "boilingPoint": 5061,
    "density": 11.7,
    "discoveredYear": 1829,
    "discoveredBy": "Jöns Jacob Berzelius",
    "cpkColor": "#00BAFF",
    "jmolColor": "#00BAFF",
    "appearance": "silvery, radioactive metal that tarnishes black"
  },
  {
    "atomicNumber": 91,
    "symbol": "Pa",
    "names": {
      "en": "Protactinium",
      "ru": "Протактиний",
      "he": "פרוטקטיניום"
    },
    "atomicMass": {
      "value": 231.03588,
      "uncertainty": 0.00001,
      "kind": "standard"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f2 6d1 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "electronegativityPauling": 1.5,
    "atomicRadius": null,
    "covalentRadius": 200,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 568
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      },
      {
        "value": 4,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1841,
    "boilingPoint": 4300,
    "density": 15.37,
    "discoveredYear": 1913,
    "discoveredBy": "Kazimierz Fajans and Oswald Helmuth Göhring",
    "cpkColor": "#00A1FF",
    "jmolColor": "#00A1FF",
    "appearance": "silvery-gray radioactive metal"
  },
  {
    "atomicNumber": 92,
    "symbol": "U",
    "names": {
      "en": "Uranium",
      "ru": "Уран",
      "he": "אורניום"
    },
    "atomicMass": {
      "value": 238.02891,
      "uncertainty": 0.00003,
      "kind": "standard"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f3 6d1 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "electronegativityPauling": 1.38,
    "atomicRadius": null,
    "covalentRadius": 196,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 597.6
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 6,
        "common": true
      },
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1405.3,
    "boilingPoint": 4404,
    "density": 19.1,
    "discoveredYear": 1789,
    "discoveredBy": "Martin Heinrich Klaproth",
    "cpkColor": "#008FFF",
    "jmolColor": "#008FFF",
    "appearance": "silvery-gray, weakly radioactive metal",
    "summary": "The heaviest naturally occurring element in significant quantity; fuels nuclear reactors."
  },
  {
    "atomicNumber": 93,
    "symbol": "Np",
    "names": {
      "en": "Neptunium",
      "ru": "Нептуний",
      "he": "נפטוניום"
    },
    "atomicMass": {
      "value": 237,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f4 6d1 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "electronegativityPauling": 1.36,
    "atomicRadius": null,
    "covalentRadius": 190,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 604.5
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      },
      {
        "value": 6,
        "common": false
      },
      {
        "value": 4,
        "common": false
      },
      {
        "value": 3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": 917,
    "boilingPoint": 4273,
    "density": 20.45,
    "discoveredYear": 1940,
    "discoveredBy": "Edwin McMillan and Philip H. Abelson",
    "cpkColor": "#0080FF",
    "jmolColor": "#0080FF",
    "appearance": "silvery, radioactive metal"
  },
  {
    "atomicNumber": 94,
    "symbol": "Pu",
    "names": {
      "en": "Plutonium",
      "ru": "Плутоний",
      "he": "פלוטוניום"
    },
    "atomicMass": {
      "value": 244,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f6 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "electronegativityPauling": 1.28,
    "atomicRadius": null,
    "covalentRadius": 187,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 584.7
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      },
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 912.5,
    "boilingPoint": 3501,
    "density": 19.816,
    "discoveredYear": 1940,
    "discoveredBy": "Glenn T. Seaborg and collaborators",
    "cpkColor": "#006BFF",
    "jmolColor": "#006BFF",
    "appearance": "silvery-white radioactive metal that tarnishes yellow"
  },
  {
    "atomicNumber": 95,
    "symbol": "Am",
    "names": {
      "en": "Americium",
      "ru": "Америций",
      "he": "אמריציום"
    },
    "atomicMass": {
      "value": 243,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f7 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": 180,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 578
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1449,
    "boilingPoint": 2880,
    "density": 12,
    "discoveredYear": 1944,
    "discoveredBy": "Glenn T. Seaborg and collaborators",
    "cpkColor": "#545CF2",
    "jmolColor": "#545CF2",
    "appearance": "silvery-white radioactive metal"
  },
  {
    "atomicNumber": 96,
    "symbol": "Cm",
    "names": {
      "en": "Curium",
      "ru": "Кюрий",
      "he": "קוריום"
    },
    "atomicMass": {
      "value": 247,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f7 6d1 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": 169,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 581
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": 1613,
    "boilingPoint": 3383,
    "density": 13.51,
    "discoveredYear": 1944,
    "discoveredBy": "Glenn T. Seaborg and collaborators",
    "cpkColor": "#785CE3",
    "jmolColor": "#785CE3",
    "appearance": "silvery, radioactive metal"
  },
  {
    "atomicNumber": 97,
    "symbol": "Bk",
    "names": {
      "en": "Berkelium",
      "ru": "Берклий",
      "he": "ברקליום"
    },
    "atomicMass": {
      "value": 247,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f9 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 601
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 4,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1949,
    "discoveredBy": "Glenn T. Seaborg and collaborators",
    "cpkColor": "#8A4FE3",
    "jmolColor": "#8A4FE3",
    "appearance": "silvery radioactive metal (predicted)"
  },
  {
    "atomicNumber": 98,
    "symbol": "Cf",
    "names": {
      "en": "Californium",
      "ru": "Калифорний",
      "he": "קליפורניום"
    },
    "atomicMass": {
      "value": 251,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f10 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 608
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1950,
    "discoveredBy": "Glenn T. Seaborg and collaborators",
    "cpkColor": "#A136D4",
    "jmolColor": "#A136D4",
    "appearance": "silvery radioactive metal (predicted)"
  },
  {
    "atomicNumber": 99,
    "symbol": "Es",
    "names": {
      "en": "Einsteinium",
      "ru": "Эйнштейний",
      "he": "איינשטיניום"
    },
    "atomicMass": {
      "value": 252,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f11 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 619
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1952,
    "discoveredBy": "Albert Ghiorso and collaborators",
    "cpkColor": "#B31FD4",
    "jmolColor": "#B31FD4",
    "appearance": "unknown; presumed metallic solid (predicted, produced only in trace amounts)"
  },
  {
    "atomicNumber": 100,
    "symbol": "Fm",
    "names": {
      "en": "Fermium",
      "ru": "Фермий",
      "he": "פרמיום"
    },
    "atomicMass": {
      "value": 257,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f12 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 627
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1952,
    "discoveredBy": "Albert Ghiorso and collaborators",
    "cpkColor": "#B31FBA",
    "jmolColor": "#B31FBA",
    "appearance": "unknown; presumed metallic solid (predicted, never produced in bulk)",
    "estimated": [
      "ionizationEnergies"
    ]
  },
  {
    "atomicNumber": 101,
    "symbol": "Md",
    "names": {
      "en": "Mendelevium",
      "ru": "Менделевий",
      "he": "מנדלביום"
    },
    "atomicMass": {
      "value": 258,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f13 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 635
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      },
      {
        "value": 2,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1955,
    "discoveredBy": "Albert Ghiorso and collaborators",
    "cpkColor": "#B30DA6",
    "jmolColor": "#B30DA6",
    "appearance": "unknown; presumed metallic solid (predicted, never produced in bulk)",
    "estimated": [
      "ionizationEnergies"
    ]
  },
  {
    "atomicNumber": 102,
    "symbol": "No",
    "names": {
      "en": "Nobelium",
      "ru": "Нобелий",
      "he": "נובליום"
    },
    "atomicMass": {
      "value": 259,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f14 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 642
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 2,
        "common": true
      },
      {
        "value": 3,
        "common": false
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1966,
    "discoveredBy": "Joint Institute for Nuclear Research, Dubna",
    "cpkColor": "#BD0D87",
    "jmolColor": "#BD0D87",
    "appearance": "unknown; presumed metallic solid (predicted, never produced in bulk)"
  },
  {
    "atomicNumber": 103,
    "symbol": "Lr",
    "names": {
      "en": "Lawrencium",
      "ru": "Лоуренсий",
      "he": "לורנציום"
    },
    "atomicMass": {
      "value": 262,
      "kind": "longest-lived-isotope"
    },
    "period": 7,
    "block": "f",
    "category": "actinide",
    "electronConfiguration": "[Rn] 5f14 7s2 7p1",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [
      {
        "order": 1,
        "value": 478.6
      }
    ],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 3,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1961,
    "discoveredBy": "Lawrence Berkeley National Laboratory",
    "cpkColor": "#C70066",
    "jmolColor": "#C70066",
    "appearance": "unknown; presumed metallic solid (predicted, never produced in bulk)"
  },
  {
    "atomicNumber": 104,
    "symbol": "Rf",
    "names": {
      "en": "Rutherfordium",
      "ru": "Резерфордий",
      "he": "רתרפורדיום"
    },
    "atomicMass": {
      "value": 267,
      "kind": "longest-lived-isotope"
    },
    "group": 4,
    "period": 7,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Rn] 5f14 6d2 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 4,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1964,
    "discoveredBy": "Joint Institute for Nuclear Research",
    "cpkColor": "#CC0059",
    "jmolColor": "#CC0059",
    "appearance": "unknown (predicted to resemble hafnium)",
    "estimated": [
      "electronConfiguration",
      "shells",
      "oxidationStates"
    ]
  },
  {
    "atomicNumber": 105,
    "symbol": "Db",
    "names": {
      "en": "Dubnium",
      "ru": "Дубний",
      "he": "דובניום"
    },
    "atomicMass": {
      "value": 268,
      "kind": "longest-lived-isotope"
    },
    "group": 5,
    "period": 7,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Rn] 5f14 6d3 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 5,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1970,
    "discoveredBy": "Joint Institute for Nuclear Research and Lawrence Berkeley National Laboratory",
    "cpkColor": "#D1004F",
    "jmolColor": "#D1004F",
    "appearance": "unknown (predicted to resemble tantalum)",
    "estimated": [
      "electronConfiguration",
      "shells",
      "oxidationStates"
    ]
  },
  {
    "atomicNumber": 106,
    "symbol": "Sg",
    "names": {
      "en": "Seaborgium",
      "ru": "Сиборгий",
      "he": "סיבורגיום"
    },
    "atomicMass": {
      "value": 269,
      "kind": "longest-lived-isotope"
    },
    "group": 6,
    "period": 7,
    "block": "d",
    "category": "transition-metal",
    "electronConfiguration": "[Rn] 5f14 6d4 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 6,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1974,
    "discoveredBy": "Lawrence Berkeley National Laboratory",
    "cpkColor": "#D90045",
    "jmolColor": "#D90045",
    "appearance": "unknown (predicted to resemble tungsten)",
    "estimated": [
      "electronConfiguration",
      "shells",
      "oxidationStates"
    ]
  },
  {
    "atomicNumber": 107,
    "symbol": "Bh",
    "names": {
      "en": "Bohrium",
      "ru": "Борий",
      "he": "בוריום"
    },
    "atomicMass": {
      "value": 270,
      "kind": "longest-lived-isotope"
    },
    "group": 7,
    "period": 7,
    "block": "d",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d5 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 7,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1981,
    "discoveredBy": "GSI Helmholtz Centre for Heavy Ion Research",
    "cpkColor": "#E00038",
    "jmolColor": "#E00038",
    "appearance": "unknown (predicted to resemble rhenium)",
    "estimated": [
      "electronConfiguration",
      "shells",
      "oxidationStates"
    ]
  },
  {
    "atomicNumber": 108,
    "symbol": "Hs",
    "names": {
      "en": "Hassium",
      "ru": "Хассий",
      "he": "האסיום"
    },
    "atomicMass": {
      "value": 269,
      "kind": "longest-lived-isotope"
    },
    "group": 8,
    "period": 7,
    "block": "d",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d6 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": 8,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1984,
    "discoveredBy": "GSI Helmholtz Centre for Heavy Ion Research",
    "cpkColor": "#E6002E",
    "jmolColor": "#E6002E",
    "appearance": "unknown (predicted to resemble osmium)",
    "estimated": [
      "electronConfiguration",
      "shells",
      "oxidationStates"
    ]
  },
  {
    "atomicNumber": 109,
    "symbol": "Mt",
    "names": {
      "en": "Meitnerium",
      "ru": "Мейтнерий",
      "he": "מייטנריום"
    },
    "atomicMass": {
      "value": 278,
      "kind": "longest-lived-isotope"
    },
    "group": 9,
    "period": 7,
    "block": "d",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d7 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1982,
    "discoveredBy": "GSI Helmholtz Centre for Heavy Ion Research",
    "cpkColor": "#EB0026",
    "jmolColor": "#EB0026",
    "appearance": "unknown",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 110,
    "symbol": "Ds",
    "names": {
      "en": "Darmstadtium",
      "ru": "Дармштадтий",
      "he": "דרמשטטיום"
    },
    "atomicMass": {
      "value": 281,
      "kind": "longest-lived-isotope"
    },
    "group": 10,
    "period": 7,
    "block": "d",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d8 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      16,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1994,
    "discoveredBy": "GSI Helmholtz Centre for Heavy Ion Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 111,
    "symbol": "Rg",
    "names": {
      "en": "Roentgenium",
      "ru": "Рентгений",
      "he": "רנטגניום"
    },
    "atomicMass": {
      "value": 282,
      "kind": "longest-lived-isotope"
    },
    "group": 11,
    "period": 7,
    "block": "d",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d9 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      17,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1994,
    "discoveredBy": "GSI Helmholtz Centre for Heavy Ion Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 112,
    "symbol": "Cn",
    "names": {
      "en": "Copernicium",
      "ru": "Коперниций",
      "he": "קופרניציום"
    },
    "atomicMass": {
      "value": 285,
      "kind": "longest-lived-isotope"
    },
    "group": 12,
    "period": 7,
    "block": "d",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1996,
    "discoveredBy": "GSI Helmholtz Centre for Heavy Ion Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "predicted to be a volatile liquid or gas near room temperature, resembling mercury",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 113,
    "symbol": "Nh",
    "names": {
      "en": "Nihonium",
      "ru": "Нихоний",
      "he": "ניהוניום"
    },
    "atomicMass": {
      "value": 286,
      "kind": "longest-lived-isotope"
    },
    "group": 13,
    "period": 7,
    "block": "p",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p1",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 2004,
    "discoveredBy": "RIKEN",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown (predicted to resemble a post-transition metal)",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 114,
    "symbol": "Fl",
    "names": {
      "en": "Flerovium",
      "ru": "Флеровий",
      "he": "פלרוביום"
    },
    "atomicMass": {
      "value": 289,
      "kind": "longest-lived-isotope"
    },
    "group": 14,
    "period": 7,
    "block": "p",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p2",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 1998,
    "discoveredBy": "Joint Institute for Nuclear Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "predicted to be an unusually volatile metal, possibly gas-like",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 115,
    "symbol": "Mc",
    "names": {
      "en": "Moscovium",
      "ru": "Московий",
      "he": "מוסקוביום"
    },
    "atomicMass": {
      "value": 290,
      "kind": "longest-lived-isotope"
    },
    "group": 15,
    "period": 7,
    "block": "p",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p3",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 2003,
    "discoveredBy": "Joint Institute for Nuclear Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown (predicted to resemble bismuth)",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 116,
    "symbol": "Lv",
    "names": {
      "en": "Livermorium",
      "ru": "Ливерморий",
      "he": "ליברמוריום"
    },
    "atomicMass": {
      "value": 293,
      "kind": "longest-lived-isotope"
    },
    "group": 16,
    "period": 7,
    "block": "p",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p4",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 2000,
    "discoveredBy": "Joint Institute for Nuclear Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown (predicted to resemble polonium)",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  },
  {
    "atomicNumber": 117,
    "symbol": "Ts",
    "names": {
      "en": "Tennessine",
      "ru": "Теннессин",
      "he": "טנסין"
    },
    "atomicMass": {
      "value": 294,
      "kind": "longest-lived-isotope"
    },
    "group": 17,
    "period": 7,
    "block": "p",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p5",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [
      {
        "value": -1,
        "common": true
      },
      {
        "value": 1,
        "common": true
      }
    ],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 2010,
    "discoveredBy": "Joint Institute for Nuclear Research and Oak Ridge National Laboratory",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown (predicted to be a volatile, metallic-looking halogen analogue)",
    "estimated": [
      "electronConfiguration",
      "shells",
      "oxidationStates"
    ]
  },
  {
    "atomicNumber": 118,
    "symbol": "Og",
    "names": {
      "en": "Oganesson",
      "ru": "Оганесон",
      "he": "אוגנסון"
    },
    "atomicMass": {
      "value": 294,
      "kind": "longest-lived-isotope"
    },
    "group": 18,
    "period": 7,
    "block": "p",
    "category": "unknown",
    "electronConfiguration": "[Rn] 5f14 6d10 7s2 7p6",
    "shells": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "electronegativityPauling": null,
    "atomicRadius": null,
    "covalentRadius": null,
    "vdwRadius": null,
    "ionizationEnergies": [],
    "electronAffinity": null,
    "oxidationStates": [],
    "standardState": "solid",
    "meltingPoint": null,
    "boilingPoint": null,
    "density": null,
    "discoveredYear": 2002,
    "discoveredBy": "Joint Institute for Nuclear Research",
    "cpkColor": null,
    "jmolColor": null,
    "appearance": "unknown; predicted to be a solid at room temperature, unlike the lighter noble gases",
    "estimated": [
      "electronConfiguration",
      "shells"
    ]
  }
];
