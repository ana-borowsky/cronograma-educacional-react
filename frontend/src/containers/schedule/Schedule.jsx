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

const getStartOfWeek = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

const formatDateForAPI = (date) => {
  return date.toISOString().split('T')[0];
};

const getWeekRangeText = (startDate) => {
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  
  const options = { month: 'short', day: 'numeric' };
  const startText = startDate.toLocaleDateString('pt-BR', options); 
  const endText = endDate.toLocaleDateString('pt-BR', options);
  
  return `${startText} - ${endText}`;
};

const convertDbToSlotKey = (freeTimeItem) => {
  const dayName = freeTimeItem.weekDay.replace("-feira", "");
  const dayIndex = daysOfWeek.indexOf(dayName);

  const time = freeTimeItem.startTime.slice(0, 5);
  const timeIndex = timeSlots.indexOf(time);

  if (dayIndex > -1 && timeIndex > -1) {
    return `${dayIndex}-${timeIndex}`;
  }
  return null;
};


const Schedule = () => {
  const [activeTab, setActiveTab] = useState('agenda')
  const [dayEvents, setDayEvents] = useState([])
  const [studySlots, setStudySlots] = useState([])
  const [dbFreeTimes, setDbFreeTimes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  const [weekStartDate, setWeekStartDate] = useState(getStartOfWeek(new Date('2025-11-10T12:00:00')));

  const fetchFreeTimes = async () => {
    try {
      const response = await fetch('http://localhost:8800/freeTime/1');
      if (response.ok) {
        const data = await response.json();
        setDbFreeTimes(data);
        const initialStudySlots = data.map(convertDbToSlotKey).filter(Boolean);
        setStudySlots(initialStudySlots);
      } else if (response.status === 404) {
        setDbFreeTimes([]);
        setStudySlots([]);
      } else {
        console.error("Erro ao buscar horários livres (não-404)");
      }
    } catch (error) {
       console.error("Falha ao carregar horários livres:", error);
    }
  };

  const fetchEvents = async (date) => {
    try {
      setIsLoading(true);
      const apiDate = formatDateForAPI(date);
      
      const response = await fetch(`http://localhost:8800/schedules/weekSchedule/1?weekStartDate=${apiDate}`);
      
      if (response.ok) {
        const data = await response.json();
        setDayEvents(data);
      } else if (response.status === 404) {
        setDayEvents([]);
      } else {
         console.error("Erro buscando eventos (não-404)");
         setDayEvents([]);
      }
    } catch (error) {
      console.error("Erro buscando eventos:", error);
      setDayEvents([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialFreeTimes = async () => {
      setIsLoading(true);
      await fetchFreeTimes();
      setIsLoading(false);
    };
    
    loadInitialFreeTimes();
  }, []);

  useEffect(() => {
    fetchEvents(weekStartDate);
  }, [weekStartDate]);

  const handleSlotClick = (dayIndex, timeIndex) => {
    if (activeTab !== 'estudo') return;

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
    setIsLoading(true)
    try {
      if (activeTab === 'agenda') {
        console.log("Recalculando cronograma...");
        const response = await fetch('http://localhost:8800/buildPlanning/1', {
          method: 'GET',
        });
        if (!response.ok) throw new Error('Erro ao recalcular cronograma');
        alert("Cronograma recalculado!");
        
        await fetchEvents(weekStartDate);

      } else {
        console.log("Sincronizando horários de estudo...");

        const dbSlotKeys = dbFreeTimes.map(convertDbToSlotKey).filter(Boolean);
        const dbSlotKeysSet = new Set(dbSlotKeys);

        const uiSlotKeys = studySlots;
        const uiSlotKeysSet = new Set(uiSlotKeys);

        const slotsToCreateKeys = uiSlotKeys.filter(key => !dbSlotKeysSet.has(key));
        
        const slotsToDeleteIds = dbFreeTimes
          .filter(item => {
            const key = convertDbToSlotKey(item);
            return key && !uiSlotKeysSet.has(key);
          })
          .map(item => item.idTime);

        const createRequests = slotsToCreateKeys.map(slotKey => {
          const [dayIndex, timeIndex] = slotKey.split('-').map(Number);
          const payload = {
            idTime: null,
            idUser: 1,
            weekDay: daysOfWeek[dayIndex],
            startTime: `${timeSlots[timeIndex]}:00`,
            durationTime: 60
          };
          
          if (daysOfWeek[dayIndex] !== 'Sábado' && daysOfWeek[dayIndex] !== 'Domingo') {
             payload.weekDay = `${daysOfWeek[dayIndex]}-feira`;
          }

          return fetch('http://localhost:8800/freeTime', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        });

        const deleteRequests = slotsToDeleteIds.map(idTime => {
          return fetch(`http://localhost:8800/freeTime/${idTime}`, {
            method: 'DELETE',
          });
        });

        const allRequests = [...createRequests, ...deleteRequests];

        if (allRequests.length === 0) {
          alert("Nenhuma alteração para salvar.");
          setIsLoading(false);
          return;
        }

        const responses = await Promise.all(allRequests);

        const failed = responses.filter(res => !res.ok);
        if (failed.length > 0) {
          throw new Error(`Falha ao sincronizar ${failed.length} horários.`);
        }

        await fetchFreeTimes(); 

        alert('Horários de estudo salvas com sucesso!');
        setActiveTab('agenda');
      }
    } catch (error) {
      console.error("Falha na ação do cronograma:", error);
      alert(`Erro: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  const handlePrevWeek = () => {
    setWeekStartDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setWeekStartDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };


  const totalGridRows = 1 + totalGridSlots
  
  const currentWeekText = getWeekRangeText(weekStartDate);

  return (
    <div className="w-2/3 flex flex-col gap-6">
      <div className="bg-neutral-300 p-6 border border-neutral-400 rounded-lg shadow-lg flex-grow">

        <div className="flex mb-4 border-neutral-400 -mt-6 -mx-6 px-6 pt-6 ">
          <div className="flex flex-row gap-0 border-b-2 border-neutral-400 w-full">
            <TabButton tabId="agenda" activeTab={activeTab} setActiveTab={setActiveTab}>Agenda da Semana</TabButton>
            <TabButton tabId="estudo" activeTab={activeTab} setActiveTab={setActiveTab}>Horários de Estudo</TabButton>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Button onClick={handlePrevWeek} variant="ghost" className="px-2" aria-label="Semana anterior" disabled={isLoading}>
            &lt;
          </Button>
          
          <DateTitle
            currentDate={currentWeekText}
          />
          
          <Button onClick={handleNextWeek} variant="ghost" className="px-2" aria-label="Próxima semana" disabled={isLoading}>
            &gt;
          </Button>
        </div>


        {isLoading ? (
          <p className="text-neutral-500 text-center py-10">Carregando...</p>
        ) : (
          <div
            className="calendar-grid gap-px grid bg-neutral-400 border border-neutral-400 rounded-lg overflow-hidden relative"
            style={{
              gridTemplateColumns: `80px repeat(${daysOfWeek.length}, 1fr)`,
              gridTemplateRows: `auto repeat(${totalGridSlots}, 40px)`,
            }}
          >
            <div className="day-label bg-neutral-300 text-neutral-600 font-bold p-2 text-sm" style={{ gridColumn: 1, gridRow: 1 }}>Hora</div>
            
            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={day}
                className={`day-label bg-neutral-300 text-neutral-600 font-bold p-2 text-center text-sm ${dayIndex >= 5 ? 'text-white' : ''}`}
                style={{ gridColumn: dayIndex + 2, gridRow: 1 }}
              >
                {day}
              </div>
            ))}

            {timeSlots.map((time, timeIndex) => (
              <div
                key={time}
                className="time-slot bg-neutral-300 text-neutral-500 text-xs font-semibold p-1 text-center border-neutral-400 flex items-center justify-center"
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
            disabled={isLoading}
          >
            {isLoading ? "Processando..." : (activeTab === 'agenda' ? 'Recalcular Cronograma' : 'Salvar Horários de Estudo')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Schedule