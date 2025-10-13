import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const StudySchedule = () => {
  return (
    <Layout subtitle="Defina suas Horas de Estudo">
      <div className="login-container">
        <form className="login-form">
          <h2>Horários de Estudo</h2>

          {/* Segunda-feira */}
          <div className="input-group">
            <label htmlFor="monday-hours">Segunda-feira (Horas Vagas)</label>
            <input
              type="text"
              id="monday-hours"
              name="monday-hours"
              placeholder="Ex: 19:00 - 21:00 ou 2h"
            />
          </div>

          {/* Terça-feira */}
          <div className="input-group">
            <label htmlFor="tuesday-hours">Terça-feira (Horas Vagas)</label>
            <input
              type="text"
              id="tuesday-hours"
              name="tuesday-hours"
              placeholder="Ex: 14:00 - 16:00 ou 2h"
            />
          </div>

          {/* Quarta-feira */}
          <div className="input-group">
            <label htmlFor="wednesday-hours">Quarta-feira (Horas Vagas)</label>
            <input
              type="text"
              id="wednesday-hours"
              name="wednesday-hours"
              placeholder="Ex: 20:00 - 22:00 ou 2h"
            />
          </div>

          {/* Quinta-feira */}
          <div className="input-group">
            <label htmlFor="thursday-hours">Quinta-feira (Horas Vagas)</label>
            <input
              type="text"
              id="thursday-hours"
              name="thursday-hours"
              placeholder="Ex: 17:00 - 18:00 ou 1h"
            />
          </div>

          {/* Sexta-feira */}
          <div className="input-group">
            <label htmlFor="friday-hours">Sexta-feira (Horas Vagas)</label>
            <input
              type="text"
              id="friday-hours"
              name="friday-hours"
              placeholder="Ex: Livre (0h) ou 10:00 - 12:00"
            />
          </div>

          {/* Sábado */}
          <div className="input-group">
            <label htmlFor="saturday-hours">Sábado (Horas Vagas)</label>
            <input
              type="text"
              id="saturday-hours"
              name="saturday-hours"
              placeholder="Ex: 09:00 - 13:00 ou 4h"
            />
          </div>

          {/* Domingo */}
          <div className="input-group">
            <label htmlFor="sunday-hours">Domingo (Horas Vagas)</label>
            <input
              type="text"
              id="sunday-hours"
              name="sunday-hours"
              placeholder="Ex: 16:00 - 18:00 ou 2h"
            />
          </div>

          <Link to="/home" className="auth-link">
            Salvar Horários de Estudo
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default StudySchedule;