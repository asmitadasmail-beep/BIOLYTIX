/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Disease } from '../types';

export const DISEASES_DATABASE: Disease[] = [
  {
    id: 'dis-ckd',
    name: 'Chronic Kidney Disease (CKD)',
    category: 'Renal',
    affectedOrgans: ['Kidneys', 'Cardiovascular System', 'Bone/Mineral Axis'],
    pathophysiology: 'Gradual, irreversible loss of nephron units leading to reduced glomerular filtration rate (GFR <60 mL/min/1.73m² for >3 months), glomerulosclerosis, tubulointerstitial fibrosis, and diminished renal excretory and endocrine capacity.',
    biologicalMechanisms: [
      'Glomerular hyperfiltration in remnant surviving nephrons',
      'Loss of functional renal tubular transport systems (OAT, OCT, P-gp)',
      'Severe reliance on local vasodilatory prostaglandins (PGE2, PGI2) to preserve afferent arteriolar flow against elevated angiotensin II',
      'Impaired renal 1-alpha-hydroxylase activity leading to calcitriol deficiency'
    ],
    associatedMetabolicChanges: [
      'Decreased renal clearance of parent drugs and active polar metabolites',
      'Hyperkalemia propensity due to diminished distal tubular potassium secretion',
      'Metabolic acidosis from failure to excrete hydrogen ions and regenerate bicarbonate',
      'Uremic toxin accumulation altering hepatic CYP enzyme expression and protein binding'
    ],
    clinicalSignificance: 'Alters both pharmacokinetics (drastic reduction in renal clearance, increased half-life) and pharmacodynamics (hypersensitivity to nephrotoxic agents and hemodynamic collapse).',
    commonPrevalence: 'Affects approximately 10-14% of the global adult population.'
  },
  {
    id: 'dis-aki',
    name: 'Acute Kidney Injury (AKI)',
    category: 'Renal',
    affectedOrgans: ['Kidneys', 'Vascular Endothelium'],
    pathophysiology: 'Abrupt decline in renal function over hours to days characterized by an absolute increase in serum creatinine, oliguria/anuria, disrupted electrolyte balance, and acute tubular or hemodynamic injury.',
    biologicalMechanisms: [
      'Ischemic or toxic acute tubular necrosis (ATN)',
      'Marked reduction in renal blood flow and glomerular capillary hydrostatic pressure',
      'Loss of brush border integrity in proximal tubules and back-leak of glomerular filtrate',
      'Intense intrarenal vasoconstriction mediated by endothelin and sympathetic activation'
    ],
    associatedMetabolicChanges: [
      'Rapid accumulation of nitrogenous waste (BUN, creatinine)',
      'Rapid onset hyperkalemia, hyperphosphatemia, and metabolic acidosis',
      'Acute fluid volume overload and diminished renal drug filtration to near zero'
    ],
    clinicalSignificance: 'Extreme susceptibility to drugs that impair renal autoregulation (NSAIDs, ACE inhibitors) or direct tubular toxins (aminoglycosides).',
    commonPrevalence: 'Occurs in 10-15% of all hospitalized patients and over 50% of ICU patients.'
  },
  {
    id: 'dis-cirrhosis',
    name: 'Hepatic Cirrhosis / Severe Hepatic Impairment',
    category: 'Hepatic',
    affectedOrgans: ['Liver', 'Splanchnic Circulation', 'Brain', 'Kidneys'],
    pathophysiology: 'End-stage chronic liver injury characterized by diffuse parenchymal nodular regeneration, progressive bridging fibrous scar deposition, architectural distortion, and hepatic vascular resistance leading to portal hypertension.',
    biologicalMechanisms: [
      'Capillarization of hepatic sinusoids and portosystemic vascular shunting bypassing hepatocytes',
      'Severe depletion of functional hepatocytes and down-regulation of cytochrome P450 monooxygenases (CYP1A2, CYP2C9, CYP2C19, CYP3A4)',
      'Diminished synthetic capacity for albumin and vitamin K-dependent coagulation factors (II, VII, IX, X, Protein C/S)',
      'Splanchnic arterial vasodilation triggering systemic compensatory vasoconstriction (hepatorenal reflex)'
    ],
    associatedMetabolicChanges: [
      'Profound reduction in hepatic intrinsic clearance for high- and low-extraction ratio drugs',
      'Hypoalbuminemia causing increased unbound (free) pharmacologically active fraction of drugs',
      'Prolonged prothrombin time (PT) / elevated INR reflecting baseline coagulopathy',
      'Hyperammonemia and impaired biliary excretion of xenobiotics'
    ],
    clinicalSignificance: 'Massively prolonged drug half-lives, high risk of toxic accumulation, and severe bleeding hazards with antithrombotics.',
    commonPrevalence: 'Causes over 1.3 million deaths annually worldwide.'
  },
  {
    id: 'dis-asthma',
    name: 'Asthma / Bronchospastic Airway Disease',
    category: 'Pulmonary',
    affectedOrgans: ['Lungs', 'Bronchial Smooth Muscle', 'Airway Epithelium'],
    pathophysiology: 'Heterogeneous chronic inflammatory disorder of the conducting airways characterized by bronchial hyperresponsiveness, reversible airflow obstruction, eosinophilic/mast cell infiltration, goblet cell hyperplasia, and airway remodeling.',
    biologicalMechanisms: [
      'Mast cell degranulation releasing histamine, leukotrienes (LTC4, LTD4), and prostaglandins causing bronchoconstriction',
      'Critical reliance on autonomic sympathetic tone and beta-2 adrenergic receptor activation for maintenance of airway patency',
      'Airway smooth muscle hypertrophy and chronic baseline subepithelial collagen thickening'
    ],
    associatedMetabolicChanges: [
      'Hypoxemia during acute exacerbations',
      'Increased work of breathing and ventilation-perfusion mismatch'
    ],
    clinicalSignificance: 'Patients are acutely vulnerable to life-threatening bronchospasm when exposed to non-selective beta-adrenergic receptor blockers.',
    commonPrevalence: 'Affects over 300 million individuals globally.'
  },
  {
    id: 'dis-copd',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    category: 'Pulmonary',
    affectedOrgans: ['Lungs', 'Alveolar Capillary Bed', 'Right Ventricle'],
    pathophysiology: 'Progressive, largely irreversible airflow limitation caused by a combination of small airway disease (obstructive bronchiolitis) and parenchymal destruction (emphysema), typically triggered by noxious particles or gases.',
    biologicalMechanisms: [
      'Protease-antiprotease imbalance and chronic neutrophilic inflammation',
      'Loss of alveolar tethering and elastic recoil during exhalation',
      'Hypoxic pulmonary vasoconstriction leading to pulmonary hypertension and cor pulmonale'
    ],
    associatedMetabolicChanges: [
      'Chronic respiratory acidosis with compensatory renal bicarbonate retention',
      'Secondary polycythemia in response to chronic hypoxemia'
    ],
    clinicalSignificance: 'Severe sensitivity to respiratory depressants (opioids, sedatives) and bronchoconstrictive agents (non-selective beta-blockers).',
    commonPrevalence: 'Third leading cause of death worldwide.'
  },
  {
    id: 'dis-chf',
    name: 'Congestive Heart Failure (CHF)',
    category: 'Cardiovascular',
    affectedOrgans: ['Heart', 'Kidneys', 'Systemic Vasculature', 'Lungs'],
    pathophysiology: 'Complex clinical syndrome resulting from structural or functional cardiac impairment that reduces the ventricle\'s ability to fill or eject blood, leading to pulmonary/systemic venous congestion and insufficient tissue perfusion.',
    biologicalMechanisms: [
      'Activation of the renin-angiotensin-aldosterone system (RAAS) and sympathetic nervous system',
      'Elevated central venous pressure and secondary renal venous congestion',
      'Compensatory reliance on endogenous renal prostaglandins to maintain renal perfusion against high angiotensin II and sympathetic constriction'
    ],
    associatedMetabolicChanges: [
      'Sodium and fluid retention, expansion of extracellular fluid volume',
      'Prerenal azotemia with disproportionate BUN-to-creatinine elevation',
      'Susceptibility to cardiorenal syndrome and electrolyte disturbances (hyponatremia, hypokalemia)'
    ],
    clinicalSignificance: 'Drugs that cause sodium/water retention (NSAIDs) or negative inotropic effects can precipitate acute decompensated heart failure.',
    commonPrevalence: 'Affects approximately 64 million people globally.'
  },
  {
    id: 'dis-t2d-nephropathy',
    name: 'Type 2 Diabetes with Diabetic Nephropathy',
    category: 'Endocrine',
    affectedOrgans: ['Kidneys', 'Pancreas', 'Microvasculature'],
    pathophysiology: 'Chronic hyperglycemia and insulin resistance causing glomerular mesangial expansion, glomerular basement membrane thickening, nodular glomerulosclerosis (Kimmelstiel-Wilson lesions), and progressive decline in filtration.',
    biologicalMechanisms: [
      'Advanced glycation end-products (AGEs) inducing microvascular endothelial injury',
      'Intraglomerular hypertension driven by efferent arteriolar constriction and SGLT2-mediated afferent dilation',
      'Disrupted cellular mitochondrial energetics and oxidative phosphorylation'
    ],
    associatedMetabolicChanges: [
      'Persistent microalbuminuria progressing to macroalbuminuria and nephrotic range proteinuria',
      'Decreased renal clearance of renally eliminated antidiabetic agents (e.g., metformin, sulfonylureas)',
      'Subclinical tissue hypoxia and increased baseline lactate generation'
    ],
    clinicalSignificance: 'Dramatically raises the risk of drug-induced lactic acidosis and toxic drug accumulation.',
    commonPrevalence: 'Develops in 30-40% of all patients with longstanding diabetes.'
  },
  {
    id: 'dis-peptic-ulcer',
    name: 'Active Peptic Ulcer Disease (PUD)',
    category: 'Gastrointestinal',
    affectedOrgans: ['Stomach', 'Duodenum', 'Mucosal Vasculature'],
    pathophysiology: 'Focal mucosal defect in the stomach or proximal duodenum extending through the muscularis mucosae, caused by an imbalance between aggressive luminal factors (gastric acid, pepsin, H. pylori) and mucosal protective mechanisms (mucus, bicarbonate, mucosal blood flow).',
    biologicalMechanisms: [
      'Dependence on local prostaglandin E2 (PGE2) and prostacyclin (PGI2) synthesis to stimulate mucus/bicarbonate secretion and maintain mucosal perfusion',
      'Epithelial cell apoptosis and microvascular thrombosis at ulcer margins',
      'Exposure of deep submucosal arterioles to corrosive gastric acid'
    ],
    associatedMetabolicChanges: [
      'Risk of acute iron-deficiency anemia or hypovolemic shock from acute upper GI hemorrhage'
    ],
    clinicalSignificance: 'Strongly contraindicated for non-selective NSAIDs and antiplatelets that suppress prostaglandin synthesis and inhibit platelet aggregation.',
    commonPrevalence: 'Lifetime prevalence of approximately 5-10% in general populations.'
  },
  {
    id: 'dis-hypokalemia',
    name: 'Severe Hypokalemia / Electrolyte Imbalance',
    category: 'Cardiovascular',
    affectedOrgans: ['Heart', 'Skeletal Muscle', 'Kidneys'],
    pathophysiology: 'Abnormally low serum potassium concentration (<3.0 mEq/L) that hyperpolarizes the resting cardiac myocyte membrane potential and alters myocardial electrophysiology and repolarization.',
    biologicalMechanisms: [
      'Increased resting membrane potential negativity and prolongation of action potential duration',
      'Enhanced automaticity and increased susceptibility to delayed afterdepolarizations (DADs)',
      'Loss of extracellular potassium competition at the alpha-subunit binding site of Na+/K+-ATPase'
    ],
    associatedMetabolicChanges: [
      'Hypokalemic nephropathy and decreased urinary concentrating ability',
      'Cardiac ECG alterations (U waves, ST depression, T wave flattening, PR prolongation)'
    ],
    clinicalSignificance: 'Profoundly potentiates digitalis (digoxin) binding and toxicity, triggering lethal ventricular fibrillation even at standard therapeutic serum digoxin concentrations.',
    commonPrevalence: 'Observed in up to 20% of hospitalized patients receiving diuretics.'
  },
  {
    id: 'dis-thyroid',
    name: 'Thyroid Dysfunction (Hypo/Hyperthyroidism)',
    category: 'Endocrine',
    affectedOrgans: ['Thyroid Gland', 'Heart', 'Metabolic Organs'],
    pathophysiology: 'Disordered thyroid hormone (T3 and T4) secretion resulting from autoimmune disease, iodine excess/deficiency, or pharmaceutical disruption, altering systemic basal metabolic rate and adrenergic receptor sensitivity.',
    biologicalMechanisms: [
      'Alteration of hepatic cytochrome P450 enzyme turnover and drug glucuronidation rates',
      'Changes in cardiac sarcoplasmic reticulum Ca2+-ATPase (SERCA2a) and beta-adrenergic receptor expression',
      'Wolff-Chaikoff effect or Jod-Basedow phenomenon triggered by high exogenous iodine exposure'
    ],
    associatedMetabolicChanges: [
      'Altered cardiac output, systemic vascular resistance, and drug clearance rates'
    ],
    clinicalSignificance: 'Iodine-containing medications (e.g., amiodarone) can trigger severe thyrotoxicosis or profound myxedematous hypothyroidism.',
    commonPrevalence: 'Affects 4-7% of the global population.'
  }
];
