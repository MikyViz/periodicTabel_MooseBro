# periodic-table-ts

> A modern, strictly-typed, zero-dependency periodic table library for Node and
> browsers — rich, sourced data; ergonomic lookup, filtering, formula parsing,
> and isotopes; built-in i18n (en, ru, he).

**Status: Phase 4 (isotopes).** All 118 elements are bundled with rich,
sourced data; element lookup/filtering, formula parsing/molar mass, and a
scoped isotope dataset (natural isotopes + each element's longest-lived
known isotope) are implemented. i18n subpath exports and full CI land in
later phases — see the project plan in the main chat for the phase
breakdown.

## Quick start

```ts
import { getElement, findElements, parseFormula, molarMass, composition } from 'periodic-table-ts';
import { getIsotopes, getIsotope, getLongestLivedIsotope } from 'periodic-table-ts/isotopes';

getElement(26); // Fe, by atomic number
getElement('Fe'); // by symbol
getElement('Железо'); // by Russian name
getElement('ברזל'); // by Hebrew name

findElements({ category: 'noble-gas' });
findElements({ group: 1, state: 'solid' });

parseFormula('CuSO4\u00b75H2O'); // { Cu: 1, S: 1, O: 9, H: 10 }
molarMass('H2O'); // 18.015
composition('C6H12O6'); // [{ symbol: 'C', count: 6, massPercent: ~40.0 }, ...]

getIsotopes('Sn'); // all 10 stable tin isotopes
getIsotope('U-238'); // or '238U', or { z: 92, a: 238 }
getLongestLivedIsotope('Tc'); // Tc-97 (no natural isotope exists)
```

### Data provenance

- **Atomic weights**: CIAAW Standard Atomic Weights (fetched directly from
  the live table at ciaaw.org, not from memory), including the 2024
  revisions to Gd/Lu/Zr — **please independently verify those three**, per
  the note in `scripts/build-data/sources.ts`.
