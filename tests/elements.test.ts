import { describe, expect, it } from 'vitest';
import { findElements, getElement, getElements, type Element } from '../src/index.js';

describe('getElements', () => {
  it('returns exactly 118 elements', () => {
    expect(getElements()).toHaveLength(118);
  });

  it('returns elements ordered by atomic number with no gaps', () => {
    const elements = getElements();
    elements.forEach((el, i) => {
      expect(el.atomicNumber).toBe(i + 1);
    });
  });

  it('has no duplicate symbols', () => {
    const symbols = getElements().map((el) => el.symbol);
    expect(new Set(symbols).size).toBe(symbols.length);
  });

  it('returns a frozen/shared reference, not a defensive copy', () => {
    expect(getElements()).toBe(getElements());
  });
});

describe('getElement', () => {
  it('looks up by atomic number', () => {
    expect(getElement(26)?.symbol).toBe('Fe');
  });

  it('looks up by symbol, case-insensitively', () => {
    expect(getElement('Fe')?.atomicNumber).toBe(26);
    expect(getElement('fe')?.atomicNumber).toBe(26);
    expect(getElement('FE')?.atomicNumber).toBe(26);
  });

  it('looks up by English name, case-insensitively', () => {
    expect(getElement('Iron')?.symbol).toBe('Fe');
    expect(getElement('iron')?.symbol).toBe('Fe');
  });

  it('looks up by Russian name', () => {
    expect(getElement('Железо')?.symbol).toBe('Fe');
  });

  it('looks up by Hebrew name', () => {
    expect(getElement('ברזל')?.symbol).toBe('Fe');
  });

  it('looks up by Latin name for elements with classical etymology', () => {
    expect(getElement('Natrium')?.symbol).toBe('Na');
    expect(getElement('ferrum')?.symbol).toBe('Fe');
  });

  it('returns undefined for an unknown atomic number', () => {
    expect(getElement(200)).toBeUndefined();
    expect(getElement(0)).toBeUndefined();
  });

  it('returns undefined for an unknown symbol or name', () => {
    expect(getElement('Xx')).toBeUndefined();
    expect(getElement('Unobtainium')).toBeUndefined();
  });

  it('tolerates surrounding whitespace in string queries', () => {
    expect(getElement('  Fe  ')?.atomicNumber).toBe(26);
  });
});

describe('findElements', () => {
  it('filters by block', () => {
    const noble = findElements({ block: 'p', category: 'noble-gas' });
    expect(noble.map((el) => el.symbol).sort()).toEqual(['Ar', 'Kr', 'Ne', 'Rn', 'Xe'].sort());
  });

  it('filters by group', () => {
    const alkali = findElements({ group: 1 });
    expect(alkali.map((el) => el.symbol)).toEqual(['H', 'Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']);
  });

  it('filters by period', () => {
    expect(findElements({ period: 1 })).toHaveLength(2);
  });

  it('filters by category', () => {
    const lanthanides = findElements({ category: 'lanthanide' });
    expect(lanthanides).toHaveLength(15);
  });

  it('filters by standard state', () => {
    const liquids = findElements({ state: 'liquid' });
    expect(liquids.map((el) => el.symbol).sort()).toEqual(['Br', 'Hg']);
  });

  it('filters by mass range', () => {
    const light = findElements({ mass: { max: 10 } });
    expect(light.map((el) => el.symbol)).toEqual(['H', 'He', 'Li', 'Be']);
  });

  it('combines multiple criteria with AND semantics', () => {
    const result = findElements({ group: 17, state: 'gas' });
    expect(result.map((el) => el.symbol).sort()).toEqual(['Cl', 'F']);
  });

  it('returns an empty array when nothing matches', () => {
    expect(findElements({ period: 1, category: 'lanthanide' })).toEqual([]);
  });
});

describe('element data integrity', () => {
  const elements = getElements();

  it('every element has required non-optional fields populated', () => {
    for (const el of elements) {
      expect(el.symbol).toBeTruthy();
      expect(el.names.en).toBeTruthy();
      expect(el.names.ru).toBeTruthy();
      expect(el.names.he).toBeTruthy();
      expect(el.names.la).toBeTruthy();
      expect(el.atomicMass.value).toBeGreaterThan(0);
      expect(el.period).toBeGreaterThanOrEqual(1);
      expect(el.period).toBeLessThanOrEqual(7);
      expect(['s', 'p', 'd', 'f']).toContain(el.block);
      expect(el.electronConfiguration.length).toBeGreaterThan(0);
      expect(Array.isArray(el.shells)).toBe(true);
      expect(el.shells.length).toBeGreaterThan(0);
      expect(el.cpkColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(el.jmolColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it('shell electron counts sum to the atomic number for every element', () => {
    for (const el of elements) {
      const total = el.shells.reduce((a: number, b: number) => a + b, 0);
      expect(total).toBe(el.atomicNumber);
    }
  });

  it('ionization energies are listed in increasing order starting at 1', () => {
    for (const el of elements) {
      el.ionizationEnergies.forEach((ionEnergy, i) => {
        expect(ionEnergy.order).toBe(i + 1);
      });
    }
  });

  it('physical properties fall within physically sane ranges', () => {
    const checkRange = (value: number | undefined, min: number, max: number) => {
      if (value !== undefined) {
        expect(value).toBeGreaterThanOrEqual(min);
        expect(value).toBeLessThanOrEqual(max);
      }
    };
    for (const el of elements) {
      checkRange(el.electronegativityPauling, 0, 4.5);
      checkRange(el.meltingPoint, 0, 4200);
      checkRange(el.boilingPoint, 0, 6200);
      checkRange(el.density, 0, 23);
    }
  });

  it('known reference elements have the expected key properties', () => {
    const byClass = new Map<string, Element>(elements.map((el) => [el.symbol, el]));
    expect(byClass.get('H')?.atomicMass.value).toBeCloseTo(1.008, 3);
    expect(byClass.get('Fe')?.electronConfiguration).toBe('[Ar] 3d6 4s2');
    expect(byClass.get('Fe')?.shells).toEqual([2, 8, 14, 2]);
    expect(byClass.get('Au')?.shells).toEqual([2, 8, 18, 32, 18, 1]);
    expect(byClass.get('Pd')?.electronConfiguration).toBe('[Kr] 4d10');
    expect(byClass.get('O')?.category).toBe('reactive-nonmetal');
    expect(byClass.get('Og')?.atomicNumber).toBe(118);
  });
});
