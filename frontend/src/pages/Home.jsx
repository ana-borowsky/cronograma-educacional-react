import Layout from "../components/Layout"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout subtitle="Visão Geral do Dia">
      <div className="home-container">

        <div className="sidebar-menu panel-style">

          <Link to="/home" className="sidebar-link active-link">
            <span role="img" aria-label="Visão Geral">🏠</span>
            <span className="link-text">Visão Geral (Hoje)</span>
          </Link>

          <Link to="/scheduleandtasks" className="sidebar-link">
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
        <div className="daily-schedule-view panel-style">

          <div className="schedule-header">
            <button className="nav-arrow left-arrow">
              <span role="img" aria-label="Anterior">◀️</span>
            </button>
            <h2 className="current-day-title">Terça-feira, 15 de Outubro</h2>
            <button className="nav-arrow right-arrow">
              <span role="img" aria-label="Próximo">▶️</span>
            </button>
          </div>

          <div className="daily-progress">
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '40%' }}></div>
            </div>
            <p className="progress-info">4 de 10 Horas Concluídas</p>
          </div>

          <div className="todo-list">

            <div className="todo-item">
              <span className="item-time">08:00 - 09:00</span>
              <span className="item-description">Preparação para a aula de Programação</span>
              <input type="checkbox" className="item-checkbox" />
            </div>

            <div className="todo-item">
              <span className="item-time">09:00 - 10:00</span>
              <span className="item-description">Revisar Capítulo 3 de Cálculo I</span>
              <input type="checkbox" className="item-checkbox" />
            </div>

            <div className="todo-item completed">
              <span className="item-time">10:00 - 12:00</span>
              <span className="item-description">Estudar para a prova de Física Experimental</span>
              <input type="checkbox" className="item-checkbox" checked readOnly />
            </div>

            <div className="todo-item">
              <span className="item-time">13:00 - 15:00</span>
              <span className="item-description">Reunião de grupo para Projeto Final</span>
              <input type="checkbox" className="item-checkbox" />
            </div>

            <div className="todo-item completed">
              <span className="item-time">15:00 - 17:00</span>
              <span className="item-description">Redigir a primeira seção do relatório de Cálculo</span>
              <input type="checkbox" className="item-checkbox" checked readOnly />
            </div>

            <div className="todo-item completed">
              <span className="item-time">17:00 - 19:00</span>
              <span className="item-description">Aula de Língua Portuguesa (Sala A-102)</span>
              <input type="checkbox" className="item-checkbox" checked readOnly />
            </div>

            <div className="todo-item">
              <span className="item-time">19:00 - 21:00</span>
              <span className="item-description">Aula de Introdução à Programação (Lab Inf 3)</span>
              <input type="checkbox" className="item-checkbox" />
            </div>

            <div className="todo-item">
              <span className="item-time">21:00 - 22:00</span>
              <span className="item-description">Planejar tarefas para o dia seguinte</span>
              <input type="checkbox" className="item-checkbox" />
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;