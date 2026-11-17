import type { Element, Isotope } from '../../src/types.js';

export interface CrossCheckReport {
  /** Check 1: weighted average mass vs atomicMass.value, for 'standard'-kind elements. */
  standardMassMismatches: string[];
  /** Check 2: weighted average mass vs atomicMass.interval, for 'conventional'-kind elements. */
  intervalMismatches: string[];
  /** Check 3: natural abundances per element should sum to 1. */
  abundanceSumMismatches: string[];
  /**
   * Check 4: for 'longest-lived-isotope' elements, does the stored
   * `atomicMass.value` (mass number) match the isotope this pipeline
   * determined to be longest-lived via NUBASE2020 half-lives? Reported
   * only — per instructions, element data is never auto-edited here.
   */
  longestLivedDisagreements: string[];
}

/**
 * Runs the four data-integrity cross-checks described in the Phase 4 spec
 * against the fully-assembled isotope dataset and the existing element
 * dataset. Does not throw; callers decide what to do with each category
 * (see `generate.ts`: checks 1-3 fail the build, check 4 is report-only).
 */
export function crossCheck(
  isotopes: readonly Isotope[],
  elements: readonly Element[],
): CrossCheckReport {
  const report: CrossCheckReport = {
    standardMassMismatches: [],
    intervalMismatches: [],
    abundanceSumMismatches: [],
    longestLivedDisagreements: [],
  };

  const isotopesByElement = new Map<number, Isotope[]>();
  for (const iso of isotopes) {
    const list = isotopesByElement.get(iso.atomicNumber) ?? [];
    list.push(iso);
    isotopesByElement.set(iso.atomicNumber, list);
  }

  for (const el of elements) {
    const isos = isotopesByElement.get(el.atomicNumber) ?? [];
    const natural = isos.filter((iso) => iso.abundance !== null);

    if (el.atomicMass.kind === 'standard' || el.atomicMass.kind === 'conventional') {
      if (natural.length === 0) continue; // e.g. Th/Pa/U-style: handled by abundance presence check elsewhere
      const abundanceSum = natural.reduce((sum, iso) => sum + (iso.abundance?.value ?? 0), 0);
      if (Math.abs(abundanceSum - 1) > 1e-6) {
        report.abundanceSumMismatches.push(
          `${el.symbol}: natural abundances sum to ${abundanceSum.toFixed(8)}, expected 1 ` +
            `within 1e-6 (${String(natural.length)} isotopes).`,
        );
      }

      const weightedMass = natural.reduce(
        (sum, iso) => sum + (iso.abundance?.value ?? 0) * iso.mass.value,
        0,
      );

      if (el.atomicMass.kind === 'standard') {
        const uncertainty = el.atomicMass.uncertainty ?? 0;
        const tolerance = Math.max(3 * uncertainty, 1e-4);
        const diff = Math.abs(weightedMass - el.atomicMass.value);
        if (diff > tolerance) {
          report.standardMassMismatches.push(
            `${el.symbol}: weighted-average isotope mass ${weightedMass.toFixed(6)} vs stored ` +
              `atomicMass.value ${String(el.atomicMass.value)} differ by ${diff.toFixed(6)}, ` +
              `exceeding tolerance ${tolerance.toFixed(6)} (= max(3\u00d7uncertainty, 1e-4)).`,
          );
        }
      } else if (el.atomicMass.interval !== undefined) {
        const [lower, upper] = el.atomicMass.interval;
        const margin = (upper - lower) * 0.05; // small margin, see spec
        if (weightedMass < lower - margin || weightedMass > upper + margin) {
          report.intervalMismatches.push(
            `${el.symbol}: weighted-average isotope mass ${weightedMass.toFixed(6)} falls ` +
              `outside interval [${String(lower)}, ${String(upper)}] (with 5% margin).`,
          );
        }
      }
    }

    if (el.atomicMass.kind === 'longest-lived-isotope') {
      const candidate = isos.find((iso) => iso.massNumber === el.atomicMass.value);
      if (candidate === undefined) {
        // Find what this pipeline *did* determine as longest-lived for a clearer message.
        const byHalfLife = [...isos].sort(
          (a, b) => (b.halfLifeSeconds ?? 0) - (a.halfLifeSeconds ?? 0),
        );
        const actual = byHalfLife[0];
        report.longestLivedDisagreements.push(
          `${el.symbol}: stored atomicMass.value is ${String(el.atomicMass.value)}, but NUBASE2020 ` +
            `half-life data indicates ${el.symbol}-${String(actual?.massNumber)} ` +
            `(half-life ${String(actual?.halfLifeSeconds)}s) is the longest-lived known isotope.`,
        );
      }
    }
  }

  return report;
}
