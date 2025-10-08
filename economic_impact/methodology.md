 # Methodology and Assumptions

## Core Formulae
- Hours saved = baseline_hours × adoption_rate × hours_factor_shift
- Value added (₹) = hours_saved × wage_proxy × scale_factor
- Total benefit (multi-sector) = Σ_i share_i × value_i
- ROI = total_benefit / investment

## Scenarios
- Conservative / Base / Optimistic vary by: adoption rate, hours factor, wage proxy growth, sector shares.
- Set via SCENARIOS in productivity_calculator.py; override via CLI for local data.

## Data Inputs (replace with local/state data when available)
- Baselines: headcount, hours, wages by sector
- Adoption: AFL-1/2 certification counts → active usage ratio
- Quality uplift: % rework reduction, error-rate delta
- Public sector: pendency days, case volumes, unit costs

## Verification
- Pre/post KPIs from dashboard templates (COUNTIFS/SUMIFS)
- Randomized or phased pilots where feasible
- Publish sensitivity ranges (p10/median/p90) from Monte Carlo module

## Caveats
- Benefits compound with organizational change; lag effects likely in Y1/Y2
- Avoid double-counting across overlapping workflows
- Enforce CACF in high-stakes domains; report aggregates only
