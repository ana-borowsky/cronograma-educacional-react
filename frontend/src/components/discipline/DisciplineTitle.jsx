import React from 'react'
import { cn, truncateText, highlightIfEditable } from "@/lib/utils"

const colorMap = {
  yellow: "bg-yellow-600",
  red: "bg-red-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
  purple: "bg-blue-600",
  orange: "bg-orange-600",
  pink: "bg-pink-500",
  white: "bg-white",
  black: "bg-black",
}

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.project
 * @param {string | number} props.weight
 * @param {string} props.color
 */
export function DisciplineTitle({ title, project, weight, color, classroom }) {
  const colorClass = colorMap[color] || "bg-neutral-500"

  return (
    <div className="w-full">
      <h2 className="flex items-center text-xl font-semibold text-neutral-600 mb-1 truncate">
        <span
          className={cn("w-3 h-3 rounded-full mr-3 flex-shrink-0", colorClass)}
        ></span>
        {truncateText(title, 30) || "Edite o nome da disciplina"}
      </h2>

      <div className="mt-1 mb-2 flex items-center gap-3 text-sm text-neutral-500">
        <span
          className={`
      px-2 py-0.5 rounded-md font-medium
      ${highlightIfEditable(project || "Edite o nome do projeto")}
    `}
        >
          {truncateText(project || "Edite o nome do projeto", 20)}
        </span>

        <span
          className={`
      px-2 py-0.5 rounded-md font-medium
      ${highlightIfEditable(weight || "Edite o nível de dificuldade")}
    `}
        >
          {truncateText(weight || "Edite o nível de dificuldade", 20)}
        </span>

        <span
          className={`
      px-2 py-0.5 rounded-md font-medium
      ${highlightIfEditable(classroom || "Edite a sala")}
    `}
        >
          {truncateText(classroom || "Edite a sala", 20)}
        </span>
      </div>

    </div>
  )
}
