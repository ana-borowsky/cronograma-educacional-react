import { getGridRow } from "@/components/ScheduleData.jsx"
import { cn } from "@/lib/utils"

const colorMap = {
  yellow: "bg-yellow-700/80 hover:bg-yellow-700 border-yellow-900",
  blue: "bg-blue-700/80 hover:bg-blue-700 border-blue-900",
  purple: "bg-purple-700/80 hover:bg-purple-700 border-purple-900",
  green: "bg-green-700/80 hover:bg-green-700 border-green-900",
  red: "bg-red-700/80 hover:bg-red-700 border-red-900",
};

export const EventSlot = ({ event, isVisible }) => {
  
  const colorClass = colorMap[event.color] || "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700";
  
  return (
    <div
      className={cn(
        "event text-white p-1 rounded-md text-xs font-medium shadow-md z-20 overflow-hidden text-center transition-opacity duration-300 border",
        colorClass,
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        gridColumn: event.dayIndex + 2,
        gridRowStart: getGridRow(event.startHour),
        gridRowEnd: getGridRow(event.endHour === 24 ? 24 : event.endHour),
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <span className="truncate block">{event.text}</span>
    </div>
  )
}

