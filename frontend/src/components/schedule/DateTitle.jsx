import React from 'react'
import { ChevronLeft, ChevronRight } from "@/components/schedule/ScheduleData.jsx"

/**
 * @param {object} props
 * @param {string} props.currentDate
 * @param {function} [props.onPrevClick]
 * @param {function} [props.onNextClick]
 */
export function DateTitle({ currentDate, onPrevClick, onNextClick }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-neutral-600 text-center flex-grow mx-4">
        {currentDate}
      </h2>

    </div>
  )
}