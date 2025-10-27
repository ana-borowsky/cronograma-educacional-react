import React from 'react';
import { Progress } from "@/components/ui/progress";

/**
 * @param {object} props
 * @param {number} props.progressValue
 * @param {string} props.progressText
 */
export function TimeProgress({ progressValue, progressText }) {
  return (
    <div className="mb-8 p-4 bg-neutral-700 rounded-lg border border-neutral-600">
      <div className="h-2 bg-neutral-600 rounded-full mb-1">
        <Progress
          value={progressValue}
          className="h-full bg-transparent"
          indicatorClassName="bg-green-500 rounded-full" 
        />
      </div>

      <p className="text-neutral-300 text-sm font-medium">
        {progressText}
      </p>
    </div>
  );
}