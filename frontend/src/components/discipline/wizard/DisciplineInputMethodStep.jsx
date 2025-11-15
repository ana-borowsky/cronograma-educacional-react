import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DisciplineInputMethodStep({ disciplineInputMethod, setDisciplineInputMethod }) {

  return (
    <div>
      <h2 className="text-neutral-600 flex items-center text-xl font-bold mb-4  pb-2 truncate">Escolha o modo da sua preferência</h2>
      <div className="space-y-1">
        <label className="block text-neutral-600 font-semibold text-sm">Modo de inserção</label>
        <div className="relative">
          <select
            onChange={(e) => setDisciplineInputMethod(e.target.value)}
            id="project-select"
            name="project-select"
            value={disciplineInputMethod}
            className="cursor-pointer w-full h-12 p-2.5 rounded-md bg-neutral-100 text-neutral-500 focus:outline-none focus:border-yellow-600 text-sm appearance-none pr-10"
          >
            <option value="ai">
              Insira via I.A.
            </option>
            <option value="manual">
              Insira manualmente
            </option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
