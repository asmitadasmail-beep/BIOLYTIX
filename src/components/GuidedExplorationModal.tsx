/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronLeft, ChevronRight, X, Compass, Check } from 'lucide-react';
import { MolecularComplex } from '../types';

interface GuidedExplorationModalProps {
  complex: MolecularComplex;
  currentStepIndex: number;
  onStepChange: (index: number) => void;
  onExit: () => void;
}

export const GuidedExplorationModal: React.FC<GuidedExplorationModalProps> = ({
  complex,
  currentStepIndex,
  onStepChange,
  onExit
}) => {
  const step = complex.guidedSteps[currentStepIndex] || complex.guidedSteps[0];
  const totalSteps = complex.guidedSteps.length;

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      onStepChange(currentStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      onStepChange(currentStepIndex + 1);
    } else {
      onExit();
    }
  };

  return (
    <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 shadow-lg space-y-4">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            <Compass className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Guided Exploration Mode
          </span>
          <span className="text-xs text-slate-500 font-mono">
            (Step {currentStepIndex + 1} of {totalSteps})
          </span>
        </div>

        <button
          onClick={onExit}
          className="text-xs text-slate-500 hover:text-slate-800 p-1 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress pill stepper */}
      <div className="grid grid-cols-4 gap-2">
        {complex.guidedSteps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => onStepChange(idx)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === currentStepIndex
                ? 'bg-blue-600'
                : idx < currentStepIndex
                ? 'bg-blue-300'
                : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Current Step Content */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-blue-600 block">
          {step.title}
        </span>
        <h4 className="text-base font-bold text-slate-900">
          {step.subheading}
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {step.explanation}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <button
          onClick={handlePrev}
          disabled={currentStepIndex === 0}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors ${
            currentStepIndex === 0
              ? 'text-slate-300 cursor-not-allowed'
              : 'text-slate-700 hover:bg-slate-100 cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Step</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onExit}
            className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            Exit Guided Mode
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 shadow-xs cursor-pointer transition-colors"
          >
            <span>{currentStepIndex === totalSteps - 1 ? 'Finish Tour' : 'Next Step'}</span>
            {currentStepIndex === totalSteps - 1 ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
