/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Dna,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { Drug } from '../types';
import { api } from '../services/api';

interface DrugCatalogProps {
  onAnalyzeDrug: (drugId: string) => void;
  onExploreStructure: (pdbId: string) => void;
}

export const DrugCatalog: React.FC<DrugCatalogProps> = ({
  onAnalyzeDrug,
  onExploreStructure
}) => {
  const [drugs, setDrugs] = useState<Drug[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All');
  const [expandedDrugId, setExpandedDrugId] = useState<string | null>('drug-ibuprofen');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDrugs() {
      try {
        setLoading(true);
        const res = await api.getDrugs(searchTerm, selectedClass);
        setDrugs(res.data);
      } catch (err) {
        console.error('Failed to load drugs:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDrugs();
  }, [searchTerm, selectedClass]);

  const drugClasses = [
    'All',
    'NSAID',
    'Biguanide',
    'Anticoagulant',
    'ACE Inhibitor',
    'Statin',
    'Beta-Adrenergic',
    'Cardiac Glycoside',
    'Aminoglycoside'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">
          Pharmacological Knowledge Base
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Drug Database & Molecular Profiles
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Search pharmacological profiles, molecular weights, cytochrome P450 metabolism, renal/hepatic clearance splits, and known crystallographic protein targets.
        </p>
      </div>

      {/* Search and Class Filter Strip */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by drug name, generic name, brand, or mechanism..."
            className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
          />
        </div>

        {/* Drug Class Filter */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-600 shrink-0">Class:</span>
          {drugClasses.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                selectedClass === cls
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Drug List */}
      <div className="space-y-4">
        {drugs.map((drug) => {
          const isExpanded = expandedDrugId === drug.id;
          return (
            <div
              key={drug.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-all"
            >
              {/* Header row */}
              <div
                onClick={() => setExpandedDrugId(isExpanded ? null : drug.id)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {drug.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      ({drug.genericName})
                    </span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                      {drug.drugClass}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-1 max-w-3xl">
                    {drug.summary}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] text-slate-500 block">Renal / Hepatic</span>
                    <span className="text-xs font-mono font-bold text-slate-800">
                      {drug.renalClearancePercent}% / {drug.hepaticClearancePercent}%
                    </span>
                  </div>

                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Expanded Details Section */}
              {isExpanded && (
                <div className="p-5 border-t border-slate-100 bg-slate-50/40 space-y-6 text-xs">
                  {/* Grid details */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 block mb-0.5">Molecular Formula</span>
                      <span className="font-mono font-bold text-slate-900">{drug.molecularFormula}</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 block mb-0.5">Molecular Weight</span>
                      <span className="font-mono font-bold text-slate-900">{drug.molecularWeight} g/mol</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 block mb-0.5">Elimination Half-life</span>
                      <span className="font-mono font-bold text-slate-900">{drug.halfLife}</span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 block mb-0.5">PubChem Compound</span>
                      <a
                        href={`https://pubchem.ncbi.nlm.nih.gov/compound/${drug.pubchemCid}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 font-mono font-bold hover:underline flex items-center gap-1"
                      >
                        <span>CID {drug.pubchemCid}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Mechanism & Metabolism */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1">
                      <strong className="text-slate-900 block">Mechanism of Action:</strong>
                      <p className="text-slate-700 leading-relaxed">{drug.mechanismOfAction}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1">
                      <strong className="text-slate-900 block">Metabolism & Excretion:</strong>
                      <p className="text-slate-700 leading-relaxed">{drug.metabolism}</p>
                      <p className="text-slate-600 text-[11px] pt-1">
                        Excretion: {drug.excretionPathway}
                      </p>
                    </div>
                  </div>

                  {/* Known Targets */}
                  <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                    <strong className="text-slate-900 block">Documented Molecular Protein Targets:</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {drug.knownTargets.map((t) => (
                        <div key={t.id} className="p-2.5 bg-slate-50 rounded border border-slate-200 flex justify-between items-start gap-2">
                          <div>
                            <span className="font-bold text-slate-900">{t.name}</span>
                            <span className="text-[11px] text-slate-500 block mt-0.5">
                              UniProt: {t.uniprotId} · Organism: {t.organism}
                            </span>
                            <p className="text-[11px] text-slate-600 mt-1">{t.function}</p>
                          </div>
                          {t.pdbId && (
                            <button
                              onClick={() => onExploreStructure(t.pdbId)}
                              className="px-2 py-1 text-[11px] font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded hover:bg-teal-100 shrink-0 cursor-pointer"
                            >
                              PDB: {t.pdbId}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-[11px] font-mono text-slate-500">
                      SMILES: <span className="text-slate-800">{drug.smiles}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {drug.defaultPdbId && (
                        <button
                          onClick={() => onExploreStructure(drug.defaultPdbId!)}
                          className="px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg flex items-center gap-1 cursor-pointer"
                        >
                          <Dna className="w-3.5 h-3.5" />
                          <span>View 3D PDB ({drug.defaultPdbId})</span>
                        </button>
                      )}

                      <button
                        onClick={() => onAnalyzeDrug(drug.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1 cursor-pointer shadow-xs"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Analyze In Interactions</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
