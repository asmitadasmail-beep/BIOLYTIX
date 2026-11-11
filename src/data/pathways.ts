/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BiologicalPathway } from '../types';

export const PATHWAYS_DATABASE: BiologicalPathway[] = [
  {
    id: 'pathway-nsaid-renal',
    title: 'Renal Hemodynamics & Prostaglandin Synthesis Pathway',
    drugId: 'drug-ibuprofen',
    diseaseId: 'dis-ckd',
    subtitle: 'How NSAIDs precipitate acute renal failure in Chronic Kidney Disease',
    overview: 'In healthy kidneys, vasodilatory prostaglandins PGE2 and PGI2 maintain afferent arteriolar perfusion. In CKD, pre-existing nephron loss creates hyperfiltration in remnant glomeruli, critically dependent on prostaglandin vasodilation. NSAID-mediated COX inhibition abruptly halts this compensatory mechanism, triggering afferent vasoconstriction, intraglomerular pressure collapse, and acute ischemic injury.',
    clinicalTakeaway: 'Avoid NSAIDs in patients with eGFR <30 mL/min and use extreme caution with monitoring in mild-to-moderate CKD.',
    nodes: [
      {
        id: 'node-1',
        label: 'Cell Membrane Arachidonic Acid',
        type: 'normal_step',
        organOrLocation: 'Afferent Arteriolar Endothelium',
        description: 'Phospholipase A2 cleaves membrane phospholipids releasing free arachidonic acid in response to shear stress and neurohormonal signals.',
        biochemicalDetails: 'Substrate for both COX-1 and COX-2 enzymes.'
      },
      {
        id: 'node-2',
        label: 'COX-1 & COX-2 Enzymes',
        type: 'target',
        organOrLocation: 'Macula Densa & Renal Vasculature',
        description: 'Cyclooxygenase enzymes catalyze bis-oxygenation of arachidonic acid to prostaglandin G2 and subsequent reduction to PGH2.',
        biochemicalDetails: 'Constitutively expressed in cortical thick ascending limb and juxtaglomerular apparatus.'
      },
      {
        id: 'node-3',
        label: 'Ibuprofen Administration',
        type: 'drug',
        organOrLocation: 'Systemic Circulation',
        description: 'Ibuprofen penetrates renal tissue and competitively binds within the active site channels of COX-1 and COX-2 (PDB: 1CX2).',
        biochemicalDetails: 'Kd ~ 10-50 nM; forms hydrogen bonds with Arg120 and Tyr355.'
      },
      {
        id: 'node-4',
        label: 'Prostaglandin Synthesis Blockade',
        type: 'disease_disruption',
        organOrLocation: 'Renal Cortex & Medulla',
        description: 'Prostaglandin E2 (PGE2) and Prostacyclin (PGI2) levels drop by >90% within renal microcirculation.',
        biochemicalDetails: 'Loss of EP2/EP4 and IP receptor stimulation on vascular smooth muscle.'
      },
      {
        id: 'node-5',
        label: 'Pre-existing CKD & High Angiotensin II',
        type: 'disease_disruption',
        organOrLocation: 'Diseased Nephrons',
        description: 'Chronic loss of functional nephrons leads to high circulating levels of vasoconstrictors (angiotensin II, endothelin-1, and sympathetic tone).',
        biochemicalDetails: 'Glomerular capillary pressure is solely sustained by compensatory PGE2 afferent dilation.'
      },
      {
        id: 'node-6',
        label: 'Unopposed Afferent Arteriolar Constriction',
        type: 'adverse_outcome',
        organOrLocation: 'Glomerular Microvasculature',
        description: 'Without PGE2 counter-regulation, vasoconstrictors clamp the afferent arteriole, slashing renal plasma flow by up to 50%.',
        biochemicalDetails: 'Transcapillary hydrostatic pressure drops below ultrafiltration equilibrium.'
      },
      {
        id: 'node-7',
        label: 'Acute on Chronic Kidney Failure',
        type: 'adverse_outcome',
        organOrLocation: 'Systemic / Whole Kidney',
        description: 'Abrupt precipitous drop in GFR, severe oliguria, accumulation of creatinine and urea, and life-threatening hyperkalemia.',
        biochemicalDetails: 'May precipitate permanent end-stage renal disease requiring dialysis.'
      }
    ],
    edges: [
      { from: 'node-1', to: 'node-2', label: 'converted by', effectType: 'converts' },
      { from: 'node-3', to: 'node-2', label: 'competitively inhibits', effectType: 'inhibits' },
      { from: 'node-2', to: 'node-4', label: 'fails to produce PGE2/PGI2', effectType: 'leads_to' },
      { from: 'node-5', to: 'node-6', label: 'exerts unopposed constriction on', effectType: 'exacerbates' },
      { from: 'node-4', to: 'node-6', label: 'loss of vasodilatory counter-balance', effectType: 'leads_to' },
      { from: 'node-6', to: 'node-7', label: 'collapses GFR into', effectType: 'leads_to' }
    ]
  },
  {
    id: 'pathway-metformin-lactic-acidosis',
    title: 'Mitochondrial Complex I & Lactate Clearance Pathway',
    drugId: 'drug-metformin',
    diseaseId: 'dis-ckd',
    subtitle: 'Mechanism of Metformin-Associated Lactic Acidosis (MALA) in Renal Failure',
    overview: 'Metformin enters hepatocytes via OCT1 and inhibits mitochondrial Complex I, mildly suppressing gluconeogenesis from lactate and pyruvate. Under normal renal function, metformin is rapidly cleared unchanged in urine (>90%). In renal impairment, impaired tubular secretion causes metformin to accumulate 10-fold in tissues, completely arresting hepatic pyruvate carboxylase and lactate oxidation while accelerating peripheral anaerobic glycolysis, driving systemic fatal lactic acidosis.',
    clinicalTakeaway: 'Strictly avoid metformin when eGFR is below 30 mL/min/1.73m² and temporarily withhold during acute dehydration or illness.',
    nodes: [
      {
        id: 'meta-1',
        label: 'Peripheral Lactate Generation',
        type: 'normal_step',
        organOrLocation: 'Skeletal Muscle & Erythrocytes',
        description: 'Anaerobic glycolysis converts glucose into pyruvate and subsequently into L-lactate via lactate dehydrogenase (LDH).',
        biochemicalDetails: 'Generates ~1500 mmol lactate daily in a healthy adult.'
      },
      {
        id: 'meta-2',
        label: 'Hepatic Gluconeogenesis (Cori Cycle)',
        type: 'normal_step',
        organOrLocation: 'Hepatocyte Mitochondria',
        description: 'The liver clears ~70% of systemic lactate by converting it back into pyruvate and glucose via pyruvate carboxylase in an ATP-dependent process.',
        biochemicalDetails: 'Mitochondrial Complex I provides the necessary ATP gradient.'
      },
      {
        id: 'meta-3',
        label: 'Metformin Therapy',
        type: 'drug',
        organOrLocation: 'Cellular Uptake via OCT1',
        description: 'Metformin enters mitochondrial inner membranes and binds to Complex I (PDB: 5X0G), mildly restricting ATP generation.',
        biochemicalDetails: 'Normally activates AMPK and reduces gluconeogenesis moderately.'
      },
      {
        id: 'meta-4',
        label: 'Impaired Renal Clearance in CKD',
        type: 'disease_disruption',
        organOrLocation: 'Renal Proximal Tubules',
        description: 'Metformin relies exclusively on OCT2 and MATE1 transporters for excretion. In CKD, systemic clearance drops to near zero.',
        biochemicalDetails: 'Elimination half-life extends from 6 hours to over 30 hours.'
      },
      {
        id: 'meta-5',
        label: 'Severe Mitochondrial Complex I Shutdown',
        type: 'disease_disruption',
        organOrLocation: 'Liver & Muscle Mitochondria',
        description: 'Massive intracellular metformin accumulation fully inhibits Complex I. ATP synthesis collapses and mitochondrial NADH/NAD+ ratio surges.',
        biochemicalDetails: 'Pyruvate carboxylase is severely inhibited; lactate cannot enter gluconeogenesis.'
      },
      {
        id: 'meta-6',
        label: 'Fulminant Lactic Acidosis (MALA)',
        type: 'adverse_outcome',
        organOrLocation: 'Systemic Arterial Circulation',
        description: 'Blood lactate concentrations exceed 5.0 mmol/L and arterial pH falls below 7.20 with high anion gap metabolic acidosis.',
        biochemicalDetails: 'Causes profound myocardial depression, peripheral vasodilation, coma, and up to 50% mortality.'
      }
    ],
    edges: [
      { from: 'meta-1', to: 'meta-2', label: 'cleared and recycled by', effectType: 'converts' },
      { from: 'meta-3', to: 'meta-2', label: 'mildly regulates', effectType: 'inhibits' },
      { from: 'meta-4', to: 'meta-5', label: 'causes massive tissue accumulation triggering', effectType: 'exacerbates' },
      { from: 'meta-3', to: 'meta-5', label: 'dose accumulates via', effectType: 'leads_to' },
      { from: 'meta-5', to: 'meta-2', label: 'completely blocks', effectType: 'inhibits' },
      { from: 'meta-5', to: 'meta-6', label: 'overflows systemic lactate into', effectType: 'leads_to' }
    ]
  },
  {
    id: 'pathway-warfarin-cirrhosis',
    title: 'Hepatic Cytochrome P450 & Coagulation Cascade Pathway',
    drugId: 'drug-warfarin',
    diseaseId: 'dis-cirrhosis',
    subtitle: 'The two-hit catastrophe of Warfarin in Hepatic Cirrhosis',
    overview: 'Warfarin inhibits Vitamin K Epoxide Reductase (VKORC1), blocking gamma-carboxylation of clotting factors II, VII, IX, and X. In hepatic cirrhosis, two independent dysfunctions collide: (1) severely reduced CYP2C9 monooxygenase synthesis stops S-warfarin breakdown, multiplying active drug half-life; and (2) diseased hepatocytes already fail to synthesize baseline clotting factors. The resulting synergistic collapse of hemostasis triggers uncontrolled hemorrhage.',
    clinicalTakeaway: 'Severe hepatic cirrhosis is a documented contraindication for warfarin due to extreme bleeding mortality.',
    nodes: [
      {
        id: 'warf-1',
        label: 'Hepatic Synthesis of Clotting Factors',
        type: 'normal_step',
        organOrLocation: 'Hepatocyte Endoplasmic Reticulum',
        description: 'Healthy hepatocytes synthesize factors II, VII, IX, X and rely on reduced Vitamin K hydroquinone for post-translational carboxylation.',
        biochemicalDetails: 'Vitamin K-dependent gamma-glutamyl carboxylase pathway.'
      },
      {
        id: 'warf-2',
        label: 'Warfarin Therapy',
        type: 'drug',
        organOrLocation: 'Target: VKORC1 in Liver',
        description: 'Warfarin inhibits VKORC1 (PDB: 6WVX), depleting reduced vitamin K and blocking factor maturation.',
        biochemicalDetails: 'S-warfarin is 5x more potent than R-warfarin.'
      },
      {
        id: 'warf-3',
        label: 'Hepatic Cirrhosis & Portosystemic Shunting',
        type: 'disease_disruption',
        organOrLocation: 'Diseased Liver Parenchyma',
        description: 'Cirrhosis causes baseline loss of hepatocyte mass, yielding a baseline elevated INR and decreased clotting factor reserves.',
        biochemicalDetails: 'Also causes gastroesophageal varices under high portal venous pressure.'
      },
      {
        id: 'warf-4',
        label: 'Severe Downregulation of CYP2C9',
        type: 'disease_disruption',
        organOrLocation: 'Microsomal Cytochrome P450',
        description: 'CYP2C9 enzyme levels drop by 60-80% due to cellular loss and portosystemic shunting (PDB: 1OG5). S-warfarin clearance is paralyzed.',
        biochemicalDetails: 'Unbound free warfarin rises further due to hypoalbuminemia.'
      },
      {
        id: 'warf-5',
        label: 'Synergistic Hemostatic Collapse',
        type: 'adverse_outcome',
        organOrLocation: 'Systemic Hemostasis',
        description: 'Massive drug accumulation acts on already-depleted clotting factors, driving INR > 10.0.',
        biochemicalDetails: 'Thrombin generation capacity drops below 5% of normal.'
      },
      {
        id: 'warf-6',
        label: 'Exsanguinating Variceal / Intracranial Bleeding',
        type: 'adverse_outcome',
        organOrLocation: 'Gastrointestinal & Cerebral Vasculature',
        description: 'Spontaneous or high-pressure rupture of esophageal varices cannot form a hemostatic plug, leading to hemorrhagic shock.',
        biochemicalDetails: 'Carries mortality exceeding 40% per bleeding episode.'
      }
    ],
    edges: [
      { from: 'warf-1', to: 'warf-5', label: 'provides baseline hemostasis', effectType: 'leads_to' },
      { from: 'warf-2', to: 'warf-1', label: 'inhibits vitamin K recycling for', effectType: 'inhibits' },
      { from: 'warf-3', to: 'warf-1', label: 'baseline deficiency of synthesis in', effectType: 'inhibits' },
      { from: 'warf-3', to: 'warf-4', label: 'destroys microsomal expression of', effectType: 'inhibits' },
      { from: 'warf-4', to: 'warf-2', label: 'fails to metabolize and clear', effectType: 'exacerbates' },
      { from: 'warf-2', to: 'warf-5', label: 'exponentially drives supratherapeutic', effectType: 'leads_to' },
      { from: 'warf-5', to: 'warf-6', label: 'results in fatal hemorrhage from', effectType: 'leads_to' }
    ]
  },
  {
    id: 'pathway-beta-blocker-asthma',
    title: 'Bronchial Beta-2 Adrenergic Signaling Pathway',
    drugId: 'drug-propranolol',
    diseaseId: 'dis-asthma',
    subtitle: 'How Non-Selective Beta-Blockers Cause Life-Threatening Airway Closure',
    overview: 'In airway smooth muscle, beta-2 adrenergic receptors couple to Gs proteins, activating adenylyl cyclase to generate cyclic AMP (cAMP) and maintain bronchial dilation. Asthmatic airways exhibit chronic baseline inflammation and vagal hyperreactivity, relying on beta-2 tone to prevent bronchospasm. Propranolol competitively displaces adrenergic ligands from beta-2 receptors, crashing intracellular cAMP and leaving parasympathetic acetylcholine-mediated bronchoconstriction completely unopposed.',
    clinicalTakeaway: 'Non-selective beta-blockers are strictly contraindicated in patients with asthma or reactive airway disease.',
    nodes: [
      {
        id: 'bb-1',
        label: 'Endogenous Epinephrine / Sympathetic Tone',
        type: 'normal_step',
        organOrLocation: 'Circulating Hormones & Adrenergic Terminals',
        description: 'Adrenaline binds to beta-2 adrenergic receptors on airway smooth muscle cells.',
        biochemicalDetails: 'Continuous tonic stimulus to maintain airway caliber.'
      },
      {
        id: 'bb-2',
        label: 'Beta-2 Adrenergic Receptor (ADRB2)',
        type: 'target',
        organOrLocation: 'Bronchial Smooth Muscle Membrane',
        description: '7-transmembrane GPCR (PDB: 2RH1) couples to stimulatory Gs alpha subunits.',
        biochemicalDetails: 'Activates adenylyl cyclase to produce cAMP, decreasing intracellular free Ca2+.'
      },
      {
        id: 'bb-3',
        label: 'Propranolol Administration',
        type: 'drug',
        organOrLocation: 'Systemic / Pulmonary Microcirculation',
        description: 'Non-selective beta-blocker that binds with nanomolar affinity to ADRB2, occupying the binding pocket between TM3, TM5, TM6, and TM7.',
        biochemicalDetails: 'Acts as a high-affinity neutral antagonist / inverse agonist.'
      },
      {
        id: 'bb-4',
        label: 'Asthmatic Airway Hyperreactivity',
        type: 'disease_disruption',
        organOrLocation: 'Asthmatic Conducting Bronchioles',
        description: 'Eosinophilic inflammation, mucosal thickening, and heightened parasympathetic vagal acetylcholine tone.',
        biochemicalDetails: 'Airways require maximal beta-2 dilation to counteract vagal M3 constriction.'
      },
      {
        id: 'bb-5',
        label: 'cAMP Depletion & Unopposed Muscarinic Constriction',
        type: 'disease_disruption',
        organOrLocation: 'Airway Smooth Muscle Cytosol',
        description: 'Propranolol prevents Gs activation. Intracellular cAMP drops; acetylcholine binds M3 receptors, unleashing IP3-mediated Ca2+ release.',
        biochemicalDetails: 'Myosin light chain kinase (MLCK) is phosphorylated and hyperactivated.'
      },
      {
        id: 'bb-6',
        label: 'Severe Acute Bronchospasm & Airway Closure',
        type: 'adverse_outcome',
        organOrLocation: 'Entire Tracheobronchial Tree',
        description: 'Profound bronchoconstriction with severe wheezing, dynamic hyperinflation, hypoxemia, and acute respiratory arrest.',
        biochemicalDetails: 'Rescue beta-2 agonists (albuterol) cannot displace high-affinity propranolol from the receptor.'
      }
    ],
    edges: [
      { from: 'bb-1', to: 'bb-2', label: 'activates', effectType: 'activates' },
      { from: 'bb-3', to: 'bb-2', label: 'competitively blocks', effectType: 'inhibits' },
      { from: 'bb-4', to: 'bb-5', label: 'heightens cholinergic constriction in', effectType: 'exacerbates' },
      { from: 'bb-2', to: 'bb-5', label: 'inhibition shuts down cAMP in', effectType: 'leads_to' },
      { from: 'bb-5', to: 'bb-6', label: 'triggers acute suffocating spasm', effectType: 'leads_to' }
    ]
  }
];
