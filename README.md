# periodic-table-ts

> A modern, strictly-typed, zero-dependency periodic table library for Node and
> browsers — rich, sourced data; ergonomic lookup, filtering, formula parsing,
> and isotopes; built-in i18n (en, ru, he).

**Status: Phase 2 (core element data + lookup + tests).** All 118 elements
are bundled with rich, sourced data; formula parsing, isotopes, and the full
README/CI land in later phases — see the project plan in the main chat for
the phase breakdown.

## Quick start (Phase 2 preview)

```ts
import { getElement, findElements } from 'periodic-table-ts';

getElement(26); // Fe, by atomic number
getElement('Fe'); // by symbol
getElement('Железо'); // by Russian name
getElement('ברזל'); // by Hebrew name

findElements({ category: 'noble-gas' });
findElements({ group: 1, state: 'solid' });
```

### Data provenance

- **Atomic weights**: CIAAW/IUPAC standard atomic weights (public domain).
- **Electron configurations**: NIST Atomic Spectra Database ground levels
  (public domain); Z >= 104 are theoretical predictions, not measurements.
- **Everything else** (radii, electronegativity, higher ionization energies,
  electron affinity, melting/boiling point, density, oxidation states,
  colors, discovery metadata, appearance/summary): standard
  reference-literature values — **not** copied from Wikipedia or any other
  CC BY-SA source. See the `TODO(maintainer)` comments in
  `scripts/build-data/raw-elements.ts` and `sources.ts` for what still needs
  verification against primary sources before production/publication use.

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
