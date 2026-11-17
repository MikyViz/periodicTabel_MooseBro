import { describe, expect, it } from 'vitest';
import { getElements } from '../src/index.js';
import {
  getIsotope,
  getIsotopes,
  getLongestLivedIsotope,
  ISOTOPES,
  UnknownIsotopeError,
} from '../src/isotopes/index.js';
import { UnknownElementError } from '../src/index.js';
import { crossCheck } from '../scripts/build-isotopes/validate.js';

describe('cross-check 1: weighted-average mass vs atomicMass.value (standard-kind elements)', () => {
  it('has no mismatches beyond max(3\u00d7uncertainty, 1e-4)', () => {
    const report = crossCheck(ISOTOPES, getElements());
    expect(report.standardMassMismatches).toEqual([]);
  });
});

describe('cross-check 2: weighted-average mass inside atomicMass.interval (conventional-kind elements)', () => {
  it('has no mismatches beyond the small margin', () => {
    const report = crossCheck(ISOTOPES, getElements());
    expect(report.intervalMismatches).toEqual([]);
  });
});

describe('cross-check 3: natural abundances sum to 1 per element', () => {
  it('has no mismatches beyond 1e-6', () => {
    const report = crossCheck(ISOTOPES, getElements());
    expect(report.abundanceSumMismatches).toEqual([]);
  });
});

describe('cross-check 4: stored atomicMass.value vs NUBASE2020 longest-lived isotope', () => {
  it('documents the known, unresolved disagreements (element data intentionally not auto-edited)', () => {
    const report = crossCheck(ISOTOPES, getElements());
    const symbols = report.longestLivedDisagreements.map((line) => line.split(':')[0]);
    // These 5 are real, NUBASE2020-evidenced disagreements found during Phase 4 —
    // see the chat report. Resolving them is a maintainer decision, not automated.
    expect(symbols.sort()).toEqual(['Ds', 'Fl', 'Lr', 'Mt', 'Og'].sort());
  });
});

describe('getIsotopes', () => {
  it('returns all natural isotopes of an element, by symbol', () => {
    const isotopes = getIsotopes('Sn');
    expect(isotopes).toHaveLength(10); // tin has the most stable isotopes of any element
    expect(isotopes.every((iso) => iso.stable)).toBe(true);
  });

  it('returns all natural isotopes of an element, by atomic number', () => {
    expect(getIsotopes(50)).toHaveLength(10);
  });

  it('returns a single entry for elements with no natural isotope', () => {
    const isotopes = getIsotopes('Tc');
    expect(isotopes).toHaveLength(1);
    expect(isotopes[0]?.massNumber).toBe(97);
    expect(isotopes[0]?.stable).toBe(false);
    expect(isotopes[0]?.abundance).toBeNull();
  });

  it('throws UnknownElementError for an unrecognized symbol', () => {
    expect(() => getIsotopes('Xx')).toThrow(UnknownElementError);
  });

  it('throws UnknownElementError for an out-of-range atomic number', () => {
    expect(() => getIsotopes(200)).toThrow(UnknownElementError);
  });
});

describe('getIsotope', () => {
  it('looks up by "U-238" notation', () => {
    const iso = getIsotope('U-238');
    expect(iso.atomicNumber).toBe(92);
    expect(iso.massNumber).toBe(238);
  });

  it('looks up by "238U" notation', () => {
    const iso = getIsotope('238U');
    expect(iso.atomicNumber).toBe(92);
    expect(iso.massNumber).toBe(238);
  });

  it('looks up by { z, a }', () => {
    const iso = getIsotope({ z: 92, a: 235 });
    expect(iso.symbol).toBe('U');
    expect(iso.massNumber).toBe(235);
  });

  it('throws UnknownElementError when the element part is unrecognized', () => {
    expect(() => getIsotope('Xx-99')).toThrow(UnknownElementError);
    expect(() => getIsotope('not a notation')).toThrow(UnknownElementError);
  });

  it('throws UnknownIsotopeError when the element is known but the mass number is not bundled', () => {
    try {
      getIsotope('U-999');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(UnknownIsotopeError);
      expect((e as UnknownIsotopeError).symbol).toBe('U');
      expect((e as UnknownIsotopeError).massNumber).toBe(999);
    }
  });
});

