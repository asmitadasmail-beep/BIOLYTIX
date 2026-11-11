/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Dna, ShieldAlert, Database, BookOpen, Layers, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { Drug, Disease, DatabaseAnalytics } from '../types';
import { api } from '../services/api';

interface HomeDashboardProps {
  onSelectPair: (drugId: string, diseaseId: string) => void;
  onNavigate: (tab: string) => void;
  onExploreStructure: (pdbId: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onSelectPair,
  onNavigate,
  onExploreStructure
}) => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [analytics, setAnalytics] = useState<DatabaseAnalytics | null>(null);
  const [selectedDrugId, setSelectedDrugId] = useState<string>('drug-ibuprofen');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('dis-ckd');
  const [searchDrugTerm, setSearchDrugTerm] = useState('');
  const [searchDiseaseTerm, setSearchDiseaseTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [drugsRes, diseasesRes, analyticsRes] = await Promise.all([
          api.getDrugs(),
          api.getDiseases(),
          api.getAnalytics()
        ]);
        setDrugs(drugsRes.data);
        setDiseases(diseasesRes.data);
        setAnalytics(analyticsRes);
      } catch (err) {
        console.error('Failed to load home data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleAnalyzeClick = () => {
    if (selectedDrugId && selectedDiseaseId) {
      onSelectPair(selectedDrugId, selectedDiseaseId);
      onNavigate('analyzer');
    }
  };

  const educationalExamples = [
    {
      drugId: 'drug-ibuprofen',
      drugName: 'Ibuprofen (NSAID)',
      diseaseId: 'dis-ckd',
      diseaseName: 'Chronic Kidney Disease',
      tag: 'Renal Safety / Hemodynamic Collapse',
      severity: 'Contraindicated',
      pdbId: '1CX2',
      snippet: 'COX-2 inhibition halts vasodilatory prostaglandin synthesis in afferent arterioles, inducing acute GFR collapse and ischemic injury.'
    },
    {
      drugId: 'drug-metformin',
      drugName: 'Metformin (Biguanide)',
      diseaseId: 'dis-ckd',
      diseaseName: 'Chronic Kidney Disease',
      tag: 'Metabolic / Impaired Excretion',
      severity: 'Contraindicated',
      pdbId: '5X0G',
      snippet: 'Impaired tubular clearance causes massive intracellular drug accumulation, over-inhibiting mitochondrial Complex I and triggering fatal lactic acidosis.'
    },
    {
      drugId: 'drug-warfarin',
      drugName: 'Warfarin (Anticoagulant)',
      diseaseId: 'dis-cirrhosis',
      diseaseName: 'Hepatic Cirrhosis',
      tag: 'Hepatic / Clotting Collapse',
      severity: 'Contraindicated',
      pdbId: '1OG5',
      snippet: 'Loss of functional CYP2C9 halts S-warfarin clearance while cirrhotic hepatocytes fail to synthesize baseline clotting factors, precipitating fatal hemorrhage.'
    },
    {
      drugId: 'drug-propranolol',
      drugName: 'Propranolol (Beta-Blocker)',
      diseaseId: 'dis-asthma',
      diseaseName: 'Asthma / Bronchospasm',
      tag: 'Pharmacodynamic / Airway Resistance',
      severity: 'Contraindicated',
      pdbId: '2RH1',
      snippet: 'Competitive blockade of bronchial beta-2 receptors eliminates adrenergic airway dilation, leaving cholinergic bronchoconstriction unopposed.'
    },
    {
      drugId: 'drug-lisinopril',
      drugName: 'Lisinopril (ACE Inhibitor)',
      diseaseId: 'dis-aki',
      diseaseName: 'Acute Kidney Injury',
      tag: 'Renal / Efferent Dilation',
      severity: 'Contraindicated',
      pdbId: '1O86',
      snippet: 'Eradicates angiotensin II-mediated efferent arteriolar constriction, causing intraglomerular hydrostatic pressure to plummet.'
    },
    {
      drugId: 'drug-digoxin',
      drugName: 'Digoxin (Cardiac Glycoside)',
      diseaseId: 'dis-hypokalemia',
      diseaseName: 'Severe Hypokalemia',
      tag: 'Pharmacodynamic / Arrhythmia',
      severity: 'Severe / High Risk',
      pdbId: '4RET',
      snippet: 'Absence of extracellular K+ competition unlocks maximum receptor affinity at Na+/K+-ATPase, causing myocyte calcium overload and lethal ventricular fibrillation.'
    }
  ];

  const filteredDrugs = drugs.filter((d) =>
    d.name.toLowerCase().includes(searchDrugTerm.toLowerCase()) ||
    d.drugClass.toLowerCase().includes(searchDrugTerm.toLowerCase())
  );

  const filteredDiseases = diseases.filter((dis) =>
    dis.name.toLowerCase().includes(searchDiseaseTerm.toLowerCase()) ||
    dis.category.toLowerCase().includes(searchDiseaseTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2 block">
              Biomedical Informatics & Computational Pharmacology
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Understand Drug–Disease Interactions Through Computational Biology
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Explore biomedical information, identify documented safety concerns, and visualize the molecular mechanisms behind drug interactions with interactive 3D structures and biological pathways.
            </p>
          </div>

          {/* Interactive Interaction Query Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Drug Selection */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span>Select Medication</span>
                  <span className="text-slate-400 font-normal text-[11px]">
                    {drugs.length} verified molecules
                  </span>
                </label>
                <div className="relative">
                  <select
                    value={selectedDrugId}
                    onChange={(e) => setSelectedDrugId(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg py-2.5 pl-3 pr-8 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-pointer shadow-xs"
                  >
                    {drugs.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.drugClass}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Disease Selection */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                  <span>Select Disease / Pathophysiology</span>
                  <span className="text-slate-400 font-normal text-[11px]">
                    {diseases.length} condition models
                  </span>
                </label>
                <div className="relative">
                  <select
                    value={selectedDiseaseId}
                    onChange={(e) => setSelectedDiseaseId(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg py-2.5 pl-3 pr-8 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-pointer shadow-xs"
                  >
                    {diseases.map((dis) => (
                      <option key={dis.id} value={dis.id}>
                        {dis.name} ({dis.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Analyze Button */}
              <div className="md:col-span-2">
                <button
                  onClick={handleAnalyzeClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Analyze</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick helper tip */}
            <div className="mt-4 pt-3 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Recommended starting query:</span>
                <button
                  onClick={() => {
                    setSelectedDrugId('drug-ibuprofen');
                    setSelectedDiseaseId('dis-ckd');
                  }}
                  className="text-blue-600 hover:underline font-medium cursor-pointer"
                >
                  Ibuprofen + Chronic Kidney Disease
                </button>
                <span>·</span>
                <button
                  onClick={() => {
                    setSelectedDrugId('drug-metformin');
                    setSelectedDiseaseId('dis-ckd');
                  }}
                  className="text-blue-600 hover:underline font-medium cursor-pointer"
                >
                  Metformin + CKD
                </button>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Rule Engine Status: Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Database Metrics (4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Documented Drugs
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">
                {analytics?.totalDrugs || 12}
              </span>
              <span className="text-xs text-slate-500 font-medium">Pharmacological agents</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              With full pharmacokinetic & molecular profiles
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Disease Models
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono text-slate-900 tabular-nums">
                {analytics?.totalDiseases || 10}
              </span>
              <span className="text-xs text-slate-500 font-medium">Pathologies</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Renal, hepatic, cardiac, pulmonary & metabolic
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              Documented Interactions
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono text-blue-600 tabular-nums">
                {analytics?.totalDocumentedInteractions || 16}
              </span>
              <span className="text-xs text-slate-500 font-medium">Verified records</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Categorized with 6-part biological mechanisms
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
              3D Molecular Structures
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-mono text-teal-600 tabular-nums">
                {analytics?.totalMolecularStructures || 6}
              </span>
              <span className="text-xs text-slate-500 font-medium">PDB complexes</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Interactive 3Dmol.js viewer & docking
            </p>
          </div>
        </div>
      </section>

      {/* Educational Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Educational Case Studies
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Select an evidence-based clinical scenario to inspect biological explanations and 3D molecular targets.
            </p>
          </div>
          <button
            onClick={() => onNavigate('analyzer')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View All Interaction Pairs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationalExamples.map((ex, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                    {ex.severity}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    PDB: {ex.pdbId}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {ex.drugName} <span className="text-slate-400 font-normal">in</span> {ex.diseaseName}
                </h3>
                <span className="text-xs font-medium text-slate-500 block mt-1">
                  {ex.tag}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  {ex.snippet}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    onSelectPair(ex.drugId, ex.diseaseId);
                    onNavigate('analyzer');
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Explanation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onExploreStructure(ex.pdbId)}
                  className="text-xs font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
                >
                  <Dna className="w-3.5 h-3.5" />
                  <span>3D Structure</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Navigation Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-4">
          Core Computational Engines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Interaction Engine */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Deterministic Rule Engine
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Analyzes drug-disease combinations against 9 distinct categories: Renal, Hepatic, Metabolic, Pharmacodynamic, and ADME alterations. Generates rigorous 6-step physiological mechanisms with primary citations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('analyzer')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Launch Interaction Analyzer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: 3D Molecular Explorer */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                <Dna className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3D Molecular Explorer & Docking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                WebGL 3Dmol.js viewer rendering ribbon proteins, stick ligands, binding cavities, and hydrogen bonds with Ångström distances. Includes guided 4-step walkthrough and background AutoDock Vina simulation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('molecular')}
              className="text-xs font-semibold text-teal-600 hover:text-teal-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Open 3D Molecular Viewer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Pathway Visualization */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Biological Pathway Explorer
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Trace biochemical cascades from initial drug target inhibition through cellular enzyme disruption to the resulting pathological clinical state. Click individual nodes to inspect molecular explanations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('pathways')}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Biological Pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
