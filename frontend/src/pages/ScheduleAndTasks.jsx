import Layout from "../components/Layout"
import { Link } from "react-router-dom";

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
    { dayIndex: 0, text: "Aula Cálculo I", startHour: 10, endHour: 12, className: "calc-i-event" },
    { dayIndex: 0, text: "Estudo Programação", startHour: 15, endHour: 17, className: "misc-event" },
    { dayIndex: 0, text: "Trabalho Grupo", startHour: 18, endHour: 21, className: "prog-event" },
    { dayIndex: 0, text: "Leitura Cap. 5", startHour: 23, endHour: 24, className: "misc-event" },

    { dayIndex: 1, text: "Lab. Física", startHour: 9, endHour: 10, className: "fisica-event" },
    { dayIndex: 1, text: "Revisão Português", startHour: 12, endHour: 14, className: "port-event" },
    { dayIndex: 1, text: "Aula Programação", startHour: 16, endHour: 19, className: "prog-event" },
    { dayIndex: 1, text: "Preparar Apresentação", startHour: 21, endHour: 22, className: "misc-event" },

    { dayIndex: 2, text: "Apresentação", startHour: 8, endHour: 9, className: "port-event" },
    { dayIndex: 2, text: "Estudo Cálculo I", startHour: 11, endHour: 13, className: "misc-event" },
    { dayIndex: 2, text: "Aula Cálculo I", startHour: 17, endHour: 19, className: "calc-i-event" },
    { dayIndex: 2, text: "Revisão Geral", startHour: 20, endHour: 23, className: "misc-event" },

    { dayIndex: 3, text: "Resolver Exercícios", startHour: 8, endHour: 11, className: "misc-event" },
    { dayIndex: 3, text: "Leitura Física", startHour: 13, endHour: 15, className: "fisica-event" },
    { dayIndex: 3, text: "Aula Programação", startHour: 17, endHour: 20, className: "prog-event" },
    { dayIndex: 3, text: "Planejamento", startHour: 22, endHour: 23, className: "misc-event" },

    { dayIndex: 4, text: "Monitoria Cálculo", startHour: 9, endHour: 11, className: "calc-i-event" },
    { dayIndex: 4, text: "Estudo Português", startHour: 12, endHour: 14, className: "misc-event" },
    { dayIndex: 4, text: "Aula Física Exp.", startHour: 16, endHour: 19, className: "fisica-event" },
    { dayIndex: 4, text: "Descanso/Filme", startHour: 20, endHour: 22, className: "misc-event" },

    { dayIndex: 5, text: "Trabalho Grupo Extendido", startHour: 10, endHour: 14, className: "misc-event" },
    { dayIndex: 5, text: "Revisão Português", startHour: 15, endHour: 16, className: "port-event" },
    { dayIndex: 5, text: "Atividades Domésticas", startHour: 17, endHour: 19, className: "misc-event" },

    { dayIndex: 6, text: "Revisão Semanal", startHour: 8, endHour: 11, className: "calc-i-event" },
    { dayIndex: 6, text: "Preparar Semana", startHour: 14, endHour: 16, className: "misc-event" },
    { dayIndex: 6, text: "Leitura de Apoio", startHour: 17, endHour: 19, className: "fisica-event" },
  ];

  return (
    <Layout subtitle="Cronograma Semanal">
      <div className="main-content-layout">

        <div className="sidebar-menu panel-style">

          <Link to="/home" className="sidebar-link">
            <span role="img" aria-label="Visão Geral">🏠</span>
            <span className="link-text">Visão Geral (Hoje)</span>
          </Link>

          <Link to="/scheduleandtasks" className="sidebar-link active-link">
            <span role="img" aria-label="Cronograma">📅</span>
            <span className="link-text">Cronograma</span>
          </Link>

          <Link to="/roomschedule" className="sidebar-link">
            <span role="img" aria-label="Ensalamento">🏫</span>
            <span className="link-text">Ensalamento</span>
          </Link>

          <Link to="/syllabus" className="sidebar-link">
            <span role="img" aria-label="Plano de Ensino">📚</span>
            <span className="link-text">Plano de Ensino</span>
          </Link>

          <Link to="/studyschedule" className="sidebar-link">
            <span role="img" aria-label="Horas para estudo">⏳</span>
            <span className="link-text">Horas para estudo</span>
          </Link>

          <Link to="/disciplines" className="sidebar-link">
            <span role="img" aria-label="Disciplinas">📋</span>
            <span className="link-text">Disciplinas</span>
          </Link>

        </div>

        <div className="schedule-panel">
          <h2>Agenda da Semana</h2>

          <div className="calendar-header">
            <button className="nav-btn">
              <span role="img" aria-label="Semana Anterior">◀️</span>
            </button>
            <div className="current-week-display">14 Outubro - 20 Outubro</div>
            <button className="nav-btn">
              <span role="img" aria-label="Próxima Semana">▶️</span>
            </button>
          </div>

          <div className="calendar-grid">
            <div className="day-label" style={{ gridColumn: 1 }}>Hora</div>

            {timeSlots.map((time, timeIndex) => (
              <div key={time} className="time-slot label" style={{ gridRow: timeIndex + 2, gridColumn: 1 }}>{time}</div>
            ))}
            <div className="time-slot label" style={{ gridRow: 19, gridColumn: 1 }}>00:00</div>

            {daysOfWeek.map((day, dayIndex) => (
              <div
                key={day}
                className={`day-label ${dayIndex >= 5 ? 'weekend-label' : ''}`}
                style={{ gridColumn: dayIndex + 2 }}
              >
                {day}
              </div>
            ))}

            {daysOfWeek.map((day, dayIndex) => (
              timeSlots.map((time, timeIndex) => (
                <div
                  key={`${day}-${time}`}
                  className={`time-slot ${dayIndex >= 5 ? 'weekend' : ''}`}
                  style={{ gridColumn: dayIndex + 2, gridRow: timeIndex + 2 }}
                ></div>
              ))
            ))}

            {dayEvents.map((event, index) => (
              <div
                key={index}
                className={`event ${event.className}`}
                style={{
                  gridColumn: event.dayIndex + 2,
                  gridRowStart: getGridRow(event.startHour),
                  gridRowEnd: getGridRow(event.endHour),
                }}
              >
                {event.text}
              </div>
            ))}
          </div>
        </div>

        <div className="todo-list-panel">
          <h2>Tarefas Pendentes</h2>
          <ul className="tasks-list">
            {tasksData.map((task, index) => (
              <li key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="checkbox-container">
                  <input type="checkbox" defaultChecked={task.completed} readOnly />
                  <span className="task-text">{task.text} ({task.estimate})</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ScheduleAndTasks;