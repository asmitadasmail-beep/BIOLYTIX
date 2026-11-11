# Drug–Disease Interaction Analysis & Biological Explanation System (BioDDI)

An intelligent computational system for biomedical drug–disease interaction analysis, biological pathway explanation, and 3D molecular docking visualization.

---

## 1. Project Overview

BioDDI is an educational and computational decision-support platform combining biomedical knowledge, pharmacological parameters, deterministic rule-based analysis, systems biology pathway visualization, and interactive 3D molecular structure inspection.

### Primary Purpose
To assist students, researchers, and pharmacologists in understanding:
- How pre-existing diseases alter drug pharmacokinetics and pharmacodynamics.
- The 6-step biological cascade linking normal physiology to drug-induced organ toxicity.
- How small-molecule therapeutics interact with biological macromolecular targets at atomic resolution.

---

## 2. Core Architectural Components

### A. Deterministic Rule Engine
- Evaluates drug–disease pairs against 9 clinical and pharmacological categories:
  1. Renal safety concerns
  2. Hepatic safety concerns
  3. Metabolic interactions
  4. Pharmacodynamic interactions
  5. Altered drug absorption
  6. Altered drug distribution
  7. Altered drug metabolism
  8. Altered drug excretion
  9. Other documented contraindications or precautions
- Clear evidence-supported risk stratification: **Contraindicated**, **Severe / High Risk**, **Moderate Precaution**, and **No Interaction Documented**.

### B. 6-Part Biological Explanation Engine
Every interaction record provides a structured explanation:
1. Normal biological function
2. Drug mechanism of action
3. Disease-related physiological changes
4. Molecular or cellular mechanism
5. Resulting pharmacological effect
6. Potential safety implications

### C. 3D Molecular Explorer & Computational Docking (3Dmol.js)
- Renders experimental crystallographic protein–ligand complexes (e.g. Ibuprofen/COX-2 `1CX2`, Lisinopril/ACE `1O86`, Atorvastatin/HMG-CoA Reductase `1HWK`, Warfarin/CYP2C9 `1OG5`, Propranolol/ADRB2 `2RH1`, Digoxin/Na+-K+ ATPase `4RET`, Metformin/Complex I `5X0G`).
- Simple View vs. Advanced View modes.
- Guided Exploration mode: 4-step interactive walkthrough with dynamic camera targeting.
- Molecular Information Cards: "What is happening?" and "Why does it matter?" for binding residues and hydrogen bonds.
- AutoDock Vina background simulation runner with parameter space definition, progress tracking, and clustered poses.

### D. Biological Pathway Explorer
Interactive biochemical flowcharts tracing cellular perturbations and physiological outcomes with clickable node drawers.

### E. Analytics Dashboard
Live database metrics, category breakdowns, severity distributions, and organ system charts generated dynamically from actual records.

---

## 3. Technology Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons, 3Dmol.js WebGL viewer.
- **Backend:** Node.js, Express, tsx.
- **Biomedical Data:** RCSB PDB, FDA DailyMed Labeling, NIH PubChem, International Guidelines (KDIGO, ADA, GINA, EASL).

---

## 4. Setup and Execution Instructions

### Development Server
```bash
npm install
npm run dev
```
The server will start on `http://localhost:3000`.

### Production Build
```bash
npm run build
npm start
```

---

## 5. Ethical & Medical Disclaimer

This application is designed solely for biomedical informatics research and educational instruction. It is **NOT** a medical diagnostic or clinical prescribing tool. Healthcare decisions must always be made by qualified medical professionals.
