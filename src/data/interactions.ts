/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DrugDiseaseInteraction } from '../types';

export const INTERACTIONS_DATABASE: DrugDiseaseInteraction[] = [
  {
    id: 'int-ibuprofen-ckd',
    drugId: 'drug-ibuprofen',
    diseaseId: 'dis-ckd',
    category: 'Renal safety concerns',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal / Kidneys',
    underlyingMechanism: 'Inhibition of cyclooxygenase-mediated vasodilatory prostaglandin synthesis in afferent arterioles, causing precipitous drop in glomerular filtration pressure.',
    documentedSafetyConcern: 'Precipitation of Acute on Chronic Renal Failure, rapid loss of residual renal function, life-threatening hyperkalemia, and sodium/water retention.',
    biologicalExplanation: {
      normalBiologicalFunction: 'In healthy kidneys, renal blood flow and glomerular filtration rate (GFR) are maintained by a balance of vasoactive mediators. Renal prostaglandins (primarily PGE2 and PGI2, synthesized by COX-1 and COX-2) dilate afferent arterioles to maintain glomerular hydrostatic pressure.',
      drugMechanismOfAction: 'Ibuprofen competitively and reversibly inhibits both COX-1 and COX-2 enzymes, stopping the conversion of arachidonic acid into PGH2 and downstream vasodilatory prostaglandins.',
      diseasePhysiologicalChanges: 'In Chronic Kidney Disease, baseline nephron loss leads to elevated systemic and local angiotensin II and endothelin levels. Surviving nephrons rely critically on compensatory, maximal synthesis of vasodilatory prostaglandins to counteract intense vasoconstrictor tone.',
      molecularCellularMechanism: 'When ibuprofen reaches the renal cortex and medulla, it occupies the COX-2 hydrophobic active channel, preventing arachidonic acid binding. This abruptly arrests prostaglandin E2 synthesis in vascular endothelial and macula densa cells.',
      resultingPharmacologicalEffect: 'Without prostaglandin-mediated afferent dilation, angiotensin II and norepinephrine constrict the afferent arteriole unopposed, slashing renal plasma flow and transcapillary glomerular hydrostatic pressure.',
      potentialSafetyImplications: 'Acute catastrophic drop in eGFR, worsening azotemia, dangerous hyperkalemia (due to reduced distal tubular flow), blunted diuretic responsiveness, and potential acceleration toward end-stage renal disease (ESRD).'
    },
    monitoringRecommendations: [
      'Avoid all systemic NSAIDs in patients with eGFR <30 mL/min/1.73m².',
      'If unavoidable in mild CKD, check baseline serum creatinine, eGFR, and potassium within 48-72 hours of initiation.',
      'Educate patients to avoid over-the-counter ibuprofen and naproxen products.'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Ibuprofen Oral Tablets',
        sourceType: 'FDA Label',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0a20465a-0639-4d69-a1b4-20a2e58e388f',
        citation: 'U.S. Food and Drug Administration. Ibuprofen package insert: Warnings - Renal Effects.',
        accessDate: '2026-01-15'
      },
      {
        title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
        sourceType: 'Clinical Guideline',
        url: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
        citation: 'Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. Kidney Int. 2024; 105(4S):S117-S314.',
        accessDate: '2026-02-10'
      },
      {
        title: 'Crystal structure of COX-2 complexed with ibuprofen',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/1CX2',
        citation: 'Kurumbail RG, et al. Structural basis for selective inhibition of cyclooxygenase-2. Nature. 1996; 384:644-648.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-ibuprofen-aki',
    drugId: 'drug-ibuprofen',
    diseaseId: 'dis-aki',
    category: 'Renal safety concerns',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal / Kidneys',
    underlyingMechanism: 'Afferent arteriolar vasoconstriction aggravating acute tubular ischemia and tubular cell necrosis.',
    documentedSafetyConcern: 'Prolongation of anuria, failure of tubular regeneration, and conversion of reversible prerenal azotemia into fixed ischemic acute tubular necrosis.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Glomerular capillary hydrostatic pressure drives ultrafiltration across the podocyte slit diaphragms into Bowman\'s space.',
      drugMechanismOfAction: 'Ibuprofen blocks prostaglandin synthesis by inhibiting COX enzymes.',
      diseasePhysiologicalChanges: 'During Acute Kidney Injury, renal perfusion is critically compromised, and ischemic tubule cells are operating at the threshold of necrosis.',
      molecularCellularMechanism: 'Ablation of afferent vasodilatory tone drops intrarenal oxygen delivery below critical metabolic thresholds.',
      resultingPharmacologicalEffect: 'Severe ischemia of the medullary thick ascending limb of Henle, exacerbating cell shedding and tubular cast formation.',
      potentialSafetyImplications: 'Requirement for emergent renal replacement therapy (hemodialysis) and increased inpatient mortality.'
    },
    monitoringRecommendations: [
      'Strict contraindication in acute kidney injury.',
      'Discontinue immediately upon any sudden spike in serum creatinine.'
    ],
    sources: [
      {
        title: 'Drug-Induced Acute Kidney Injury: A Report of the ADQI Consensus Conference',
        sourceType: 'Clinical Guideline',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30528234/',
        citation: 'Ostermann M, et al. Crit Care. 2019; 23(1):340.',
        accessDate: '2026-01-20'
      }
    ]
  },
  {
    id: 'int-ibuprofen-peptic-ulcer',
    drugId: 'drug-ibuprofen',
    diseaseId: 'dis-peptic-ulcer',
    category: 'Pharmacodynamic interactions',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: false,
    affectedOrganSystem: 'Gastrointestinal / Gastric Mucosa',
    underlyingMechanism: 'Suppression of gastric mucosal prostaglandin E2 (PGE2) synthesis plus concurrent reversible platelet COX-1 inhibition.',
    documentedSafetyConcern: 'Severe upper gastrointestinal ulcer perforation, massive hematemesis, melena, and hemorrhagic shock.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Constitutive gastric COX-1 produces prostaglandin E2 (PGE2) and prostacyclin (PGI2), which stimulate gastric mucus and bicarbonate secretion, maintain mucosal microvascular blood flow, and inhibit gastrin-stimulated acid secretion.',
      drugMechanismOfAction: 'Ibuprofen inhibits gastric COX-1, depleting mucosal cytoprotective prostaglandins, and also inhibits platelet COX-1, attenuating thromboxane A2-mediated platelet plug formation.',
      diseasePhysiologicalChanges: 'In active peptic ulcer disease, the mucosal barrier is already breached, leaving denuded submucosal blood vessels exposed to gastric luminal acid and pepsin.',
      molecularCellularMechanism: 'Direct topical irritation by the weakly acidic ibuprofen molecule combined with systemic enzyme inhibition halts epithelial renewal and angiogenesis.',
      resultingPharmacologicalEffect: 'Accelerated erosion of ulcer margins and failure to clot bleeding submucosal arterioles.',
      potentialSafetyImplications: 'Catastrophic upper gastrointestinal bleeding, ulcer perforation through the gastric/duodenal wall, and emergent surgical intervention.'
    },
    monitoringRecommendations: [
      'Absolute contraindication in active peptic ulcer disease.',
      'In patients with history of ulcers requiring analgesia, consider non-NSAID alternatives (acetaminophen) or co-prescribe with high-dose proton pump inhibitors.'
    ],
    sources: [
      {
        title: 'ACG Clinical Guideline: Prevention of NSAID-Related Ulcer Complications',
        sourceType: 'Clinical Guideline',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19225477/',
        citation: 'Lanza FL, et al. Am J Gastroenterol. 2009; 104(3):728-738.',
        accessDate: '2026-01-18'
      }
    ]
  },
  {
    id: 'int-ibuprofen-chf',
    drugId: 'drug-ibuprofen',
    diseaseId: 'dis-chf',
    category: 'Renal safety concerns',
    severity: 'Severe / High Risk',
    isContraindicated: false,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Cardiovascular / Renal Axis',
    underlyingMechanism: 'Renal vasoconstriction leading to marked sodium and water retention, peripheral edema, and blunted response to loop diuretics.',
    documentedSafetyConcern: 'Acute heart failure decompensation, pulmonary edema, hypertensive surge, and hospitalization.',
    biologicalExplanation: {
      normalBiologicalFunction: 'The heart and kidneys maintain fluid homeostasis through a dynamic interplay of natriuretic peptides, aldosterone, and renal prostaglandins.',
      drugMechanismOfAction: 'Ibuprofen blocks prostaglandin synthesis, reducing renal medullary blood flow and increasing sodium reabsorption in the thick ascending limb.',
      diseasePhysiologicalChanges: 'Heart failure patients already operate with heightened baseline sympathetic and renin-angiotensin-aldosterone activity to maintain systemic arterial perfusion.',
      molecularCellularMechanism: 'Loss of prostaglandin-mediated natriuresis impairs the tubular delivery of loop diuretics (furosemide) to their luminal Na+/K+/2Cl- cotransporter targets.',
      resultingPharmacologicalEffect: 'Substantial expansion of plasma volume, elevation of ventricular filling pressures, and increased systemic vascular resistance.',
      potentialSafetyImplications: 'Acute pulmonary congestion, refractory peripheral edema, and double the risk of heart failure hospitalizations.'
    },
    monitoringRecommendations: [
      'Avoid NSAIDs in heart failure whenever possible.',
      'If essential, closely monitor daily weights, blood pressure, and signs of pulmonary edema.'
    ],
    sources: [
      {
        title: 'AHA/ACC/HFSA Guideline for the Management of Heart Failure',
        sourceType: 'Clinical Guideline',
        url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063',
        citation: 'Heidenreich PA, et al. Circulation. 2022; 145(18):e895-e1032.',
        accessDate: '2026-02-05'
      }
    ]
  },
  {
    id: 'int-metformin-ckd',
    drugId: 'drug-metformin',
    diseaseId: 'dis-ckd',
    category: 'Altered drug excretion',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Metabolic / Renal / Hepatic Axis',
    underlyingMechanism: 'Diminished glomerular filtration and tubular secretion lead to massive intracellular drug accumulation, over-inhibiting mitochondrial Complex I and blocking lactate clearance.',
    documentedSafetyConcern: 'Metformin-Associated Lactic Acidosis (MALA), an acute medical emergency characterized by metabolic acidosis with high anion gap and up to 30-50% mortality.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Lactate generated by anaerobic glycolysis in muscle and erythrocytes is transported to the liver and kidneys, where pyruvate carboxylase and gluconeogenesis regenerate glucose.',
      drugMechanismOfAction: 'Metformin enters hepatocytes via OCT1 and inhibits Complex I of the respiratory chain, mildly elevating the intracellular AMP:ATP ratio and reducing ATP-dependent gluconeogenesis from lactate.',
      diseasePhysiologicalChanges: 'In CKD, renal clearance of metformin—which is normally >90% eliminated unchanged in urine—falls directly in proportion to eGFR decline.',
      molecularCellularMechanism: 'When eGFR drops <30 mL/min/1.73m², plasma and tissue metformin levels surge 3- to 10-fold. Extreme mitochondrial Complex I inhibition suppresses mitochondrial pyruvate carboxylase and blocks hepatic lactate consumption while accelerating anaerobic glycolysis.',
      resultingPharmacologicalEffect: 'Overwhelming accumulation of hydrogen ions and unoxidized L-lactate in the bloodstream, driving serum lactate >5 mmol/L and blood pH <7.25.',
      potentialSafetyImplications: 'Severe cardiovascular collapse, arterial vasodilation, refractory arrhythmias, multiorgan failure, and death.'
    },
    monitoringRecommendations: [
      'Absolute contraindication when eGFR <30 mL/min/1.73m².',
      'Dose reduction (maximum 1000 mg/day) and frequent renal monitoring when eGFR is between 30 and 45 mL/min/1.73m².',
      'Withhold metformin prior to or at the time of iodinated radiocontrast procedures.'
    ],
    sources: [
      {
        title: 'FDA Drug Safety Communication: FDA revises warnings regarding use of the diabetes medicine metformin in certain patients with reduced kidney function',
        sourceType: 'FDA Label',
        url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-revises-warnings-regarding-use-diabetes-medicine-metformin-certain',
        citation: 'U.S. Food and Drug Administration. Metformin Safety Review. April 2016.',
        accessDate: '2026-01-10'
      },
      {
        title: 'Structure of mammalian respiratory complex I with metformin',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/5X0G',
        citation: 'Guo R, et al. Architecture of human mitochondrial respiratory megacomplex. Cell. 2017; 170:1247-1257.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-metformin-t2d-nephropathy',
    drugId: 'drug-metformin',
    diseaseId: 'dis-t2d-nephropathy',
    category: 'Altered drug excretion',
    severity: 'Severe / High Risk',
    isContraindicated: false,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal / Metabolic Axis',
    underlyingMechanism: 'Diabetic glomerulosclerosis impairs metformin filtration, increasing the probability of sudden MALA during episodes of dehydration or intercurrent illness.',
    documentedSafetyConcern: 'Lactic acidosis following rapid or silent loss of renal filtration reserve.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Normal renal proximal tubules clear metformin via basolateral OCT2 and apical MATE1/MATE2-K transporters.',
      drugMechanismOfAction: 'Metformin suppresses hepatic gluconeogenesis through mitochondrial Complex I inhibition.',
      diseasePhysiologicalChanges: 'Diabetic nephropathy causes glomerulosclerosis and tubular interstitial fibrosis, reducing secretory tubular reserve and making filtration vulnerable to hemodynamic fluctuations.',
      molecularCellularMechanism: 'Intercurrent infection or dehydration in diabetic nephropathy precipitates sudden acute tubular dysfunction, leading to acute retention of the drug.',
      resultingPharmacologicalEffect: 'Subclinical hyperlactatemia transitions rapidly to fulminant lactic acidosis.',
      potentialSafetyImplications: 'Emergency hospitalization, ICU admission, and metabolic collapse.'
    },
    monitoringRecommendations: [
      'Monitor eGFR at least every 3 to 6 months in diabetic nephropathy.',
      'Instruct patients to temporarily stop metformin during gastrointestinal illness, fever, or poor fluid intake (Sick Day Rules).'
    ],
    sources: [
      {
        title: 'ADA Standards of Medical Care in Diabetes - Pharmacologic Approaches to Glycemic Treatment',
        sourceType: 'Clinical Guideline',
        url: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
        citation: 'American Diabetes Association. Diabetes Care. 2024; 47(Suppl 1):S158-S178.',
        accessDate: '2026-02-14'
      }
    ]
  },
  {
    id: 'int-warfarin-cirrhosis',
    drugId: 'drug-warfarin',
    diseaseId: 'dis-cirrhosis',
    category: 'Hepatic safety concerns',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Hepatic / Hematologic Axis',
    underlyingMechanism: 'Profound impairment of hepatic CYP2C9 metabolic clearance of S-warfarin combined with baseline deficiency of hepatic clotting factor synthesis.',
    documentedSafetyConcern: 'Uncontrollable elevation of International Normalized Ratio (INR), catastrophic gastrointestinal hemorrhage (variceal rupture), and fatal intracranial hemorrhage.',
    biologicalExplanation: {
      normalBiologicalFunction: 'The liver synthesizes pro-coagulant clotting factors (II, VII, IX, X) and anti-coagulant proteins (Protein C and S) and expresses CYP2C9 monooxygenases to clear oral anticoagulants.',
      drugMechanismOfAction: 'Warfarin inhibits Vitamin K Epoxide Reductase (VKORC1), arresting regeneration of reduced vitamin K and blocking post-translational gamma-carboxylation of clotting factors.',
      diseasePhysiologicalChanges: 'In cirrhosis, extensive fibrosis and portosystemic shunts reduce functional hepatocyte mass. Endogenous synthesis of clotting factors is already compromised (baseline prolonged PT/INR), while cytochrome P450 enzyme activity is depressed by 50-80%.',
      molecularCellularMechanism: 'Metabolic clearance of the potent S-warfarin enantiomer via CYP2C9 is drastically slowed, leading to profound systemic drug accumulation. Furthermore, hypoalbuminemia raises the free, unbound drug fraction.',
      resultingPharmacologicalEffect: 'Synergistic collapse of hemostasis: drug clearance is crippled while the biological target pathway is already severely depleted of substrate.',
      potentialSafetyImplications: 'Hyper-anticoagulation with supratherapeutic INR (>10), spontaneous bleeding from esophageal varices, hemorrhagic stroke, and fatality.'
    },
    monitoringRecommendations: [
      'Generally contraindicated in severe hepatic impairment (Child-Pugh Class C).',
      'If deemed strictly necessary under expert hematology oversight, require ultra-low starting doses (e.g. 1 mg/day) and daily to every-other-day INR monitoring.'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Coumadin (Warfarin Sodium)',
        sourceType: 'FDA Label',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/009218s107lbl.pdf',
        citation: 'Bristol-Myers Squibb Company. Coumadin Label: Contraindications and Hepatic Impairment.',
        accessDate: '2026-01-12'
      },
      {
        title: 'EASL Clinical Practice Guidelines on the management of coagulopathy and portal hypertension in liver cirrhosis',
        sourceType: 'Clinical Guideline',
        url: 'https://www.journal-of-hepatology.eu/article/S0168-8278(21)02082-9/fulltext',
        citation: 'European Association for the Study of the Liver. J Hepatol. 2022; 76(5):1151-1189.',
        accessDate: '2026-02-20'
      },
      {
        title: 'Structure of CYP2C9 with Warfarin',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/1OG5',
        citation: 'Williams PA, et al. Crystal structure of human cytochrome P450 2C9 with bound warfarin. Nature. 2003; 424:464-468.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-warfarin-peptic-ulcer',
    drugId: 'drug-warfarin',
    diseaseId: 'dis-peptic-ulcer',
    category: 'Pharmacodynamic interactions',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Gastrointestinal / Coagulation Axis',
    underlyingMechanism: 'Systemic depletion of functional clotting factors in the presence of an active mucosal epithelial breach.',
    documentedSafetyConcern: 'Exsanguinating gastrointestinal hemorrhage from ulcerated mucosal blood vessels.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Local mucosal micro-vessel injury stimulates platelet adhesion and activation of the extrinsic coagulation pathway, generating thrombin to form a stabilizing fibrin mesh.',
      drugMechanismOfAction: 'Warfarin depletes carboxylated factor II (prothrombin), VII, IX, and X, crippling thrombin generation.',
      diseasePhysiologicalChanges: 'In active peptic ulcers, deep mucosal defects expose eroding arterioles to acid and pepsin without intact epithelium.',
      molecularCellularMechanism: 'Without functional clotting factors, the clotting cascade cannot sustain a fibrin mesh against arterial pressure in the ulcer bed.',
      resultingPharmacologicalEffect: 'Persistent, unhindered arterial bleeding from the ulcer crater.',
      potentialSafetyImplications: 'Life-threatening hemorrhagic shock requiring immediate reversal with 4-factor prothrombin complex concentrate (4F-PCC) and IV vitamin K.'
    },
    monitoringRecommendations: [
      'Contraindicated in patients with active gastrointestinal ulceration.',
      'Endoscopic confirmation of ulcer healing before resuming anticoagulant therapy.'
    ],
    sources: [
      {
        title: 'Management of Anticoagulants and Antiplatelets During Acute Gastrointestinal Bleeding',
        sourceType: 'Clinical Guideline',
        url: 'https://pubmed.ncbi.nlm.nih.gov/34614138/',
        citation: 'Barkun AN, et al. Ann Intern Med. 2021; 174(11):ITC161-ITC176.',
        accessDate: '2026-01-25'
      }
    ]
  },
  {
    id: 'int-lisinopril-aki',
    drugId: 'drug-lisinopril',
    diseaseId: 'dis-aki',
    category: 'Renal safety concerns',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal Hemodynamics',
    underlyingMechanism: 'Ablation of angiotensin II-dependent efferent arteriolar vasoconstriction causing loss of intraglomerular capillary hydrostatic pressure.',
    documentedSafetyConcern: 'Abrupt cessation of glomerular ultrafiltration, acute anuria, and hyperkalemic cardiotoxicity.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Autoregulation of GFR depends on differential resistance between afferent and efferent arterioles. When renal perfusion pressure falls, local angiotensin II preferentially constricts the efferent (outflow) arteriole, raising hydrostatic pressure inside the glomerular tuft to sustain filtration.',
      drugMechanismOfAction: 'Lisinopril inhibits ACE, extinguishing angiotensin II production and relaxing efferent arteriolar tone.',
      diseasePhysiologicalChanges: 'In Acute Kidney Injury (e.g. prerenal hypoperfusion or tubular damage), efferent constriction is the primary hemodynamic mechanism keeping glomerular filtration alive.',
      molecularCellularMechanism: 'ACE inhibition removes efferent resistance. Glomerular hydrostatic pressure collapses toward tubular pressure, eliminating the driving force for filtration.',
      resultingPharmacologicalEffect: 'Immediate plummet in GFR, sudden oliguria/anuria, and loss of aldosterone-driven potassium excretion.',
      potentialSafetyImplications: 'Severe anuric acute renal failure and rapid onset life-threatening hyperkalemia with cardiac arrhythmias.'
    },
    monitoringRecommendations: [
      'Discontinue ACE inhibitors immediately upon diagnosis of acute kidney injury.',
      'Check daily renal function and serum potassium until stable baseline returns.'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Zestril (Lisinopril)',
        sourceType: 'FDA Label',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/019777s064lbl.pdf',
        citation: 'AstraZeneca. Zestril package insert: Warnings - Impaired Renal Function.',
        accessDate: '2026-01-14'
      },
      {
        title: 'Crystal structure of human Angiotensin-Converting Enzyme complexed with Lisinopril',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/1O86',
        citation: 'Natesh R, et al. Crystal structure of the human angiotensin-converting enzyme-lisinopril complex. Nature. 2003; 421:551-554.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-propranolol-asthma',
    drugId: 'drug-propranolol',
    diseaseId: 'dis-asthma',
    category: 'Pharmacodynamic interactions',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: false,
    affectedOrganSystem: 'Pulmonary / Conducting Airways',
    underlyingMechanism: 'Competitive blockade of bronchial smooth muscle beta-2 adrenergic receptors, eliminating tonic sympathetic bronchodilation.',
    documentedSafetyConcern: 'Severe refractory bronchospasm, profound airway resistance, respiratory failure, and death in asthmatic patients.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Airway smooth muscle tone is regulated by adrenergic (sympathetic) and cholinergic (parasympathetic) inputs. Epinephrine binding to beta-2 adrenergic receptors couples to Gs proteins, activating adenylyl cyclase to increase cyclic AMP (cAMP), which lowers intracellular Ca2+ and causes bronchodilation.',
      drugMechanismOfAction: 'Propranolol is a non-selective beta-blocker with equal affinity for beta-1 and beta-2 receptors. It competitively displaces endogenous agonists from beta-2 receptors.',
      diseasePhysiologicalChanges: 'Asthmatic patients have chronic airway hyperreactivity, mucosal edema, and elevated vagal cholinergic tone, making them critically dependent on beta-2 tone to prevent bronchospasm.',
      molecularCellularMechanism: 'Propranolol occupies the transmembrane binding pocket of beta-2 receptors in airway smooth muscle cells, blocking Gs coupling and shutting down cAMP generation.',
      resultingPharmacologicalEffect: 'Unopposed parasympathetic muscarinic (M3) stimulation triggers profound bronchial smooth muscle contraction and luminal obstruction.',
      potentialSafetyImplications: 'Status asthmaticus refractory to standard beta-2 agonist inhalers (albuterol cannot displace high-affinity propranolol), acute asphyxia, and cardiac arrest.'
    },
    monitoringRecommendations: [
      'Absolute contraindication in patients with asthma, reactive airway disease, or severe bronchospastic COPD.',
      'Cardioselective beta-1 blockers (e.g., bisoprolol, metoprolol succinate) may only be used with extreme caution if strictly indicated for heart failure under specialist care.'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Inderal (Propranolol Hydrochloride)',
        sourceType: 'FDA Label',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2011/016418s084lbl.pdf',
        citation: 'Wyeth Pharmaceuticals. Inderal Label: Contraindications - Bronchial Asthma.',
        accessDate: '2026-01-16'
      },
      {
        title: 'Global Initiative for Asthma (GINA) Strategy Report',
        sourceType: 'Clinical Guideline',
        url: 'https://ginasthma.org/gina-reports/',
        citation: 'Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2024.',
        accessDate: '2026-02-12'
      },
      {
        title: 'Crystal structure of human beta-2 adrenergic receptor with carazolol/propranolol pharmacophore',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/2RH1',
        citation: 'Cherezov V, et al. High-resolution crystal structure of an engineered human beta2-adrenergic G protein-coupled receptor. Science. 2007; 318:1258-1265.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-propranolol-copd',
    drugId: 'drug-propranolol',
    diseaseId: 'dis-copd',
    category: 'Pharmacodynamic interactions',
    severity: 'Severe / High Risk',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Pulmonary / Airway Dynamics',
    underlyingMechanism: 'Non-selective blockade of pulmonary beta-2 receptors increasing airway resistance in compromised respiratory parenchyma.',
    documentedSafetyConcern: 'Acute COPD exacerbation, reduction in forced expiratory volume in 1 second (FEV1), and worsening hypoxia.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Beta-2 receptors maintain bronchial diameter and stimulate mucociliary clearance.',
      drugMechanismOfAction: 'Propranolol blocks beta-2 adrenergic receptors.',
      diseasePhysiologicalChanges: 'COPD patients have limited ventilatory reserve and fixed airway resistance.',
      molecularCellularMechanism: 'Inhibition of adrenergic signaling triggers bronchoconstriction and increases dynamic air trapping.',
      resultingPharmacologicalEffect: 'Increased work of breathing and ventilation-perfusion mismatch.',
      potentialSafetyImplications: 'Hypercapnic respiratory failure requiring non-invasive or mechanical ventilation.'
    },
    monitoringRecommendations: [
      'Avoid non-selective beta-blockers in COPD.',
      'If beta-blockade is mandatory for cardiac conditions, use low-dose cardioselective agents (metoprolol, bisoprolol).'
    ],
    sources: [
      {
        title: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease (GOLD 2024)',
        sourceType: 'Clinical Guideline',
        url: 'https://goldcopd.org/2024-gold-report/',
        citation: 'Global Initiative for Chronic Obstructive Lung Disease. GOLD Report 2024.',
        accessDate: '2026-02-18'
      }
    ]
  },
  {
    id: 'int-atorvastatin-cirrhosis',
    drugId: 'drug-atorvastatin',
    diseaseId: 'dis-cirrhosis',
    category: 'Hepatic safety concerns',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Hepatic / Skeletal Muscle Axis',
    underlyingMechanism: 'Severe impairment of hepatic CYP3A4 metabolism and biliary excretion leading to up to 16-fold surge in systemic statin exposure.',
    documentedSafetyConcern: 'Severe hepatotoxicity, acute hepatocellular breakdown, and toxic rhabdomyolysis.',
    biologicalExplanation: {
      normalBiologicalFunction: 'HMG-CoA reductase in hepatocytes synthesizes cholesterol and mevalonate derivatives. Atorvastatin undergoes rapid hepatic uptake via OATP1B1 and extensive first-pass metabolism by CYP3A4, with >98% biliary excretion.',
      drugMechanismOfAction: 'Atorvastatin selectively inhibits HMG-CoA reductase.',
      diseasePhysiologicalChanges: 'In cirrhosis, hepatic blood flow, functional hepatocytes, and CYP3A4 expression are severely decreased, while biliary clearance is compromised.',
      molecularCellularMechanism: 'Failure of hepatic extraction causes massive spillover of lipophilic atorvastatin into systemic circulation. In skeletal muscle, excessive intracellular statin concentrations deplete geranylgeranyl pyrophosphate and coenzyme Q10 (ubiquinone) in mitochondrial electron transport.',
      resultingPharmacologicalEffect: 'Mitochondrial dysfunction and calcium leakage in skeletal myocytes alongside exacerbation of hepatic transaminase elevation.',
      potentialSafetyImplications: 'Myonecrosis, massive myoglobinuria, acute tubular necrosis, and acute-on-chronic liver failure.'
    },
    monitoringRecommendations: [
      'Contraindicated in active liver disease or unexplained persistent elevations in hepatic transaminases.',
      'In stable non-cirrhotic liver disease, low-dose hydrophilic statins (pravastatin, rosuvastatin) with baseline LFTs are preferred.'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Lipitor (Atorvastatin Calcium)',
        sourceType: 'FDA Label',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/020702s056lbl.pdf',
        citation: 'Pfizer Inc. Lipitor package insert: Contraindications - Active Liver Disease.',
        accessDate: '2026-01-11'
      },
      {
        title: 'Structure of the catalytic domain of human HMG-CoA Reductase with Atorvastatin',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/1HWK',
        citation: 'Istvan ES, Deisenhofer J. Structural mechanism for statin inhibition of HMG-CoA reductase. Science. 2001; 292:1160-1164.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-digoxin-hypokalemia',
    drugId: 'drug-digoxin',
    diseaseId: 'dis-hypokalemia',
    category: 'Pharmacodynamic interactions',
    severity: 'Severe / High Risk',
    isContraindicated: false,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Cardiovascular / Cardiac Myocytes',
    underlyingMechanism: 'Loss of competitive extracellular potassium binding at the alpha subunit of Na+/K+-ATPase, massively increasing digoxin binding affinity and myocardial toxicity.',
    documentedSafetyConcern: 'Lethal cardiac arrhythmias (ventricular tachycardia, bidirectional VT, ventricular fibrillation, and complete heart block).',
    biologicalExplanation: {
      normalBiologicalFunction: 'Cardiac sarcolemmal Na+/K+-ATPase pumps 3 Na+ out and 2 K+ into myocytes. Extracellular potassium binds to the phosphorylated enzyme intermediate and competes with cardiac glycosides.',
      drugMechanismOfAction: 'Digoxin binds reversibly to the extracellular surface of the Na+/K+-ATPase alpha subunit, inhibiting its enzymatic activity.',
      diseasePhysiologicalChanges: 'Hypokalemia (<3.5 mEq/L) removes physiological potassium competition from the extracellular binding pocket.',
      molecularCellularMechanism: 'Without competing K+ ions, digoxin exhibits markedly elevated affinity and prolonged receptor occupancy on Na+/K+-ATPase. This shuts down Na+ efflux, triggering severe intracellular Na+ accumulation and reversal of the 3Na+/Ca2+ exchanger (NCX).',
      resultingPharmacologicalEffect: 'Intracellular and sarcoplasmic reticulum calcium overload, triggering oscillatory calcium release that generates delayed afterdepolarizations (DADs).',
      potentialSafetyImplications: 'Triggered activity leading to fatal ventricular arrhythmias, complete atrioventricular dissociation, and sudden cardiac death.'
    },
    monitoringRecommendations: [
      'Maintain serum potassium strictly between 4.0 and 5.0 mEq/L in all patients receiving digoxin.',
      'Check serum potassium and magnesium whenever diuretics are co-administered.',
      'Treat suspected toxicity with digoxin-specific Fab fragments (DigiFab).'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Lanoxin (Digoxin Tablets)',
        sourceType: 'FDA Label',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2016/020405s010lbl.pdf',
        citation: 'Covis Pharma. Lanoxin Label: Warnings - Hypokalemia/Hyperkalemia.',
        accessDate: '2026-01-19'
      },
      {
        title: 'Crystal structure of Na+/K+-ATPase in complex with Digoxin',
        sourceType: 'RCSB PDB',
        url: 'https://www.rcsb.org/structure/4RET',
        citation: 'Laursen M, et al. Structure and function of the cardiac glycoside receptor. Nature. 2013; 503:262-266.',
        accessDate: '2026-03-01'
      }
    ]
  },
  {
    id: 'int-digoxin-ckd',
    drugId: 'drug-digoxin',
    diseaseId: 'dis-ckd',
    category: 'Altered drug excretion',
    severity: 'Severe / High Risk',
    isContraindicated: false,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal / Cardiac Axis',
    underlyingMechanism: '70-80% of digoxin is excreted unchanged by renal glomerular filtration and tubular P-glycoprotein secretion; clearance falls in direct proportion to GFR.',
    documentedSafetyConcern: 'Severe accumulation, doubling of elimination half-life (up to 5 days), and toxic plasma digoxin levels (>2.0 ng/mL).',
    biologicalExplanation: {
      normalBiologicalFunction: 'Glomerular filtration and active tubular secretion by renal P-glycoprotein eliminate digoxin with a half-life of 36-48 hours.',
      drugMechanismOfAction: 'Digoxin inhibits Na+/K+-ATPase to augment myocardial inotropy.',
      diseasePhysiologicalChanges: 'In CKD, renal clearance drops linearly with creatinine clearance.',
      molecularCellularMechanism: 'Standard daily doses rapidly accumulate in myocardium and neural tissue.',
      resultingPharmacologicalEffect: 'Progressive visual disturbances (xanthopsia/yellow halos), severe nausea, confusion, bradycardia, and high-degree AV block.',
      potentialSafetyImplications: 'Digoxin toxicity and death from heart block or ventricular ectopy.'
    },
    monitoringRecommendations: [
      'Reduce maintenance doses by 50% or more (e.g., 0.0625 mg every other day or 0.125 mg 3 times weekly).',
      'Target trough serum concentrations of 0.5 - 0.9 ng/mL; check trough levels 7-14 days after dosage adjustment.'
    ],
    sources: [
      {
        title: 'Clinical Pharmacokinetics of Digoxin in Renal Impairment',
        sourceType: 'NIH/PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/15507141/',
        citation: 'Bauman JL, et al. Clin Pharmacokinet. 2006; 45(6):543-560.',
        accessDate: '2026-02-08'
      }
    ]
  },
  {
    id: 'int-gentamicin-ckd',
    drugId: 'drug-gentamicin',
    diseaseId: 'dis-ckd',
    category: 'Renal safety concerns',
    severity: 'Severe / High Risk',
    isContraindicated: false,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal / Auditory System',
    underlyingMechanism: 'Renal accumulation in proximal tubular lysosomes through megalin/cubilin receptor-mediated endocytosis, triggering acute tubular necrosis and inner ear hair cell apoptosis.',
    documentedSafetyConcern: 'Irreversible bilateral sensorineural hearing loss, vestibular ataxia, and permanent loss of residual nephron function.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Gentamicin is filtered freely by glomeruli and minimally reabsorbed in proximal tubular cells.',
      drugMechanismOfAction: 'Bactericidal inhibition of bacterial 30S ribosome protein translation.',
      diseasePhysiologicalChanges: 'In CKD, half-life lengthens from 2-3 hours to 20-40 hours.',
      molecularCellularMechanism: 'Prolonged high trough concentrations allow excessive endocytic uptake into tubular epithelial lysosomes and cochlear hair cells, generating reactive oxygen species and mitochondrial rupture.',
      resultingPharmacologicalEffect: 'Extensive proximal tubular necrosis and loss of outer hair cells of the organ of Corti.',
      potentialSafetyImplications: 'Permanent deafness, debilitating vestibular disability, and requirement for chronic dialysis.'
    },
    monitoringRecommendations: [
      'Calculate precise creatinine clearance; extend dosing interval (e.g., every 36-48 hours or based on therapeutic drug monitoring).',
      'Check peak (therapeutic efficacy) and trough (toxicity threshold <1.0 mcg/mL) serum levels.'
    ],
    sources: [
      {
        title: 'Aminoglycoside-Induced Nephrotoxicity and Ototoxicity',
        sourceType: 'NIH/PubMed',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22422709/',
        citation: 'Huth ME, et al. Int J Otolaryngol. 2011; 2011:937861.',
        accessDate: '2026-02-02'
      }
    ]
  },
  {
    id: 'int-spironolactone-ckd',
    drugId: 'drug-spironolactone',
    diseaseId: 'dis-ckd',
    category: 'Renal safety concerns',
    severity: 'Contraindicated',
    isContraindicated: true,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Renal / Cardiovascular Axis',
    underlyingMechanism: 'Blockade of mineralocorticoid receptors suppresses aldosterone-dependent apical epithelial sodium channels (ENaC) and basolateral Na+/K+ pumps in the cortical collecting duct.',
    documentedSafetyConcern: 'Severe, refractory, and potentially fatal hyperkalemia (serum potassium >6.5 mEq/L) triggering cardiac arrest.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Aldosterone stimulates sodium reabsorption and creates a lumen-negative electrical gradient in the cortical collecting tubule that drives potassium secretion via ROMK channels.',
      drugMechanismOfAction: 'Spironolactone competitively blocks mineralocorticoid receptors, halting aldosterone-induced protein synthesis.',
      diseasePhysiologicalChanges: 'In CKD (especially stage 4 and 5), baseline distal potassium secretion capacity is severely depleted and already relies on maximal compensatory aldosterone tone.',
      molecularCellularMechanism: 'Spironolactone eliminates the lumen-negative driving force for potassium efflux.',
      resultingPharmacologicalEffect: 'Immediate and profound retention of potassium in extracellular fluid.',
      potentialSafetyImplications: 'Hyperkalemic sine wave on electrocardiogram, ventricular fibrillation, and sudden cardiac death.'
    },
    monitoringRecommendations: [
      'Contraindicated in patients with severe renal impairment (eGFR <30 mL/min/1.73m²) or baseline potassium >5.0 mEq/L.',
      'Check serum potassium and creatinine at baseline, day 3, day 7, and monthly thereafter.'
    ],
    sources: [
      {
        title: 'FDA Prescribing Information - Aldactone (Spironolactone Tablets)',
        sourceType: 'FDA Label',
        url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/012151s072lbl.pdf',
        citation: 'Pfizer Inc. Aldactone Label: Contraindications - Severe Renal Impairment.',
        accessDate: '2026-01-22'
      }
    ]
  },
  {
    id: 'int-amiodarone-thyroid',
    drugId: 'drug-amiodarone',
    diseaseId: 'dis-thyroid',
    category: 'Pharmacodynamic interactions',
    severity: 'Severe / High Risk',
    isContraindicated: false,
    requiresDoseAdjustment: true,
    affectedOrganSystem: 'Endocrine / Thyroid Axis',
    underlyingMechanism: 'Amiodarone contains 37% iodine by weight (releasing ~3 mg inorganic iodine daily from a 200 mg dose), inhibiting type 1 and type 2 5\'-deiodinases and causing destructive thyroiditis or uncoupling of thyroid autoregulation.',
    documentedSafetyConcern: 'Amiodarone-Induced Thyrotoxicosis (AIT Type 1 and Type 2) or Amiodarone-Induced Hypothyroidism (AIH), triggering fatal cardiac arrhythmias or myxedema.',
    biologicalExplanation: {
      normalBiologicalFunction: 'Thyroid follicular cells autoregulate iodine uptake via the sodium-iodide symporter (NIS), synthesizing thyroxine (T4), which is converted to triiodothyronine (T3) in peripheral tissues by deiodinase enzymes.',
      drugMechanismOfAction: 'Amiodarone is a class III antiarrhythmic that competitively inhibits peripheral and central conversion of T4 to T3 and blocks T3 binding to thyroid hormone receptor alpha.',
      diseasePhysiologicalChanges: 'Pre-existing thyroid dysfunction (e.g. subclinical Hashimoto\'s thyroiditis or multinodular goiter) leaves the gland unable to escape from the acute Wolff-Chaikoff effect or predisposes to autonomy.',
      molecularCellularMechanism: 'Massive iodine overload accelerates hormone synthesis in autonomous nodules (Type 1 AIT) or exerts direct cytotoxic lipid peroxidation on follicular cells (Type 2 AIT destructive thyroiditis).',
      resultingPharmacologicalEffect: 'Either acute thyrotoxic storm with extreme catecholamine hypersensitivity or deep refractory hypothyroidism.',
      potentialSafetyImplications: 'Precipitation of uncontrollable atrial fibrillation, ventricular arrhythmias, heart failure decompensation, or myxedema coma.'
    },
    monitoringRecommendations: [
      'Obtain baseline thyroid panel (TSH, free T4, free T3) and thyroid autoantibodies before therapy.',
      'Recheck TSH and free T4 every 3-6 months throughout therapy and for up to 1 year following discontinuation.'
    ],
    sources: [
      {
        title: 'Amiodarone-Induced Thyroid Dysfunction: 2018 European Thyroid Association Guidelines',
        sourceType: 'Clinical Guideline',
        url: 'https://www.karger.com/Article/Fulltext/487823',
        citation: 'Bartalena L, et al. Eur Thyroid J. 2018; 7(2):55-66.',
        accessDate: '2026-02-15'
      }
    ]
  }
];
