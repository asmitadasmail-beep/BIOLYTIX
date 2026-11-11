/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-amber-50/80 border-b border-amber-200/80 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="font-medium">
            <span className="font-semibold text-amber-950">Biomedical Research & Educational System:</span>{' '}
            This platform is an educational decision-support prototype. It does not replace professional medical advice, diagnosis, or clinical prescribing.
          </p>
        </div>
        <span className="hidden md:inline-block text-[11px] font-mono text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded border border-amber-200 whitespace-nowrap">
          Deterministic Rule Engine v1.0
        </span>
      </div>
    </div>
  );
};
