import React from 'react';

/**
 * @param {object} props
 * @param {string} props.currentDate
 * @param {function} [props.onPrevClick]
 * @param {function} [props.onNextClick]
 */
export function ToDoListTitle({ currentDate, onPrevClick, onNextClick }) {
  return (
    <div className="flex items-center justify-between mb-6">

      <button
        onClick={onPrevClick}
        className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200"
        aria-label="Anterior"
      >
        <span role="img">◀️</span>
      </button>

      <h2 className="text-2xl font-bold text-white text-center flex-grow mx-4">
        {currentDate}
      </h2>

      <button
        onClick={onNextClick}
        className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200"
        aria-label="Próximo"
      >
        <span role="img">▶️</span>
      </button>
    </div>
  );
}