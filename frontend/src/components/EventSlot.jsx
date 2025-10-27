import { getGridRow } from "@/components/ScheduleData.jsx"

export const EventSlot = ({ event, isVisible }) => (
  <div
    className={`
      event text-white p-1 rounded-md text-xs font-medium shadow-md z-20 overflow-hidden text-center transition-opacity duration-300 border
      ${event.className} 
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}
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