- **Electron configurations**: NIST Atomic Spectra Database ground levels
  (public domain); Z >= 104 are theoretical predictions, not measurements
  (see each such element's `estimated` field).
- **Everything else** (radii, electronegativity, higher ionization energies,
  electron affinity, melting/boiling point, density, oxidation states,
  colors, discovery metadata, appearance/summary): standard
  reference-literature values — **not** copied from Wikipedia or any other
  CC BY-SA source. See the `TODO(maintainer)` comments in
  `scripts/build-data/raw-elements.ts` and `sources.ts` for what still needs
  verification against primary sources before production/publication use.
  Fields whose value is estimated/extrapolated/predicted rather than
  directly measured are listed in that element's `estimated` array.

### Formula parsing rules

`parseFormula`/`molarMass`/`composition` are a hand-written tokenizer +
recursive-descent parser (no regex-only parsing), supporting:

- Case-sensitive element symbols: `"Co"` is cobalt; `"CO"` is carbon +
  oxygen. The input is never lowercased.
- Integer counts (>= 1, no leading zeros) after elements and groups, e.g.
  `H2O`, `Fe2(SO4)3`. A count must immediately follow its element/group with
  **no whitespace** (`"H 2"` is rejected); whitespace between separate terms
  (e.g. `"Ca (OH)2"`) is still fine.
- Arbitrarily nested `()` and `[]` groups with matching-bracket validation,
  e.g. `K4[Fe(CN)6]`.
- Hydrates/adducts separated by `·`, `•`, or `*` (always enabled), with an
  optional leading integer coefficient multiplying the whole following
  part, e.g. `CuSO4\u00b75H2O`. Whitespace around the separator and its
  coefficient is allowed (e.g. `"CuSO4 \u00b7 5 H2O"`).
- A literal `.` as a hydrate separator is **disabled by default** — pass
  `{ dotSeparator: true }` to enable it. It's opt-in because `.` is
  structurally indistinguishable from a decimal point using only local
  context (in `"CuSO4.5H2O"`, "4.5" looks exactly like a decimal number);
  without the option, a bare `.` throws with a hint to use `·`/`•`/`*` or
  the option.
- Clear, position-reporting errors (`InvalidFormulaError.position`/`.token`)
  for empty input, unbalanced/mismatched brackets, zero/leading-zero
  counts, non-adjacent (whitespace-separated) counts, charge notation,
  isotope notation, a disabled `.` separator, and stray characters.
- **Out of scope**: ion charges, isotope notation, and non-integer
  (decimal) subscript counts — there is no dedicated "decimal number"
  token, so a decimal-looking count only fails for the structural reasons
  above (e.g. a trailing coefficient with nothing after it), not via a
  specific "decimal counts aren't supported" check.

**Mass rules:**

- `molarMass`/`composition` use `atomicMass.value` for every element — for
  `'conventional'`-kind (interval) elements this is already IUPAC's
  conventional abridged value, so no special-casing is needed by the caller.
- Elements with `atomicMass.kind === 'longest-lived-isotope'` (no IUPAC
  standard atomic weight) throw `NoStandardAtomicWeightError` unless you
  pass `{ allowUnstable: true }`, in which case that isotope's mass number
  is used instead.
- No rounding happens inside any calculation — `molarMass`'s return value
  and every `composition` entry's `massPercent` are full, unrounded
  floating-point numbers; round for display at the call site.

### Isotopes (`periodic-table-ts/isotopes`)

Isotope data is bundled as a **separate subpath export**, not part of the
core `periodic-table-ts` entry point — the core bundle never imports it, so
consumers who only need element/formula features pay no bundle-size cost
for isotope data (see the bundle sizes below).

**Scope (v1)**: every naturally occurring isotope (stable and primordial
radionuclides — 288 isotopes across 84 elements) plus the longest-lived
known isotope of every element that has no natural isotope at all (34
elements: Tc, Pm, Po, At, Rn, Fr, Ra, Ac, Np, Pu, Am, Cm, Bk, Cf, Es, Fm,
Md, No, Lr, and Rf through Og) — 322 isotopes total. The full nuclide chart
(thousands of synthetic isotopes) is out of scope.

```ts
import {
  getIsotopes,
  getIsotope,
  getLongestLivedIsotope,
  UnknownIsotopeError,
} from 'periodic-table-ts/isotopes';

getIsotopes('Sn'); // 10 stable isotopes
getIsotope('U-238'); // also accepts '238U' or { z: 92, a: 238 }
getLongestLivedIsotope('K'); // a stable isotope (K-39), not radioactive K-40
```

- `getIsotopes`/`getIsotope`/`getLongestLivedIsotope` throw `UnknownElementError`
  for an unrecognized element and `UnknownIsotopeError` (from `getIsotope`
  only) for a known element with a mass number not in the bundled dataset.
- `Isotope.mass`/`.abundance` are `{ value, uncertainty }` objects
  (`uncertainty` is `null` when not reported by the source); `.abundance`
  itself is `null` for isotopes with no measured natural occurrence.
- `Isotope.halfLifeSeconds` is `null` for stable isotopes.

#### Data sources and licenses

| Dataset                                                             | Source                                                                                                                       | License                                                                                                                   |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Element data (mass, config, physical properties)                    | CIAAW, NIST ASD, reference-literature compilation (see above)                                                                | Public domain / factual data                                                                                              |
| Isotope mass & natural abundance                                    | NIST "Atomic Weights and Isotopic Compositions" (compiling AME2020 and IUPAC's "Isotopic compositions of the elements 2009") | Public domain (US government work)                                                                                        |
| Isotope half-life, decay modes, longest-lived-isotope determination | NUBASE2020 (Kondev et al., Chinese Phys. C 45, 030001, 2021), via the AMDC                                                   | **TODO(maintainer)**: no explicit redistribution license found beyond a citation requirement — see `data/raw/MANIFEST.md` |

Raw source files and full citations live in `data/raw/MANIFEST.md`. Only
`dist/` (built output) is published to npm — `data/raw/` and
`scripts/build-isotopes/` are development-only and never published.

**Known data-quality findings from the Phase 4 build** (reported, not
auto-fixed — see `scripts/build-isotopes/generate.ts`'s console output):
for 5 elements (Lr, Mt, Ds, Fl, Og), this library's existing
`atomicMass.value` (the previously-assumed longest-lived isotope) disagrees
with the isotope NUBASE2020's half-life data actually identifies as
longest-lived. See the chat history for this session for details and
primary-source evidence; resolving these is a maintainer decision.

## Development

```bash
npm install
npm run build       # tsup -> dist (esm + cjs + d.ts)
npm test            # vitest
npm run lint        # eslint
npm run format      # prettier --write
npm run typecheck   # tsc --noEmit
```

## License

MIT — see [LICENSE](./LICENSE).
