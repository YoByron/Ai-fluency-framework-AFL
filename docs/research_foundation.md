# Research Foundation — AFL Framework (enhanced summary)

This document maps the research paper's core claims into measurable artifacts and repo deliverables.

Executive summary:
- Strategic thesis: prioritize utilization (human-AI symbiosis) over model-only investments.
- Targets: 500M AFL-1 certified by 2030; staged rollout through pilots, champion states, and national scaling.
- Legal foundation: Constitutional AI Compliance Framework (CACF) anchored in Articles 14, 15, 21.

Key evidence & metrics (actionable):
- Pilot success thresholds (Phase 0): 70% pass rates for teacher AFL-2 candidates; 15% measured productivity improvement in targeted workflows.
- National KPI targets (automated): AFL certification counts; CACF compliance score >95%; Digital Inclusion Index with <5% variance.
- Economic assumptions are parameterized in economic_impact/productivity_calculator.py for reproducibility.

Mapping research to repo artifacts:
- AFL curricula → docs/appendix_curricula.md and afl*_*/ folders with deployable content.
- CACF → cacf_compliance/ with monitoring API spec and fairness check pipelines.
- Risk mitigation → risk_management/ playbooks and automated alerts described in docs/rollout_timeline.md.

Provenance:
- All claims reference the paper and primary sources (McKinsey, Stanford, WEF, OECD). Where estimates are used, the code and calculators expose parameters so stakeholders can run conservative/optimistic scenarios.

Short adoption playbook:
1. Run Phase 0 pilot in 3 districts using DIKSHA integration (see rollout timeline).
2. Instrument CACF monitoring for any government AI procurement during pilot.
3. Publish early economic measurement (time-motion baseline + post) and iterate.