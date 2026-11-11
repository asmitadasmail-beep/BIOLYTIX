/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, ShieldCheck, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>BioDDI Computational Platform</span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-md">
              An intelligent computational system for biomedical drug–disease interaction analysis, biological pathway explanation, and 3D molecular docking visualization. Built for researchers, pharmacologists, and students.
            </p>
            <div className="text-[11px] text-slate-500 bg-white p-3 rounded-lg border border-slate-200">
              <strong className="text-slate-800">Ethical Notice:</strong> All data is derived from FDA product labeling, NIH PubMed, and RCSB Protein Data Bank. Never initiate, discontinue, or alter any medication without direct clinical consultation with a licensed healthcare physician.
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">System Modules</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('analyzer')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Interaction Rule Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('molecular')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  3D Molecular Explorer (3Dmol.js)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pathways')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Biological Pathway Diagrams
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('analytics')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Database Analytics
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3 text-xs tracking-wider uppercase">Authoritative Sources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://dailymed.nlm.nih.gov" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                  <span>FDA DailyMed Labels</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.rcsb.org" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                  <span>RCSB Protein Data Bank</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://pubchem.ncbi.nlm.nih.gov" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                  <span>PubChem Database</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-600">
                  <span>NIH National Library of Medicine</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} BioDDI System. Developed for biomedical informatics & computational pharmacology education.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-slate-900 cursor-pointer">
              Methodology & Citations
            </button>
            <span>·</span>
            <span>Zero Mock Fallback</span>
            <span>·</span>
            <span>Deterministic Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
