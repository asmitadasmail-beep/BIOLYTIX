/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type InteractionCategory =
  | 'Renal safety concerns'
  | 'Hepatic safety concerns'
  | 'Metabolic interactions'
  | 'Pharmacodynamic interactions'
  | 'Altered drug absorption'
  | 'Altered drug distribution'
  | 'Altered drug metabolism'
  | 'Altered drug excretion'
  | 'Other documented contraindications or precautions';

export type SeverityLevel =
  | 'Contraindicated'
  | 'Severe / High Risk'
  | 'Moderate Precaution'
  | 'Mild / Monitor'
  | 'No Interaction Documented'
  | 'Insufficient Evidence';

export interface ProteinTarget {
  id: string;
  name: string;
  symbol: string;
  uniprotId: string;
  pdbId: string;
  organism: string;
  function: string;
}

export interface Drug {
  id: string;
  name: string;
  genericName: string;
  brandNames: string[];
  drugClass: string;
  molecularFormula: string;
  molecularWeight: number;
  mechanismOfAction: string;
  metabolism: string;
  cypEnzymes: string[];
  excretionPathway: string;
  renalClearancePercent: number;
  hepaticClearancePercent: number;
  halfLife: string;
  knownTargets: ProteinTarget[];
  pubchemCid: number;
  smiles: string;
  has3DStructure: boolean;
  defaultPdbId?: string;
  summary: string;
}

export interface Disease {
  id: string;
  name: string;
  category: 'Renal' | 'Hepatic' | 'Cardiovascular' | 'Pulmonary' | 'Endocrine' | 'Gastrointestinal' | 'Hematologic';
  affectedOrgans: string[];
  pathophysiology: string;
  biologicalMechanisms: string[];
  associatedMetabolicChanges: string[];
  clinicalSignificance: string;
  commonPrevalence: string;
}

export interface BiologicalExplanation {
  normalBiologicalFunction: string;
  drugMechanismOfAction: string;
  diseasePhysiologicalChanges: string;
  molecularCellularMechanism: string;
  resultingPharmacologicalEffect: string;
  potentialSafetyImplications: string;
  plainLanguageSummary?: string;
}

export interface EvidenceSource {
  title: string;
  sourceType: 'FDA Label' | 'NIH/PubMed' | 'Clinical Guideline' | 'RCSB PDB' | 'PubChem';
  url: string;
  citation: string;
  accessDate: string;
}

export interface DrugDiseaseInteraction {
  id: string;
  drugId: string;
  diseaseId: string;
  category: InteractionCategory;
  severity: SeverityLevel;
  documentedSafetyConcern: string;
  biologicalExplanation: BiologicalExplanation;
  affectedOrganSystem: string;
  underlyingMechanism: string;
  sources: EvidenceSource[];
  isContraindicated: boolean;
  requiresDoseAdjustment: boolean;
  monitoringRecommendations: string[];
}

export interface ResidueInteraction {
  residueName: string;
  residueNumber: number;
  chain: string;
  interactionType: 'Hydrogen Bond' | 'Hydrophobic Contact' | 'Electrostatic' | 'Pi-Stacking' | 'Coordination';
  distanceAngstroms: number;
  description: string;
  significance: string;
}

export interface MolecularComplex {
  pdbId: string;
  drugId: string;
  drugName: string;
  ligandCode: string;
  proteinName: string;
  resolution: string;
  experimentalMethod: string;
  isExperimental: boolean;
  activeBindingResidues: ResidueInteraction[];
  bindingPocketCoordinates: {
    centerX: number;
    centerY: number;
    centerZ: number;
    sizeX: number;
    sizeY: number;
    sizeZ: number;
  };
  overview: string;
  guidedSteps: {
    stepNumber: number;
    title: string;
    subheading: string;
    explanation: string;
    cameraTarget?: { x: number; y: number; z: number };
    zoomLevel?: number;
    highlightFocus: 'protein' | 'drug' | 'pocket' | 'effect';
  }[];
}

export interface DockingJob {
  jobId: string;
  drugId: string;
  drugName: string;
  targetProteinId: string;
  targetProteinName: string;
  pdbId: string;
  gridBox: {
    centerX: number;
    centerY: number;
    centerZ: number;
    sizeX: number;
    sizeY: number;
    sizeZ: number;
  };
  exhaustiveness: number;
  status: 'queued' | 'running' | 'completed' | 'failed';
  progress: number;
  currentStepDescription: string;
  startedAt: string;
  completedAt?: string;
  results?: {
    bindingAffinityKcal: number;
    poses: {
      poseNumber: number;
      affinityKcal: number;
      rmsdLowerBound: number;
      rmsdUpperBound: number;
      keyContacts: string[];
    }[];
    interpretation: string;
    scientificDisclaimer: string;
  };
}

export interface PathwayNode {
  id: string;
  label: string;
  type: 'drug' | 'target' | 'normal_step' | 'disease_disruption' | 'adverse_outcome';
  organOrLocation: string;
  description: string;
  biochemicalDetails: string;
}

export interface PathwayEdge {
  from: string;
  to: string;
  label: string;
  effectType: 'inhibits' | 'activates' | 'converts' | 'exacerbates' | 'leads_to';
}

export interface BiologicalPathway {
  id: string;
  title: string;
  drugId: string;
  diseaseId: string;
  subtitle: string;
  overview: string;
  nodes: PathwayNode[];
  edges: PathwayEdge[];
  clinicalTakeaway: string;
}

export interface DatabaseAnalytics {
  totalDrugs: number;
  totalDiseases: number;
  totalDocumentedInteractions: number;
  totalMolecularStructures: number;
  categoryDistribution: { category: string; count: number; percentage: number }[];
  severityDistribution: { severity: string; count: number; percentage: number }[];
  organDistribution: { organ: string; count: number }[];
  drugClassDistribution: { drugClass: string; count: number }[];
}
