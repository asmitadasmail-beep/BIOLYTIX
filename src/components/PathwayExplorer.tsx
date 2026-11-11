/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  GitFork,
  ArrowRight,
  Info,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Activity,
  ShieldAlert
} from 'lucide-react';
import { BiologicalPathway, PathwayNode } from '../types';
import { PATHWAYS_DATABASE } from '../data/pathways';

export const PathwayExplorer: React.FC = () => {
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>(PATHWAYS_DATABASE[0].id);
  const [selectedNode, setSelectedNode] = useState<PathwayNode | null>(null);

  const pathway = PATHWAYS_DATABASE.find((p) => p.id === selectedPathwayId) || PATHWAYS_DATABASE[0];

  useEffect(() => {
    setSelectedNode(pathway.nodes[0]);
  }, [pathway.id]);

  const getNodeColor = (type: PathwayNode['type']) => {
    switch (type) {
      case 'drug':
        return {
          bg: 'bg-emerald-50 border-emerald-300 text-emerald-900',
          dot: 'bg-emerald-600',
          badge: 'Drug Action'
        };
      case 'target':
        return {
          bg: 'bg-teal-50 border-teal-300 text-teal-900',
          dot: 'bg-teal-600',
          badge: 'Target Protein'
        };
      case 'normal_step':
        return {
          bg: 'bg-blue-50 border-blue-200 text-blue-900',
          dot: 'bg-blue-600',
          badge: 'Physiological Step'
        };
      case 'disease_disruption':
        return {
          bg: 'bg-amber-50 border-amber-300 text-amber-900',
          dot: 'bg-amber-600',
          badge: 'Disease Impact'
        };
      case 'adverse_outcome':
        return {
          bg: 'bg-rose-50 border-rose-300 text-rose-900',
          dot: 'bg-rose-600',
          badge: 'Pathological Outcome'
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200 text-slate-800',
          dot: 'bg-slate-500',
          badge: 'Node'
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">
          Systems Pharmacology & Mechanistic Modeling
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Biological Pathway Explorer
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Trace how drug molecules perturb physiological cascades in disease-altered tissues, precipitating adverse clinical events. Click any node to view biochemical details.
        </p>
      </div>

      {/* Pathway Model Selector */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-xs">
        <label className="text-xs font-semibold text-slate-700 block mb-2">
          Select Biological Pathway Model
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PATHWAYS_DATABASE.map((p) => {
            const isSelected = p.id === selectedPathwayId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPathwayId(p.id)}
                className={`text-left p-3 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className={`text-[11px] font-semibold block mb-0.5 ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                  {p.nodes.length} Cascade Steps
                </span>
                <h4 className="text-xs font-bold leading-snug line-clamp-2">
                  {p.title}
                </h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pathway Overview Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {pathway.title}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {pathway.subtitle}
            </p>
          </div>
          <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded shrink-0">
            Clinical Hazard
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {pathway.overview}
        </p>

        <div className="pt-2 text-xs font-semibold text-blue-700">
          <strong>Clinical Takeaway:</strong> {pathway.clinicalTakeaway}
        </div>
      </div>

      {/* Interactive Pathway Diagram & Details Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Pathway Nodes Stage */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Biochemical Flowchart
            </span>
            <span className="text-[11px] text-slate-500">
              Click individual step cards to inspect mechanisms
            </span>
          </div>

          {/* Sequential Step Cards with Connecting Flow Indicators */}
          <div className="space-y-3">
            {pathway.nodes.map((node, index) => {
              const colors = getNodeColor(node.type);
              const isSelected = selectedNode?.id === node.id;
              const outgoingEdge = pathway.edges.find((e) => e.from === node.id);

              return (
                <div key={node.id} className="relative">
                  <div
                    onClick={() => setSelectedNode(node)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/40 shadow-xs'
                        : `${colors.bg} hover:border-slate-400`
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-300 text-slate-800 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${colors.bg}`}>
                            {colors.badge}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            Location: <strong className="text-slate-700">{node.organOrLocation}</strong>
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {node.label}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-1">
                          {node.description}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
                  </div>

                  {/* Flow Connector Arrow to Next Step */}
                  {index < pathway.nodes.length - 1 && (
                    <div className="py-1.5 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{outgoingEdge ? outgoingEdge.label : 'leads to'}</span>
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Node Explanation Drawer */}
        <div className="lg:col-span-4 space-y-4">
          {selectedNode ? (
            <div className="bg-white border-2 border-blue-600/40 rounded-2xl p-6 shadow-xs space-y-4 sticky top-20">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Step Detail Inspector
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {selectedNode.label}
                </h3>
                <span className="text-xs text-slate-500 mt-1 block">
                  Compartment: <strong className="text-slate-800">{selectedNode.organOrLocation}</strong>
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Physiological Description
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Biochemical & Molecular Specifics
                </h4>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono leading-relaxed">
                  {selectedNode.biochemicalDetails}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center text-slate-500 text-xs">
              Click any step on the left flowchart to view its biological details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
