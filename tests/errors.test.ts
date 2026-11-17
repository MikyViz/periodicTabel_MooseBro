import { describe, expect, it } from 'vitest';
import { InvalidFormulaError, UnknownElementError } from '../src/index.js';

describe('Phase 1 scaffold', () => {
  it('exports UnknownElementError with a helpful message and instanceof Error', () => {
    const err = new UnknownElementError('Xx');
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(UnknownElementError);
    expect(err.name).toBe('UnknownElementError');
    expect(err.message).toContain('Xx');
  });

  it('exports UnknownElementError with a numeric query', () => {
    const err = new UnknownElementError(200);
    expect(err.message).toContain('200');
  });

  it('exports InvalidFormulaError with the formula and reason in the message', () => {
    const err = new InvalidFormulaError('Ca(OH', 'unbalanced parentheses');
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(InvalidFormulaError);
    expect(err.name).toBe('InvalidFormulaError');
    expect(err.message).toContain('Ca(OH');
    expect(err.message).toContain('unbalanced parentheses');
  });
});
