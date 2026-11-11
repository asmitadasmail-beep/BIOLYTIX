/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Drug, Disease, DrugDiseaseInteraction, MolecularComplex, DockingJob, BiologicalPathway, DatabaseAnalytics } from '../types';

export const api = {
  async getDrugs(query = '', drugClass = 'All'): Promise<{ total: number; data: Drug[] }> {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (drugClass && drugClass !== 'All') params.set('class', drugClass);

    const res = await fetch(`/api/drugs?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch drugs');
    return res.json();
  },

  async getDrug(id: string): Promise<Drug> {
    const res = await fetch(`/api/drugs/${id}`);
    if (!res.ok) throw new Error('Failed to fetch drug details');
    return res.json();
  },

  async getDiseases(query = '', category = 'All'): Promise<{ total: number; data: Disease[] }> {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (category && category !== 'All') params.set('category', category);

    const res = await fetch(`/api/diseases?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch diseases');
    return res.json();
  },

  async getDisease(id: string): Promise<Disease> {
    const res = await fetch(`/api/diseases/${id}`);
    if (!res.ok) throw new Error('Failed to fetch disease details');
    return res.json();
  },

  async getInteractions(filters?: { drugId?: string; diseaseId?: string; category?: string; severity?: string }): Promise<{ total: number; data: DrugDiseaseInteraction[] }> {
    const params = new URLSearchParams();
    if (filters?.drugId) params.set('drugId', filters.drugId);
    if (filters?.diseaseId) params.set('diseaseId', filters.diseaseId);
    if (filters?.category && filters.category !== 'All') params.set('category', filters.category);
    if (filters?.severity && filters.severity !== 'All') params.set('severity', filters.severity);

    const res = await fetch(`/api/interactions?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch interactions');
    return res.json();
  },

  async analyzeInteraction(drugId: string, diseaseId: string, simplify = false): Promise<{
    isDocumented: boolean;
    status: string;
    interaction: DrugDiseaseInteraction;
    drug: Drug;
    disease: Disease;
  }> {
    const res = await fetch('/api/interactions/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ drugId, diseaseId, simplify })
    });
    if (!res.ok) throw new Error('Failed to analyze drug-disease pair');
    return res.json();
  },

  async getComplexes(): Promise<Array<{
    pdbId: string;
    drugId: string;
    drugName: string;
    ligandCode: string;
    proteinName: string;
    resolution: string;
    experimentalMethod: string;
    isExperimental: boolean;
    activeBindingResidueCount: number;
  }>> {
    const res = await fetch('/api/molecular/complexes');
    if (!res.ok) throw new Error('Failed to fetch molecular complexes');
    return res.json();
  },

  async getComplex(pdbId: string): Promise<MolecularComplex> {
    const res = await fetch(`/api/molecular/complexes/${pdbId}`);
    if (!res.ok) throw new Error(`Failed to fetch complex ${pdbId}`);
    return res.json();
  },

  async submitDocking(data: {
    drugId: string;
    pdbId?: string;
    gridBox?: MolecularComplex['bindingPocketCoordinates'];
    exhaustiveness?: number;
  }): Promise<{ message: string; jobId: string; statusUrl: string }> {
    const res = await fetch('/api/molecular/docking/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to submit docking task');
    return res.json();
  },

  async getDockingStatus(jobId: string): Promise<DockingJob> {
    const res = await fetch(`/api/molecular/docking/status/${jobId}`);
    if (!res.ok) throw new Error('Failed to get docking status');
    return res.json();
  },

  async getPathways(): Promise<Array<{
    id: string;
    title: string;
    drugId: string;
    diseaseId: string;
    subtitle: string;
    overview: string;
    nodeCount: number;
    clinicalTakeaway: string;
  }>> {
    const res = await fetch('/api/pathways');
    if (!res.ok) throw new Error('Failed to fetch biological pathways');
    return res.json();
  },

  async getPathway(id: string): Promise<BiologicalPathway> {
    const res = await fetch(`/api/pathways/${id}`);
    if (!res.ok) throw new Error('Failed to fetch pathway details');
    return res.json();
  },

  async getAnalytics(): Promise<DatabaseAnalytics> {
    const res = await fetch('/api/analytics');
    if (!res.ok) throw new Error('Failed to fetch analytics metrics');
    return res.json();
  }
};
