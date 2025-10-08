# AI Fluency Framework (AFL)

Operational toolkit to build mass AI fluency for Viksit Bharat 2047. Focus: build AI‑fluent people and workflows, with Constitutional AI Compliance (CACF) safeguards.

## Goals
- 500M AFL‑1 citizens by 2030; measurable productivity gains across sectors
- CACF‑aligned deployment (Articles 14/15/21/21A) with audits and grievance paths

## Quick Navigation
- Framework overview: framework/afl/overview.md; AFL↔CAFF: framework/integration-matrix.md
- Curricula: curriculum/{afl1,afl2,afl3,afl4,afl5}/afl-*.md; sectors: curriculum/sectors/*
- Assessments: assessment/afl/afl{0..5}/{rubric.md,templates.md,samples/}
- CACF: compliance/cacf_compliance/{overview.md,implementation_guide.md}
- Toolkits: toolkits/{training,admin,organizations,policymakers,learners,shared_resources}
- Economic impact: economic_impact/{README.md,productivity_calculator.py}
- Implementation: implementation/{pilots,infrastructure}
- Policy brief: docs/governance/policy_brief.md (root: POLICY_BRIEF.md)
- Case studies: case_studies/*/*

## Getting Started
- Learners: toolkits/learners/self_assessment.md → assessment/afl/afl1/samples/prompt_lab.md
- Trainers: toolkits/training/train-the-trainer.md; lesson_plans/; slide_decks/
- Admins: toolkits/admin/program_management.md; shared_resources/templates/*.csv
- Organizations: toolkits/organizations/{corporate_implementation.md,government_deployment.md}
- Policymakers: docs/governance/policy_brief.md; toolkits/policymakers/policy_action_checklist.md

## Run Useful Tools
- ROI calculator: python economic_impact/productivity_calculator.py --scenario base --years 5 --investment-crores 8000 --crores
- Sensitivity: python tools/sensitivity-analysis/monte_carlo.py
- CACF demo checks: sh tools/compliance-checker/run_examples.sh  (PowerShell: tools\compliance-checker\run_examples.ps1)

## Contributing
See CONTRIBUTING.md. Focus areas: curricula, assessments, CACF, sector modules, pilots, translations, dashboards.

License: MIT (see LICENSE).
