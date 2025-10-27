export const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
export const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>

export const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 7
  return `${String(hour).padStart(2, '0')}:00`
})

export const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

export const dayEvents = [
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

export const totalGridSlots = timeSlots.length + 1;

export const getGridRow = (hour) => {
  return hour - 7 + 2
}

export const getAllActivitySlots = (events) => {
  const allSlots = new Set();
  const minHour = 7;

  events.forEach(event => {
    const end = event.endHour === 24 ? 24 : event.endHour;

    for (let hour = event.startHour; hour < end; hour++) {
      const timeIndex = hour - minHour;

      if (timeIndex >= 0 && timeIndex < totalGridSlots) {
        const slotKey = `${event.dayIndex}-${timeIndex}`;
        allSlots.add(slotKey);
      }
    }
  });

  return Array.from(allSlots);
}