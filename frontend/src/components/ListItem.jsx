'use client'

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn, truncateText } from "@/lib/utils"
import { ChevronDown, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400 group-hover:text-yellow-600 transition-colors">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6.3 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
)

const borderColors = {
  green: "border-green-600",
  blue: "border-blue-600",
}

export function ListItem({
  id,
  fullDescription,
  borderColor,
  defaultChecked = false,
  onStatusChange,
  onEdit,        
  taskData       
}) {
  const [isCompleted, setIsCompleted] = React.useState(defaultChecked)
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  const handleCheck = (checked) => {
    const newStatus = checked === true
    setIsCompleted(newStatus)
    if (onStatusChange) {
      onStatusChange(id, newStatus ? "Concluído" : "Pendente")
    }
  }

  return (
    <div
      className={cn(
        "relative bg-neutral-100 rounded-md border-l-4 transition duration-200 hover:scale-102 w-full",
        borderColors[borderColor] || "border-neutral-400",
        isCompleted ? "border-neutral-400 bg-neutral-200" : "", 
        "p-2"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-8 flex items-center justify-between relative w-80 truncate overflow-hidden whitespace-nowrap">
        <div className="flex items-center flex-grow">
          <Checkbox
            id={`checkbox-${id}`}
            checked={isCompleted}
            onCheckedChange={handleCheck}
            className="mr-2 data-[state=checked]:bg-neutral-400 border-neutral-400 data-[state=checked]:text-neutral-100"
          />
          <Label
            htmlFor={`checkbox-${id}`}
            className={cn(
              "flex-grow cursor-pointer",
              isCompleted ? "line-through opacity-70 text-neutral-400" : "text-neutral-400",
              isExpanded ? "whitespace-normal" : "truncate"
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {truncateText(fullDescription, 40)}
          </Label>
        </div>

        <div className="flex items-center">
          {isHovered && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 ml-1 text-neutral-400 hover:text-yellow-600 hover:bg-transparent hover:cursor-pointer bg-neutral-100"
              onClick={() => onEdit && onEdit(taskData)}
              title="Editar trabalho"
            >
              <Pencil className="w-4 h-4 cursor-pointer" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
