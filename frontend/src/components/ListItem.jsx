'use client'

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const borderColors = {
  yellow: "border-yellow-600",
  green: "border-green-600",
  red: "border-red-600",
  blue: "border-blue-600",
  purple: "border-purple-600",
};

export function ListItem({
  id,
  fullDescription,
  borderColor,
  defaultChecked = false
}) {
  const [isCompleted, setIsCompleted] = React.useState(defaultChecked);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const borderClass = borderColors[borderColor] || "border-neutral-500";

  const textClasses = cn(
    "text-xs font-medium cursor-pointer",
    isCompleted ? "line-through opacity-70 text-neutral-500" : "text-neutral-400"
  )

  const truncationClass = isExpanded ? "whitespace-normal" : "truncate";

  return (
    <div
      className={cn(
        "bg-neutral-700 rounded-md border-l-4 transition duration-200",
        borderClass,
        isCompleted ? "hover:bg-neutral-700" : "hover:bg-neutral-600",
        "p-2"
      )}
    >
      <div className="flex items-center">
        <Checkbox
          id={`checkbox-${id}`}
          checked={isCompleted}
          onCheckedChange={(checked) => setIsCompleted(checked === true)}
          className="mr-2 mt-0.5 w-4 h-4 data-[state=checked]:bg-green-600 border-neutral-500 data-[state=checked]:text-white focus-visible:ring-offset-neutral-700 flex-shrink-0"
        />

        <Label
          htmlFor={`checkbox-${id}`}
          className={cn(
            "flex-grow",
            textClasses,
            truncationClass
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {fullDescription}
        </Label>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 ml-2 -mr-1 mt-0.5 text-neutral-400 hover:text-white rounded-full transition-transform duration-200 flex-shrink-0"
          aria-expanded={isExpanded}
          aria-controls={`content-${id}`}
        >
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform",
            isExpanded ? "rotate-180" : "rotate-0"
          )} />
        </button>
      </div>

    </div>
  )
}
