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
}

export function ListItem({
  id,
  fullDescription,
  borderColor,
  defaultChecked = false,
  onStatusChange 
}) {
  const [isCompleted, setIsCompleted] = React.useState(defaultChecked);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCheck = (checked) => {
    const newStatus = checked === true;
    setIsCompleted(newStatus);
    if (onStatusChange) {
      onStatusChange(id, newStatus ? "Concluído" : "Pendente");
    }
  }

  return (
    <div className={cn(
      "bg-neutral-700 rounded-md border-l-4 transition duration-200",
      borderColors[borderColor] || "border-neutral-500",
      isCompleted ? "hover:bg-neutral-700" : "hover:bg-neutral-600",
      "p-2"
    )}>
      <div className="h-8 flex items-center justify-between">
        <Checkbox
          id={`checkbox-${id}`}
          checked={isCompleted}
          onCheckedChange={handleCheck}
          className="mr-2 data-[state=checked]:bg-green-600 border-neutral-500 data-[state=checked]:text-white"
        />
        <Label
          htmlFor={`checkbox-${id}`}
          className={cn(
            "flex-grow text-xs font-medium cursor-pointer",
            isCompleted ? "line-through opacity-70 text-neutral-500" : "text-neutral-400",
            isExpanded ? "whitespace-normal" : "truncate"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {fullDescription}
        </Label>
        <ChevronDown
          className={cn(
            "h-4 w-4 ml-2 text-neutral-400 transition-transform",
            isExpanded ? "rotate-180" : "rotate-0"
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
    </div>
  )
}
