# CAFF Integration Plan — Migrating the AFL Repo to the Expanded Framework

## Purpose  
This document charts the roadmap for transforming the existing **AFL (0 → 3)** repository into the enhanced **CAFF framework** (Tier-1 → Tier-6 or your defined tier structure). It provides mapping, folder changes, migration steps, versioning guidance, and stakeholder communication strategies.  

---

## 1. Tier Structure & Mapping

### Proposed Tier Definitions  

| Tier | Name / Focus | Core Competencies / Outcomes |
|---|----------------|--------------------------------|
| AFL-0 | Awareness / Literacy | Global adoption awareness, media literacy, ethics basics |
| AFL-1 | Usage / Application | Prompting, tool usage, multilingual & multimodal use |
| AFL-2 | Validation / Critical Use | Bias detection, source validation, multi-turn workflows |
| AFL-3 | Orchestration / Strategy | Workflow design, deployment planning, optimization |
| AFL-4 | Policy / Leadership | Policy simulation, organizational AI adoption, training design |
| AFLs-5 | Thought Leadership / Research | Curriculum design, novel model design, advancing the frontier |

### Mapping from Old AFL → CAFF

| Existing AFL Level | New CAFF Tier(s) | Notes / Migration Strategy |
|---------------------|--------------------|------------------------------|
| AFL-0 | AFL-0 | Expand awareness modules; reuse existing AFL-0 content as starting point |
| AFL-1 | AFL-1 | Migrate non-work applications, prompting, validation tasks |
| AFL-2 | AFL-2 | Move bias detection, workflow validation, public sector modules |
| AFL-3 | AFL-3 & AFL-4 | Split orchestration + strategy / policy responsibilities |
| (New) | AFL-5 | Create fresh modules for research, curriculum creators, next frontier |

> **Note:** During transition, old AFL files can remain with a header `deprecated: true` or “migrated to AFL-X”.

---

## 2. Folder & Repository Structure Changes

Here’s a recommended folder layout and renaming plan:

