# **HISTOPATH LAB — OPTIMIZED MASTER PROMPT FOR APP GENERATION**  
A precision-built, domain-specific master prompt for generating a **mobile-first, offline-capable, dark-mode educational app** that teaches *all of Histopathology* through an integrated **Morphology → Mechanism → Molecular → Lab → Clinical** systems map, with zero conceptual drift.

---

# **MASTER PROMPT — Histopath Lab Educational App Generator (SPECIALIZED VERSION)**

## **Role & Mission**
You are a cross-functional team (PM + Staff Engineer + Senior Instructional Designer + Pathology/Histology Subject Matter Expert + Molecular Diagnostics Expert + UX Writer + QA).  
Your mission: design an **interactive, responsive educational web app** that teaches:

**Histopath Lab: The Morphology–Mechanism Map**  
—A complete system linking microscopic patterns → underlying molecular pathways → laboratory correlations → clinical behavior and outcomes.  
The app must:

- Serve **all learner levels:** preclinical → clinical → residency → fellowship → attending  
- Support **all contexts:** exam prep, diagnostic reasoning, morphology practice, CP-lab integration, molecular interpretation  
- Maintain **scientific consistency** across histology, pathology, molecular biology, and lab medicine  
- Present **foundations first (normal histology → abnormal)** similar to *Pathoma-style clarity*, but deeper and fully integrated

Your output must be **rigorous, cohesive, and hallucination-resistant**, avoiding contradictory logic between modules or across disease processes.

---

## **Inputs (Fill These)**
- **Primary Topic(s):**  
  Always centered on **Histopathology & Mechanism Integration**, including:  
  - Normal histology foundations  
  - Inflammation spectrum (acute → chronic → granulomatous)  
  - Cell injury mechanisms (necrosis types, apoptosis, autophagy)  
  - Neoplasia (grading vs staging, morphology, immunohistochemistry, molecular diagnostics)  
  - Tissue repair & wound healing  
  - Molecular pathways (e.g., p53, KRAS, BCL2, RAS–MAPK, mismatch repair)  
  - CP correlation (lab findings → morphology → mechanism)  
- **Target Learner Levels:** {{LEVELS}}  
  - e.g., “MS1–MS4; pathology residents; molecular pathology fellows; clinical pathology attendings”
- **Learner Context:** {{CONTEXT}}  
  - e.g., “Exam prep; slide interpretation; tumor board prep; mechanism-based review; IHC/molecular correlation”
- **Learning Outcomes (SMART + Bloom):** {{LEARNING_OBJECTIVES}}  
  - e.g., “Identify classic histologic patterns; map changes to molecular mechanisms; choose appropriate immunostains; interpret molecular panels; correlate with lab findings”
- **Constraints/Preferences:**  
  Always include:  
  - *Mobile-first; dark mode; no login; offline-ready; consistent morphology–mechanism logic*  
- **References/Standards:** {{REFERENCES}}  
  - e.g., “Robbins & Cotran; Pathoma; WHO Tumor Classification; CAP/ASCP guidelines; NCCN/AMP molecular standards”
- **Brand/Voice:** {{VOICE_TONE}}  
  - e.g., “Clear explanations like Pathoma, but deep like Robbins; friendly, visual-first, mechanism-driven”
- **Regionalization/Localization:** {{LOCALE}}

---

# **Required Deliverables (Produce All)**

---

## **1. Executive Summary**
- State the core problem: learners see morphology, molecular data, and lab results as separate silos.  
- Explain **Histopath Lab** as a unified Morphology–Mechanism Map.  
- Provide 2–3 app name options + concise value propositions.

---

## **2. Learner Personas & Use Cases**
- Preclinical student learning normal → abnormal transitions  
- Clinical student linking biopsy findings with disease mechanisms  
- Pathology resident practicing pattern recognition & IHC panels  
- Molecular fellow integrating mutations with tumor phenotypes  
- Use cases: exam prep, tumor board prep, differential building, mechanism mapping, molecular interpretation.

---

## **3. Curriculum Map & Knowledge Graph**
Everything must connect **morphology ↔ mechanism ↔ molecular ↔ lab ↔ clinical**.

Include:

### **Prerequisites**
- Cell structure  
- Basic molecular pathways  
- Normal tissues (all organ systems)  
- Immune response fundamentals  
- Mechanisms of cell injury

### **Modules**
1. **Normal Histology Foundations**  
2. **Cell Injury & Death** (reversible injury, necrosis types, apoptosis, autophagy)  
3. **Inflammation Spectrum** (acute, chronic, granulomatous)  
4. **Neoplasia**  
   - benign vs malignant framework  
   - grading vs staging  
   - morphology patterns  
   - IHC panels  
   - molecular diagnostics workflow  
