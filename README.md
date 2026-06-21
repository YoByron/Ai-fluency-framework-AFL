# AI Fluency Framework (AFL)

An open curriculum and assessment standard for teaching practical AI literacy, organised as six progressive competency levels (AFL‑0 → AFL‑5). It pairs each level with learning objectives, assessment rubrics, sector‑specific tracks, and a **Constitutional AI Compliance Framework (CACF)** that builds responsible‑use principles into the curriculum itself.

> **What this is:** A content framework — curricula, assessments, rubrics, sample exercises, and policy guidance — that institutions, trainers, and self‑learners can adopt or adapt.
>
> **What this isn't:** A software platform or product. There is no app, backend, or login. The only executable file is a small Python ROI calculator. See [Scope & status](#-scope--status).

> **Status:** Early‑stage draft. The framework was authored with substantial AI assistance (see [diligence note](docs/diligence-statement.md)) and has **not** yet been classroom‑tested or expert‑reviewed. Treat figures and claims as illustrative, not validated. Review, corrections, and field feedback are very welcome.

---

## The competency ladder

| Level | Theme | Focus |
|-------|-------|-------|
| **AFL‑0** | AI Awareness | Recognising AI in daily life, spotting deepfakes, safe basic use |
| **AFL‑1** | AI Interaction | Effective prompting and everyday productivity |
| **AFL‑2** | AI Integration | Validating AI output and integrating it into real workflows |
| **AFL‑3** | AI Orchestration | Coordinating people, tools, and multi‑step AI workflows |
| **AFL‑4** | AI Strategy & Leadership | Organisational adoption and policy design |
| **AFL‑5** | AI Thought Leadership | Research, standards, and ecosystem contribution |

Read each level: [AFL‑0](curriculum/afl0/afl-0.md) · [AFL‑1](curriculum/afl1/afl-1.md) · [AFL‑2](curriculum/afl2/afl-2.md) · [AFL‑3](curriculum/afl3/afl-3.md) · [AFL‑4](curriculum/afl4/afl-4.md) · [AFL‑5](curriculum/afl5/afl-5.md)

---

## What's inside

- **Curriculum** for all six levels, plus sector tracks for agriculture, education, healthcare, MSME, financial services, and governance.
- **Assessments** — rubrics, templates, and sample tasks under [assessment/afl/](assessment/afl/).
- **CACF** — a responsible‑use compliance framework: [overview](compliance/cacf_compliance/CACF_Framework.md), [foundations](compliance/cacf_foundations/AFL-1_CACF_Guide.md).
- **Toolkits** for learners, trainers, organisations, and policymakers under [toolkits/](toolkits/).
- **Supporting material** — case studies, implementation notes, and policy guidance under [docs/](docs/) and [case_studies/](case_studies/).
- **One tool** — an economic productivity / ROI calculator (see below).

---

## Getting started

**Learners** — try the [self‑assessment](toolkits/learners/self_assessment.md), then read the level that matches you (start at [AFL‑0](curriculum/afl0/afl-0.md)) and a [sample assessment](assessment/afl/afl1/samples/prompt_lab.md).

**Trainers & educators** — see the [train‑the‑trainer guide](toolkits/training/train-the-trainer.md) and the [rubrics](assessment/afl/afl0/rubric.md), then adapt to your setting.

**Organisations** — pick a [sector track](curriculum/sectors/) and browse [templates](toolkits/shared_resources/templates/).

**Policymakers** — start with the [policy brief](docs/governance/policy_brief.md) and the [policy action checklist](toolkits/policymakers/policy_action_checklist.md).

---

## Documentation map

**Framework core** — [overview](framework/README.md) · [design principles](framework/afl/overview.md) · [AFL↔CAFF integration](framework/integration-matrix.md)

**Sectors** — [agriculture](curriculum/sectors/agriculture/overview.md) · [education](curriculum/sectors/education/overview.md) · [healthcare](curriculum/sectors/healthcare/overview.md) · [MSME](curriculum/sectors/msme/overview.md) · [financial services](curriculum/sectors/financial-services/overview.md) · [governance](curriculum/sectors/governance/overview.md)

**Compliance** — [CACF framework](compliance/cacf_compliance/CACF_Framework.md) · [validation plan](assessment/afl/common/validation_plan.md)

**Vision & planning** — [vision](docs/vision.md) · [rollout timeline](docs/rollout_timeline.md) · [implementation roadmap](IMPLEMENTATION_ROADMAP.md) · [pilots](implementation/pilots/)

---

## The one tool: ROI calculator

A standalone Python script that models productivity gains and payback for a hypothetical training deployment. It's an illustrative model, not a measurement of real outcomes.

```bash
python economic_impact/productivity_calculator.py \
  --scenario base --years 5 --investment-crores 8000 --crores
```

See [economic_impact/README.md](economic_impact/README.md) for options.

---

## ⚠️ Scope & status

This repository is **content, not software**:

- ✅ Curriculum, assessments, rubrics, and policy guidance for AFL‑0 → AFL‑5
- ✅ One runnable Python tool (the ROI calculator above)
- ❌ No platform, backend, ML models, authentication, or app

Earlier versions shipped half‑built demo code (a non‑building React scaffold, a Streamlit demo, and mock "ML" compliance tools). These were removed so the repo honestly reflects what it contains. Design notes for a possible future platform are kept under [docs/future-platform/](docs/future-platform/), and the audit that prompted the cleanup is in [docs/audit/](docs/audit/).

To put the framework into practice, organisations should use the curriculum and rubrics with an existing LMS or training programme rather than expecting software here.

---

## Contributing

This is a draft that benefits most from domain expertise and real‑world testing. Especially useful:

1. **Review & corrections** — flag inaccurate claims, weak content, or unsupported figures.
2. **Curriculum** — sharper learning objectives, exercises, and examples.
3. **Assessment** — better rubrics and validation methods.
4. **Sector depth** — improve the agriculture, healthcare, MSME, education, finance, and governance tracks.
5. **Translation** — regional‑language versions.
6. **Field feedback** — what worked (or didn't) with actual learners.

To contribute: read [CONTRIBUTING.md](CONTRIBUTING.md), open an issue to discuss, or send a pull request.

---

## Contact

- **Repository:** https://github.com/YoByron/Ai-fluency-framework-AFL
- **Questions, ideas, corrections:** open a [GitHub issue](https://github.com/YoByron/Ai-fluency-framework-AFL/issues)

---

## License

[MIT](LICENSE).
