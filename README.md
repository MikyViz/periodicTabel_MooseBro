# periodic-table-ts

> A modern, strictly-typed, zero-dependency periodic table library for Node and
> browsers — rich, sourced data; ergonomic lookup, filtering, formula parsing,
> and isotopes; built-in i18n (en, ru, he).

**Status: Phase 3 (formula parser).** All 118 elements are bundled with rich,
sourced data; element lookup/filtering and formula parsing/molar mass are
implemented. Isotopes, i18n subpath exports, and full CI land in later
phases — see the project plan in the main chat for the phase breakdown.

## Quick start

```ts
import { getElement, findElements, parseFormula, molarMass, composition } from 'periodic-table-ts';

getElement(26); // Fe, by atomic number
getElement('Fe'); // by symbol
getElement('Железо'); // by Russian name
getElement('ברזל'); // by Hebrew name

findElements({ category: 'noble-gas' });
findElements({ group: 1, state: 'solid' });

parseFormula('CuSO4\u00b75H2O'); // { Cu: 1, S: 1, O: 9, H: 10 }
molarMass('H2O'); // 18.015
composition('C6H12O6'); // [{ symbol: 'C', count: 6, massPercent: ~40.0 }, ...]
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
- Integer counts (>= 1) after elements and groups, e.g. `H2O`, `Fe2(SO4)3`.
- Arbitrarily nested `()` and `[]` groups with matching-bracket validation,
  e.g. `K4[Fe(CN)6]`.
- Hydrates/adducts separated by `·`, `•`, `*`, or `.`, with an optional
  leading integer coefficient multiplying the whole following part, e.g.
  `CuSO4\u00b75H2O`.
- Clear, position-reporting errors (`InvalidFormulaError.position`/`.token`)
  for empty input, unbalanced/mismatched brackets, zero counts, charge
  notation, isotope notation, and stray characters.
- **Out of scope**: ion charges, isotope notation, and non-integer
  (decimal) subscript counts. Because `.` is a hydrate separator (matching
  common chemistry notation), it is _never_ treated as a decimal point —
  there's no way to distinguish "decimal point" from "hydrate separator"
  from local context alone, so a decimal-looking count like `H2.5O` either
  parses as an (unusual but well-defined) hydrate expression or fails for
  an unrelated structural reason, rather than being specially detected and
  rejected as "a decimal count".

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
