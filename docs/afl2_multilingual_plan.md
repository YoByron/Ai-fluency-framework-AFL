# AFL-2 Multilingual Support Implementation Plan
## Enabling 20 Million Process Innovators Across India

**Version:** 1.0  
**Target:** 22 Scheduled Languages of India  
**Phase 1:** 11 Priority Languages  
**Timeline:** 9 months (Months 7-9 for Phase 1)

---

## 1. Executive Summary

To achieve the goal of creating 20 million Process Innovators by 2035, AFL-2 content must be accessible in all major Indian languages. This document outlines the strategy for translating and culturally adapting the 110-hour AFL-2 curriculum (80 core + 30 sector) across 22 languages.

**Key Principle:** Translation is not enough. Content must be **culturally adapted** with region-specific examples, organizational contexts, and sector nuances.

---

## 2. Language Prioritization

### Phase 1: 11 Priority Languages (Months 7-9)
Based on population, digital literacy, and economic activity:

1. **Hindi** (528M speakers) - National language, North India
2. **Bengali** (97M) - West Bengal, financial services hub
3. **Telugu** (82M) - Andhra Pradesh, Telangana, IT sector
4. **Marathi** (83M) - Maharashtra, manufacturing & finance
5. **Tamil** (69M) - Tamil Nadu, manufacturing & healthcare
6. **Gujarati** (56M) - Gujarat, entrepreneurship & manufacturing
7. **Kannada** (44M) - Karnataka, IT & agriculture
8. **Malayalam** (35M) - Kerala, healthcare & education
9. **Odia** (35M) - Odisha, governance & agriculture
10. **Punjabi** (33M) - Punjab, agriculture & SMEs
11. **English** (Baseline, already complete)

### Phase 2: Remaining 11 Languages (Months 10-15)
12. Urdu, 13. Assamese, 14. Maithili, 15. Santali, 16. Kashmiri, 17. Nepali, 18. Sindhi, 19. Konkani, 20. Dogri, 21. Manipuri, 22. Bodo

---

## 3. Content Inventory for Translation

### 3.1 Core Curriculum (80 hours)
- **Module 1: Workflow Optimization** (20 hours)
  - Text content: ~15,000 words
  - Video scripts: 10 videos × 500 words = 5,000 words
  - Exercises: 40 activities × 200 words = 8,000 words
  - **Total:** ~28,000 words per language

- **Module 2: CACF Compliance** (20 hours)
  - Similar structure: ~28,000 words

- **Module 3: Training & Capacity Building** (20 hours)
  - Similar structure: ~28,000 words

- **Module 4: Innovation & Impact** (20 hours)
  - Similar structure: ~28,000 words

**Core Total:** ~112,000 words per language

### 3.2 Sector Pathways (30 hours each × 6 sectors)
- Each sector: ~42,000 words
- **Sector Total:** ~42,000 words per language (learner chooses 1)

### 3.3 Platform & Coach
- UI Elements: ~2,000 strings
- AI Coach System Prompts: ~5,000 words
- Help Documentation: ~10,000 words

**Grand Total per Language:** ~171,000 words

---

## 4. Translation Methodology

### 4.1 Hybrid Approach: AI + Human

**Step 1: AI-Assisted Translation (Week 1-2)**
- Use specialized translation models (IndicTrans2, Google Translate API).
- Translate all text content in bulk.
- **Output:** First draft in target language.

**Step 2: Subject Matter Expert Review (Week 3-4)**
- Native speakers with domain expertise (e.g., Tamil-speaking healthcare manager) review for:
  - Accuracy of technical terms
  - Cultural appropriateness
  - Sector-specific terminology

**Step 3: Pedagogical Review (Week 5)**
- Education specialists ensure learning objectives are preserved.
- Verify that exercises and assessments translate effectively.

**Step 4: User Testing (Week 6)**
- Pilot with 10-20 native speakers from the target region.
- Gather feedback on clarity and relevance.

**Step 5: Final Refinement (Week 7)**
- Incorporate feedback and publish.

**Timeline per Language:** 7 weeks (with parallel processing, 11 languages in ~9 weeks)

---

## 5. Cultural Adaptation Strategy

Translation alone is insufficient. Content must be **localized** to regional contexts.

### 5.1 Sector-Specific Examples

**Example: Healthcare Module**

| English Version | Tamil (Tamil Nadu) Adaptation | Hindi (Uttar Pradesh) Adaptation |
|----------------|-------------------------------|----------------------------------|
| "Optimize patient discharge workflow at a 200-bed hospital" | "Chennai Apollo-style multi-specialty hospital with 200 beds" | "District hospital in Lucknow with 200 beds serving rural patients" |
| AI Tool: "Use GPT-4 for discharge summaries" | "Use Tamil-capable LLM for bilingual (Tamil-English) summaries" | "Use Hindi-capable LLM, account for low digital literacy of patients" |

### 5.2 Organizational Context

- **Maharashtra (Marathi):** Focus on large manufacturing firms (Tata, Mahindra).
- **Kerala (Malayalam):** Emphasize cooperative societies and public sector.
- **Gujarat (Gujarati):** Highlight SMEs and family businesses.

