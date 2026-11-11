/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Drug } from '../types';

export const DRUGS_DATABASE: Drug[] = [
  {
    id: 'drug-ibuprofen',
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    brandNames: ['Advil', 'Motrin', 'Brufen', 'Nurofen'],
    drugClass: 'Nonsteroidal Anti-inflammatory Drug (NSAID)',
    molecularFormula: 'C13H18O2',
    molecularWeight: 206.29,
    mechanismOfAction: 'Reversible, non-selective competitive inhibitor of cyclooxygenase-1 (COX-1) and cyclooxygenase-2 (COX-2) enzymes, impeding conversion of arachidonic acid to prostaglandin precursors.',
    metabolism: 'Extensive hepatic biotransformation primarily via CYP2C9 (major) and CYP2C8 to hydroxy- and carboxy-ibuprofen metabolites.',
    cypEnzymes: ['CYP2C9', 'CYP2C8'],
    excretionPathway: 'Renal (approx. 90% as inactive metabolites and glucuronide conjugates; <1% unchanged); minimal biliary excretion.',
    renalClearancePercent: 90,
    hepaticClearancePercent: 10,
    halfLife: '1.8 - 2.0 hours',
    knownTargets: [
      {
        id: 'PTGS1',
        name: 'Prostaglandin G/H Synthase 1 (COX-1)',
        symbol: 'PTGS1',
        uniprotId: 'P23219',
        pdbId: '1EQG',
        organism: 'Homo sapiens',
        function: 'Constitutively expressed enzyme responsible for baseline cytoprotective prostaglandins in gastric mucosa and renal vasculature.'
      },
      {
        id: 'PTGS2',
        name: 'Prostaglandin G/H Synthase 2 (COX-2)',
        symbol: 'PTGS2',
        uniprotId: 'P35354',
        pdbId: '1CX2',
        organism: 'Homo sapiens',
        function: 'Inducible enzyme mediating inflammatory prostaglandins and constitutive regulator of renal medullary and cortical hemodynamics.'
      }
    ],
    pubchemCid: 3672,
    smiles: 'CC(C)CC1=CC=C(C=C1)C(C)C(=O)O',
    has3DStructure: true,
    defaultPdbId: '1CX2',
    summary: 'Widely used propionic acid derivative NSAID with analgesic, antipyretic, and anti-inflammatory properties, but potent suppressant of compensatory renal prostaglandins.'
  },
  {
    id: 'drug-metformin',
    name: 'Metformin',
    genericName: 'Metformin Hydrochloride',
    brandNames: ['Glucophage', 'Fortamet', 'Glumetza', 'Riomet'],
    drugClass: 'Biguanide Antihyperglycemic Agent',
    molecularFormula: 'C4H11N5',
    molecularWeight: 129.16,
    mechanismOfAction: 'Inhibits mitochondrial respiratory chain Complex I, decreasing hepatic gluconeogenesis and stimulating AMP-activated protein kinase (AMPK) to increase peripheral glucose uptake.',
    metabolism: 'Negligible hepatic metabolism; does not undergo CYP450 oxidation.',
    cypEnzymes: [],
    excretionPathway: 'Almost entirely renal elimination (>90% unchanged via active organic cation transporter 2 [OCT2] and multidrug and toxin extrusion [MATE1]).',
    renalClearancePercent: 95,
    hepaticClearancePercent: 5,
    halfLife: '6.2 hours (plasma); up to 17.6 hours in erythrocytes',
    knownTargets: [
      {
        id: 'ND1',
        name: 'NADH-Ubiquinone Oxidoreductase Chain 1 (Complex I)',
        symbol: 'MT-ND1',
        uniprotId: 'P03886',
        pdbId: '5X0G',
        organism: 'Homo sapiens',
        function: 'First enzyme of the mitochondrial electron transport chain catalyzing electron transfer from NADH to ubiquinone.'
      },
      {
        id: 'PRKAA1',
        name: '5\'-AMP-activated protein kinase catalytic subunit alpha-1',
        symbol: 'PRKAA1',
        uniprotId: 'Q13131',
        pdbId: '4CFH',
        organism: 'Homo sapiens',
        function: 'Central sensor of cellular energy homeostasis activated under elevated AMP:ATP ratios.'
      }
    ],
    pubchemCid: 4091,
    smiles: 'CN(C)C(=N)NC(=N)N',
    has3DStructure: true,
    defaultPdbId: '5X0G',
    summary: 'First-line oral biguanide for type 2 diabetes mellitus that relies exclusively on renal filtration and secretion for systemic clearance.'
  },
  {
    id: 'drug-warfarin',
    name: 'Warfarin',
    genericName: 'Warfarin Sodium',
    brandNames: ['Coumadin', 'Jantoven', 'Marevan'],
    drugClass: 'Vitamin K Antagonist / Anticoagulant',
    molecularFormula: 'C19H16O4',
    molecularWeight: 308.33,
    mechanismOfAction: 'Inhibits Vitamin K Epoxide Reductase Complex subunit 1 (VKORC1), preventing regeneration of reduced vitamin K (vitamin KH2) required for carboxylation of factors II, VII, IX, and X.',
    metabolism: 'Hepatic stereoselective clearance: active S-enantiomer metabolized primarily by CYP2C9; R-enantiomer metabolized by CYP1A2, CYP2C19, and CYP3A4.',
    cypEnzymes: ['CYP2C9', 'CYP1A2', 'CYP3A4', 'CYP2C19'],
    excretionPathway: 'Negligible unchanged drug; 92% excreted as hydroxylated metabolites in urine, remainder in bile/feces.',
    renalClearancePercent: 8,
    hepaticClearancePercent: 92,
    halfLife: '20 - 60 hours (mean 40 hours)',
    knownTargets: [
      {
        id: 'VKORC1',
        name: 'Vitamin K Epoxide Reductase Complex Subunit 1',
        symbol: 'VKORC1',
        uniprotId: 'Q9BQB6',
        pdbId: '6WVX',
        organism: 'Homo sapiens',
        function: 'Key enzyme reducing vitamin K 2,3-epoxide to vitamin K hydroquinone.'
      },
      {
        id: 'CYP2C9',
        name: 'Cytochrome P450 2C9',
        symbol: 'CYP2C9',
        uniprotId: 'P11712',
        pdbId: '1OG5',
        organism: 'Homo sapiens',
        function: 'Primary hepatic monooxygenase responsible for metabolic elimination of the 5-fold more potent S-warfarin enantiomer.'
      }
    ],
    pubchemCid: 54678486,
    smiles: 'CC(=O)CC(C1=CC=CC=C1)C2=C(C3=CC=CC=C3OC2=O)O',
    has3DStructure: true,
    defaultPdbId: '1OG5',
    summary: 'Narrow therapeutic index oral anticoagulant heavily reliant on hepatic CYP2C9 metabolism and baseline hepatic clotting factor synthesis.'
  },
  {
    id: 'drug-lisinopril',
    name: 'Lisinopril',
    genericName: 'Lisinopril Dihydrate',
    brandNames: ['Prinivil', 'Zestril', 'Qbrelis'],
    drugClass: 'Angiotensin-Converting Enzyme (ACE) Inhibitor',
    molecularFormula: 'C21H31N3O5',
    molecularWeight: 405.49,
    mechanismOfAction: 'Competitive inhibitor of Angiotensin-Converting Enzyme (peptidyl-dipeptidase A), preventing conversion of angiotensin I to the potent vasoconstrictor angiotensin II and reducing aldosterone secretion.',
    metabolism: 'Does not undergo hepatic metabolism; circulates entirely in active, unbound parent form.',
    cypEnzymes: [],
    excretionPathway: 'Excreted 100% unchanged in the urine via glomerular filtration.',
    renalClearancePercent: 100,
    hepaticClearancePercent: 0,
    halfLife: '12 hours',
    knownTargets: [
      {
        id: 'ACE',
        name: 'Angiotensin-Converting Enzyme',
        symbol: 'ACE',
        uniprotId: 'P12821',
        pdbId: '1O86',
        organism: 'Homo sapiens',
        function: 'Zinc metallopeptidase regulating systemic blood pressure, efferent arteriolar tone, and bradykinin degradation.'
      }
    ],
    pubchemCid: 5362119,
    smiles: 'C1CC(N(C1)C(=O)C(CCC2=CC=CC=C2)NC(CCCCN)C(=O)O)C(=O)O',
    has3DStructure: true,
    defaultPdbId: '1O86',
    summary: 'Synthetic peptide derivative ACE inhibitor that lowers efferent arteriolar resistance and requires intact renal filtration for clearance.'
  },
  {
    id: 'drug-atorvastatin',
    name: 'Atorvastatin',
    genericName: 'Atorvastatin Calcium',
    brandNames: ['Lipitor', 'Atorvaliquid', 'Torvast'],
    drugClass: 'HMG-CoA Reductase Inhibitor (Statin)',
    molecularFormula: 'C33H35FN2O5',
    molecularWeight: 558.64,
    mechanismOfAction: 'Selective, competitive inhibitor of 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme in cholesterol biosynthesis.',
    metabolism: 'Extensive hepatic metabolism catalyzed by cytochrome P450 3A4 to ortho- and para-hydroxylated active metabolites.',
    cypEnzymes: ['CYP3A4'],
    excretionPathway: 'Primarily eliminated in bile following hepatic and extrahepatic metabolism; <2% excreted in urine.',
    renalClearancePercent: 2,
    hepaticClearancePercent: 98,
    halfLife: '14 hours (parent drug); 20 - 30 hours (inhibitory activity for HMG-CoA reductase)',
    knownTargets: [
      {
        id: 'HMGCR',
        name: '3-hydroxy-3-methylglutaryl-CoA Reductase',
        symbol: 'HMGCR',
        uniprotId: 'P04035',
        pdbId: '1HWK',
        organism: 'Homo sapiens',
        function: 'Key enzyme of the mevalonate pathway synthesizing isoprenoids, cholesterol, and coenzyme Q10.'
      }
    ],
    pubchemCid: 60823,
    smiles: 'CC(C)C1=C(C(=C(N1CCC(CC(CC(=O)O)O)O)C2=CC=C(C=C2)F)C3=CC=CC=C3)C(=O)NC4=CC=CC=C4',
    has3DStructure: true,
    defaultPdbId: '1HWK',
    summary: 'Lipophilic statin with extensive biliary/hepatic clearance that can accumulate in hepatic failure, increasing systemic exposure and myopathy risk.'
  },
  {
    id: 'drug-propranolol',
    name: 'Propranolol',
    genericName: 'Propranolol Hydrochloride',
    brandNames: ['Inderal', 'InnoPran XL', 'Hemangeol'],
    drugClass: 'Non-selective Beta-Adrenergic Receptor Blocker',
    molecularFormula: 'C16H21NO2',
    molecularWeight: 259.34,
    mechanismOfAction: 'Competitively blocks both beta-1 adrenergic receptors (myocardial chronotropy and inotropy) and beta-2 adrenergic receptors (bronchial and vascular smooth muscle relaxation).',
    metabolism: 'Extensive first-pass hepatic metabolism (>90%) via CYP2D6, CYP1A2, and glucuronidation.',
    cypEnzymes: ['CYP2D6', 'CYP1A2'],
    excretionPathway: 'Almost completely excreted in urine (>90%) as metabolites; <1% excreted unchanged.',
    renalClearancePercent: 10,
    hepaticClearancePercent: 90,
    halfLife: '3 - 6 hours',
    knownTargets: [
      {
        id: 'ADRB2',
        name: 'Beta-2 Adrenergic Receptor',
        symbol: 'ADRB2',
        uniprotId: 'P07550',
        pdbId: '2RH1',
        organism: 'Homo sapiens',
        function: 'G-protein coupled receptor mediating airway smooth muscle relaxation via intracellular cAMP elevation.'
      },
      {
        id: 'ADRB1',
        name: 'Beta-1 Adrenergic Receptor',
        symbol: 'ADRB1',
        uniprotId: 'P08588',
        pdbId: '2Y00',
        organism: 'Homo sapiens',
        function: 'Predominant cardiac adrenergic receptor regulating heart rate and contractility.'
      }
    ],
    pubchemCid: 4946,
    smiles: 'CC(C)NCC(COC1=CC=CC2=CC=CC=C21)O',
    has3DStructure: true,
    defaultPdbId: '2RH1',
    summary: 'Prototypical non-cardioselective beta-blocker that blocks pulmonary beta-2 receptors, causing severe airway resistance in reactive airway disorders.'
  },
  {
    id: 'drug-aspirin',
    name: 'Aspirin',
    genericName: 'Acetylsalicylic Acid',
    brandNames: ['Bayer Aspirin', 'Ecotrin', 'Bufferin'],
    drugClass: 'Salicylate / Antiplatelet & NSAID',
    molecularFormula: 'C9H8O4',
    molecularWeight: 180.16,
    mechanismOfAction: 'Irreversibly acetylates Serine-529/530 in COX-1 and COX-2, permanently extinguishing platelet thromboxane A2 (TXA2) generation for the 7-10 day lifespan of the platelet.',
    metabolism: 'Rapidly de-acetylated by plasma and liver esterases to salicylic acid; further metabolized by hepatic conjugation.',
    cypEnzymes: ['CYP2C9'],
    excretionPathway: 'Renal clearance is highly pH-dependent (alkaline urine increases free salicylate excretion markedly).',
    renalClearancePercent: 85,
    hepaticClearancePercent: 15,
    halfLife: '15 - 20 minutes (aspirin); 2 - 30 hours for salicylate metabolite (dose-dependent)',
    knownTargets: [
      {
        id: 'PTGS1',
        name: 'Prostaglandin G/H Synthase 1 (COX-1)',
        symbol: 'PTGS1',
        uniprotId: 'P23219',
        pdbId: '1PTH',
        organism: 'Homo sapiens',
        function: 'Produces thromboxane A2 in platelets and protective mucosal prostacyclin in gastrointestinal lining.'
      }
    ],
    pubchemCid: 2244,
    smiles: 'CC(=O)OC1=CC=CC=C1C(=O)O',
    has3DStructure: true,
    defaultPdbId: '1PTH',
    summary: 'Covalent inhibitor of platelet COX-1; exerts irreversible hemostatic impairment and suppresses protective gastric prostaglandins.'
  },
  {
    id: 'drug-digoxin',
    name: 'Digoxin',
    genericName: 'Digoxin',
    brandNames: ['Lanoxin', 'Digitek', 'Cardoxin'],
    drugClass: 'Cardiac Glycoside',
    molecularFormula: 'C41H64O14',
    molecularWeight: 780.94,
    mechanismOfAction: 'Inhibits sodium-potassium adenosine triphosphatase (Na+/K+-ATPase) pump in cardiac sarcolemma, raising intracellular Na+ and driving secondary Ca2+ influx via Na+/Ca2+ exchanger.',
    metabolism: 'Minimal hepatic metabolism (approx. 16%); major active drug elimination mediated by renal P-glycoprotein (ABCB1).',
    cypEnzymes: [],
    excretionPathway: '70 - 80% eliminated unchanged in urine by glomerular filtration and active tubular secretion.',
    renalClearancePercent: 80,
    hepaticClearancePercent: 20,
    halfLife: '36 - 48 hours in healthy adults; prolonged up to 5 days in renal failure',
    knownTargets: [
      {
        id: 'ATP1A1',
        name: 'Sodium/Potassium-transporting ATPase subunit alpha-1',
        symbol: 'ATP1A1',
        uniprotId: 'P05023',
        pdbId: '4RET',
        organism: 'Homo sapiens',
        function: 'Maintains electrochemical gradient across sarcolemma; high-affinity binding site for cardiotonic steroids.'
      }
    ],
    pubchemCid: 2724385,
    smiles: 'CC1C(C(CC(O1)OC2C(C(CC(O2)OC3C(C(CC(O3)OC4CCC5(C(C4)CCC6C5CCC7(C6(CCC7C8=CC(=O)OC8)O)C)C)O)O)O)O)O)O',
    has3DStructure: true,
    defaultPdbId: '4RET',
    summary: 'Cardiac inotrope with ultra-narrow therapeutic index (0.5 - 0.9 ng/mL) whose receptor affinity is acutely elevated by hypokalemia.'
  },
  {
    id: 'drug-gentamicin',
    name: 'Gentamicin',
    genericName: 'Gentamicin Sulfate',
    brandNames: ['Garamycin', 'Gentak', 'Cidomycin'],
    drugClass: 'Aminoglycoside Antibiotic',
    molecularFormula: 'C21H43N5O7',
    molecularWeight: 477.60,
    mechanismOfAction: 'Irreversibly binds to the bacterial 30S ribosomal subunit (specifically 16S rRNA), causing misreading of genetic code and inhibiting protein synthesis.',
    metabolism: 'Not metabolized by mammalian enzymes.',
    cypEnzymes: [],
    excretionPathway: 'Excreted >95% unchanged in urine by glomerular filtration; actively accumulates in renal proximal tubular cells via megalin-cubilin endocytosis.',
    renalClearancePercent: 98,
    hepaticClearancePercent: 2,
    halfLife: '2 - 3 hours (normal renal function); 20 - 40 hours in severe renal impairment',
    knownTargets: [
      {
        id: 'RRNA16S',
        name: 'Bacterial 30S Ribosomal Subunit',
        symbol: '16S-rRNA',
        uniprotId: 'N/A',
        pdbId: '4V52',
        organism: 'Escherichia coli / Thermus thermophilus',
        function: 'Bacterial protein translation machinery.'
      }
    ],
    pubchemCid: 3467,
    smiles: 'CC(C1CCC(C(O1)OC2C(CC(C(C2O)OC3C(C(C(CO3)(C)O)NC)O)N)N)N)NC',
    has3DStructure: true,
    defaultPdbId: '4V52',
    summary: 'Potent bactericidal aminoglycoside that accumulates in lysosomes of renal proximal tubule cells, causing dose- and duration-dependent acute tubular necrosis.'
  },
  {
    id: 'drug-spironolactone',
    name: 'Spironolactone',
    genericName: 'Spironolactone',
    brandNames: ['Aldactone', 'CaroSpir'],
    drugClass: 'Potassium-Sparing Diuretic / Aldosterone Antagonist',
    molecularFormula: 'C24H32O4S',
    molecularWeight: 416.57,
    mechanismOfAction: 'Competitive antagonist of the mineralocorticoid receptor (MR) in the cortical collecting tubule, preventing aldosterone-mediated synthesis of apical ENaC channels and basolateral Na+/K+-ATPase pumps.',
    metabolism: 'Extensive and rapid hepatic metabolism to active metabolites including canrenone and 7-alpha-thiomethylspironolactone.',
    cypEnzymes: ['CYP3A4', 'CYP2C9'],
    excretionPathway: 'Metabolites excreted primarily in urine (approx. 50%) and bile/feces (approx. 35%).',
    renalClearancePercent: 55,
    hepaticClearancePercent: 45,
    halfLife: '1.4 hours (spironolactone); 16.5 hours (canrenone active metabolite)',
    knownTargets: [
      {
        id: 'NR3C2',
        name: 'Mineralocorticoid Receptor',
        symbol: 'NR3C2',
        uniprotId: 'P08235',
        pdbId: '2AA2',
        organism: 'Homo sapiens',
        function: 'Nuclear receptor regulating renal sodium retention and potassium/proton secretion.'
      }
    ],
    pubchemCid: 5833,
    smiles: 'CC(=O)SC1CC2=CC(=O)CCC2(C3C1C4CCC5(C4(CC3)C)CCC(=O)O5)C',
    has3DStructure: true,
    defaultPdbId: '2AA2',
    summary: 'Steroidal aldosterone antagonist used in heart failure and cirrhosis that preserves potassium; catastrophic in advanced renal dysfunction.'
  },
  {
    id: 'drug-methotrexate',
    name: 'Methotrexate',
    genericName: 'Methotrexate',
    brandNames: ['Trexall', 'Rasuvo', 'Otrexup', 'Rheumatrex'],
    drugClass: 'Antimetabolite / Antifolate Immunosuppressive & Antineoplastic',
    molecularFormula: 'C20H22N8O5',
    molecularWeight: 454.44,
    mechanismOfAction: 'Competitively inhibits dihydrofolate reductase (DHFR) with 1000-fold higher affinity than folate, stopping tetrahydrofolate regeneration required for purine and thymidylate synthesis.',
    metabolism: 'Partially metabolized by hepatic aldehyde oxidase to 7-hydroxymethotrexate; polyglutamated inside cells.',
    cypEnzymes: [],
    excretionPathway: 'Primarily eliminated renal (80 - 90% unchanged via glomerular filtration and active OAT1/OAT3 tubular secretion).',
    renalClearancePercent: 85,
    hepaticClearancePercent: 15,
    halfLife: '3 - 10 hours (low dose); 8 - 15 hours (high dose)',
    knownTargets: [
      {
        id: 'DHFR',
        name: 'Dihydrofolate Reductase',
        symbol: 'DHFR',
        uniprotId: 'P00374',
        pdbId: '1U72',
        organism: 'Homo sapiens',
        function: 'Enzyme reducing dihydrofolic acid to tetrahydrofolic acid.'
      }
    ],
    pubchemCid: 126941,
    smiles: 'CN(CC1=CN=C2C(=N1)C(=NC(=N2)N)N)C3=CC=C(C=C3)C(=O)NC(CCC(=O)O)C(=O)O',
    has3DStructure: true,
    defaultPdbId: '1U72',
    summary: 'Potent antifolate agent cleared via renal tubular secretion; precipitates in renal tubules under acidic conditions and accumulates toxically in renal failure.'
  },
  {
    id: 'drug-amiodarone',
    name: 'Amiodarone',
    genericName: 'Amiodarone Hydrochloride',
    brandNames: ['Cordarone', 'Pacerone', 'Nexterone'],
    drugClass: 'Class III Antiarrhythmic Agent',
    molecularFormula: 'C25H29I2NO3',
    molecularWeight: 645.31,
    mechanismOfAction: 'Blocks potassium rectifier channels (prolonging cardiac action potential duration and refractory period); also inhibits inactivated sodium channels and exerts non-competitive alpha- and beta-adrenergic blockade.',
    metabolism: 'Extensive hepatic biotransformation by CYP3A4 and CYP2C8 to active desethylamiodarone (DEA); extremely lipophilic and tissue-accumulating.',
    cypEnzymes: ['CYP3A4', 'CYP2C8'],
    excretionPathway: 'Almost exclusively biliary and fecal elimination; negligible renal excretion (<1%).',
    renalClearancePercent: 1,
    hepaticClearancePercent: 99,
    halfLife: '40 - 55 days (terminal elimination half-life)',
    knownTargets: [
      {
        id: 'KCNH2',
        name: 'Potassium voltage-gated channel subfamily H member 2 (hERG)',
        symbol: 'KCNH2',
        uniprotId: 'Q12809',
        pdbId: '5VA1',
        organism: 'Homo sapiens',
        function: 'Cardiac rapid delayed rectifier potassium current (IKr) channel.'
      },
      {
        id: 'THRA',
        name: 'Thyroid Hormone Receptor Alpha',
        symbol: 'THRA',
        uniprotId: 'P10827',
        pdbId: '2H79',
        organism: 'Homo sapiens',
        function: 'Nuclear receptor for triiodothyronine; amiodarone contains 37% iodine by molecular weight and inhibits thyroid hormone deiodinases.'
      }
    ],
    pubchemCid: 2157,
    smiles: 'CCCC1=C(C2=CC=CC=C2O1)C(=O)C3=CC(=C(C(=C3)I)OCCN(CC)CC)I',
    has3DStructure: true,
    defaultPdbId: '5VA1',
    summary: 'Iodine-rich lipophilic antiarrhythmic with multi-week tissue half-life and complex endocrine, pulmonary, and hepatic toxicity profiles.'
  }
];
