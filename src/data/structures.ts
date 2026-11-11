/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MolecularComplex } from '../types';

export const MOLECULAR_COMPLEXES: Record<string, MolecularComplex> = {
  '1CX2': {
    pdbId: '1CX2',
    drugId: 'drug-ibuprofen',
    drugName: 'Ibuprofen',
    ligandCode: 'IBP',
    proteinName: 'Prostaglandin G/H Synthase 2 (Cyclooxygenase-2 / COX-2)',
    resolution: '3.00 Å',
    experimentalMethod: 'X-ray Diffraction (High-resolution Crystallography)',
    isExperimental: true,
    overview: 'Experimental crystal structure of homodimeric human/murine COX-2 in complex with the non-selective NSAID (S)-Ibuprofen bound deep within the cyclooxygenase active site pocket.',
    bindingPocketCoordinates: {
      centerX: 24.5,
      centerY: 21.8,
      centerZ: 14.2,
      sizeX: 18.0,
      sizeY: 18.0,
      sizeZ: 18.0
    },
    activeBindingResidues: [
      {
        residueName: 'ARG',
        residueNumber: 120,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.72,
        description: 'Guanidinium group of Arg120 forms a direct electrostatic and hydrogen-bonding salt bridge with the carboxylate group of ibuprofen.',
        significance: 'Critical anchoring interaction at the entrance of the cyclooxygenase active site channel; stabilizes the carboxylate headgroup.'
      },
      {
        residueName: 'TYR',
        residueNumber: 355,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.89,
        description: 'Phenolic hydroxyl of Tyr355 pairs with the carboxylate oxygen of ibuprofen, creating the tight catalytic constriction.',
        significance: 'Together with Arg120, forms the constriction mouth preventing substrate access to the catalytic core.'
      },
      {
        residueName: 'VAL',
        residueNumber: 523,
        chain: 'A',
        interactionType: 'Hydrophobic Contact',
        distanceAngstroms: 3.65,
        description: 'Val523 creates a side-pocket cavity specific to COX-2 (in COX-1, the larger Ile523 narrows this space).',
        significance: 'Differentiates the COX-2 binding channel volume from COX-1.'
      },
      {
        residueName: 'GLU',
        residueNumber: 524,
        chain: 'A',
        interactionType: 'Electrostatic',
        distanceAngstroms: 3.42,
        description: 'Glu524 coordinates with Arg120 to position the basic pocket entrance network.',
        significance: 'Maintains orientation of the catalytic triad.'
      },
      {
        residueName: 'SER',
        residueNumber: 530,
        chain: 'A',
        interactionType: 'Hydrophobic Contact',
        distanceAngstroms: 3.84,
        description: 'Ser530 is positioned near the hydrophobic isobutyl tail of ibuprofen.',
        significance: 'The identical serine residue irreversibly acetylated by aspirin, demonstrating steric overlap.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (COX-2)',
        subheading: 'Enzymatic Generator of Prostaglandins',
        explanation: 'Cyclooxygenase-2 (COX-2) is a membrane-associated homodimer shown here in cartoon ribbons. In healthy tissue, it converts membrane arachidonic acid into prostaglandin precursors that regulate inflammatory signaling and maintain renal vasodilatory blood flow.',
        cameraTarget: { x: 25, y: 22, z: 15 },
        zoomLevel: 1.0,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Ibuprofen)',
        subheading: 'Occupying the Hydrophobic Channel',
        explanation: 'Notice the ibuprofen molecule highlighted in bright sticks inside the interior cavity of the protein. The molecule consists of an isobutylphenyl hydrophobic tail and a propionic acid carboxylate head.',
        cameraTarget: { x: 24.5, y: 21.8, z: 14.2 },
        zoomLevel: 1.6,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'Arg120 and Tyr355 Salt Bridge Constriction',
        explanation: 'Observe the specific amino acid residues surrounding the drug. Arg120 forms a tight hydrogen bond (2.72 Å) with the carboxylate oxygen of ibuprofen. Tyr355 reinforces this lock, physically sealing the channel.',
        cameraTarget: { x: 24.5, y: 21.8, z: 14.2 },
        zoomLevel: 2.2,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Arresting Vasodilatory Autoregulation',
        explanation: 'Because ibuprofen binds tightly into this channel, endogenous arachidonic acid cannot enter the catalytic pocket. In kidney disease where afferent arterioles rely on prostaglandin E2 to stay open against high angiotensin II, this blockage triggers immediate vasoconstriction and filtration collapse.',
        cameraTarget: { x: 25, y: 22, z: 15 },
        zoomLevel: 1.4,
        highlightFocus: 'effect'
      }
    ]
  },
  '1O86': {
    pdbId: '1O86',
    drugId: 'drug-lisinopril',
    drugName: 'Lisinopril',
    ligandCode: 'LPR',
    proteinName: 'Angiotensin-Converting Enzyme (Somatic ACE)',
    resolution: '2.00 Å',
    experimentalMethod: 'X-ray Diffraction',
    isExperimental: true,
    overview: 'High-resolution crystal structure of human testicular/somatic ACE complexed with the nanomolar antihypertensive inhibitor lisinopril, revealing active-site catalytic zinc coordination.',
    bindingPocketCoordinates: {
      centerX: 41.2,
      centerY: 37.5,
      centerZ: 44.1,
      sizeX: 16.0,
      sizeY: 16.0,
      sizeZ: 16.0
    },
    activeBindingResidues: [
      {
        residueName: 'ZN',
        residueNumber: 701,
        chain: 'A',
        interactionType: 'Coordination',
        distanceAngstroms: 2.05,
        description: 'Divalent catalytic zinc ion coordinated directly by the carboxyl group of lisinopril.',
        significance: 'Primary catalytic driving force; mimics the tetrahedral intermediate of peptide bond cleavage.'
      },
      {
        residueName: 'HIS',
        residueNumber: 383,
        chain: 'A',
        interactionType: 'Coordination',
        distanceAngstroms: 2.12,
        description: 'His383 coordinates the central zinc atom in the conserved HEXXH zinc-binding motif.',
        significance: 'Maintains catalytic zinc geometry.'
      },
      {
        residueName: 'GLU',
        residueNumber: 411,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.68,
        description: 'Glu411 carboxylate hydrogen bonds with the inhibitor amide and zinc-bound water mimic.',
        significance: 'Essential general base residue in ACE catalysis.'
      },
      {
        residueName: 'TYR',
        residueNumber: 523,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.81,
        description: 'Tyr523 phenol forms a strong hydrogen bond to the C-terminal carboxylate of lisinopril.',
        significance: 'Confers strict selectivity for C-terminal dipeptide cleavage.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (ACE)',
        subheading: 'Master Regulator of the RAAS Axis',
        explanation: 'Angiotensin-Converting Enzyme is a zinc metallopeptidase shown here in cartoon ribbons. It cleaves the decapeptide Angiotensin I into the octapeptide Angiotensin II, the most potent physiological vasoconstrictor in the human body.',
        cameraTarget: { x: 41, y: 37, z: 44 },
        zoomLevel: 1.0,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Lisinopril)',
        subheading: 'Peptidomimetic Competitive Blocker',
        explanation: 'Lisinopril is highlighted in sticks sitting directly in the central catalytic cleft. Its lysine side chain and prolyl ring mimic the C-terminal sequence of natural substrates.',
        cameraTarget: { x: 41.2, y: 37.5, z: 44.1 },
        zoomLevel: 1.7,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'Catalytic Zinc Coordination (2.05 Å)',
        explanation: 'Notice the central divalent zinc ion (Zn701). Lisinopril binds directly to this zinc ion with an ultra-short 2.05 Å coordination bond, frozen in place by flanking histidine residues (His383, His387) and Glu411.',
        cameraTarget: { x: 41.2, y: 37.5, z: 44.1 },
        zoomLevel: 2.3,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Collapse of Efferent Arteriolar Resistance',
        explanation: 'By inactivating ACE, lisinopril halts systemic angiotensin II production. In patients with bilateral renal artery stenosis or acute kidney injury who rely on efferent arteriolar constriction to maintain glomerular filtration, this drug causes intraglomerular pressure to collapse completely.',
        cameraTarget: { x: 41, y: 37, z: 44 },
        zoomLevel: 1.3,
        highlightFocus: 'effect'
      }
    ]
  },
  '1HWK': {
    pdbId: '1HWK',
    drugId: 'drug-atorvastatin',
    drugName: 'Atorvastatin',
    ligandCode: '101',
    proteinName: '3-Hydroxy-3-Methylglutaryl-CoA Reductase (HMG-CoA Reductase)',
    resolution: '2.22 Å',
    experimentalMethod: 'X-ray Diffraction',
    isExperimental: true,
    overview: 'Crystal structure of human HMG-CoA reductase catalytic domain complexed with atorvastatin, revealing how the statin\'s dihydroxyheptanoic acid moiety mimics the HMG intermediate.',
    bindingPocketCoordinates: {
      centerX: 18.5,
      centerY: 4.2,
      centerZ: 28.6,
      sizeX: 18.0,
      sizeY: 18.0,
      sizeZ: 18.0
    },
    activeBindingResidues: [
      {
        residueName: 'SER',
        residueNumber: 684,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.65,
        description: 'Ser684 hydroxyl forms a hydrogen bond with the C5-hydroxyl group of the statin dihydroxy acid head.',
        significance: 'Mimics interaction with the natural HMG-CoA substrate.'
      },
      {
        residueName: 'ASP',
        residueNumber: 690,
        chain: 'A',
        interactionType: 'Electrostatic',
        distanceAngstroms: 2.84,
        description: 'Asp690 coordinates the polar terminal carboxylate of atorvastatin.',
        significance: 'Critical catalytic residue in the mevalonate generation step.'
      },
      {
        residueName: 'LYS',
        residueNumber: 735,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.76,
        description: 'Lys735 forms a salt bridge with the terminal carboxylate group.',
        significance: 'Provides electrostatic anchoring across the catalytic dimer interface.'
      },
      {
        residueName: 'ARG',
        residueNumber: 590,
        chain: 'A',
        interactionType: 'Pi-Stacking',
        distanceAngstroms: 3.51,
        description: 'Arg590 and adjacent phenyl ring create a hydrophobic clamp accommodating the fluorophenyl ring of atorvastatin.',
        significance: 'Provides the high picomolar binding affinity of synthetic statins over natural compactin.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (HMG-CoA Reductase)',
        subheading: 'Rate-Limiting Enzyme in Cholesterol Synthesis',
        explanation: 'HMG-CoA reductase operates as a tetramer of dimers in the endoplasmic reticulum. It controls the rate-limiting conversion of HMG-CoA to mevalonate, the precursor to cholesterol, coenzyme Q10, and isoprenoids.',
        cameraTarget: { x: 18, y: 4, z: 28 },
        zoomLevel: 1.0,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Atorvastatin)',
        subheading: 'Substrate Mimic + Hydrophobic Anchors',
        explanation: 'Atorvastatin occupies the active site cleft. Its flexible dihydroxyheptanoic acid tail occupies the catalytic HMG site, while its bulky pyrrole core and fluorophenyl rings reach into an adjacent hydrophobic groove.',
        cameraTarget: { x: 18.5, y: 4.2, z: 28.6 },
        zoomLevel: 1.7,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'Salt Bridges with Lys735 and Asp690',
        explanation: 'The terminal carboxylate of the drug is held by a network of hydrogen bonds and salt bridges with Ser684, Asp690, and Lys735. The fluorophenyl ring makes hydrophobic contacts with Arg590 and Leu853.',
        cameraTarget: { x: 18.5, y: 4.2, z: 28.6 },
        zoomLevel: 2.2,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Myonecrosis from Hepatic Spillover',
        explanation: 'In severe liver disease (cirrhosis), hepatic CYP3A4 clearance fails, causing a 16-fold surge in systemic statin levels. In skeletal muscle, excessive HMG-CoA reductase inhibition depletes CoQ10 in the mitochondrial respiratory chain, causing lethal rhabdomyolysis.',
        cameraTarget: { x: 18, y: 4, z: 28 },
        zoomLevel: 1.3,
        highlightFocus: 'effect'
      }
    ]
  },
  '1OG5': {
    pdbId: '1OG5',
    drugId: 'drug-warfarin',
    drugName: 'Warfarin',
    ligandCode: 'WFA',
    proteinName: 'Cytochrome P450 2C9 (CYP2C9)',
    resolution: '2.55 Å',
    experimentalMethod: 'X-ray Diffraction',
    isExperimental: true,
    overview: 'Crystal structure of human microsomal Cytochrome P450 2C9 in complex with (S)-warfarin positioned directly over the catalytic heme iron center.',
    bindingPocketCoordinates: {
      centerX: -12.4,
      centerY: 85.1,
      centerZ: 32.8,
      sizeX: 18.0,
      sizeY: 18.0,
      sizeZ: 18.0
    },
    activeBindingResidues: [
      {
        residueName: 'ARG',
        residueNumber: 97,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.82,
        description: 'Arg97 side chain forms a hydrogen bond with the coumarin lactone carbonyl of warfarin.',
        significance: 'Critical substrate recognition residue in CYP2C9 specificity.'
      },
      {
        residueName: 'PHE',
        residueNumber: 476,
        chain: 'A',
        interactionType: 'Pi-Stacking',
        distanceAngstroms: 3.61,
        description: 'Phe476 aromatic ring stacks against the coumarin core of warfarin.',
        significance: 'Positions the 7-position of S-warfarin directly above the heme iron for regiospecific 7-hydroxylation.'
      },
      {
        residueName: 'HEM',
        residueNumber: 501,
        chain: 'A',
        interactionType: 'Electrostatic',
        distanceAngstroms: 4.10,
        description: 'Heme porphyrin iron center (Fe) poised to transfer activated oxygen.',
        significance: 'Catalytic center of CYP450 monooxygenase oxidation.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (CYP2C9)',
        subheading: 'Major Hepatic Drug-Metabolizing Monooxygenase',
        explanation: 'Cytochrome P450 2C9 is a key microsomal heme-thiolate enzyme in human hepatocytes. It metabolizes approximately 15% of clinically used drugs, most critically the narrow therapeutic index anticoagulant S-warfarin.',
        cameraTarget: { x: -12, y: 85, z: 32 },
        zoomLevel: 1.0,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Warfarin)',
        subheading: 'Positioned Over the Catalytic Heme',
        explanation: 'Warfarin is positioned inside the deep active site pocket directly above the planar heme macrocycle (shown with central iron atom). Its 4-hydroxycoumarin core is tailored to this pocket.',
        cameraTarget: { x: -12.4, y: 85.1, z: 32.8 },
        zoomLevel: 1.8,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'Arg97 Anchor and Phe476 Pi-Stacking',
        explanation: 'Arg97 establishes an electrostatic clamp with the coumarin ring, while Phe476 and Phe114 orient the phenyl substituent so that C-7 faces the ferryl-oxo heme intermediate for metabolic clearance.',
        cameraTarget: { x: -12.4, y: 85.1, z: 32.8 },
        zoomLevel: 2.2,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Hepatic Failure and Catastrophic Hemorrhage',
        explanation: 'In cirrhotic liver disease, hepatocyte loss and portosystemic shunting drastically reduce CYP2C9 content. Unmetabolized S-warfarin accumulates to toxic levels, while the diseased liver cannot synthesize clotting factors, triggering fatal hemorrhages.',
        cameraTarget: { x: -12, y: 85, z: 32 },
        zoomLevel: 1.3,
        highlightFocus: 'effect'
      }
    ]
  },
  '2RH1': {
    pdbId: '2RH1',
    drugId: 'drug-propranolol',
    drugName: 'Propranolol',
    ligandCode: 'CAU',
    proteinName: 'Beta-2 Adrenergic Receptor (ADRB2)',
    resolution: '2.40 Å',
    experimentalMethod: 'X-ray Diffraction (Lipidic Cubic Phase)',
    isExperimental: true,
    overview: 'Landmark high-resolution crystal structure of the human beta-2 adrenergic G-protein coupled receptor in complex with an inverse agonist/antagonist exhibiting the beta-blocker pharmacophore.',
    bindingPocketCoordinates: {
      centerX: -3.5,
      centerY: 7.2,
      centerZ: 8.9,
      sizeX: 16.0,
      sizeY: 16.0,
      sizeZ: 16.0
    },
    activeBindingResidues: [
      {
        residueName: 'ASP',
        residueNumber: 113,
        chain: 'A',
        interactionType: 'Electrostatic',
        distanceAngstroms: 2.74,
        description: 'Asp113 on transmembrane helix 3 (TM3) forms an essential salt bridge with the protonated secondary amine of the beta-blocker.',
        significance: 'Invariant anchor residue for all biogenic amine GPCR ligands; mutation completely abolishes ligand binding.'
      },
      {
        residueName: 'ASN',
        residueNumber: 312,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.88,
        description: 'Asn312 on TM7 forms a hydrogen bond with the chiral beta-hydroxyl group.',
        significance: 'Explains the 100-fold higher stereoselective affinity of the (S)-enantiomer over (R)-propranolol.'
      },
      {
        residueName: 'SER',
        residueNumber: 203,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 3.12,
        description: 'Ser203 and Ser207 on TM5 engage the aromatic core.',
        significance: 'Involved in receptor conformational locking in the inactive state.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (ADRB2)',
        subheading: '7-Transmembrane Bronchial Dilator Receptor',
        explanation: 'The Beta-2 Adrenergic Receptor is a canonical 7-transmembrane G-protein coupled receptor (GPCR) embedded in the plasma membrane of airway smooth muscle cells. When activated by adrenaline, it stimulates cAMP and induces bronchodilation.',
        cameraTarget: { x: -3.5, y: 7.2, z: 8.9 },
        zoomLevel: 1.0,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Beta-Blocker)',
        subheading: 'Occupying the Transmembrane Pocket',
        explanation: 'Deep in the upper third of the 7-transmembrane bundle sits the beta-blocker molecule, fitting snugly between helices III, V, VI, and VII to block agonist access.',
        cameraTarget: { x: -3.5, y: 7.2, z: 8.9 },
        zoomLevel: 1.8,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'The Asp113 Salt Bridge and Asn312 Chiral H-Bond',
        explanation: 'The positively charged amino group forms a 2.74 Å salt bridge with Asp113. The chiral hydroxyl group forms a stereoselective hydrogen bond to Asn312, locking the receptor in its inactive state.',
        cameraTarget: { x: -3.5, y: 7.2, z: 8.9 },
        zoomLevel: 2.3,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Asthmatic Airway Closure & Asphyxia',
        explanation: 'In asthma, airway smooth muscle is hyperreactive and tonic beta-2 stimulation is required to prevent bronchospasm. Non-selective beta-blockade shuts down intracellular cAMP, leaving cholinergic bronchoconstriction unopposed and causing life-threatening airway closure.',
        cameraTarget: { x: -3.5, y: 7.2, z: 8.9 },
        zoomLevel: 1.3,
        highlightFocus: 'effect'
      }
    ]
  },
  '4RET': {
    pdbId: '4RET',
    drugId: 'drug-digoxin',
    drugName: 'Digoxin',
    ligandCode: 'DGX',
    proteinName: 'Sodium/Potassium-transporting ATPase (Na+/K+-ATPase)',
    resolution: '2.80 Å',
    experimentalMethod: 'X-ray Diffraction',
    isExperimental: true,
    overview: 'Crystal structure of the cardiac glycoside receptor Na+/K+-ATPase in an E2-P phosphoenzyme state in complex with digoxin bound within the extracellular ion-access pathway.',
    bindingPocketCoordinates: {
      centerX: 56.4,
      centerY: 48.2,
      centerZ: 38.6,
      sizeX: 18.0,
      sizeY: 18.0,
      sizeZ: 18.0
    },
    activeBindingResidues: [
      {
        residueName: 'GLN',
        residueNumber: 111,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.85,
        description: 'Gln111 in transmembrane segment M1 forms a hydrogen bond with the steroid lactone ring.',
        significance: 'Critical species-specific determinant of high glycoside sensitivity in humans.'
      },
      {
        residueName: 'ASN',
        residueNumber: 122,
        chain: 'A',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.92,
        description: 'Asn122 on M2 interacts with the cardenolide steroid core.',
        significance: 'Maintains the pump in an occluded, locked E2 conformation.'
      },
      {
        residueName: 'THR',
        residueNumber: 797,
        chain: 'A',
        interactionType: 'Hydrophobic Contact',
        distanceAngstroms: 3.48,
        description: 'Thr797 on M6 borders the trisaccharide digitoxose chain.',
        significance: 'Anchors the carbohydrate sugars in the extracellular vestibule.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (Na+/K+-ATPase)',
        subheading: 'Electrogenic Ion Gradient Engine',
        explanation: 'The Na+/K+-ATPase pump is an essential P-type ATPase that uses ATP to transport 3 Na+ out of the cell in exchange for 2 K+ entering, maintaining the negative resting potential in cardiac myocytes.',
        cameraTarget: { x: 56, y: 48, z: 38 },
        zoomLevel: 1.0,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Digoxin)',
        subheading: 'Steroid Core with Trisaccharide Sugar Chain',
        explanation: 'Digoxin is an extraordinarily large glycoside molecule with a central cyclopentanoperhydrophenanthrene steroid nucleus, an unsaturated lactone ring, and three digitoxose sugar units extending into the extracellular cavity.',
        cameraTarget: { x: 56.4, y: 48.2, z: 38.6 },
        zoomLevel: 1.6,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'Extracellular Cation Cavity Blockade',
        explanation: 'Digoxin inserts deep into the extracellular cation pathway. Key residues Gln111 and Asn122 clamp the lactone ring, locking the enzyme in an inactive phosphorylated intermediate state.',
        cameraTarget: { x: 56.4, y: 48.2, z: 38.6 },
        zoomLevel: 2.2,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Hypokalemia-Induced Toxic Arrhythmias',
        explanation: 'Under normal conditions, extracellular K+ competes with digoxin for this binding pocket. In hypokalemia, K+ is absent, allowing digoxin to bind with maximum affinity. Intracellular Na+ surges, triggering severe Ca2+ overload and fatal ventricular arrhythmias.',
        cameraTarget: { x: 56, y: 48, z: 38 },
        zoomLevel: 1.3,
        highlightFocus: 'effect'
      }
    ]
  },
  '5X0G': {
    pdbId: '5X0G',
    drugId: 'drug-metformin',
    drugName: 'Metformin',
    ligandCode: 'MET',
    proteinName: 'Mitochondrial Respiratory Chain Complex I (NADH-Ubiquinone Oxidoreductase)',
    resolution: '3.30 Å',
    experimentalMethod: 'Cryo-Electron Microscopy (Single Particle)',
    isExperimental: true,
    overview: 'High-resolution cryo-EM structure of human mitochondrial respiratory megacomplex with the biguanide metformin bound at the amphipathic ubiquinone binding channel.',
    bindingPocketCoordinates: {
      centerX: 120.5,
      centerY: 98.2,
      centerZ: 145.0,
      sizeX: 18.0,
      sizeY: 18.0,
      sizeZ: 18.0
    },
    activeBindingResidues: [
      {
        residueName: 'HIS',
        residueNumber: 150,
        chain: 'N',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 2.78,
        description: 'His150 forms a hydrogen bond with the biguanide imino nitrogen of metformin.',
        significance: 'Disrupts the proton-coupled electron transfer pathway toward the ubiquinone reduction site.'
      },
      {
        residueName: 'ASP',
        residueNumber: 157,
        chain: 'N',
        interactionType: 'Electrostatic',
        distanceAngstroms: 2.89,
        description: 'Asp157 carboxylate side chain forms a strong salt bridge with the positively charged biguanide head.',
        significance: 'Primary electrostatic anchor holding the small hydrophilic biguanide molecule.'
      },
      {
        residueName: 'GLU',
        residueNumber: 100,
        chain: 'N',
        interactionType: 'Hydrogen Bond',
        distanceAngstroms: 3.05,
        description: 'Glu100 coordinates with the terminal dimethylamino group.',
        significance: 'Interferes with quinone-binding cavity hydration.'
      }
    ],
    guidedSteps: [
      {
        stepNumber: 1,
        title: 'Step 1: Meet the Protein (Complex I)',
        subheading: 'Gateway of Mitochondrial ATP Generation',
        explanation: 'Mitochondrial Complex I is a massive 45-subunit megacomplex that couples NADH oxidation to proton translocation across the inner mitochondrial membrane, generating the proton motive force for ATP synthesis.',
        cameraTarget: { x: 120, y: 98, z: 145 },
        zoomLevel: 0.9,
        highlightFocus: 'protein'
      },
      {
        stepNumber: 2,
        title: 'Step 2: Locate the Drug (Metformin)',
        subheading: 'Small Biguanide in the Quinone Channel',
        explanation: 'Metformin is a compact, polar biguanide molecule shown in sticks, bound at the interface of the hydrophilic peripheral arm and the membrane arm where ubiquinone binds.',
        cameraTarget: { x: 120.5, y: 98.2, z: 145.0 },
        zoomLevel: 1.9,
        highlightFocus: 'drug'
      },
      {
        stepNumber: 3,
        title: 'Step 3: Explore the Binding Region',
        subheading: 'His150 and Asp157 Electrostatic Anchor',
        explanation: 'The positively charged guanidinium group forms a strong salt bridge with Asp157 and a hydrogen bond with His150, physically impeding ubiquinone reduction and electron flow.',
        cameraTarget: { x: 120.5, y: 98.2, z: 145.0 },
        zoomLevel: 2.4,
        highlightFocus: 'pocket'
      },
      {
        stepNumber: 4,
        title: 'Step 4: Understand the Biological Effect',
        subheading: 'Renal Failure & Metformin-Associated Lactic Acidosis',
        explanation: 'In healthy individuals, mild Complex I inhibition activates AMPK and lowers hepatic glucose production. But in renal impairment, metformin clearance stops and tissue drug concentrations surge tenfold. Complex I is shut down, blocking pyruvate entry into the Krebs cycle and driving lethal lactic acidosis.',
        cameraTarget: { x: 120, y: 98, z: 145 },
        zoomLevel: 1.3,
        highlightFocus: 'effect'
      }
    ]
  }
};
