'use client'

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const borderColors = {
  yellow: "border-yellow-600",
  red: "border-red-600",
};

export function TaskItem({ id, timeRange, description, defaultChecked = false, borderColor }) {
  const [isCompleted, setIsCompleted] = React.useState(defaultChecked);

  const borderClass = borderColors[borderColor] || "border-gray-500";

  const textClasses = isCompleted
    ? "line-through text-neutral-500"
    : "text-white";

  return (
    <div
      className={cn(
        "flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 transition duration-200",
        borderClass, 
        isCompleted ? "hover:border-neutral-700" : "hover:border-neutral-500"
      )}
    >

      <span
        className={cn(
          "w-24 font-medium text-sm flex-shrink-0",
          isCompleted ? "line-through text-neutral-500" : "text-neutral-400"
        )}
      >
        {timeRange}
      </span>

      <Label
        htmlFor={id}
        className={cn(
          "flex-grow ml-4 cursor-pointer",
          textClasses 
        )}
      >
        {description}
      </Label>

      <Checkbox
        id={id}
        checked={isCompleted}
        onCheckedChange={(checked) => setIsCompleted(checked === true)}

        className="ml-4 w-5 h-5 data-[state=checked]:bg-blue-600 border-neutral-500 data-[state=checked]:text-white focus-visible:ring-offset-neutral-700"
      />
    </div>
  );
}