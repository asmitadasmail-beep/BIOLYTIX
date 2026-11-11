/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { HomeDashboard } from './components/HomeDashboard';
import { InteractionAnalyzer } from './components/InteractionAnalyzer';
import { MolecularExplorer } from './components/MolecularExplorer';
import { PathwayExplorer } from './components/PathwayExplorer';
import { DrugCatalog } from './components/DrugCatalog';
import { DiseaseCatalog } from './components/DiseaseCatalog';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AboutReferences } from './components/AboutReferences';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedDrugId, setSelectedDrugId] = useState<string>('drug-ibuprofen');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('dis-ckd');
  const [selectedPdbId, setSelectedPdbId] = useState<string>('1CX2');

  const handleSelectPair = (drugId: string, diseaseId: string) => {
    setSelectedDrugId(drugId);
    setSelectedDiseaseId(diseaseId);
    setActiveTab('analyzer');
  };

  const handleExploreStructure = (pdbId: string) => {
    setSelectedPdbId(pdbId);
    setActiveTab('molecular');
  };

  const handleAnalyzeDrug = (drugId: string) => {
    setSelectedDrugId(drugId);
    setActiveTab('analyzer');
  };

  const handleAnalyzeDisease = (diseaseId: string) => {
    setSelectedDiseaseId(diseaseId);
    setActiveTab('analyzer');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* Top Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Strict 3-zone Navigation Header */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Body Viewports */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeDashboard
            onSelectPair={handleSelectPair}
            onNavigate={setActiveTab}
            onExploreStructure={handleExploreStructure}
          />
        )}

        {activeTab === 'analyzer' && (
          <InteractionAnalyzer
            initialDrugId={selectedDrugId}
            initialDiseaseId={selectedDiseaseId}
            onExploreStructure={handleExploreStructure}
            onExplorePathway={() => setActiveTab('pathways')}
          />
        )}

        {activeTab === 'molecular' && (
          <MolecularExplorer initialPdbId={selectedPdbId} />
        )}

        {activeTab === 'pathways' && <PathwayExplorer />}

        {activeTab === 'drugs' && (
          <DrugCatalog
            onAnalyzeDrug={handleAnalyzeDrug}
            onExploreStructure={handleExploreStructure}
          />
        )}

        {activeTab === 'diseases' && (
          <DiseaseCatalog onAnalyzeDisease={handleAnalyzeDisease} />
        )}

        {activeTab === 'analytics' && <AnalyticsDashboard />}

        {activeTab === 'about' && <AboutReferences />}
      </main>

      {/* Authoritative Footer */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}
