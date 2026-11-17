import { describe, expect, it } from 'vitest';
import {
  composition,
  InvalidFormulaError,
  molarMass,
  NoStandardAtomicWeightError,
  parseFormula,
  UnknownElementError,
} from '../src/index.js';

describe('parseFormula: basic and nested structures', () => {
  it('parses a simple formula', () => {
    expect(parseFormula('H2O')).toEqual({ H: 2, O: 1 });
  });

  it('parses an element with no explicit count as 1', () => {
    expect(parseFormula('CO2')).toEqual({ C: 1, O: 2 });
  });

  it('is strictly case-sensitive: "Co" is cobalt, a single element', () => {
    expect(parseFormula('Co')).toEqual({ Co: 1 });
  });

  it('is strictly case-sensitive: "CO" is carbon + oxygen, two elements', () => {
    expect(parseFormula('CO')).toEqual({ C: 1, O: 1 });
  });

  it('parses a group with parentheses and a trailing count', () => {
    expect(parseFormula('Ca(OH)2')).toEqual({ Ca: 1, O: 2, H: 2 });
  });

  it('parses nested groups multiplying counts at each level: Fe2(SO4)3', () => {
    expect(parseFormula('Fe2(SO4)3')).toEqual({ Fe: 2, S: 3, O: 12 });
  });

  it('parses a leading group with a trailing count: (NH4)2SO4', () => {
    expect(parseFormula('(NH4)2SO4')).toEqual({ N: 2, H: 8, S: 1, O: 4 });
  });

  it('parses mixed nested () and []: K4[Fe(CN)6]', () => {
    expect(parseFormula('K4[Fe(CN)6]')).toEqual({ K: 4, Fe: 1, C: 6, N: 6 });
  });

  it('parses a hydrate separated by the middle dot (·)', () => {
    expect(parseFormula('CuSO4\u00b75H2O')).toEqual({ Cu: 1, S: 1, O: 9, H: 10 });
  });

  it('allows whitespace around a hydrate separator and its coefficient', () => {
    expect(parseFormula('CuSO4 \u00b7 5 H2O')).toEqual({ Cu: 1, S: 1, O: 9, H: 10 });
  });

  it('parses a hydrate separated by a literal asterisk (*)', () => {
    expect(parseFormula('CaCl2*2H2O')).toEqual({ Ca: 1, Cl: 2, H: 4, O: 2 });
  });

  it('parses a hydrate separated by the bullet (•)', () => {
    expect(parseFormula('MgSO4\u20225H2O')).toEqual({ Mg: 1, S: 1, O: 9, H: 10 });
  });

  it('parses deeply nested groups: ((CH3)3C)2O (di-tert-butyl ether)', () => {
    expect(parseFormula('((CH3)3C)2O')).toEqual({ C: 8, H: 18, O: 1 });
  });

  it('parses large counts', () => {
    expect(parseFormula('C100H202')).toEqual({ C: 100, H: 202 });
  });

  it('allows whitespace between separate terms (not before a count)', () => {
    expect(parseFormula('Ca (OH)2')).toEqual({ Ca: 1, O: 2, H: 2 });
  });

  it('merges repeated occurrences of the same element', () => {
    // Written as a human might type ethanol: C2H5OH.
    expect(parseFormula('C2H5OH')).toEqual({ C: 2, H: 6, O: 1 });
  });
});

