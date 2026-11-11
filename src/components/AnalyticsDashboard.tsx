/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  PieChart,
  ShieldCheck,
  Activity,
  Layers,
  Database,
  Dna,
  RefreshCw
} from 'lucide-react';
import { DatabaseAnalytics } from '../types';
import { api } from '../services/api';

export const AnalyticsDashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState<DatabaseAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const data = await api.getAnalytics();
        setAnalytics(data);
      } catch (err) {
        console.error('Failed to load analytics:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, []);

  if (loading || !analytics) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-3">
        <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
        <p className="text-sm font-semibold text-slate-800">
          Aggregating verified database records...
        </p>
      </div>
    );
  }

  const maxCategoryCount = Math.max(...analytics.categoryDistribution.map((c) => c.count), 1);
  const maxOrganCount = Math.max(...analytics.organDistribution.map((o) => o.count), 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block mb-1">
          Empirical Biomedical Telemetry
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Biomedical Database Analytics
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Live statistical distributions calculated directly from actual database records across interaction categories, severity classifications, and affected anatomical systems.
        </p>
      </div>

      {/* Top 4 KPI Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Total Drugs
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-slate-900 tabular-nums">
              {analytics.totalDrugs}
            </span>
            <span className="text-xs text-slate-500 font-medium">Verified APIs</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-2 block">
            With complete PK parameters
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Disease Models
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-slate-900 tabular-nums">
              {analytics.totalDiseases}
            </span>
            <span className="text-xs text-slate-500 font-medium">Pathologies</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-2 block">
            Covering 6 major organ classes
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Documented Interactions
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-blue-600 tabular-nums">
              {analytics.totalDocumentedInteractions}
            </span>
            <span className="text-xs text-slate-500 font-medium">Rules</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-2 block">
            With 6-step biological explanations
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            3D Molecular Complexes
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-mono text-teal-600 tabular-nums">
              {analytics.totalMolecularStructures}
            </span>
            <span className="text-xs text-slate-500 font-medium">Structures</span>
          </div>
          <span className="text-[11px] text-slate-500 mt-2 block">
            Experimental PDB co-crystals
          </span>
        </div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Interaction Category Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Interaction Categories Breakdown
              </h3>
              <p className="text-xs text-slate-500">
                Classification across clinical and pharmacokinetic mechanisms
              </p>
            </div>
            <Layers className="w-4 h-4 text-blue-600" />
          </div>

          <div className="space-y-3 pt-2">
            {analytics.categoryDistribution.map((cat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{cat.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-slate-500">{cat.count} records</span>
                    <span className="font-mono font-bold text-slate-900">{cat.percentage}%</span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${(cat.count / maxCategoryCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: Severity Classification Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Evidence-Supported Severity Distribution
              </h3>
              <p className="text-xs text-slate-500">
                Clinical risk stratification in documented interactions
              </p>
            </div>
            <Activity className="w-4 h-4 text-rose-600" />
          </div>

          <div className="space-y-3 pt-2">
            {analytics.severityDistribution.map((sev, i) => {
              const barColor =
                sev.severity === 'Contraindicated'
                  ? 'bg-rose-600'
                  : sev.severity.includes('Severe')
                  ? 'bg-orange-500'
                  : 'bg-amber-500';

              return (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{sev.severity}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-500">{sev.count} records</span>
                      <span className="font-mono font-bold text-slate-900">{sev.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor} rounded-full transition-all duration-500`}
                      style={{ width: `${sev.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart 3: Affected Organ Systems */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Affected Anatomical Organ Systems
              </h3>
              <p className="text-xs text-slate-500">
                Target organ vulnerability distribution
              </p>
            </div>
            <ShieldCheck className="w-4 h-4 text-teal-600" />
          </div>

          <div className="space-y-3 pt-2">
            {analytics.organDistribution.map((org, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{org.organ}</span>
                  <span className="font-mono font-bold text-slate-900">{org.count} interactions</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${(org.count / maxOrganCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 4: Drug Class Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Drug Class Distribution
              </h3>
              <p className="text-xs text-slate-500">
                Therapeutic class diversity in repository
              </p>
            </div>
            <Database className="w-4 h-4 text-indigo-600" />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {analytics.drugClassDistribution.map((cls, i) => (
              <div key={i} className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs">
                <span className="text-slate-500 block mb-0.5">{cls.drugClass}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold font-mono text-slate-900">{cls.count}</span>
                  <span className="text-[11px] text-slate-500">agents</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
