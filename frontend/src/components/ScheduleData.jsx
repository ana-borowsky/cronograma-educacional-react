export const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
export const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>

export const timeSlots = Array.from({ length: 17 }, (_, i) => {
  const hour = i + 7
  return `${String(hour).padStart(2, '0')}:00`
})

export const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

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
