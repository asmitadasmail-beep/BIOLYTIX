/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Dna,
  Compass,
  Layers,
  Cpu,
  Info,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MolecularComplex, ResidueInteraction, Drug } from '../types';
import { MOLECULAR_COMPLEXES } from '../data/structures';
import { DRUGS_DATABASE } from '../data/drugs';
import { MolecularViewer3D } from './MolecularViewer3D';
import { GuidedExplorationModal } from './GuidedExplorationModal';
import { DockingSimulator } from './DockingSimulator';

interface MolecularExplorerProps {
  initialPdbId?: string;
}

export const MolecularExplorer: React.FC<MolecularExplorerProps> = ({ initialPdbId = '1CX2' }) => {
  const [selectedPdbId, setSelectedPdbId] = useState<string>(initialPdbId);
  const [activeTab, setActiveTab] = useState<'viewer' | 'docking'>('viewer');
  const [viewMode, setViewMode] = useState<'simple' | 'advanced'>('simple');
  const [isGuidedMode, setIsGuidedMode] = useState<boolean>(false);
  const [guidedStepIndex, setGuidedStepIndex] = useState<number>(0);
  const [selectedResidue, setSelectedResidue] = useState<ResidueInteraction | null>(null);

  useEffect(() => {
    if (initialPdbId && MOLECULAR_COMPLEXES[initialPdbId.toUpperCase()]) {
      setSelectedPdbId(initialPdbId.toUpperCase());
    }
  }, [initialPdbId]);

  const complex = MOLECULAR_COMPLEXES[selectedPdbId] || MOLECULAR_COMPLEXES['1CX2'];
  const currentDrug = DRUGS_DATABASE.find((d) => d.id === complex.drugId) || DRUGS_DATABASE[0];

  // Auto-select first residue for info card
  useEffect(() => {
    if (complex.activeBindingResidues.length > 0) {
      setSelectedResidue(complex.activeBindingResidues[0]);
    }
    setGuidedStepIndex(0);
    setIsGuidedMode(false);
  }, [complex.pdbId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title & Subtitle as specified in prompt */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-semibold text-teal-600 tracking-wider uppercase block mb-1">
            Structural Computational Biology
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Molecular Interactions
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Discover how medicines interact with biological molecules at atomic resolution using 3D structural biology and computational docking.
          </p>
        </div>

        {/* Guided Exploration Mode Trigger Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsGuidedMode(true)}
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Guided Walkthrough</span>
          </button>
        </div>
      </div>

      {/* Drug & Protein Selector Strip (User NEVER has to enter PDB IDs manually) */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8 space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
              <span>Select Validated Experimental Complex</span>
              <span className="text-slate-500 text-[11px] font-normal">
                {Object.keys(MOLECULAR_COMPLEXES).length} experimental co-crystals
              </span>
            </label>
            <select
              value={selectedPdbId}
              onChange={(e) => setSelectedPdbId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg p-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer shadow-xs"
            >
              {Object.values(MOLECULAR_COMPLEXES).map((c) => (
                <option key={c.pdbId} value={c.pdbId}>
                  {c.drugName} bound to {c.proteinName} (PDB: {c.pdbId})
                </option>
              ))}
            </select>
          </div>

          {/* Simple vs Advanced View Toggle */}
          <div className="md:col-span-4 flex flex-col justify-end space-y-1.5">
            <label className="text-xs font-semibold text-slate-700">
              Visualization Detail Mode
            </label>
            <div className="flex items-center p-1 bg-slate-200/80 rounded-lg">
              <button
                onClick={() => setViewMode('simple')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  viewMode === 'simple'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Simple View (Default)
              </button>
              <button
                onClick={() => setViewMode('advanced')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  viewMode === 'advanced'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Advanced View
              </button>
            </div>
          </div>
        </div>

        {/* Co-crystal metadata strip */}
        <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              Method: <strong className="text-slate-800">{complex.experimentalMethod}</strong>
            </span>
            <span>·</span>
            <span>
              Resolution: <strong className="text-slate-800 font-mono">{complex.resolution}</strong>
            </span>
            <span>·</span>
            <span>
              Ligand Code: <strong className="text-emerald-700 font-mono">{complex.ligandCode}</strong>
            </span>
          </div>

          <a
            href={`https://www.rcsb.org/structure/${complex.pdbId}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
          >
            <span>RCSB PDB {complex.pdbId}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Guided Exploration Modal Stepper if Active */}
      {isGuidedMode && (
        <GuidedExplorationModal
          complex={complex}
          currentStepIndex={guidedStepIndex}
          onStepChange={setGuidedStepIndex}
          onExit={() => setIsGuidedMode(false)}
        />
      )}

      {/* View Tabs: 3D Structure Viewer vs AutoDock Vina Simulator */}
      <div className="flex items-center gap-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('viewer')}
          className={`pb-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'viewer'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Dna className="w-4 h-4" />
          <span>Interactive 3D Structure Viewer</span>
        </button>

        <button
          onClick={() => setActiveTab('docking')}
          className={`pb-3 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'docking'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>AutoDock Vina Computational Docking</span>
        </button>
      </div>

      {/* Tab 1: 3D Structure Viewer Stage + Information Cards */}
      {activeTab === 'viewer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main 3Dmol.js Viewer Viewport */}
          <div className="lg:col-span-8">
            <MolecularViewer3D
              complex={complex}
              viewMode={viewMode}
              guidedStep={isGuidedMode ? guidedStepIndex + 1 : undefined}
              onSelectResidue={setSelectedResidue}
              selectedResidue={selectedResidue}
            />

            {/* Structure Overview Prose */}
            <div className="mt-4 bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed shadow-xs">
              <strong className="text-slate-900 block mb-1">Structural Overview:</strong>
              {complex.overview}
            </div>
          </div>

          {/* Right Column: SECTION 9.E Molecular Information Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Active Residues Selection List */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Active Binding Site Residues
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {complex.activeBindingResidues.length} key contacts
                </span>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
                {complex.activeBindingResidues.map((r, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedResidue(r)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer border ${
                      selectedResidue?.residueNumber === r.residueNumber
                        ? 'bg-blue-50/80 border-blue-300 text-blue-900 font-semibold'
                        : 'bg-slate-50/60 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-mono">
                      {r.residueName}{r.residueNumber} (Chain {r.chain})
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {r.interactionType} · {r.distanceAngstroms} Å
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* SECTION 9.E: Information Card "What is happening?" and "Why does it matter?" */}
            {selectedResidue && (
              <div className="bg-white border-2 border-teal-600/40 rounded-xl p-5 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                    {selectedResidue.interactionType.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900">
                    {selectedResidue.distanceAngstroms} Å
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>What is happening?</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedResidue.description}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-teal-600" />
                    <span>Why does it matter?</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedResidue.significance}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: AutoDock Vina Molecular Docking Simulation */}
      {activeTab === 'docking' && (
        <DockingSimulator complex={complex} drug={currentDrug} />
      )}
    </div>
  );
};
