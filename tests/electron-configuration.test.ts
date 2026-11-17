import { describe, expect, it } from 'vitest';
import { getElement } from '../src/index.js';

/**
 * Explicit regression tests for the ~19 elements whose ground-state electron
 * configuration deviates from naive Aufbau (n+l) filling order. These are
 * exactly the cases `electron-structure.ts` cannot get right "for free" —
 * they come from the raw per-element `valenceConfig` data, so a typo there
 * would otherwise only be caught indirectly (via the shell-sum-equals-Z
 * check in validate.ts, which can't detect a wrong-but-still-summing
 * configuration).
 */
describe('anomalous ground-state electron configurations', () => {
  const cases: {
    symbol: string;
    electronConfiguration: string;
    shells: readonly number[];
  }[] = [
    { symbol: 'Cr', electronConfiguration: '[Ar] 3d5 4s1', shells: [2, 8, 13, 1] },
    { symbol: 'Cu', electronConfiguration: '[Ar] 3d10 4s1', shells: [2, 8, 18, 1] },
    { symbol: 'Nb', electronConfiguration: '[Kr] 4d4 5s1', shells: [2, 8, 18, 12, 1] },
    { symbol: 'Mo', electronConfiguration: '[Kr] 4d5 5s1', shells: [2, 8, 18, 13, 1] },
    { symbol: 'Ru', electronConfiguration: '[Kr] 4d7 5s1', shells: [2, 8, 18, 15, 1] },
    { symbol: 'Rh', electronConfiguration: '[Kr] 4d8 5s1', shells: [2, 8, 18, 16, 1] },
    { symbol: 'Pd', electronConfiguration: '[Kr] 4d10', shells: [2, 8, 18, 18] },
    { symbol: 'Ag', electronConfiguration: '[Kr] 4d10 5s1', shells: [2, 8, 18, 18, 1] },
    { symbol: 'La', electronConfiguration: '[Xe] 5d1 6s2', shells: [2, 8, 18, 18, 9, 2] },
    { symbol: 'Ce', electronConfiguration: '[Xe] 4f1 5d1 6s2', shells: [2, 8, 18, 19, 9, 2] },
    { symbol: 'Gd', electronConfiguration: '[Xe] 4f7 5d1 6s2', shells: [2, 8, 18, 25, 9, 2] },
    { symbol: 'Pt', electronConfiguration: '[Xe] 4f14 5d9 6s1', shells: [2, 8, 18, 32, 17, 1] },
    { symbol: 'Au', electronConfiguration: '[Xe] 4f14 5d10 6s1', shells: [2, 8, 18, 32, 18, 1] },
    { symbol: 'Ac', electronConfiguration: '[Rn] 6d1 7s2', shells: [2, 8, 18, 32, 18, 9, 2] },
    { symbol: 'Th', electronConfiguration: '[Rn] 6d2 7s2', shells: [2, 8, 18, 32, 18, 10, 2] },
    { symbol: 'Pa', electronConfiguration: '[Rn] 5f2 6d1 7s2', shells: [2, 8, 18, 32, 20, 9, 2] },
    { symbol: 'U', electronConfiguration: '[Rn] 5f3 6d1 7s2', shells: [2, 8, 18, 32, 21, 9, 2] },
    { symbol: 'Np', electronConfiguration: '[Rn] 5f4 6d1 7s2', shells: [2, 8, 18, 32, 22, 9, 2] },
    { symbol: 'Cm', electronConfiguration: '[Rn] 5f7 6d1 7s2', shells: [2, 8, 18, 32, 25, 9, 2] },
  ];

  it.each(cases)(
    '$symbol has the expected anomalous configuration and shells',
    ({ symbol, electronConfiguration, shells }) => {
      const el = getElement(symbol);
      expect(el).toBeDefined();
      expect(el?.electronConfiguration).toBe(electronConfiguration);
      expect(el?.shells).toEqual(shells);
      expect(el?.shells.reduce((a, b) => a + b, 0)).toBe(el?.atomicNumber);
    },
  );
});
