import { getGridRow } from "@/components/schedule/ScheduleData.jsx"
import { cn } from "@/lib/utils"

const colorMap = {
  yellow: "bg-yellow-500/80 hover:bg-yellow-500 border-yellow-600",
  blue: "bg-blue-500/80 hover:bg-blue-500 border-blue-600",
  purple: "bg-purple-500/80 hover:bg-purple-500 border-purple-600",
  green: "bg-green-500/80 hover:bg-green-500 border-green-600",
  red: "bg-red-500/80 hover:bg-red-500 border-red-600",
};

export const EventSlot = ({ event, isVisible }) => {

  const colorClass = colorMap[event.color] || "bg-neutral-400/80 hover:bg-neutral-500 border-neutral-500";

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