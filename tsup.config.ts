import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    isotopes: 'src/isotopes/index.ts',
  },
  format: ['esm', 'cjs'],
  target: 'es2022',
  outDir: 'dist',
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  tsconfig: 'tsconfig.build.json',
});
