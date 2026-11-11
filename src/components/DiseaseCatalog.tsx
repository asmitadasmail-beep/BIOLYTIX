/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Layers,
  Activity,
  Heart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Disease } from '../types';
import { api } from '../services/api';

interface DiseaseCatalogProps {
  onAnalyzeDisease: (diseaseId: string) => void;
}

export const DiseaseCatalog: React.FC<DiseaseCatalogProps> = ({ onAnalyzeDisease }) => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>('dis-ckd');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDiseases() {
      try {
        setLoading(true);
        const res = await api.getDiseases(searchTerm, selectedCategory);
        setDiseases(res.data);
      } catch (err) {
        console.error('Failed to load diseases:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchDiseases();
  }, [searchTerm, selectedCategory]);

  const categories = [
    'All',
    'Renal',
    'Hepatic',
    'Cardiovascular',
    'Pulmonary',
    'Endocrine',
    'Gastrointestinal'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">
          Pathophysiology Knowledge Base
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Disease Models & Physiological Alterations
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Examine pathological cellular disruptions, affected organ systems, metabolic derangements, and clinical pharmacodynamic vulnerabilities.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search diseases, organs, or pathophysiology..."
            className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-600 shrink-0">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Disease Cards */}
      <div className="space-y-4">
        {diseases.map((dis) => {
          const isExpanded = expandedId === dis.id;
          return (
            <div
              key={dis.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-all"
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : dis.id)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {dis.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                      {dis.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      Organs: <strong className="text-slate-700">{dis.affectedOrgans.join(', ')}</strong>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-1 max-w-3xl">
                    {dis.pathophysiology}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    {dis.commonPrevalence}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="p-5 border-t border-slate-100 bg-slate-50/40 space-y-5 text-xs">
                  <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 block">Pathophysiology Overview:</strong>
                    <p className="text-slate-700 leading-relaxed">{dis.pathophysiology}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                      <strong className="text-slate-900 block">Key Biological Mechanisms:</strong>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                        {dis.biologicalMechanisms.map((mech, i) => (
                          <li key={i}>{mech}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                      <strong className="text-slate-900 block">Associated Metabolic Changes:</strong>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                        {dis.associatedMetabolicChanges.map((ch, i) => (
                          <li key={i}>{ch}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-500">
                      Clinical Impact: <strong className="text-slate-700">{dis.clinicalSignificance}</strong>
                    </span>

                    <button
                      onClick={() => onAnalyzeDisease(dis.id)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Analyze With Medications</span>
                    </button>
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
