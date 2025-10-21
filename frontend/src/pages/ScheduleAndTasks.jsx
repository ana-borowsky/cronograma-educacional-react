import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const ScheduleAndTasks = () => {
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = i + 7;
    return `${String(hour).padStart(2, '0')}:00`;
  });

  const tasksData = [
    { text: "Terminar leitura da apostila", completed: false, estimate: "1.5h" },
    { text: "Preparar slides para apresentação", completed: true, estimate: "2h" },
    { text: "Responder e-mails da coordenação", completed: false, estimate: "0.5h" },
    { text: "Revisar exercícios de Programação", completed: false, estimate: "1h" },
    { text: "Comprar material de laboratório", completed: false, estimate: "1h" },
    { text: "Planejamento da próxima semana", completed: false, estimate: "1.5h" },
    { text: "Limpar e-mail", completed: true, estimate: "0.5h" },
    { text: "Agendar reunião com monitor", completed: false, estimate: "0.5h" },
  ];

  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const getGridRow = (hour) => {
    return hour - 7 + 2;
  };

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
  ];

  return (
    <Layout subtitle="Cronograma Semanal">
      <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto p-5 gap-6 items-start">

        <div className="md:w-56 w-full p-4 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0">

          <Link to="/todolist" className="flex items-center gap-3 p-3 rounded-md text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200">
            <span role="img" aria-label="Visão Geral">🏠</span>
            <span className="font-semibold text-sm">Visão Geral (Hoje)</span>
          </Link>

          <Link to="/scheduleandtasks" className="flex items-center gap-3 p-3 rounded-md bg-neutral-700 text-white border-l-4 border-neutral-500 pl-2">
            <span role="img" aria-label="Cronograma">📅</span>
            <span className="font-semibold text-sm">Cronograma</span>
          </Link>

          <Link to="/roomschedule" className="flex items-center gap-3 p-3 rounded-md text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200">
            <span role="img" aria-label="Ensalamento">🏫</span>
            <span className="font-semibold text-sm">Ensalamento</span>
          </Link>

          <Link to="/syllabus" className="flex items-center gap-3 p-3 rounded-md text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200">
            <span role="img" aria-label="Plano de Ensino">📚</span>
            <span className="font-semibold text-sm">Plano de Ensino</span>
          </Link>

          <Link to="/studyschedule" className="flex items-center gap-3 p-3 rounded-md text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200">
            <span role="img" aria-label="Horas para estudo">⏳</span>
            <span className="font-semibold text-sm">Horas para estudo</span>
          </Link>

          <Link to="/disciplines" className="flex items-center gap-3 p-3 rounded-md text-neutral-300 hover:bg-neutral-700 hover:text-white transition duration-200">
            <span role="img" aria-label="Disciplinas">📋</span>
            <span className="font-semibold text-sm">Disciplinas</span>
          </Link>

        </div>

        <div className="flex-grow flex flex-col xl:flex-row gap-6">

          <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-grow xl:w-3/4">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-neutral-700 pb-2">Agenda da Semana</h2>

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
              className="calendar-grid grid gap-px bg-neutral-700 border border-neutral-700 rounded-lg overflow-hidden"
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
                timeSlots.map((time, timeIndex) => (
                  <div
                    key={`${day}-${time}`}
                    className={`time-slot border-t border-l border-neutral-700 ${dayIndex >= 5 ? 'bg-neutral-700/50' : 'bg-neutral-800/50'} text-xs`}
                    style={{ gridColumn: dayIndex + 2, gridRow: timeIndex + 2 }}
                  ></div>
                ))
              ))}

              {dayEvents.map((event, index) => (
                <div
                  key={index}
                  className={`event text-white p-1 rounded-md text-xs font-medium shadow-md z-20 overflow-hidden text-center transition duration-200 border ${event.className}`}
                  style={{
                    gridColumn: event.dayIndex + 2,
                    gridRowStart: getGridRow(event.startHour),
                    gridRowEnd: getGridRow(event.endHour),
                  }}
                >
                  <span className="truncate block">{event.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-grow p-6 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">

            <div className="flex items-center justify-between mb-6">
              <button className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200">
                <span role="img" aria-label="Anterior">◀️</span>
              </button>
              <h2 className="text-2xl font-bold text-white">Terça-feira, 15 de Outubro</h2>
              <button className="text-white p-2 rounded-full hover:bg-neutral-700 transition duration-200">
                <span role="img" aria-label="Próximo">▶️</span>
              </button>
            </div>

            <div className="mb-8 p-4 bg-neutral-700 rounded-lg border border-neutral-600">
              <div className="h-2 bg-neutral-600 rounded-full mb-1">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-neutral-300 text-sm font-medium">4 de 10 Horas Concluídas</p>
            </div>

            <div className="space-y-4">

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-green-500 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">08:00 - 09:00</span>
                <span className="text-white flex-grow ml-4">Preparação para a aula de Programação</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
              </div>

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-yellow-600 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">09:00 - 10:00</span>
                <span className="text-white flex-grow ml-4">Revisar Capítulo 3 de Cálculo I</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
              </div>

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-red-600 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-500 font-medium text-sm line-through flex-shrink-0">10:00 - 12:00</span>
                <span className="text-neutral-500 flex-grow ml-4 line-through">Estudar para a prova de Física Experimental</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" checked readOnly />
              </div>

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-blue-600 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">13:00 - 15:00</span>
                <span className="text-white flex-grow ml-4">Reunião de grupo para Projeto Final</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
              </div>

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-yellow-600 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-500 font-medium text-sm line-through flex-shrink-0">15:00 - 17:00</span>
                <span className="text-neutral-500 flex-grow ml-4 line-through">Redigir a primeira seção do relatório de Cálculo</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" checked readOnly />
              </div>

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-green-500 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">19:00 - 21:00</span>
                <span className="text-white flex-grow ml-4">Aula de Introdução à Programação (Lab Inf 3)</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
              </div>

              <div className="flex items-center bg-neutral-700 p-4 rounded-lg border-l-4 border-blue-600 hover:border-neutral-500 transition duration-200">
                <span className="w-24 text-neutral-400 font-medium text-sm flex-shrink-0">21:00 - 22:00</span>
                <span className="text-white flex-grow ml-4">TDE 1</span>
                <input type="checkbox" className="ml-4 w-5 h-5 form-checkbox text-blue-600 bg-neutral-700 border-neutral-500 rounded focus:ring-blue-500 cursor-pointer" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ScheduleAndTasks;