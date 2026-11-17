# periodic-table-ts

> A modern, strictly-typed, zero-dependency periodic table library for Node and
> browsers — rich, sourced data; ergonomic lookup, filtering, formula parsing,
> and isotopes; built-in i18n (en, ru, he).

**Status: Phase 1 (scaffold + types + tooling).** Data, lookup, formula
parsing, isotopes, and the full README/CI land in later phases — see the
project plan in the main chat for the phase breakdown.

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
