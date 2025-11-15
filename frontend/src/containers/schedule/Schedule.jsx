import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DateTitle } from "@/components/schedule/DateTitle"
import { TabButton } from "@/components/schedule/TabButton"
import { GridSlot } from "@/components/schedule/GridSlot"
import { EventSlot } from "@/components/schedule/EventSlot"
import {
  daysOfWeek,
  timeSlots,
  getAllActivitySlots,
  totalGridSlots,
} from "@/components/schedule/ScheduleData.jsx"

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('agenda')

  const [dayEvents, setDayEvents] = useState([])
  const [studySlots, setStudySlots] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8800/ScheduleEvents');
        const data = await response.json();
        setDayEvents(data);
        setStudySlots(getAllActivitySlots(data));
      } catch (error) {
        console.error("Erro buscando eventos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

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

  const handleScheduleAction = async () => {
    try {
      let response;
      if (activeTab === 'agenda') {
        console.log("Chamado 😘")
        response = await fetch('http://localhost:8800/buildPlanning/1', {
          method: 'POST',
        });
        if (!response.ok) throw new Error('Erro ao recalcular cronograma');
      } else {
        response = await fetch('http://localhost:8800/saveStudySlots', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slots: studySlots }),
        });
        if (!response.ok) throw new Error('Erro ao salvar horários');
      }
      
      navigate('../scheduleandtasks');

    } catch (error) {
      console.error("Falha na ação do cronograma:", error);
    }
  }

  const totalGridRows = 1 + totalGridSlots
  const currentWeekText = "14 Outubro - 20 Outubro"

  return (
    <div className="flex-grow flex flex-col gap-6">
      <div className="bg-neutral-300 p-6 border border-neutral-400 rounded-lg shadow-lg flex-grow">

        <div className="flex mb-4 border-neutral-400 -mt-6 -mx-6 px-6 pt-6 ">
          <div className="flex flex-row gap-0 border-b-2 border-neutral-400 w-full">
            <TabButton tabId="agenda" activeTab={activeTab} setActiveTab={setActiveTab}>Agenda da Semana</TabButton>
            <TabButton tabId="estudo" activeTab={activeTab} setActiveTab={setActiveTab}>Horários de Estudo</TabButton>
          </div>
        </div>

        <DateTitle
          currentDate={currentWeekText}
        />

        {isLoading ? (
          <p className="text-neutral-500 text-center">Carregando agenda...</p>
        ) : (
          <div
            className="calendar-grid grid gap-px bg-neutral-400 border border-neutral-400 rounded-lg overflow-hidden relative"
            style={{
              gridTemplateColumns: `80px repeat(${daysOfWeek.length}, 1fr)`,
              gridTemplateRows: `auto repeat(${totalGridSlots}, 40px)`,
            }}
          >
            <div className="day-label bg-neutral-200 text-neutral-600 font-bold p-2 text-sm" style={{ gridColumn: 1, gridRow: 1 }}>Hora</div>
            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={day}
                className={`day-label bg-neutral-200 text-neutral-600 font-bold p-2 text-center text-sm ${dayIndex >= 5 ? 'text-yellow-600' : ''}`}
                style={{ gridColumn: dayIndex + 2, gridRow: 1 }}
              >
                {day}
              </div>
            ))}

            {timeSlots.map((time, timeIndex) => (
              <div
                key={time}
                className="time-slot bg-neutral-300 text-neutral-500 text-xs font-semibold p-1 text-center border-r border-neutral-400 flex items-center justify-center"
                style={{ gridRow: timeIndex + 2, gridColumn: 1 }}
              >
                {time}
              </div>
            ))}

            <div
              className="time-slot bg-neutral-300 text-neutral-500 text-xs font-semibold p-1 text-center border-r border-neutral-400 flex items-center justify-center"
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
        )}

        <div className="flex justify-center mt-8">
          <Button
            className="w-full md:w-1/3"
            variant="yellow-primary"
            onClick={handleScheduleAction}
          >
            {activeTab === 'agenda' ? 'Recalcular Cronograma' : 'Salvar Horários de Estudo'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Schedule