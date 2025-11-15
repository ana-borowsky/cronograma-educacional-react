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
    <div className="flex items-center justify-between mb-6 mt-2 p-2 bg-neutral-200/50 rounded-lg">

      <button
        onClick={onPrevClick}
        className="text-neutral-800 p-1 rounded-full bg-transparent hover:bg-neutral-300 transition duration-200"
        aria-label="Anterior"
      >
        <ChevronLeft />
      </button>

      <h2 className="text-lg font-semibold text-neutral-600 text-center flex-grow mx-4">
        {currentDate}
      </h2>

      <button
        onClick={onNextClick}
        className="text-neutral-800 p-1 rounded-full bg-transparent hover:bg-neutral-300 transition duration-200"
        aria-label="Próximo"
      >
        <ChevronRight />
      </button>
    </div>
  )
}