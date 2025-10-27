import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DateTitle } from "@/components/DateTitle"
import { TabButton } from "@/components/TabButton"
import { GridSlot } from "@/components/GridSlot"
import { EventSlot } from "@/components/EventSlot"
import {
  daysOfWeek,
  timeSlots,
  dayEvents,
  getAllActivitySlots,
  totalGridSlots,
} from "@/components/ScheduleData.jsx"

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('agenda')
  const [studySlots, setStudySlots] = useState(getAllActivitySlots(dayEvents))

  const handleSlotClick = (dayIndex, timeIndex) => {
    const slotKey = `${dayIndex}-${timeIndex}`
    setStudySlots(prevSlots => {
      if (prevSlots.includes(slotKey)) {
        return prevSlots.filter(key => key !== slotKey)
      } else {
        return [...prevSlots, slotKey]
      }
    })
  }

  const totalGridRows = 1 + totalGridSlots

  const currentWeekText = "14 Outubro - 20 Outubro"

  return (
    <div className="flex-grow flex flex-col gap-6">
      <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-2xl flex-grow">

        <div className="flex mb-4 border-neutral-700 -mt-6 -mx-6 px-6 pt-6 ">
          <div className="flex flex-row gap-0 border-b-2 border-neutral-700 w-full">
            <TabButton tabId="agenda" activeTab={activeTab} setActiveTab={setActiveTab}>Agenda da Semana</TabButton>
            <TabButton tabId="estudo" activeTab={activeTab} setActiveTab={setActiveTab}>Horários de Estudo</TabButton>
          </div>
        </div>

        <DateTitle
          currentDate={currentWeekText}
        />

        <div
          className="calendar-grid grid gap-px bg-neutral-700 border border-neutral-700 rounded-lg overflow-hidden relative"
          style={{
            gridTemplateColumns: `80px repeat(${daysOfWeek.length}, 1fr)`,
            gridTemplateRows: `auto repeat(${totalGridSlots}, 40px)`,
          }}
        >
          <div className="day-label bg-neutral-700 text-neutral-300 font-bold p-2 text-sm" style={{ gridColumn: 1, gridRow: 1 }}>Hora</div>
          {daysOfWeek.map((day, dayIndex) => (
            <div
              key={day}
              className={`day-label bg-neutral-700 text-neutral-300 font-bold p-2 text-center text-sm ${dayIndex >= 5 ? 'text-yellow-500' : ''}`}
              style={{ gridColumn: dayIndex + 2, gridRow: 1 }}
            >
              {day}
            </div>
          ))}

          {timeSlots.map((time, timeIndex) => (
            <div
              key={time}
              className="time-slot bg-neutral-800 text-neutral-400 text-xs font-semibold p-1 text-center border-r border-neutral-700 flex items-center justify-center"
              style={{ gridRow: timeIndex + 2, gridColumn: 1 }}
            >
              {time}
            </div>
          ))}

          <div
            className="time-slot bg-neutral-800 text-neutral-400 text-xs font-semibold p-1 text-center border-r border-neutral-700 flex items-center justify-center"
            style={{ gridRow: totalGridRows, gridColumn: 1 }}
          >
            00:00
          </div>

          {daysOfWeek.map((day, dayIndex) => (
            Array.from({ length: totalGridSlots }, (_, timeIndex) => {
              const slotKey = `${dayIndex}-${timeIndex}`
              const isSelected = studySlots.includes(slotKey)

              return (
                <GridSlot
                  key={slotKey}
                  slotKey={slotKey}
                  dayIndex={dayIndex}
                  timeIndex={timeIndex}
                  isSelected={isSelected}
                  activeTab={activeTab}
                  handleSlotClick={handleSlotClick}
                />
              )
            })
          ))}

          {dayEvents.map((event, index) => (
            <EventSlot
              key={index}
              event={event}
              isVisible={activeTab === 'agenda'}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            className="w-full md:w-1/3"
            variant="yellow-primary"
            asChild
          >
            <Link to="../scheduleandtasks">
              {activeTab === 'agenda' ? 'Recalcular Cronograma' : 'Salvar Horários de Estudo'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Schedule