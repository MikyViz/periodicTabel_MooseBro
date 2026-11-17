/**
 * Thrown when a lookup query (atomic number, symbol, or name) does not match
 * any known element.
 */
export class UnknownElementError extends Error {
  readonly query: number | string;

  constructor(query: number | string) {
    super(
      typeof query === 'number'
        ? `Unknown element: no element with atomic number ${String(query)}.`
        : `Unknown element: "${query}" is not a recognized symbol or name.`,
    );
    this.name = 'UnknownElementError';
    this.query = query;
    Object.setPrototypeOf(this, UnknownElementError.prototype);
  }
}

/**
 * Thrown when a chemical formula cannot be parsed, e.g. due to unbalanced
 * parentheses, an unknown element symbol, or an invalid token.
 */
export class InvalidFormulaError extends Error {
  readonly formula: string;

  constructor(formula: string, reason: string) {
    super(`Invalid formula "${formula}": ${reason}`);
    this.name = 'InvalidFormulaError';
    this.formula = formula;
    Object.setPrototypeOf(this, InvalidFormulaError.prototype);
  }
}
