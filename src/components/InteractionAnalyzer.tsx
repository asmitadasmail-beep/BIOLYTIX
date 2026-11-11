/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  ShieldAlert,
  Info,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  Dna,
  GitFork,
  Printer,
  Sparkles,
  ArrowRight,
  Filter,
  RefreshCw
} from 'lucide-react';
import { Drug, Disease, DrugDiseaseInteraction } from '../types';
import { api } from '../services/api';

interface InteractionAnalyzerProps {
  initialDrugId?: string;
  initialDiseaseId?: string;
  onExploreStructure: (pdbId: string) => void;
  onExplorePathway: (pathwayId?: string) => void;
}

export const InteractionAnalyzer: React.FC<InteractionAnalyzerProps> = ({
  initialDrugId = 'drug-ibuprofen',
  initialDiseaseId = 'dis-ckd',
  onExploreStructure,
  onExplorePathway
}) => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [selectedDrugId, setSelectedDrugId] = useState<string>(initialDrugId);
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>(initialDiseaseId);
  const [analysisResult, setAnalysisResult] = useState<{
    isDocumented: boolean;
    status: string;
    interaction: DrugDiseaseInteraction;
    drug: Drug;
    disease: Disease;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [analyzing, setAnalyzing] = useState<boolean>(false);
  const [simplifyWithAi, setSimplifyWithAi] = useState<boolean>(false);
  const [aiGenerating, setAiGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Sync props if changed externally
  useEffect(() => {
    if (initialDrugId) setSelectedDrugId(initialDrugId);
    if (initialDiseaseId) setSelectedDiseaseId(initialDiseaseId);
  }, [initialDrugId, initialDiseaseId]);

  // Load drugs and diseases list
  useEffect(() => {
    async function loadCatalogs() {
      try {
        setLoading(true);
        const [drugsRes, diseasesRes] = await Promise.all([
          api.getDrugs(),
          api.getDiseases()
        ]);
        setDrugs(drugsRes.data);
        setDiseases(diseasesRes.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load biomedical catalogs');
      } finally {
        setLoading(false);
      }
    }
    loadCatalogs();
  }, []);

  // Run analysis when selected pair changes
  const runAnalysis = async (drugId: string, diseaseId: string, simplify: boolean = simplifyWithAi) => {
    try {
      setAnalyzing(true);
      setError(null);
      const res = await api.analyzeInteraction(drugId, diseaseId, simplify);
      setAnalysisResult(res);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze drug-disease pairing');
    } finally {
      setAnalyzing(false);
    }
  };

  useEffect(() => {
    if (selectedDrugId && selectedDiseaseId) {
      runAnalysis(selectedDrugId, selectedDiseaseId);
    }
  }, [selectedDrugId, selectedDiseaseId]);

  const handleToggleSimplify = async () => {
    const nextState = !simplifyWithAi;
    setSimplifyWithAi(nextState);
    if (selectedDrugId && selectedDiseaseId) {
      setAiGenerating(true);
      await runAnalysis(selectedDrugId, selectedDiseaseId, nextState);
      setAiGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'Contraindicated':
        return {
          bg: 'bg-rose-50 border-rose-200 text-rose-800',
          icon: ShieldAlert,
          label: 'Contraindicated'
        };
      case 'Severe / High Risk':
        return {
          bg: 'bg-orange-50 border-orange-200 text-orange-800',
          icon: AlertTriangle,
          label: 'Severe / High Risk'
        };
      case 'Moderate Precaution':
        return {
          bg: 'bg-amber-50 border-amber-200 text-amber-800',
          icon: Info,
          label: 'Moderate Precaution'
        };
      case 'Mild / Monitor':
        return {
          bg: 'bg-blue-50 border-blue-200 text-blue-800',
          icon: Info,
          label: 'Mild / Monitor'
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200 text-slate-700',
          icon: CheckCircle2,
          label: 'No Documented Interaction Found'
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">
            Deterministic Decision Support Engine
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Drug–Disease Interaction Analysis
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Evaluate documented clinical contraindications, pharmacokinetic alterations, and detailed 6-step biological explanations backed by peer-reviewed evidence.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Selector Controls Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Drug Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-700 flex items-center justify-between mb-1.5">
              <span>Select Medication</span>
              <span className="text-slate-500 text-[11px] font-normal">
                {drugs.length} verified drugs
              </span>
            </label>
            <select
              value={selectedDrugId}
              onChange={(e) => setSelectedDrugId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer shadow-xs"
            >
              {drugs.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} — {d.drugClass}
                </option>
              ))}
            </select>
          </div>

          {/* Disease Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-700 flex items-center justify-between mb-1.5">
              <span>Select Disease / Pathophysiology</span>
              <span className="text-slate-500 text-[11px] font-normal">
                {diseases.length} condition models
              </span>
            </label>
            <select
              value={selectedDiseaseId}
              onChange={(e) => setSelectedDiseaseId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer shadow-xs"
            >
              {diseases.map((dis) => (
                <option key={dis.id} value={dis.id}>
                  {dis.name} ({dis.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick presets pills */}
        <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-slate-600 text-xs">Quick Evidence Presets:</span>
          {[
            { d: 'drug-ibuprofen', dis: 'dis-ckd', label: 'Ibuprofen + CKD' },
            { d: 'drug-metformin', dis: 'dis-ckd', label: 'Metformin + CKD' },
            { d: 'drug-warfarin', dis: 'dis-cirrhosis', label: 'Warfarin + Cirrhosis' },
            { d: 'drug-propranolol', dis: 'dis-asthma', label: 'Propranolol + Asthma' },
            { d: 'drug-lisinopril', dis: 'dis-aki', label: 'Lisinopril + AKI' },
            { d: 'drug-digoxin', dis: 'dis-hypokalemia', label: 'Digoxin + Hypokalemia' },
            { d: 'drug-atorvastatin', dis: 'dis-cirrhosis', label: 'Atorvastatin + Cirrhosis' },
          ].map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedDrugId(preset.d);
                setSelectedDiseaseId(preset.dis);
              }}
              className={`px-2.5 py-1 text-xs rounded font-medium border transition-colors cursor-pointer ${
                selectedDrugId === preset.d && selectedDiseaseId === preset.dis
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Output Container */}
      {analyzing ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-800">
            Evaluating deterministic rules and biological pathways...
          </p>
          <p className="text-xs text-slate-500">
            Retrieving pharmacology models from verified evidence base
          </p>
        </div>
      ) : analysisResult ? (
        <div className="space-y-6">
          {/* Primary Result Banner Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  {(() => {
                    const badge = getSeverityBadge(analysisResult.interaction.severity);
                    const BadgeIcon = badge.icon;
                    return (
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold border ${badge.bg}`}>
                        <BadgeIcon className="w-3.5 h-3.5" />
                        <span>{badge.label}</span>
                      </span>
                    );
                  })()}

                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                    Category: {analysisResult.interaction.category}
                  </span>

                  <span className="text-xs text-slate-500">
                    System: <strong className="text-slate-700">{analysisResult.interaction.affectedOrganSystem}</strong>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {analysisResult.drug.name} <span className="text-slate-400 font-normal">in the presence of</span> {analysisResult.disease.name}
                </h2>

                <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-3xl">
                  {analysisResult.interaction.documentedSafetyConcern}
                </p>
              </div>

              {/* Action Buttons: 3D Structure & Pathway */}
              <div className="flex sm:flex-col gap-2 shrink-0">
                {analysisResult.drug.defaultPdbId && (
                  <button
                    onClick={() => onExploreStructure(analysisResult.drug.defaultPdbId!)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    <Dna className="w-3.5 h-3.5" />
                    <span>View 3D Complex ({analysisResult.drug.defaultPdbId})</span>
                  </button>
                )}

                <button
                  onClick={() => onExplorePathway()}
                  className="px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <GitFork className="w-3.5 h-3.5" />
                  <span>View Biochemical Pathway</span>
                </button>
              </div>
            </div>

            {/* AI Explanation Simplification Toggle Bar */}
            <div className="mt-4 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleSimplify}
                  disabled={aiGenerating}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    simplifyWithAi
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {aiGenerating
                      ? 'Generating Plain-Language Summary...'
                      : simplifyWithAi
                      ? 'Plain-Language Student Mode Active'
                      : 'Enable Plain-Language Student Explanation'}
                  </span>
                </button>
                <span className="text-slate-500 text-[11px] hidden md:inline">
                  Translates verified pharmacology into accessible undergraduate prose without altering evidence.
                </span>
              </div>

              <div className="text-[11px] font-mono text-slate-500">
                Rule ID: {analysisResult.interaction.id}
              </div>
            </div>

            {/* Plain Language Summary Box if active */}
            {simplifyWithAi && analysisResult.interaction.biologicalExplanation.plainLanguageSummary && (
              <div className="mt-4 p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Plain-Language Educational Explanation:
                </span>
                <p className="text-xs text-blue-950 leading-relaxed">
                  {analysisResult.interaction.biologicalExplanation.plainLanguageSummary}
                </p>
              </div>
            )}
          </div>

          {/* SECTION 8: 6-PART BIOLOGICAL EXPLANATION ENGINE */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                Structured Biological Explanation Engine
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Why Does This Drug–Disease Interaction Occur?
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Full 6-stage biological breakdown elucidating the transition from physiological homeostasis to adverse clinical manifestation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Part 1 */}
              <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Normal Biological Function
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {analysisResult.interaction.biologicalExplanation.normalBiologicalFunction}
                </p>
              </div>

              {/* Part 2 */}
              <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Drug Mechanism of Action
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {analysisResult.interaction.biologicalExplanation.drugMechanismOfAction}
                </p>
              </div>

              {/* Part 3 */}
              <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Disease-Related Physiological Changes
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {analysisResult.interaction.biologicalExplanation.diseasePhysiologicalChanges}
                </p>
              </div>

              {/* Part 4 */}
              <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    4
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Molecular or Cellular Mechanism
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {analysisResult.interaction.biologicalExplanation.molecularCellularMechanism}
                </p>
              </div>

              {/* Part 5 */}
              <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    5
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Resulting Pharmacological Effect
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {analysisResult.interaction.biologicalExplanation.resultingPharmacologicalEffect}
                </p>
              </div>

              {/* Part 6 */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                    6
                  </span>
                  <h4 className="text-xs font-bold text-rose-950 uppercase tracking-wider">
                    Potential Safety Implications
                  </h4>
                </div>
                <p className="text-xs text-rose-900 leading-relaxed font-medium">
                  {analysisResult.interaction.biologicalExplanation.potentialSafetyImplications}
                </p>
              </div>
            </div>

            {/* Monitoring Recommendations */}
            {analysisResult.interaction.monitoringRecommendations.length > 0 && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Documented Clinical Monitoring & Risk Mitigation
                </h4>
                <ul className="space-y-2">
                  {analysisResult.interaction.monitoringRecommendations.map((rec, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Supporting Biomedical Sources & Citations */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Supporting Evidence & Biomedical References
              </h3>
            </div>

            <div className="space-y-3">
              {analysisResult.interaction.sources.map((src, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded">
                        {src.sourceType}
                      </span>
                      <span className="font-semibold text-slate-900">{src.title}</span>
                    </div>
                    <p className="text-slate-500 text-[11px]">{src.citation}</p>
                  </div>

                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <span>View Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 italic">
              Verification Notice: Each interaction record references published FDA labeling, RCSB Protein Data Bank crystallographic complexes, or international clinical consensus guidelines (KDIGO, ADA, GINA, EASL).
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-500 text-sm">
          Select a medication and disease above to run the deterministic interaction analysis.
        </div>
      )}
    </div>
  );
};