### 5.3 Regulatory Nuances

- **State-Specific Laws:** E.g., Karnataka's Gig Workers Act for platform economy examples.
- **Regional CACF Concerns:** E.g., caste bias in loan algorithms more relevant in certain states.

---

## 6. Technical Implementation

### 6.1 Content Management System (CMS)
- **Platform:** Strapi or Contentful (headless CMS).
- **Structure:** Each content block tagged with language code (ISO 639-1).
- **Fallback:** If translation unavailable, show English with a note.

### 6.2 AI Coach Multilingual Support
- **LLM Selection:**
  - **Phase 1:** Use IndicBERT or Llama 3.2 Multilingual for Indian languages.
  - **Phase 2:** Fine-tune on sector-specific corpora (e.g., healthcare in Tamil).
- **Code-Switching:** Support mixed-language queries (common in India).
  - *"Mera workflow analysis kaise karu?"* (Hindi-English mix)

### 6.3 UI Localization
- **Framework:** i18next (React) for dynamic language switching.
- **RTL Support:** For Urdu (right-to-left script).
- **Font Support:** Ensure proper rendering of Devanagari, Tamil, Bengali scripts.

---

## 7. Quality Assurance

### 7.1 Translation Quality Metrics
- **Accuracy:** 95%+ semantic equivalence (measured via back-translation).
- **Fluency:** Native speaker rating of 4.5/5.
- **Cultural Fit:** 90%+ of regional examples recognized by target audience.

### 7.2 Continuous Improvement
- **Feedback Loop:** In-app "Report Translation Issue" button.
- **Community Contributions:** Allow certified AFL-2 graduates to suggest improvements.
- **Quarterly Reviews:** Update content based on user feedback.

---

## 8. Resource Requirements

### 8.1 Team Composition (Per Language)
- **1 Translation Lead:** Native speaker, bilingual, project management.
- **2 Subject Matter Experts:** One for core modules, one for sector pathways.
- **1 Pedagogical Reviewer:** Education specialist.
- **10-20 User Testers:** Diverse roles (manager, teacher, government officer).

### 8.2 Budget Estimate (Per Language)

| Item | Cost (₹) |
|------|---------|
| AI Translation Tools (API costs) | 50,000 |
| Translation Lead (7 weeks @ ₹1L/month) | 1,75,000 |
| SME Reviewers (2 × 4 weeks @ ₹75K/month) | 1,50,000 |
| Pedagogical Review | 50,000 |
| User Testing (20 participants @ ₹2K each) | 40,000 |
| Final Refinement & QA | 35,000 |
| **Total per Language** | **₹5,00,000** |

**Phase 1 (11 Languages):** ₹55,00,000 (₹55 Lakhs)  
**Phase 2 (11 Languages):** ₹55,00,000 (₹55 Lakhs)  
**Grand Total:** ₹1.1 Crores

---

## 9. Implementation Timeline

### Phase 1: 11 Priority Languages (Months 7-9)

**Month 7:**
- Weeks 1-2: AI translation for Hindi, Bengali, Telugu, Marathi
- Weeks 3-4: SME review (parallel for all 4)

**Month 8:**
- Weeks 1-2: AI translation for Tamil, Gujarati, Kannada, Malayalam
- Weeks 3-4: SME review + User testing for first 4 languages
- Week 5: Launch Hindi, Bengali, Telugu, Marathi

**Month 9:**
- Weeks 1-2: AI translation for Odia, Punjabi
- Weeks 3-4: SME review + User testing for next 4 languages
- Week 5: Launch Tamil, Gujarati, Kannada, Malayalam
- Week 6-7: Final review for Odia, Punjabi
- Week 8: Launch Odia, Punjabi

**Outcome:** 11 languages live by end of Month 9.

---

## 10. Success Metrics

1. **Coverage:** 90%+ of content available in all 11 Phase 1 languages.
2. **Quality:** 4.5/5 average rating for translation quality from native speakers.
3. **Adoption:** 60%+ of learners in non-English states choose their native language.
4. **Completion Rate:** No significant difference in course completion between English and regional languages.

---

## 11. Integration with AFL-2 Coach (Gap 8)

The AI Integration Coach must support multilingual interactions:
- **Input:** Accept queries in any of the 11 languages.
- **Output:** Generate workflow suggestions, training materials, and reports in the user's language.
- **Code-Switching:** Handle mixed-language conversations naturally.

**Example:**
- **User (in Tamil):** "எனது மருத்துவமனையின் வெளியேற்ற செயல்முறையை எவ்வாறு மேம்படுத்துவது?" (How to optimize my hospital's discharge process?)
- **Coach (in Tamil):** "முதலில், உங்கள் தற்போதைய செயல்முறையை வரைபடமாக்குவோம்..." (First, let's map your current process...)

---

**Document Type:** Implementation Plan  
**Created:** November 21, 2025  
**Status:** Framework Complete - Ready for Execution  
**Budget:** ₹1.1 Crores (22 languages)
