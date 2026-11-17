# Raw isotope data sources

This directory holds unmodified (or minimally re-saved) primary-source data
files used by `scripts/build-isotopes/` to generate `src/isotopes/data.ts`.
Do not hand-edit these files; re-download if the upstream source changes.

## `nist_isotopic_compositions.html`

- **URL**: https://physics.nist.gov/cgi-bin/Compositions/stand_alone.pl?ele=&ascii=ascii2&isotype=some
  ("Most common isotopes", linearized ASCII output, all elements)
- **Retrieved**: 2026-11-17
- **Citation**: Isotope masses and "most common isotope" selection from the
  AME2020 atomic mass evaluation (M. Wang, W.J. Huang, F.G. Kondev, G. Audi,
  S. Naimi, "The AME 2020 atomic mass evaluation", Chinese Phys. C 45,
  030003 (2021)); isotopic abundances from M. Berglund and M.E. Wieser,
  "Isotopic compositions of the elements 2009 (IUPAC Technical Report)",
  Pure Appl. Chem. 83, 397-410 (2011), as compiled by NIST (J.S. Coursey,
  D.J. Schwab, J.J. Tsai, R.A. Dragoset, NIST Physical Measurement
  Laboratory).
- **License/terms**: Public domain (US government work, NIST). The
  compilation page itself states it "does not represent a critical
  evaluation by the NIST Physical Measurement Laboratory" — i.e. NIST is
  republishing the AME2020/IUPAC values, not independently certifying them.
- **Used for**: isotope mass (`Relative Atomic Mass`) and natural abundance
  (`Isotopic Composition`) for every isotope with a non-blank abundance
  value (the "natural isotope" scope for this library).

## `nubase2020.txt`

- **URL**: https://amdc.impcas.ac.cn/masstables/Ame2020/nubase_4.mas20
  (IMPCAS mirror of the Atomic Mass Data Center; the canonical AMDC site,
  www-nds.iaea.org, returned HTTP 403 when fetched directly)
- **Retrieved**: 2026-11-17
- **Citation**: F.G. Kondev, M. Wang, W.J. Huang, S. Naimi, and G. Audi,
  "The NUBASE2020 evaluation of nuclear physics properties", Chinese
  Phys. C 45, 030001 (2021).
- **License/terms**: TODO(maintainer) — the AMDC page states only "Any
  work that will use these files should make reference to the original
  papers listed above, and not to the electronic files." This is a
  citation requirement, not an explicit redistribution license; no
  public-domain or open-license statement was found. Please verify terms
  directly with AMDC/IOP Publishing before redistributing `nubase2020.txt`
  itself (as opposed to the derived, cited data in `src/isotopes/data.ts`).
- **Used for**: half-life, decay modes, ground-state mass excess (used as
  a secondary mass cross-check), and — for the 34 elements with no natural
  isotope — determining the longest-lived known isotope by comparing
  half-lives across every ground-state isotope of that element.
