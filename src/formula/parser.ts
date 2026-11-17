/**
 * Hand-written recursive descent parser for chemical formulas.
 *
 * Grammar (informal EBNF):
 *   formula    := sequence ( hydrate )*
 *   hydrate    := HYDRATE_SEP [ count ] sequence
 *   sequence   := term+
 *   term       := ELEMENT [ count ] | group [ count ]
 *   group      := '(' sequence ')' | '[' sequence ']'
 *   count      := NUMBER                      // integer, must be >= 1
 *
 * `sequence` requires at least one term (an empty formula, an empty group
 * "()", and a hydrate separator with nothing following it are all errors).
 */
import { InvalidFormulaError, UnknownElementError } from '../errors.js';
import { ELEMENTS } from '../data/elements.js';
import { tokenize, type Token, type TokenType } from './tokenizer.js';

const VALID_SYMBOLS = new Set(ELEMENTS.map((el) => el.symbol));

type ElementCounts = Map<string, number>;

function mergeInto(target: ElementCounts, source: ElementCounts, multiplier: number): void {
  for (const [symbol, count] of source) {
    target.set(symbol, (target.get(symbol) ?? 0) + count * multiplier);
  }
}

class FormulaParser {
  private readonly tokens: readonly Token[];
  private pos = 0;

  constructor(
    private readonly formula: string,
    tokens: readonly Token[],
  ) {
    this.tokens = tokens;
  }

  private peek(): Token {
    // `tokenize` always appends a trailing `eof` token and this class never
    // advances past it, so the index is always in bounds; the fallback is
    // defensive only, never actually reached.
    return this.tokens[this.pos] ?? { type: 'eof', value: '', position: this.formula.length };
  }

  private advance(): Token {
    const token = this.peek();
    this.pos++;
    return token;
  }

  private fail(reason: string, token: Token): never {
    throw new InvalidFormulaError(
      this.formula,
      reason,
      token.position,
      token.type === 'eof' ? undefined : token.value,
    );
  }

  private isTermStart(type: TokenType): boolean {
    return type === 'element' || type === 'lparen' || type === 'lbracket';
  }

  /** Parses one or more terms; throws if zero terms are found (empty `context`). */
  private parseSequence(context: string): ElementCounts {
    const counts: ElementCounts = new Map();
    let parsedAny = false;
    while (this.isTermStart(this.peek().type)) {
      this.parseTerm(counts);
      parsedAny = true;
    }
    if (!parsedAny) {
      this.fail(`expected an element symbol or group in ${context}`, this.peek());
    }
    return counts;
  }

  private parseCount(): number {
    const token = this.advance();
    const value = Number(token.value);
    if (value === 0) {
      this.fail('count must be at least 1, got 0', token);
    }
    return value;
  }

  private parseOptionalCount(): number {
    return this.peek().type === 'number' ? this.parseCount() : 1;
  }

  private parseTerm(counts: ElementCounts): void {
    const token = this.peek();

    if (token.type === 'element') {
      this.advance();
      if (!VALID_SYMBOLS.has(token.value)) {
        throw new UnknownElementError(token.value);
      }
      const count = this.parseOptionalCount();
      counts.set(token.value, (counts.get(token.value) ?? 0) + count);
      return;
    }

    // Group: '(' ... ')' or '[' ... ']'.
    const openToken = this.advance();
    const closeType: TokenType = openToken.type === 'lparen' ? 'rparen' : 'rbracket';
    const closeChar = openToken.type === 'lparen' ? ')' : ']';
    const inner = this.parseSequence('group');

    const closeToken = this.peek();
    if (closeToken.type !== closeType) {
      if (closeToken.type === 'rparen' || closeToken.type === 'rbracket') {
        this.fail(
          `mismatched bracket: opened with "${openToken.value}" but closed with "${closeToken.value}"`,
          closeToken,
        );
      }
      this.fail(
        `unbalanced brackets: expected "${closeChar}" to close "${openToken.value}" opened ` +
          `at position ${String(openToken.position)}`,
        closeToken,
      );
    }
    this.advance();

    const count = this.parseOptionalCount();
    mergeInto(counts, inner, count);
  }

  parse(): ElementCounts {
    const counts = this.parseSequence('formula');

    while (this.peek().type === 'hydrate') {
      this.advance();
      const coefficient = this.parseOptionalCount();
      const part = this.parseSequence('hydrate/adduct part');
      mergeInto(counts, part, coefficient);
    }

    if (this.peek().type !== 'eof') {
      this.fail(`unexpected "${this.peek().value}"`, this.peek());
    }
    return counts;
  }
}

/**
 * Parses a chemical formula into element symbol -> atom count. Internal
 * entry point returning a `Map` (insertion order = first-seen order);
 * {@link parseFormula} wraps this into the public `Record` return type.
 */
export function parseFormulaCounts(formula: string): ElementCounts {
  if (formula.trim().length === 0) {
    throw new InvalidFormulaError(formula, 'formula must not be empty', 0);
  }
  const tokens = tokenize(formula);
  return new FormulaParser(formula, tokens).parse();
}

/**
 * Parses a chemical formula into a map of element symbol to atom count.
 * Symbols are matched strictly case-sensitively: "Co" is cobalt; "CO" is
 * carbon + oxygen (two separate one-letter-then-one-letter tokens, since an
 * uppercase letter can only be followed by a *lowercase* letter to form a
 * two-letter symbol).
 *
 * @throws {InvalidFormulaError} on empty input, unbalanced/mismatched
 *   brackets, a zero count, charge/isotope notation, or any other
 *   unexpected/stray character.
 * @throws {UnknownElementError} if a syntactically valid symbol token (e.g.
 *   "Xx") does not match any of the 118 known elements.
 */
export function parseFormula(formula: string): Record<string, number> {
  return Object.fromEntries(parseFormulaCounts(formula));
}
