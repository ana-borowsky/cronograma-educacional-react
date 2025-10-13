import Layout from "../components/Layout"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout subtitle="Visão Geral do Dia">
      <div className="home-container">

        <div className="sidebar-menu">

          <Link to="/scheduleandtasks" className="auth-link">
            Cronograma
          </Link><br></br>

          <Link to="/roomschedule" className="auth-link">
            Ensalamento
          </Link><br></br>

          <Link to="/syllabus" className="auth-link">
            Plano de Ensino
          </Link><br></br>

          <Link to="/studyschedule" className="auth-link">
            Horas para estudo
          </Link><br></br>

          <Link to="/disciplines" className="auth-link">
            Disciplinas
          </Link><br></br>
        </div>
        <div className="daily-schedule-view">

          <div className="schedule-header">
            <button className="nav-arrow left-arrow">
              <span role="img" aria-label="Anterior">◀️</span>
            </button>
            <h2 className="current-day-title">Terça-feira, 15 de Outubro</h2>
            <button className="nav-arrow right-arrow">
              <span role="img" aria-label="Próximo">▶️</span>
            </button>
          </div>

          <div className="todo-list">

            <div className="todo-item">
              <span className="item-time">09:00 - 10:00</span>
              <span className="item-description">Revisar Capítulo 3 de Cálculo I</span>
              <input type="checkbox" className="item-checkbox" />
            </div>

            <div className="todo-item">
              <span className="item-time">13:00 - 15:00</span>
              <span className="item-description">Reunião de grupo para Projeto Final</span>
              <input type="checkbox" className="item-checkbox" />
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

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;