5. **Tissue Repair & Wound Healing**  
6. **Molecular Pathways** (p53, KRAS, BRAF, EGFR, mismatch repair, MYC)  
7. **Mechanism–Morphology–Lab Integration Cases**

For each: lessons, micro-concepts, Bloom tags, prerequisite chains.

---

## **4. Interactives (Histopath Lab–Specific)**  
All interactives must be **morphology → mechanism → molecular** focused.

### **Examples**
- **Morphology Explorer**  
  - Slide-style schematic views with toggles: “normal vs pathological vs mechanism overlay”
- **Inflammation Simulator**  
  - Adjust cytokine profiles → see resulting histologic features (PMNs, macrophages, granulomas)
- **Cell Injury Outcome Model**  
  - Inputs: ATP depletion, ROS, Ca²⁺ influx → outputs: reversible injury → necrosis type → apoptosis triggers
- **Neoplasia Panel Builder**  
  - Choose IHC stains → see which diagnoses rise/fall  
  - Add molecular markers → refine classification
- **Molecular Pathway Visualizer**  
  - Mutations → pathway activation/deactivation → morphology & clinical behavior  
- **Repair & Fibrosis Pathway Demo**

For **each interactive**, specify:
- purpose  
- inputs  
- outputs  
- visuals  
- preset cases  
- guardrails (no biologically impossible outcomes)

---

## **5. Assessment & Mastery**
Include:
- Slide recognition MCQs  
- “Match the mechanism → morphological outcome”  
- IHC panel interpretation  
- Molecular report interpretation  
- Clinical correlation cases  
- Drag-and-drop pathway mapping  
- Short free-text reasoning

Produce **10–20 high-quality items** with rationales.

---

## **6. Clinical Reasoning Framework**
Explain step-by-step:
1. **Pattern recognition**  
2. **Mechanistic hypothesis**  
3. **Molecular pathway involvement**  
4. **IHC panel selection logic**  
5. **Molecular test selection**  
6. **Integration with lab findings**  
7. **Clinical implications (prognosis, therapy)**

Include:
- “Must-not-miss” findings (e.g., dysplasia, necrotizing granulomas, high-grade features)  
- Classic IHC pitfalls  
- Factitious or misleading patterns  
- Mechanism-based mnemonics

---

## **7. Accessibility & Safety**
- WCAG 2.2 AA  
- De-identified images/data only  
- No patient-specific diagnosis guidance  
- Consistency checks across morphology/biology modules

---

## **8. Tech Architecture (Mobile-First, Offline)**
- React/TypeScript  
- Tailwind + shadcn/ui  
- Service Worker + IndexedDB for offline slide libraries  
- Rendering options for pseudo-slides (SVG/Canvas)  
- State management: Zustand/Redux  
- Structured data for mechanisms, stains, pathways

---

## **9. Data Schemas (JSON)**
Schemas for:
- normal tissues  
- lesion types  
- mechanisms  
- molecular markers  
- IHC panels  
- integrated cases  
- glossary  
- pathways

---

## **10. Screen Specs & Text Wireframes**
Screens:
- Home  
- Normal Histology  
- Module Overview  
- Lesson  
- Morphology Explorer  
- IHC & Molecular Simulator  
- Mechanism Map  
- Case Engine  
- Assessments  
- Glossary  
- Settings  

Provide textual wireframes for each.

---

## **11. Copy & Content Kit**
Include:
- Microcopy  
- Glossary entries (all pathology and molecular terms)  
- Diagram labels  
- “Explain like Pathoma” intros to major concepts  
- Two full example lessons + one complete integrated case

---

## **12. Analytics & A/B Plan**
Only UI-level tests, such as:
- Slide zoom vs slider  
- Tap-to-compare vs swipe-to-compare  
- Panel-builder layout variations  
**Never include statistical hypothesis testing content.**

---

## **13. QA Checklist**
- Morphology accuracy  
- Mechanism–morphology consistency  
- Molecular correlation safety  
- IHC logic validation  
- Reference alignment with WHO/Robbins  
- No contradictory statements across modules

---

## **14. Roadmap**
Prototype → Pilot → Expansion → Molecular Deep-Dive → Personalization  
Include timeline, risks, acceptance criteria.

---

# **Style & Rigor Requirements**
- Pathoma-like clarity  
- Robbins-like accuracy  
- Molecular diagnostics precision  
- Avoid any unrelated topics  
- Use images, diagrams, and mechanisms consistently  
- State assumptions clearly  
- Avoid contradictions between pathways, stains, and morphology

---

# **Acceptance Criteria**
- Learner can recognize morphology and map it to mechanism and molecular drivers  
- Interactives always reflect mechanistic truth  
- No module contradicts another  
- All content builds toward a unified Morphology–Mechanism Map

---

# **Now Generate**
Using the inputs above, produce the complete deliverables in the required order.  
If any inputs are missing, make medically sound assumptions and label them as defaults.
