import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('agenda')
  const [studySlots, setStudySlots] = useState([])

  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = i + 7
    return `${String(hour).padStart(2, '0')}:00`
  })

  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']


  const getGridRow = (hour) => {
    return hour - 7 + 2
  }

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

  const dayEvents = [
    { dayIndex: 0, text: "Aula Cálculo I", startHour: 10, endHour: 12, className: "bg-red-700/80 hover:bg-red-700 border-red-900" },
    { dayIndex: 0, text: "Estudo Programação", startHour: 15, endHour: 17, className: "bg-blue-700/80 hover:bg-blue-700 border-blue-900" },
    { dayIndex: 0, text: "Trabalho Grupo", startHour: 18, endHour: 21, className: "bg-green-700/80 hover:bg-green-700 border-green-900" },
    { dayIndex: 0, text: "Leitura Cap. 5", startHour: 23, endHour: 24, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 1, text: "Lab. Física", startHour: 9, endHour: 10, className: "bg-yellow-700/80 hover:bg-yellow-700 border-yellow-900" },
    { dayIndex: 1, text: "Revisão Português", startHour: 12, endHour: 14, className: "bg-purple-700/80 hover:bg-purple-700 border-purple-900" },
    { dayIndex: 1, text: "Aula Programação", startHour: 16, endHour: 19, className: "bg-green-700/80 hover:bg-green-700 border-green-900" },
    { dayIndex: 1, text: "Preparar Apresentação", startHour: 21, endHour: 22, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 2, text: "Apresentação", startHour: 8, endHour: 9, className: "bg-purple-700/80 hover:bg-purple-700 border-purple-900" },
    { dayIndex: 2, text: "Estudo Cálculo I", startHour: 11, endHour: 13, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 2, text: "Aula Cálculo I", startHour: 17, endHour: 19, className: "bg-red-700/80 hover:bg-red-700 border-red-900" },
    { dayIndex: 2, text: "Revisão Geral", startHour: 20, endHour: 23, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 3, text: "Resolver Exercícios", startHour: 8, endHour: 11, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 3, text: "Leitura Física", startHour: 13, endHour: 15, className: "bg-yellow-700/80 hover:bg-yellow-700 border-yellow-900" },
    { dayIndex: 3, text: "Aula Programação", startHour: 17, endHour: 20, className: "bg-green-700/80 hover:bg-green-700 border-green-900" },
    { dayIndex: 3, text: "Planejamento", startHour: 22, endHour: 23, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 4, text: "Monitoria Cálculo", startHour: 9, endHour: 11, className: "bg-red-700/80 hover:bg-red-700 border-red-900" },
    { dayIndex: 4, text: "Estudo Português", startHour: 12, endHour: 14, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 4, text: "Aula Física Exp.", startHour: 16, endHour: 19, className: "bg-yellow-700/80 hover:bg-yellow-700 border-yellow-900" },
    { dayIndex: 4, text: "Descanso/Filme", startHour: 20, endHour: 22, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 5, text: "Trabalho Grupo Extendido", startHour: 10, endHour: 14, className: "bg-blue-700/80 hover:bg-blue-700 border-blue-900" },
    { dayIndex: 5, text: "Revisão Português", startHour: 15, endHour: 16, className: "bg-purple-700/80 hover:bg-purple-700 border-purple-900" },
    { dayIndex: 5, text: "Atividades Domésticas", startHour: 17, endHour: 19, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 6, text: "Revisão Semanal", startHour: 8, endHour: 11, className: "bg-red-700/80 hover:bg-red-700 border-red-900" },
    { dayIndex: 6, text: "Preparar Semana", startHour: 14, endHour: 16, className: "bg-neutral-600/80 hover:bg-neutral-600 border-neutral-700" },
    { dayIndex: 6, text: "Leitura de Apoio", startHour: 17, endHour: 19, className: "bg-yellow-700/80 hover:bg-yellow-700 border-yellow-900" },
  ]
  return (
    < div className = "flex-grow flex flex-col xl:flex-row gap-6" >
      <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-grow xl:w-3/4">
        {/* --- ABAS DE NAVEGAÇÃO DO CALENDÁRIO --- */}
        <div className="flex mb-4 border-b border-neutral-700">
          <button
            onClick={() => setActiveTab('agenda')}
            className={`text-lg font-bold pb-2 px-4 transition-colors duration-200 ${activeTab === 'agenda' ? 'text-white border-b-2 border-blue-500' : 'text-neutral-400 hover:text-white'}`}
          >
            Agenda da Semana
          </button>
          <button
            onClick={() => setActiveTab('estudo')}
            className={`text-lg font-bold pb-2 px-4 transition-colors duration-200 ${activeTab === 'estudo' ? 'text-white border-b-2 border-blue-500' : 'text-neutral-400 hover:text-white'}`}
          >
            Horários de Estudo
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <button className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200">
            <span role="img" aria-label="Semana Anterior">◀️</span>
          </button>
          <div className="text-lg font-semibold text-neutral-300">14 Outubro - 20 Outubro</div>
          <button className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200">
            <span role="img" aria-label="Próxima Semana">▶️</span>
          </button>
        </div>
        <div
          className="calendar-grid grid gap-px bg-neutral-700 border border-neutral-700 rounded-lg overflow-hidden relative" // Adicionado relative para contexto de posicionamento
          style={{
            gridTemplateColumns: `80px repeat(${daysOfWeek.length}, 1fr)`,
            gridTemplateRows: `auto repeat(${timeSlots.length + 1}, 40px)`,
          }}
        >
          <div className="day-label bg-neutral-800 text-neutral-300 font-bold p-2 sticky top-0 z-10 text-sm" style={{ gridColumn: 1, gridRow: 1 }}>Hora</div>
          {daysOfWeek.map((day, dayIndex) => (
            <div
              key={day}
              className={`day-label bg-neutral-800 text-neutral-300 font-bold p-2 text-center sticky top-0 z-10 text-sm ${dayIndex >= 5 ? 'text-yellow-500' : ''}`}
              style={{ gridColumn: dayIndex + 2, gridRow: 1 }}
            >
              {day}
            </div>
          ))}
          {timeSlots.map((time, timeIndex) => (
            <div key={time} className="time-slot bg-neutral-800 text-neutral-400 text-xs font-semibold p-1 text-center border-r border-neutral-700" style={{ gridRow: timeIndex + 2, gridColumn: 1 }}>{time}</div>
          ))}
          <div className="time-slot bg-neutral-800 text-neutral-400 text-xs font-semibold p-1 text-center border-r border-neutral-700" style={{ gridRow: 19, gridColumn: 1 }}>00:00</div>


          {daysOfWeek.map((day, dayIndex) => (
            timeSlots.map((time, timeIndex) => {
              const slotKey = `${dayIndex}-${timeIndex}`
              const isSelected = studySlots.includes(slotKey)
              const isWeekend = dayIndex >= 5

              let bgColor = 'bg-neutral-800/50'
              if (activeTab === 'estudo') {
                bgColor = isSelected
                  ? 'bg-green-500/80'
                  : (isWeekend ? 'bg-neutral-700/50' : 'bg-neutral-800/50 hover:bg-neutral-600/50')
              } else {
                bgColor = isWeekend ? 'bg-neutral-700/50' : 'bg-neutral-800/50'
              }

              return (
                <div
                  key={slotKey}
                  className={`time-slot border-t border-l border-neutral-700 text-xs transition-colors duration-200 ${bgColor} ${activeTab === 'estudo' ? 'cursor-pointer' : ''}`}
                  style={{ gridColumn: dayIndex + 2, gridRow: timeIndex + 2 }}
                  onClick={activeTab === 'estudo' ? () => handleSlotClick(dayIndex, timeIndex) : undefined}
                ></div>
              )
            })
          ))}


          {dayEvents.map((event, index) => (
            <div
              key={index}
              className={`event text-white p-1 rounded-md text-xs font-medium shadow-md z-20 overflow-hidden text-center transition-opacity duration-300 border ${event.className} ${activeTab === 'agenda' ? 'opacity-100' : 'opacity-0'}`}
              style={{
                gridColumn: event.dayIndex + 2,
                gridRowStart: getGridRow(event.startHour),
                gridRowEnd: getGridRow(event.endHour),
                pointerEvents: activeTab === 'agenda' ? 'auto' : 'none'
              }}
            >
              <span className="truncate block">{event.text}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            className="w-1/4"
            asChild
          >
            <Link to="../scheduleandtasks">
              Recalcular
            </Link>
          </Button>
        </div>
      </div>
        </div >
  )
}

export default Schedule