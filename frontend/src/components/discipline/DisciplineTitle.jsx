import React from 'react';
import { cn } from "@/lib/utils"; 

const colorMap = {
  yellow: "bg-yellow-600",
  red: "bg-red-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
};

/**
 * * @param {object} props
 * @param {string} props.title 
 * @param {('yellow' | 'red' | 'green' | 'blue' | string)} props.color 
 */
export function DisciplineTitle({ title, color }) {

  const colorClass = colorMap[color] || "bg-neutral-500";

  return (
    <h2 className="w-full flex items-center text-xl font-bold text-tx mb-4 border-b border-neutral-700 pb-2 truncate">
      <span className={cn(
        "w-3 h-3 rounded-full mr-3 flex-shrink-0",
        colorClass
      )}></span>
      {title}
    </h2>
  );
}