describe('parseFormula: rejections', () => {
  it('rejects empty input', () => {
    expect(() => parseFormula('')).toThrow(InvalidFormulaError);
    try {
      parseFormula('');
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      expect((e as InvalidFormulaError).position).toBe(0);
    }
  });

  it('rejects whitespace-only input as empty', () => {
    expect(() => parseFormula('   ')).toThrow(InvalidFormulaError);
  });

  it('rejects an unknown element symbol', () => {
    expect(() => parseFormula('Xx2')).toThrow(UnknownElementError);
    try {
      parseFormula('Xx2');
    } catch (e) {
      expect(e).toBeInstanceOf(UnknownElementError);
      expect((e as UnknownElementError).query).toBe('Xx');
    }
  });

  it('rejects an unbalanced (missing closing) bracket, reporting the opening position', () => {
    try {
      parseFormula('Ca(OH');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('unbalanced brackets');
      expect(err.message).toContain('position 2');
      expect(err.position).toBe(5); // where the (missing) ")" should have been
    }
  });

  it('rejects a mismatched bracket type', () => {
    try {
      parseFormula('Ca(OH]2');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('mismatched bracket');
      expect(err.position).toBe(5);
      expect(err.token).toBe(']');
    }
  });

  it('rejects a zero count', () => {
    try {
      parseFormula('H0');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('count must be at least 1');
      expect(err.position).toBe(1);
    }
  });

  it('rejects charge notation', () => {
    try {
      parseFormula('Na+');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('charge notation');
      expect(err.position).toBe(2);
      expect(err.token).toBe('+');
    }
  });

  it('rejects isotope (superscript) notation', () => {
    try {
      parseFormula('\u00b2H');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      expect((e as InvalidFormulaError).message).toContain('isotope notation');
    }
  });

  it('rejects a stray character', () => {
    try {
      parseFormula('H2@O');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('unexpected character');
      expect(err.position).toBe(2);
      expect(err.token).toBe('@');
    }
  });

  it('rejects a leading count outside of hydrate context', () => {
    try {
      parseFormula('2H2O');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      expect((e as InvalidFormulaError).position).toBe(0);
    }
  });

  it('rejects a stray closing bracket with no matching open bracket', () => {
    expect(() => parseFormula(')H2O')).toThrow(InvalidFormulaError);
    expect(() => parseFormula('H2O)')).toThrow(InvalidFormulaError);
  });

  it('rejects an empty group', () => {
    expect(() => parseFormula('()')).toThrow(InvalidFormulaError);
  });

  it('rejects a trailing hydrate separator with nothing after it', () => {
    expect(() => parseFormula('CuSO4\u00b7')).toThrow(InvalidFormulaError);
  });

  it('rejects a lowercase letter starting a token', () => {
    expect(() => parseFormula('h2o')).toThrow(InvalidFormulaError);
  });

  it('rejects a leading zero in an element count', () => {
    try {
      parseFormula('H02');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('leading zero');
      expect(err.position).toBe(1);
      expect(err.token).toBe('02');
    }
  });

  it('rejects a leading zero in a group count', () => {
    expect(() => parseFormula('(OH)03')).toThrow(InvalidFormulaError);
  });

  it('rejects a leading zero in a hydrate coefficient', () => {
    expect(() => parseFormula('CuSO4\u00b705H2O')).toThrow(InvalidFormulaError);
  });

  it('rejects whitespace between an element and its own count', () => {
    try {
      parseFormula('H 2O');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('whitespace is not allowed');
      expect(err.position).toBe(2);
    }
  });

  it('rejects whitespace between a closing group bracket and its own count', () => {
    expect(() => parseFormula('Ca(OH) 2')).toThrow(InvalidFormulaError);
  });

  it('rejects "." as a hydrate separator by default, with a hint in the message', () => {
    try {
      parseFormula('CuSO4.5H2O');
      expect.unreachable();
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidFormulaError);
      const err = e as InvalidFormulaError;
      expect(err.message).toContain('dotSeparator');
      expect(err.position).toBe(5);
      expect(err.token).toBe('.');
    }
  });
});

describe('parseFormula: dotSeparator option', () => {
  it('treats "." as a hydrate separator when dotSeparator is true', () => {
    expect(parseFormula('CuSO4.5H2O', { dotSeparator: true })).toEqual({
      Cu: 1,
      S: 1,
      O: 9,
      H: 10,
    });
  });

  it('still rejects "." when dotSeparator is explicitly false', () => {
    expect(() => parseFormula('CuSO4.5H2O', { dotSeparator: false })).toThrow(InvalidFormulaError);
  });

  it('leaves the always-on separators (·, •, *) working regardless of dotSeparator', () => {
    expect(parseFormula('CaCl2*2H2O')).toEqual({ Ca: 1, Cl: 2, H: 4, O: 2 });
    expect(parseFormula('CaCl2*2H2O', { dotSeparator: false })).toEqual({
      Ca: 1,
      Cl: 2,
      H: 4,
      O: 2,
    });
  });

  it('still allows whitespace around the separator and its coefficient with dotSeparator', () => {
    expect(parseFormula('CuSO4 . 5 H2O', { dotSeparator: true })).toEqual({
      Cu: 1,
      S: 1,
      O: 9,
      H: 10,
    });
  });
});

