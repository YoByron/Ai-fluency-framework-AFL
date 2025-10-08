 # AFL-2 Assessment Templates
 
 ## Integration Project
 - Define process, baseline metrics, target KPIs
 - Implement toolchain (LLM + data + automation)
 - CACF audit: equality ≥0.95, bias ≤0.05, explainability ≥0.80
 - Report: metrics table; mitigation actions
 
 ## Peer Review Form
 - Clarity, robustness, compliance, impact (score 1–5)

## Samples and Tools
- Example projects: see samples/*_integration_project.md
- Economic ROI: python economic_impact/productivity_calculator.py --scenario base --years 5 --crores
- Sensitivity: python tools/sensitivity-analysis/monte_carlo.py
 - CACF checks (demo):
   - Bash: sh tools/compliance-checker/run_examples.sh
   - PowerShell: tools\compliance-checker\run_examples.ps1
   - Or pipe your project payloads into checker scripts as in tools/compliance-checker/README.md