describe('getLongestLivedIsotope', () => {
  it('returns the single entry for a synthetic-only element', () => {
    expect(getLongestLivedIsotope('Tc').massNumber).toBe(97);
  });

  it('returns a stable isotope (deterministically) for an element with several', () => {
    const iso = getLongestLivedIsotope('Sn');
    expect(iso.stable).toBe(true);
  });

  it('picks the genuinely longer-lived primordial radionuclide over shorter natural isotopes', () => {
    // K-40 is radioactive but still "natural"; among K's natural isotopes,
    // the stable ones (39, 41) should win over K-40.
    const iso = getLongestLivedIsotope('K');
    expect(iso.stable).toBe(true);
  });
});

describe('well-known reference isotopes', () => {
  it('C-12 has a mass of exactly 12 (by definition of the unified atomic mass unit)', () => {
    const c12 = getIsotope('C-12');
    expect(c12.mass.value).toBe(12);
    expect(c12.stable).toBe(true);
  });

  it('H-2 (deuterium) is present, stable, and normalized to symbol "H"', () => {
    const d = getIsotope('H-2');
    expect(d.symbol).toBe('H');
    expect(d.stable).toBe(true);
    expect(d.mass.value).toBeCloseTo(2.014101778, 6);
  });

  it('U-235 and U-238 have the expected natural abundances and are radioactive', () => {
    const u235 = getIsotope('U-235');
    const u238 = getIsotope('U-238');
    expect(u235.abundance?.value).toBeCloseTo(0.0072, 3);
    expect(u238.abundance?.value).toBeCloseTo(0.9927, 3);
    expect(u235.stable).toBe(false);
    expect(u238.stable).toBe(false);
    expect(u235.halfLifeSeconds).toBeGreaterThan(0);
    expect(u238.halfLifeSeconds).toBeGreaterThan(0);
    expect(u235.decayModes.length).toBeGreaterThan(0);
  });

  it('Sn has exactly 10 natural (stable) isotopes', () => {
    expect(getIsotopes('Sn').filter((iso) => iso.stable)).toHaveLength(10);
  });
});

describe('isotope dataset integrity', () => {
  it('covers all 118 elements with at least one isotope', () => {
    const bySymbol = new Set(ISOTOPES.map((iso) => iso.symbol));
    for (const el of getElements()) {
      expect(bySymbol.has(el.symbol), `${el.symbol} should have at least one isotope`).toBe(true);
    }
  });

  it('has no duplicate (symbol, massNumber) pairs', () => {
    const keys = ISOTOPES.map((iso) => `${iso.symbol}-${String(iso.massNumber)}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('every isotope has a non-negative mass and, if present, a non-negative uncertainty', () => {
    for (const iso of ISOTOPES) {
      expect(iso.mass.value).toBeGreaterThan(0);
      if (iso.mass.uncertainty !== null) {
        expect(iso.mass.uncertainty).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('stable isotopes have no half-life; unstable ones have a positive half-life', () => {
    for (const iso of ISOTOPES) {
      if (iso.stable) {
        expect(iso.halfLifeSeconds).toBeNull();
      } else {
        expect(iso.halfLifeSeconds).not.toBeNull();
        expect(iso.halfLifeSeconds ?? 0).toBeGreaterThan(0);
      }
    }
  });

  it('stable isotopes have no decay modes, except documented near-stable exceptions', () => {
    // Te-123 is NUBASE-classified as stable (no decay ever observed) but
    // still carries a documented theoretical electron-capture mode with
    // only a half-life *lower bound* (>2 petayears) - a genuine NUBASE2020
    // nuance, not a data bug.
    const KNOWN_EXCEPTIONS = new Set(['Te-123']);
    for (const iso of ISOTOPES) {
      const key = `${iso.symbol}-${String(iso.massNumber)}`;
      if (iso.stable && !KNOWN_EXCEPTIONS.has(key)) {
        expect(iso.decayModes).toEqual([]);
      }
    }
  });
});