describe('molarMass', () => {
  // Expected values below are computed from this library's own bundled
  // atomic masses for internal consistency, and are expected to be close to
  // (within the stated 0.02 g/mol tolerance of) commonly published values.
  // TODO(maintainer): verify each of these 20 expected values against PubChem
  // (or another authoritative source) — they have NOT been independently
  // cross-checked against PubChem in this session.
  const cases: [string, number][] = [
    ['H2O', 18.015],
    ['CO2', 44.009],
    ['NaCl', 58.44],
    ['CaCO3', 100.086],
    ['H2SO4', 98.072],
    ['NaOH', 39.997],
    ['NH3', 17.031],
    ['CH4', 16.043],
    ['C6H12O6', 180.156],
    ['C2H5OH', 46.069],
    ['CaCl2', 110.978],
    ['KMnO4', 158.032],
    ['Fe2O3', 159.687],
    ['CuSO4\u00b75H2O', 249.677],
    ['Mg(OH)2', 58.319],
    ['Al2(SO4)3', 342.131],
    ['C6H6', 78.114],
    ['NaHCO3', 84.006],
    ['(NH4)2SO4', 132.134],
    ['K4[Fe(CN)6]', 368.346],
  ];

  it.each(cases)('computes the molar mass of %s as ~%f g/mol', (formula, expected) => {
    expect(molarMass(formula)).toBeCloseTo(expected, 2);
  });

  it('throws NoStandardAtomicWeightError for an element with no stable isotope', () => {
    expect(() => molarMass('Tc2O7')).toThrow(NoStandardAtomicWeightError);
    try {
      molarMass('TcO4');
    } catch (e) {
      expect(e).toBeInstanceOf(NoStandardAtomicWeightError);
      expect((e as NoStandardAtomicWeightError).symbol).toBe('Tc');
    }
  });

  it('allows unstable elements when allowUnstable is true', () => {
    // Tc-97 mass number (97) * 2 + O (15.999) * 7 = 194 + 111.993 = 305.993
    expect(molarMass('Tc2O7', { allowUnstable: true })).toBeCloseTo(305.993, 2);
  });

  it('does not round intermediate or final values', () => {
    // NaCl's mass is not a "nice" number; a rounding step would make this
    // fail against the precise, unrounded expected value.
    expect(molarMass('NaCl')).toBeCloseTo(22.98976928 + 35.45, 9);
  });
});

describe('composition', () => {
  it('reports counts and mass percentages that sum to 100', () => {
    const result = composition('H2O');
    expect(result).toHaveLength(2);
    const sum = result.reduce((acc, entry) => acc + entry.massPercent, 0);
    expect(sum).toBeCloseTo(100, 9);
  });

  it('sums to 100 within 1e-9 for a more complex formula', () => {
    const result = composition('Al2(SO4)3');
    const sum = result.reduce((acc, entry) => acc + entry.massPercent, 0);
    expect(Math.abs(sum - 100)).toBeLessThan(1e-9);
  });

  it('sorts in Hill order with carbon present: C, H, then alphabetical', () => {
    const result = composition('C6H12O6');
    expect(result.map((e) => e.symbol)).toEqual(['C', 'H', 'O']);
  });

  it('sorts alphabetically (including H) when no carbon is present', () => {
    const result = composition('H2SO4');
    expect(result.map((e) => e.symbol)).toEqual(['H', 'O', 'S']);
  });

  it('reports the correct atom counts alongside mass percentages', () => {
    const result = composition('C6H12O6');
    const bySymbol = new Map(result.map((e) => [e.symbol, e]));
    expect(bySymbol.get('C')?.count).toBe(6);
    expect(bySymbol.get('H')?.count).toBe(12);
    expect(bySymbol.get('O')?.count).toBe(6);
  });
});

describe('property-based sanity: concatenating formulas', () => {
  const pairs: [string, string][] = [
    ['NaCl', 'KBr'],
    ['H2O', 'CO2'],
    ['CaCO3', 'MgCO3'],
    ['Fe2O3', 'Al2O3'],
  ];

  it.each(pairs)(
    'molarMass of concatenated "%s" + "%s" equals the sum of their individual masses',
    (a, b) => {
      const combined = molarMass(a + b);
      const sum = molarMass(a) + molarMass(b);
      expect(combined).toBeCloseTo(sum, 9);
    },
  );
});
