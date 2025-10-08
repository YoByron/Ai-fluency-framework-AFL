 # Economic Impact Toolkit

Estimate and explain how mass AI fluency translates to productivity, GDP, employment, and fiscal effects.

Components:
- Calculator: productivity_calculator.py (scenarios, ROI, sector weights)
- Sensitivity: ../tools/sensitivity-analysis/monte_carlo.py (p10/median/p90)
- Macro view: ./macro_impact.md (channels to GDP/employment/fiscal)
- Methodology: ./methodology.md (assumptions, formulas, data inputs)
- State playbook: ./state_playbook.md (how states compute and report impact)

Quick run:
- Base: `python economic_impact/productivity_calculator.py --scenario base --years 5 --investment-crores 8000 --crores`
- Sensitivity: `python tools/sensitivity-analysis/monte_carlo.py`

Use these docs with sector dashboards and assessment templates to ground ROI claims in evidence.
