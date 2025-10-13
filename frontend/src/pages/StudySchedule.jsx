import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const StudySchedule = () => {
  return (
    <Layout subtitle="Defina suas Horas de Estudo">
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 sm:p-6">
        <form className="bg-neutral-800 p-8 border border-neutral-700 rounded-lg shadow-xl w-full max-w-sm">
          <h2 className="text-2xl font-bold text-white text-center mb-6 border-b border-neutral-600 pb-3">Horários de Estudo</h2>

          {/* Segunda-feira */}
          <div className="mb-4">
            <label htmlFor="monday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Segunda-feira (Horas Vagas)</label>
            <input
              type="text"
              id="monday-hours"
              name="monday-hours"
              placeholder="Ex: 19:00 - 21:00 ou 2h"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Terça-feira */}
          <div className="mb-4">
            <label htmlFor="tuesday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Terça-feira (Horas Vagas)</label>
            <input
              type="text"
              id="tuesday-hours"
              name="tuesday-hours"
              placeholder="Ex: 14:00 - 16:00 ou 2h"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Quarta-feira */}
          <div className="mb-4">
            <label htmlFor="wednesday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Quarta-feira (Horas Vagas)</label>
            <input
              type="text"
              id="wednesday-hours"
              name="wednesday-hours"
              placeholder="Ex: 20:00 - 22:00 ou 2h"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Quinta-feira */}
          <div className="mb-4">
            <label htmlFor="thursday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Quinta-feira (Horas Vagas)</label>
            <input
              type="text"
              id="thursday-hours"
              name="thursday-hours"
              placeholder="Ex: 17:00 - 18:00 ou 1h"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Sexta-feira */}
          <div className="mb-4">
            <label htmlFor="friday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Sexta-feira (Horas Vagas)</label>
            <input
              type="text"
              id="friday-hours"
              name="friday-hours"
              placeholder="Ex: Livre (0h) ou 10:00 - 12:00"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Sábado */}
          <div className="mb-4">
            <label htmlFor="saturday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Sábado (Horas Vagas)</label>
            <input
              type="text"
              id="saturday-hours"
              name="saturday-hours"
              placeholder="Ex: 09:00 - 13:00 ou 4h"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          {/* Domingo */}
          <div className="mb-6">
            <label htmlFor="sunday-hours" className="block mb-1 text-neutral-300 font-semibold text-sm">Domingo (Horas Vagas)</label>
            <input
              type="text"
              id="sunday-hours"
              name="sunday-hours"
              placeholder="Ex: 16:00 - 18:00 ou 2h"
              className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <Link to="/todolist" className="w-full py-2.5 px-4 rounded-md text-white font-semibold text-center bg-gray-600 hover:bg-gray-500 transition duration-200 block">
            Salvar Horários de Estudo
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default StudySchedule;