import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

// Ícones Reais (simulação)
const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>

// --- Dados e Funções Auxiliares ---

// timeSlots vai de 07:00 até 23:00 (17 rótulos de hora de início)
const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 7
  return `${String(hour).padStart(2, '0')}:00`
})

const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

const getGridRow = (hour) => {
  return hour - 7 + 2
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

// 🚨 FUNÇÃO ATUALIZADA: Inclui as horas de TODOS os eventos na lista de slots selecionados.
const getAllActivitySlots = (events) => {
  const allSlots = new Set();
  const minHour = 7;
  // totalGridSlots é 18 (índices 0 a 17)
  const totalGridSlots = timeSlots.length + 1;

  events.forEach(event => {
    // Garante que endHour 24 seja o limite de parada do loop
    const end = event.endHour === 24 ? 24 : event.endHour;

    // Loop para cada hora de duração do evento (ex: 10-12 seleciona 10:00 e 11:00)
    for (let hour = event.startHour; hour < end; hour++) {
      const timeIndex = hour - minHour;

      // Verifica se o índice está dentro dos 18 slots visíveis (0 a 17)
      if (timeIndex >= 0 && timeIndex < totalGridSlots) {
        const slotKey = `${event.dayIndex}-${timeIndex}`;
        allSlots.add(slotKey);
      }
    }
  });

  return Array.from(allSlots);
}

// --- Componentes Reutilizáveis de Renderização (Mantidos) ---

const TabButton = ({ tabId, children, activeTab, setActiveTab }) => {
  const isActive = activeTab === tabId;

  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`
        relative z-10 text-lg font-bold px-4 pt-3 pb-2 transition duration-200 ease-in-out cursor-pointer
        ${isActive
          ? 'text-yellow-400 bg-neutral-800 border-t border-l border-r border-yellow-400/50 rounded-t-lg border-b-2'
          : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50 border-b border-transparent'
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-neutral-800 z-20" aria-hidden="true"></span>
      )}
    </button>
  )
}

const EventSlot = ({ event, isVisible }) => (
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

const GridSlot = ({ slotKey, dayIndex, timeIndex, isSelected, activeTab, handleSlotClick }) => {
  const isStudyMode = activeTab === 'estudo'

  // Fundo padrão uniforme para todos os slots do calendário
  let bgColor = 'bg-neutral-800/50'
  let cursor = isStudyMode ? 'cursor-pointer' : ''

  if (isStudyMode && isSelected) {
    // 🚨 A cor verde representa um slot que faz parte do cronograma de atividades
    bgColor = 'bg-green-500/80 hover:bg-green-600'
  } else if (isStudyMode) {
    bgColor = 'bg-neutral-800/50 hover:bg-neutral-700/50'
  }

  return (
    <div
      key={slotKey}
      className={`
        time-slot border-t border-l border-neutral-700 text-xs transition-colors duration-200 
        ${bgColor} 
        ${cursor}
      `}
      style={{ gridColumn: dayIndex + 2, gridRow: timeIndex + 2 }}
      onClick={isStudyMode ? () => handleSlotClick(dayIndex, timeIndex) : undefined}
    ></div>
  )
}


// --- Componente Principal Schedule ---

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('agenda')
  // 🚨 Usando a nova função que inclui TODOS os eventos como slots selecionados
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

  const totalGridSlots = timeSlots.length + 1 // 18 slots (7:00 até 00:00)
  const totalGridRows = 1 + totalGridSlots // 1 cabeçalho + 18 linhas de tempo

  return (
    <div className="flex-grow flex flex-col gap-6">
      <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-2xl flex-grow">

        {/* --- Abas --- */}
        <div className="flex mb-4 border-neutral-700 -mt-6 -mx-6 px-6 pt-6 ">
          <div className="flex flex-row gap-0 border-b-2 border-neutral-700 w-full">
            <TabButton tabId="agenda" activeTab={activeTab} setActiveTab={setActiveTab}>Agenda da Semana</TabButton>
            <TabButton tabId="estudo" activeTab={activeTab} setActiveTab={setActiveTab}>Horários de Estudo</TabButton>
          </div>
        </div>

        {/* Navegação de Data */}
        <div className="flex items-center justify-between mb-4 mt-2 p-2 bg-neutral-700/50 rounded-lg">
          <Button
            className="p-1 rounded-full bg-transparent hover:bg-neutral-600 text-white"
            aria-label="Semana Anterior"
            variant="ghost"
          >
            <ChevronLeft />
          </Button>
          <div className="text-lg font-semibold text-neutral-300">14 Outubro - 20 Outubro</div>
          <Button
            className="p-1 rounded-full bg-transparent hover:bg-neutral-600 text-white"
            aria-label="Próxima Semana"
            variant="ghost"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* --- Grid do Calendário --- */}
        <div
          className="calendar-grid grid gap-px bg-neutral-700 border border-neutral-700 rounded-lg overflow-hidden relative"
          style={{
            gridTemplateColumns: `80px repeat(${daysOfWeek.length}, 1fr)`,
            gridTemplateRows: `auto repeat(${totalGridSlots}, 40px)`,
          }}
        >
          {/* Cabeçalhos (Coluna 1) */}
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

          {/* Horários da Coluna Lateral (7:00 até 23:00) */}
          {timeSlots.map((time, timeIndex) => (
            <div
              key={time}
              className="time-slot bg-neutral-800 text-neutral-400 text-xs font-semibold p-1 text-center border-r border-neutral-700 flex items-center justify-center"
              style={{ gridRow: timeIndex + 2, gridColumn: 1 }}
            >
              {time}
            </div>
          ))}

          {/* Rótulo 00:00 */}
          <div
            className="time-slot bg-neutral-800 text-neutral-400 text-xs font-semibold p-1 text-center border-r border-neutral-700 flex items-center justify-center"
            style={{ gridRow: totalGridRows, gridColumn: 1 }}
          >
            00:00
          </div>

          {/* Slots de Fundo / Interação (18 linhas) */}
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

          {/* Eventos da Agenda (visível na aba "Agenda") */}
          {dayEvents.map((event, index) => (
            <EventSlot
              key={index}
              event={event}
              isVisible={activeTab === 'agenda'}
            />
          ))}
        </div>

        {/* Rodapé / Ação */}
        <div className="flex justify-center mt-8">
          <Button
            className="w-full md:w-1/3"
            variant="yellow-primary"
            asChild
          >
            <Link to="../scheduleandtasks">
              {activeTab === 'agenda' ? 'Adicionar Novo Evento' : 'Salvar Horários de Estudo'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Schedule