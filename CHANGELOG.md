
- Existing modules move into `/curriculum/afl/` rather than root `curriculum/`.  
- Toolkits become **paths/specializations** rather than general utilities.  
- Assessment splits per-tier so each tier has its own rubrics and tools.  
- Compliance folder is expanded to host CACF + samples + checklist templates.  
- Circulars include migration announcements and version updates.

---

## 3. Migration Steps & Timeline

### Phase 1: Planning & Bootstrapping (Month 0–1)  
- Add `caff_integration_plan.md` to docs.  
- Update README to reflect new tier framework, with mapping table old → new.  
- Create placeholder files in new folder structure (empty tiers, toolkit paths, checklists).  
- Branch off: `feature/caff-migration`.

### Phase 2: Content Migration (Month 1–3)  
- Migrate AFL-0 content → `curriculum/tiers/tier-1_awareness.md`.  
- Migrate AFL-1, AFL-2, etc. into corresponding tiers.  
- Refactor cross-links in modules to use new paths.  
- Insert deprecation headers in old AFL files (with pointers to new files).  

### Phase 3: Assessment & Compliance Overhaul (Month 2–4)  
- Create new rubrics and tools files per tier under `/assessment/tiers/`.  
- Replace or enhance `/compliance/cacf.md` with enriched version (with research protocols).  
- Add checklist samples in `/compliance/sample_checklists/`.  
- Link compliance into curriculum tiers.  

### Phase 4: Toolkit / Paths Integration (Month 3–5)  
- Move sector-specific toolkits into specialization paths under `/toolkits/paths/`.  
- Link paths from curriculum modules (tiers) — e.g. Tier-3 “Validation in Health Path”.  
- Add new toolkits for modules unique to your research.

### Phase 5: Circulars, Changelog, Communication (Month 4–5)  
- Add `caff_migration.md` in `/circulars/` describing changes and migration guidance for users.  
- Update `CHANGELOG.md` with deprecations, additions, breaking changes.  
- Update contributing guides to reflect tiered contributions.  
- Tag and release new major version (e.g. `v2.0-caff`).

### Phase 6: Stabilization & Deprecation (Month 6+)  
- Freeze old AFL content after backup.  
- Fully deprecate old files by end of year.  
- Perform audits to ensure all cross-links are correct.  
- Collect feedback and refine.

---

## 4. Cross-Linking & Navigation

- In each new tier module, include front-matter:

  ```yaml
  tier: 3
  replaces: AFL-2
  deprecated: false
