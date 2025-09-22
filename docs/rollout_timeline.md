# Rollout timeline — operational milestones and guardrails

Phase 0 — Proof-of-concept (Months 0–6)
- Deliverables:
  - AFL-0 and AFL-1 core modules deployed on DIKSHA pilot channel.
  - CACF monitoring API instrumented for pilot systems.
  - Baseline time-motion studies completed for sample workflows.
- Success gates (to continue to Phase 1):
  - 70% pass rate for target learners
  - 15% measured productivity gain in at least 2 workflows
  - CACF compliance automated checks active with daily reporting

Phase 1 — Coalition of the willing (Months 7–18)
- Deliverables:
  - State-level curricula localization and 10,000 AFL-2 teacher certifications.
  - 100 validated use cases across sectors.
  - "AI-Ready State" certification rubric operational.
- Governance:
  - Monthly PMO reviews and public state dashboard.
  - Funding conditional on achieving Phase 0 gates.

Phase 2 — National scaling (Years 2–5)
- Deliverables:
  - Automated pipelines for certification issuance (blockchain-backed credential store optional).
  - Federated learning pilots (Bhashini+ nodes).
  - Nationwide CACF observability with RTI-accessible dashboards.
- KPI cadence:
  - Weekly automated certification tallies.
  - Quarterly independent evaluation reports.

Operational notes:
- Branching model: main ← afl1-dev ← afl2-dev ← afl3-dev; pilot changes in pilot-feedback branch and merged with validated metrics.
- CI/CD: Every PR touching CACF must run fairness and counterfactual bias tests. Merge policy: pass tests + approved governance reviewer.