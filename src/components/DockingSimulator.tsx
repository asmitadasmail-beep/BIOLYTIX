/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Info,
  Clock,
  Layers,
  Sparkles
} from 'lucide-react';
import { MolecularComplex, DockingJob, Drug } from '../types';
import { api } from '../services/api';

interface DockingSimulatorProps {
  complex: MolecularComplex;
  drug: Drug;
}

export const DockingSimulator: React.FC<DockingSimulatorProps> = ({ complex, drug }) => {
  const [exhaustiveness, setExhaustiveness] = useState<number>(8);
  const [gridBox, setGridBox] = useState(complex.bindingPocketCoordinates);
  const [activeJob, setActiveJob] = useState<DockingJob | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPose, setSelectedPose] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  // Sync grid box if complex changes
  useEffect(() => {
    setGridBox(complex.bindingPocketCoordinates);
    setActiveJob(null);
  }, [complex.pdbId]);

  // Handle Docking Submission to Background Worker
  const handleSubmitDocking = async () => {
    try {
      setIsSubmitting(true);
      setError(null);
      const res = await api.submitDocking({
        drugId: drug.id,
        pdbId: complex.pdbId,
        gridBox,
        exhaustiveness
      });

      // Start polling status
      pollStatus(res.jobId);
    } catch (err: any) {
      setError(err.message || 'Failed to submit molecular docking task');
      setIsSubmitting(false);
    }
  };

  const pollStatus = (jobId: string) => {
    const interval = setInterval(async () => {
      try {
        const job = await api.getDockingStatus(jobId);
        setActiveJob(job);

        if (job.status === 'completed' || job.status === 'failed') {
          clearInterval(interval);
          setIsSubmitting(false);
        }
      } catch (err) {
        console.error('Error polling docking job:', err);
        clearInterval(interval);
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Explicit Scientific Disclaimer Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold">
            AutoDock Vina Computational Simulation Disclaimer:
          </p>
          <p className="text-amber-800 leading-relaxed">
            Docking results are computational predictions and do not independently establish experimental binding, clinical effectiveness, or drug safety. Experimental crystallographic structures (PDB: {complex.pdbId}) remain the gold standard for verified biological activity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Parameter Configuration */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 space-y-5 shadow-xs">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Cpu className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Vina Grid Box Configuration
            </h3>
          </div>

          {/* Target and Ligand info */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Receptor Protein:</span>
              <span className="font-semibold text-slate-800">{complex.proteinName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Ligand Molecule:</span>
              <span className="font-semibold text-slate-800">{drug.name} (MW {drug.molecularWeight} g/mol)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Reference Structure:</span>
              <span className="font-mono text-slate-800 font-bold">{complex.pdbId} (Experimental)</span>
            </div>
          </div>

          {/* Grid Box Centers */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Search Box Center Coordinates (Å)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-500 font-mono block mb-1">Center X</span>
                <input
                  type="number"
                  value={gridBox.centerX}
                  onChange={(e) => setGridBox({ ...gridBox, centerX: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs font-mono text-slate-800"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono block mb-1">Center Y</span>
                <input
                  type="number"
                  value={gridBox.centerY}
                  onChange={(e) => setGridBox({ ...gridBox, centerY: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs font-mono text-slate-800"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono block mb-1">Center Z</span>
                <input
                  type="number"
                  value={gridBox.centerZ}
                  onChange={(e) => setGridBox({ ...gridBox, centerZ: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs font-mono text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Search Box Dimensions */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Search Box Dimensions (Size in Å)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-500 font-mono block mb-1">Size X (Å)</span>
                <input
                  type="number"
                  value={gridBox.sizeX}
                  onChange={(e) => setGridBox({ ...gridBox, sizeX: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs font-mono text-slate-800"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono block mb-1">Size Y (Å)</span>
                <input
                  type="number"
                  value={gridBox.sizeY}
                  onChange={(e) => setGridBox({ ...gridBox, sizeY: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs font-mono text-slate-800"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-mono block mb-1">Size Z (Å)</span>
                <input
                  type="number"
                  value={gridBox.sizeZ}
                  onChange={(e) => setGridBox({ ...gridBox, sizeZ: Number(e.target.value) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1.5 text-xs font-mono text-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Exhaustiveness parameter */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-slate-700">Search Exhaustiveness</label>
              <span className="font-mono font-bold text-blue-600">{exhaustiveness}</span>
            </div>
            <input
              type="range"
              min="4"
              max="24"
              step="4"
              value={exhaustiveness}
              onChange={(e) => setExhaustiveness(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <p className="text-[11px] text-slate-500">
              Higher exhaustiveness increases conformational sampling runs in the genetic algorithm.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleSubmitDocking}
            disabled={isSubmitting}
            className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs ${
              isSubmitting
                ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isSubmitting ? (
              <>
                <Clock className="w-3.5 h-3.5 animate-spin" />
                <span>Docking Computation Running...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Launch Background Docking Job</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: Execution Progress & Predicted Poses */}
        <div className="lg:col-span-7 space-y-5">
          {activeJob ? (
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
              {/* Job Status Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Job ID: {activeJob.jobId}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                        activeJob.status === 'completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200 animate-pulse'
                      }`}
                    >
                      {activeJob.status.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Started at: {new Date(activeJob.startedAt).toLocaleTimeString()}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-xl font-bold font-mono text-slate-900 tabular-nums">
                    {activeJob.progress}%
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                    style={{ width: `${activeJob.progress}%` }}
                  />
                </div>
                <p className="text-xs text-slate-600 font-mono">
                  {activeJob.currentStepDescription}
                </p>
              </div>

              {/* Completed Results Display */}
              {activeJob.results && (
                <div className="space-y-4 pt-3 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-3">
                      <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider block mb-0.5">
                        Predicted Binding Affinity (ΔG)
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold font-mono text-blue-900 tabular-nums">
                          {activeJob.results.bindingAffinityKcal}
                        </span>
                        <span className="text-xs font-mono text-blue-700">kcal/mol</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">
                        Predicted Conformations
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold font-mono text-slate-900">
                          {activeJob.results.poses.length}
                        </span>
                        <span className="text-xs text-slate-500">clustered poses</span>
                      </div>
                    </div>
                  </div>

                  {/* Poses Table */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Predicted Binding Poses Table
                    </h4>
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-medium">
                          <tr>
                            <th className="py-2 px-3">Pose #</th>
                            <th className="py-2 px-3">Affinity (kcal/mol)</th>
                            <th className="py-2 px-3">RMSD l.b. (Å)</th>
                            <th className="py-2 px-3">RMSD u.b. (Å)</th>
                            <th className="py-2 px-3">Contact Residues</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {activeJob.results.poses.map((p) => (
                            <tr
                              key={p.poseNumber}
                              onClick={() => setSelectedPose(p.poseNumber)}
                              className={`cursor-pointer transition-colors ${
                                selectedPose === p.poseNumber
                                  ? 'bg-blue-50/80 font-semibold'
                                  : 'hover:bg-slate-50'
                              }`}
                            >
                              <td className="py-2 px-3 font-mono">Pose {p.poseNumber}</td>
                              <td className="py-2 px-3 font-mono text-blue-700">{p.affinityKcal}</td>
                              <td className="py-2 px-3 font-mono">{p.rmsdLowerBound.toFixed(2)}</td>
                              <td className="py-2 px-3 font-mono">{p.rmsdUpperBound.toFixed(2)}</td>
                              <td className="py-2 px-3 text-slate-600">{p.keyContacts.join(', ')}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Interpretation Note */}
                  <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 leading-relaxed border border-slate-200">
                    <strong className="text-slate-900 block mb-1">Pharmacological Interpretation:</strong>
                    {activeJob.results.interpretation}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">
                Molecular Docking Engine Ready
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Click "Launch Background Docking Job" to run AutoDock Vina conformational scoring. The simulation executes asynchronously in the background so you can freely navigate other sections.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
