import Layout from "../components/Layout"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout subtitle="Bem-vindo ao MyStudyFlow">
      <div className="max-w-[1600px] mx-auto flex gap-5 p-5 items-start">

        <div className="flex-grow p-8 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl">
          <p className="text-neutral-300 text-lg mb-6">
            O MyStudyFlow é a ferramenta definitiva projetada para estudantes que buscam excelência e organização em sua jornada acadêmica. Com o uso de IA, transforme sua rotina de forma inteligente e não deixe tudo para a última hora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            <div className="feature-card bg-neutral-700 p-5 rounded-lg border-t-4 border-neutral-500 hover:bg-neutral-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                <span role="img" aria-label="Disciplinas">📋</span> Disciplinas Detalhadas
              </h3>
              <p className="text-neutral-400 text-sm">Organize as disciplinas e tarefas por prioridade.</p>
            </div>

            <div className="feature-card bg-neutral-700 p-5 rounded-lg border-t-4 border-neutral-500 hover:bg-neutral-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                <span role="img" aria-label="To-Do List">✅</span> Foco Diário
              </h3>
              <p className="text-neutral-400 text-sm">Use o *To-Do List* (Visão Geral do Dia) para priorizar as tarefas mais urgentes e gerenciar seu tempo de estudo de forma eficiente.</p>
            </div>

            <div className="feature-card bg-neutral-700 p-5 rounded-lg border-t-4 border-neutral-500 hover:bg-neutral-600 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                <span role="img" aria-label="Cronograma">📅</span> Planejamento Completo
              </h3>
              <p className="text-neutral-400 text-sm">Acesse o cronograma, ensalamento e plano de ensino para ter uma visão completa da semana ou semestre.</p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-neutral-700 text-center">
            <h4 className="text-xl text-neutral-200 mb-4">Comece agora a dominar sua rotina de estudos!</h4>

            <div className="flex justify-center gap-4">

              <Link to="/signup" className="inline-block px-8 py-3 bg-neutral-600 text-white font-bold rounded-full text-lg hover:bg-neutral-700 transition duration-300 shadow-md">
                Cadastre-se
              </Link>

              <Link to="/login" className="inline-block px-8 py-3 bg-neutral-700 text-neutral-300 font-bold rounded-full text-lg hover:bg-neutral-600 hover:text-white transition duration-300 shadow-md border border-neutral-600">
                Fazer Login
              </Link>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
