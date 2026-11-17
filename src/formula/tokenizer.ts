/**
 * Tokenizer for chemical formulas. Hand-written (no regex-based "parsing" of
 * the whole formula) so every token carries its exact source position for
 * precise error reporting.
 *
 * Design note on `.` as a hydrate separator: a literal `.` is structurally
 * indistinguishable from a decimal point using only local context (e.g. in
 * "CuSO4.5H2O", "4.5" looks exactly like a decimal number). Because of that
 * ambiguity, `.` is only treated as a hydrate separator when the caller
 * explicitly opts in via `{ dotSeparator: true }`; by default it is
 * rejected with a hint to use `·`/`•`/`*` (always enabled) or the option.
 */
import { InvalidFormulaError } from '../errors.js';

export type TokenType =
  'element' | 'number' | 'lparen' | 'rparen' | 'lbracket' | 'rbracket' | 'hydrate' | 'eof';

export interface Token {
  type: TokenType;
  /** Raw source text for this token (empty string for `eof`). */
  value: string;
  /** 0-based character offset into the original formula string. */
  position: number;
}

export interface TokenizeOptions {
  /** Treat a literal `.` as a hydrate/adduct separator too. Default `false`. */
  dotSeparator?: boolean;
}

// Always-on hydrate separators. `.` is handled separately since it is only
// enabled when `options.dotSeparator` is true (see module doc above).
const HYDRATE_SEPARATORS = new Set(['\u00b7', '\u2022', '*']);
// Common Unicode superscript digits, for a friendlier "isotope notation
// isn't supported" message instead of a generic "unexpected character" one.
const SUPERSCRIPT_DIGITS = new Set([
  '\u2070',
  '\u00b9',
  '\u00b2',
  '\u00b3',
  '\u2074',
  '\u2075',
  '\u2076',
  '\u2077',
  '\u2078',
  '\u2079',
]);

function isUpper(ch: string): boolean {
  return ch >= 'A' && ch <= 'Z';
}
function isLower(ch: string): boolean {
  return ch >= 'a' && ch <= 'z';
}
function isDigit(ch: string): boolean {
  return ch >= '0' && ch <= '9';
}
function isWhitespace(ch: string): boolean {
  return ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r';
}

/** Tokenizes a formula string, throwing `InvalidFormulaError` on any stray character. */
export function tokenize(formula: string, options?: TokenizeOptions): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  const n = formula.length;

  while (i < n) {
    const ch = formula[i] ?? '';

    if (isWhitespace(ch)) {
      i++;
      continue;
    }
    if (ch === '(') {
      tokens.push({ type: 'lparen', value: '(', position: i });
      i++;
      continue;
    }
    if (ch === ')') {
      tokens.push({ type: 'rparen', value: ')', position: i });
      i++;
      continue;
    }
    if (ch === '[') {
      tokens.push({ type: 'lbracket', value: '[', position: i });
      i++;
      continue;
    }
    if (ch === ']') {
      tokens.push({ type: 'rbracket', value: ']', position: i });
      i++;
      continue;
    }
    if (HYDRATE_SEPARATORS.has(ch)) {
      tokens.push({ type: 'hydrate', value: ch, position: i });
      i++;
      continue;
    }
    if (ch === '.') {
      if (options?.dotSeparator === true) {
        tokens.push({ type: 'hydrate', value: ch, position: i });
        i++;
        continue;
      }
      throw new InvalidFormulaError(
        formula,
        '"." is not enabled as a hydrate separator; use "\u00b7", "\u2022", or "*", or pass ' +
          '{ dotSeparator: true } to allow it',
        i,
        ch,
      );
    }
    if (isDigit(ch)) {
      let j = i + 1;
      while (j < n && isDigit(formula[j] ?? '')) j++;
      tokens.push({ type: 'number', value: formula.slice(i, j), position: i });
      i = j;
      continue;
    }
    if (isUpper(ch)) {
      let j = i + 1;
      if (j < n && isLower(formula[j] ?? '')) j++;
      tokens.push({ type: 'element', value: formula.slice(i, j), position: i });
      i = j;
      continue;
    }

    if (ch === '+' || ch === '-') {
      throw new InvalidFormulaError(formula, 'charge notation is not supported', i, ch);
    }
    if (SUPERSCRIPT_DIGITS.has(ch)) {
      throw new InvalidFormulaError(
        formula,
        'isotope notation (superscript mass numbers) is not supported',
        i,
        ch,
      );
    }
    if (isLower(ch)) {
      throw new InvalidFormulaError(
        formula,
        'element symbols must start with an uppercase letter',
        i,
        ch,
      );
    }
    throw new InvalidFormulaError(formula, `unexpected character "${ch}"`, i, ch);
  }

  tokens.push({ type: 'eof', value: '', position: n });
  return tokens;
}
