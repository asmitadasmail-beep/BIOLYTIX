/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  BookOpen,
  ShieldCheck,
  ExternalLink,
  Cpu,
  Layers,
  Dna,
  AlertTriangle,
  FileText
} from 'lucide-react';

export const AboutReferences: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">
          Evidence Sources & Computational Methodology
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          About BioDDI & Authoritative References
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          An open educational and decision-support prototype combining verified biomedical pharmacology, 3D structural biology, and deterministic interaction modeling.
        </p>
      </div>

      {/* Prominent Ethical & Medical Disclaimer */}
      <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <span>Educational & Biomedical Research Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          This platform is strictly designed for educational and research purposes. It is NOT a clinical prescribing or diagnostic medical system. The absence of a documented interaction in this database does NOT independently establish that a medication is safe. Always consult qualified healthcare professionals and official prescribing information for medical decisions.
        </p>
      </div>

      {/* Methodology Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Deterministic Rule Engine
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Interactions are evaluated using deterministic biomedical classifications backed by published FDA product labeling and international clinical guidelines. Unverified claims or arbitrary hallucinations are strictly prohibited.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
            <Dna className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            3D Structural Biology (3Dmol.js)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All molecular co-crystals are linked directly to high-resolution crystallographic coordinates in the RCSB Protein Data Bank. Interacting residues, hydrogen bonds, and distances (Å) reflect experimental atomic measurements.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            AutoDock Vina Simulation
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In silico molecular docking runs via an asynchronous background task queue. Predicted affinities (kcal/mol) and poses are explicitly presented as computational predictions, never confused with experimental proof.
          </p>
        </div>
      </div>

      {/* Authoritative Sources Directory */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <h3 className="text-base font-bold text-slate-900">
            Authoritative Biomedical Data Sources
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">FDA DailyMed Drug Labeling</span>
              <a href="https://dailymed.nlm.nih.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                <span>Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-slate-600">
              Primary source for Contraindications, Boxed Warnings, Drug-Drug & Drug-Disease interactions, and pharmacokinetic clearance parameters.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">RCSB Protein Data Bank</span>
              <a href="https://www.rcsb.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                <span>RCSB.org</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-slate-600">
              Worldwide archive of 3D structural data for biological macromolecules: 1CX2, 1O86, 1HWK, 1OG5, 2RH1, 4RET, and 5X0G.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">NIH PubChem Compound Database</span>
              <a href="https://pubchem.ncbi.nlm.nih.gov" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                <span>PubChem</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-slate-600">
              Standard chemical descriptors, SMILES representations, CAS numbers, and verified molecular weights.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">International Clinical Guidelines</span>
              <span className="text-[11px] font-mono text-slate-500">KDIGO · ADA · GINA · EASL</span>
            </div>
            <p className="text-slate-600">
              Consensus practice guidelines for Chronic Kidney Disease (KDIGO), Diabetes management (ADA), Asthma (GINA), and Liver Cirrhosis (EASL).
            </p>
          </div>
        </div>
      </div>

      {/* System Architecture and Specifications */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-700 space-y-3">
        <h3 className="text-sm font-bold text-slate-900">
          Architecture & Execution Specifications
        </h3>
        <p className="leading-relaxed">
          The application is implemented with a full-stack architecture running an asynchronous Express REST API server in <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-900">server.ts</code> combined with a responsive React 19 frontend compiled via Vite. 3D molecular visualization is powered by 3Dmol.js WebGL rendering with automated fallback routines.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-slate-600">
          <span>Port: <strong>3000</strong></span>
          <span>·</span>
          <span>Theme: <strong>Clinical White (#FFFFFF)</strong></span>
          <span>·</span>
          <span>Type Safety: <strong>TypeScript 7.0</strong></span>
          <span>·</span>
          <span>Docking: <strong>AutoDock Vina Queue</strong></span>
        </div>
      </div>
    </div>
  );
};
