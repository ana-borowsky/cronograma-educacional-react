import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const ScheduleAndTasks = () => {
  return (
    <Layout subtitle="Cronograma Semanal & Tarefas">
      <div className="main-content-layout">
        <div className="schedule-panel">
          <h2>Cronograma</h2>
          <img
            src="./assets/cronograma.png"
          />
          <hr className="divider" />
        </div>
        <div className="todo-list-panel">
          <h2>Lista de Tarefas do dia</h2>
          <ul className="tasks-list">
            <li className="task-item">
              <label className="checkbox-container">
                <input type="checkbox" name="task-1" />
                <span className="task-text">Preparar Plano de Ensino da próxima semana</span>
              </label>
            </li>
            <li className="task-item completed">
              <label className="checkbox-container">
                <input type="checkbox" name="task-2" defaultChecked />
                <span className="task-text">Enviar e-mail de lembrete sobre avaliação</span>
              </label>
            </li>
            <li className="task-item">
              <label className="checkbox-container">
                <input type="checkbox" name="task-3" />
                <span className="task-text">Corrigir exercícios da Turma A</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ScheduleAndTasks;