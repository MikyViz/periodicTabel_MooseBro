/**
 * Tokenizer for chemical formulas. Hand-written (no regex-based "parsing" of
 * the whole formula) so every token carries its exact source position for
 * precise error reporting.
 *
 * Design note on `.` as a hydrate separator: per the grammar this module
 * implements, a literal `.` is *always* a hydrate/adduct separator (same as
 * `·`/`•`/`*`), never a decimal point — there is no separate "decimal
 * number" token. This means a non-integer subscript like "H2.5O" is not
 * specially detected as such; it will either parse as an (unusual but
 * well-defined) hydrate expression (coefficient 5 applied to the "O" that
 * follows) or fail for an unrelated structural reason (e.g. a trailing
 * coefficient with nothing after it). This is a deliberate consequence of
 * reusing the same character for both roles, consistent with the stated
 * out-of-scope status of non-stoichiometric (decimal) counts.
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

const HYDRATE_SEPARATORS = new Set(['\u00b7', '\u2022', '*', '.']);
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
export function tokenize(formula: string): Token[] {
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
