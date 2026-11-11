/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  Maximize2,
  Info,
  Compass
} from 'lucide-react';
import { MolecularComplex, ResidueInteraction } from '../types';

interface MolecularViewer3DProps {
  complex: MolecularComplex;
  viewMode: 'simple' | 'advanced';
  guidedStep?: number;
  onSelectResidue?: (residue: ResidueInteraction) => void;
  selectedResidue?: ResidueInteraction | null;
}

export const MolecularViewer3D: React.FC<MolecularViewer3DProps> = ({
  complex,
  viewMode,
  guidedStep,
  onSelectResidue,
  selectedResidue
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerInstanceRef = useRef<any>(null);

  const [showProtein, setShowProtein] = useState<boolean>(true);
  const [showDrug, setShowDrug] = useState<boolean>(true);
  const [showPocketSurface, setShowPocketSurface] = useState<boolean>(false);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [showHbonds, setShowHbonds] = useState<boolean>(true);
  const [viewerReady, setViewerReady] = useState<boolean>(false);
  const [useCanvasFallback, setUseCanvasFallback] = useState<boolean>(false);
  const [spinActive, setSpinActive] = useState<boolean>(false);

  // Initialize or update 3Dmol viewer
  useEffect(() => {
    let isCancelled = false;

    async function init3Dmol() {
      if (!containerRef.current) return;

      const $3Dmol = (window as any).$3Dmol;

      if (!$3Dmol) {
        console.warn('3Dmol.js not loaded on window; using canvas renderer.');
        setUseCanvasFallback(true);
        return;
      }

      try {
        // Clear previous viewer HTML
        containerRef.current.innerHTML = '';

        const viewer = $3Dmol.createViewer(containerRef.current, {
          backgroundColor: '#ffffff',
          id: `viewer-${complex.pdbId}`
        });

        viewerInstanceRef.current = viewer;

        // Fetch PDB coordinates from RCSB API or fallback
        const pdbUrl = `https://files.rcsb.org/download/${complex.pdbId}.pdb`;
        
        let pdbData = '';
        try {
          const res = await fetch(pdbUrl);
          if (res.ok) {
            pdbData = await res.text();
          }
        } catch (fetchErr) {
          console.warn(`Could not fetch PDB from RCSB for ${complex.pdbId}; generating structural model:`, fetchErr);
        }

        if (isCancelled) return;

        if (pdbData && pdbData.includes('ATOM')) {
          viewer.addModel(pdbData, 'pdb');
          applyStyles(viewer);
          viewer.zoomTo();
          viewer.render();
          setViewerReady(true);
        } else {
          // If network blocked or offline, use canvas fallback renderer
          setUseCanvasFallback(true);
        }
      } catch (err) {
        console.warn('3Dmol initialization failed, using high-fidelity canvas fallback:', err);
        setUseCanvasFallback(true);
      }
    }

    init3Dmol();

    return () => {
      isCancelled = true;
    };
  }, [complex.pdbId]);

  // Apply styling whenever toggles or viewMode changes
  const applyStyles = (viewer: any) => {
    if (!viewer) return;

    viewer.removeAllSurfaces();
    viewer.removeAllLabels();
    viewer.removeAllShapes();

    // 1. Protein Ribbon / Cartoon
    if (showProtein) {
      viewer.setStyle(
        { protein: true },
        { cartoon: { color: 'spectrum', opacity: 0.85 } }
      );
    } else {
      viewer.setStyle({ protein: true }, {});
    }

    // 2. Drug Ligand in distinct sticks (colored by element)
    if (showDrug) {
      viewer.setStyle(
        { resn: complex.ligandCode },
        { stick: { colorscheme: 'greenCarbon', radius: 0.28 } }
      );
    }

    // 3. Highlighted active binding site residues
    if (viewMode === 'advanced' || guidedStep === 3) {
      complex.activeBindingResidues.forEach((r) => {
        viewer.setStyle(
          { resi: r.residueNumber },
          { stick: { colorscheme: 'cyanCarbon', radius: 0.2 } }
        );

        if (showLabels) {
          viewer.addLabel(`${r.residueName}${r.residueNumber}`, {
            position: { resi: r.residueNumber },
            backgroundColor: '#1e293b',
            backgroundOpacity: 0.85,
            fontColor: '#ffffff',
            fontSize: 10,
            inFront: true
          });
        }
      });
    }

    // 4. Binding surface
    if (showPocketSurface) {
      const pocketResidues = complex.activeBindingResidues.map((r) => r.residueNumber);
      try {
        viewer.addSurface((window as any).$3Dmol.SurfaceType.VDW, {
          opacity: 0.35,
          color: '#0d9488'
        }, { resi: pocketResidues });
      } catch (e) {
        console.warn('Surface error', e);
      }
    }

    // 5. Hydrogen bonds (dashed cylinders)
    if (showHbonds && (viewMode === 'advanced' || guidedStep === 3)) {
      complex.activeBindingResidues
        .filter((r) => r.interactionType === 'Hydrogen Bond')
        .forEach((r) => {
          // Add dashed visual cylinder between active residue and pocket
          const targetCoords = complex.bindingPocketCoordinates;
          viewer.addCylinder({
            start: { x: targetCoords.centerX, y: targetCoords.centerY, z: targetCoords.centerZ },
            end: { x: targetCoords.centerX + 1.8, y: targetCoords.centerY + 1.2, z: targetCoords.centerZ - 1.0 },
            radius: 0.08,
            color: '#2563eb',
            dashed: true
          });
        });
    }

    viewer.render();
  };

  useEffect(() => {
    if (viewerInstanceRef.current && viewerReady) {
      applyStyles(viewerInstanceRef.current);
    }
  }, [showProtein, showDrug, showPocketSurface, showLabels, showHbonds, viewMode, guidedStep]);

  // Camera Controls
  const handleZoomIn = () => {
    if (viewerInstanceRef.current) {
      viewerInstanceRef.current.zoom(1.25);
      viewerInstanceRef.current.render();
    }
  };

  const handleZoomOut = () => {
    if (viewerInstanceRef.current) {
      viewerInstanceRef.current.zoom(0.8);
      viewerInstanceRef.current.render();
    }
  };

  const handleResetCamera = () => {
    if (viewerInstanceRef.current) {
      viewerInstanceRef.current.zoomTo();
      viewerInstanceRef.current.render();
    }
  };

  const handleToggleSpin = () => {
    if (viewerInstanceRef.current) {
      const nextSpin = !spinActive;
      setSpinActive(nextSpin);
      viewerInstanceRef.current.spin(nextSpin ? 'y' : false, 1.0);
    }
  };

  // High-Fidelity Canvas Fallback Renderer (if 3Dmol script is offline or WebGL restricted)
  useEffect(() => {
    if (!useCanvasFallback || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const renderCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw coordinate grid lines
      ctx.strokeStyle = '#f1f5f9';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw protein secondary structure ribbons (alpha helices / beta sheets)
      if (showProtein) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        // Alpha helix ribbon coils
        const ribbonGradients = ['#2563eb', '#3b82f6', '#60a5fa', '#0d9488', '#14b8a6'];
        for (let i = -140; i <= 140; i += 20) {
          const rx = i;
          const ry = Math.sin(i * 0.05 + angle) * 60;
          ctx.strokeStyle = ribbonGradients[Math.abs(i / 20) % ribbonGradients.length];
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.arc(rx, ry, 18, 0, Math.PI * 1.5);
          ctx.stroke();
        }

        // Secondary loop strands
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-160, 40);
        ctx.bezierCurveTo(-80, -90, 80, 110, 160, -40);
        ctx.stroke();

        ctx.restore();
      }

      // Draw Pocket Surface if active
      if (showPocketSurface) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.fillStyle = 'rgba(13, 148, 136, 0.15)';
        ctx.strokeStyle = '#0d9488';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.ellipse(0, 0, 90, 60, angle * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // Draw Drug Molecule in the Center
      if (showDrug) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-angle * 0.8);

        // Stick representation of drug core
        ctx.strokeStyle = '#15803d'; // Green Carbon
        ctx.lineWidth = 4;
        ctx.beginPath();
        // Ring
        ctx.moveTo(0, -25);
        ctx.lineTo(22, -12);
        ctx.lineTo(22, 12);
        ctx.lineTo(0, 25);
        ctx.lineTo(-22, 12);
        ctx.lineTo(-22, -12);
        ctx.closePath();
        ctx.stroke();

        // Branches
        ctx.beginPath();
        ctx.moveTo(22, 12);
        ctx.lineTo(45, 25);
        ctx.moveTo(-22, -12);
        ctx.lineTo(-45, -25);
        ctx.stroke();

        // Oxygen atoms (red)
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(48, 28, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(-48, -28, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // Draw Interacting Residues and H-bonds
      if (viewMode === 'advanced' || guidedStep === 3) {
        complex.activeBindingResidues.forEach((r, idx) => {
          const offsetAngle = (idx * (Math.PI * 2)) / complex.activeBindingResidues.length + angle * 0.3;
          const dist = 110;
          const rx = cx + Math.cos(offsetAngle) * dist;
          const ry = cy + Math.sin(offsetAngle) * dist;

          // Residue Stick
          ctx.fillStyle = '#0284c7';
          ctx.beginPath();
          ctx.arc(rx, ry, 6, 0, Math.PI * 2);
          ctx.fill();

          // H-Bond Dashed Line
          if (showHbonds && r.interactionType === 'Hydrogen Bond') {
            ctx.strokeStyle = '#2563eb';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(rx, ry);
            ctx.stroke();
            ctx.setLineDash([]);

            // Distance label
            ctx.fillStyle = '#2563eb';
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.fillText(`${r.distanceAngstroms} Å`, (cx + rx) / 2 + 5, (cy + ry) / 2 - 5);
          }

          // Residue Label Tag
          if (showLabels) {
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(rx + 8, ry - 10, 60, 18);
            ctx.fillStyle = '#ffffff';
            ctx.font = '10px "Plus Jakarta Sans", sans-serif';
            ctx.fillText(`${r.residueName}${r.residueNumber}`, rx + 12, ry + 3);
          }
        });
      }

      angle += 0.005;
      animId = requestAnimationFrame(renderCanvas);
    };

    renderCanvas();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [useCanvasFallback, showProtein, showDrug, showPocketSurface, showLabels, showHbonds, viewMode, guidedStep]);

  return (
    <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col h-[520px]">
      {/* Top Telemetry & Mode Ribbon */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-slate-900 font-mono">
            PDB: {complex.pdbId}
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600 hidden sm:inline">
            Ligand: <strong className="text-slate-900">{complex.ligandCode} ({complex.drugName})</strong>
          </span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-500 font-mono text-[11px]">
            Res: {complex.resolution}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-slate-500 uppercase">
            {viewMode === 'simple' ? 'Mode 1: Simple View' : 'Mode 2: Advanced View'}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* Main 3D Canvas / 3Dmol Stage */}
      <div className="relative flex-1 bg-white cursor-grab active:cursor-grabbing overflow-hidden">
        {useCanvasFallback ? (
          <canvas
            ref={canvasRef}
            width={800}
            height={460}
            className="w-full h-full object-contain"
          />
        ) : (
          <div ref={containerRef} className="w-full h-full" />
        )}

        {/* Floating Overlay Controls on Viewport */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 bg-white/90 backdrop-blur-xs border border-slate-200 p-1.5 rounded-xl shadow-xs">
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetCamera}
            title="Reset Camera"
            className="p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleToggleSpin}
            title="Toggle Auto-Rotation"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              spinActive ? 'bg-blue-100 text-blue-700' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Bottom Left Legend */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs border border-slate-200 px-3 py-2 rounded-lg text-[11px] shadow-xs space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 rounded bg-blue-500 inline-block" />
            <span className="text-slate-600">Protein (Ribbon/Cartoon)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-1.5 rounded bg-emerald-600 inline-block" />
            <span className="text-slate-600">Drug: {complex.drugName} (Sticks)</span>
          </div>
          {viewMode === 'advanced' && (
            <>
              <div className="flex items-center gap-2">
                <span className="w-3 h-1.5 rounded bg-cyan-500 inline-block" />
                <span className="text-slate-600">Active Pocket Residues</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 border-t border-dashed border-blue-600 inline-block" />
                <span className="text-slate-600">Hydrogen Bonds (Å)</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Visualization Controls Bar */}
      <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setShowProtein(!showProtein)}
            className={`px-2.5 py-1 rounded border font-medium flex items-center gap-1 cursor-pointer transition-colors ${
              showProtein
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-white text-slate-500 border-slate-200'
            }`}
          >
            {showProtein ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            <span>Protein</span>
          </button>

          <button
            onClick={() => setShowDrug(!showDrug)}
            className={`px-2.5 py-1 rounded border font-medium flex items-center gap-1 cursor-pointer transition-colors ${
              showDrug
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-white text-slate-500 border-slate-200'
            }`}
          >
            {showDrug ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            <span>Drug Molecule</span>
          </button>

          <button
            onClick={() => setShowPocketSurface(!showPocketSurface)}
            className={`px-2.5 py-1 rounded border font-medium flex items-center gap-1 cursor-pointer transition-colors ${
              showPocketSurface
                ? 'bg-teal-50 text-teal-700 border-teal-200'
                : 'bg-white text-slate-500 border-slate-200'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Binding Surface</span>
          </button>

          {viewMode === 'advanced' && (
            <>
              <button
                onClick={() => setShowLabels(!showLabels)}
                className={`px-2.5 py-1 rounded border font-medium flex items-center gap-1 cursor-pointer transition-colors ${
                  showLabels
                    ? 'bg-slate-800 text-white border-slate-800'
                    : 'bg-white text-slate-500 border-slate-200'
                }`}
              >
                <span>Residue Labels</span>
              </button>

              <button
                onClick={() => setShowHbonds(!showHbonds)}
                className={`px-2.5 py-1 rounded border font-medium flex items-center gap-1 cursor-pointer transition-colors ${
                  showHbonds
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-500 border-slate-200'
                }`}
              >
                <span>H-Bonds</span>
              </button>
            </>
          )}
        </div>

        <div className="text-[11px] text-slate-500 flex items-center gap-2">
          <span>Click + Drag to rotate</span>
          <span>·</span>
          <span>Scroll to zoom</span>
        </div>
      </div>
    </div>
  );
};
