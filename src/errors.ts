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
 * brackets, a malformed count, or an unexpected/unsupported character.
 * `position` is the 0-based character offset into `formula` where the
 * problem was detected; `token` is the offending substring, when available.
 */
export class InvalidFormulaError extends Error {
  readonly formula: string;
  readonly position: number;
  readonly token?: string;

  constructor(formula: string, reason: string, position: number, token?: string) {
    super(
      token !== undefined
        ? `Invalid formula "${formula}": ${reason} (at position ${String(position)}, near "${token}")`
        : `Invalid formula "${formula}": ${reason} (at position ${String(position)})`,
    );
    this.name = 'InvalidFormulaError';
    this.formula = formula;
    this.position = position;
    if (token !== undefined) {
      this.token = token;
    }
    Object.setPrototypeOf(this, InvalidFormulaError.prototype);
  }
}

/**
 * Thrown when `molarMass`/`composition` encounter an element with
 * `atomicMass.kind === 'longest-lived-isotope'` (no IUPAC standard atomic
 * weight) and `options.allowUnstable` was not set to `true`.
 */
export class NoStandardAtomicWeightError extends Error {
  readonly symbol: string;

  constructor(symbol: string) {
    super(
      `"${symbol}" has no IUPAC standard atomic weight (no stable or consistently-abundant ` +
        'isotope); pass { allowUnstable: true } to use the mass of its longest-lived known ' +
        'isotope instead.',
    );
    this.name = 'NoStandardAtomicWeightError';
    this.symbol = symbol;
    Object.setPrototypeOf(this, NoStandardAtomicWeightError.prototype);
  }
}

/**
 * Thrown when an isotope lookup (`getIsotope`) specifies a known element
 * but a mass number that is not in this library's bundled isotope dataset
 * (natural isotopes plus each element's longest-lived known isotope).
 */
export class UnknownIsotopeError extends Error {
  readonly symbol: string;
  readonly massNumber: number;

  constructor(symbol: string, massNumber: number) {
    super(
      `Unknown isotope: ${symbol}-${String(massNumber)} is not in the bundled isotope dataset ` +
        '(natural isotopes plus each element\u2019s longest-lived known isotope).',
    );
    this.name = 'UnknownIsotopeError';
    this.symbol = symbol;
    this.massNumber = massNumber;
    Object.setPrototypeOf(this, UnknownIsotopeError.prototype);
  }
}
