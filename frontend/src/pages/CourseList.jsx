import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const CourseList = () => {
  return (
    <Layout subtitle="Confira as matérias e suas informações. Ordene arrastando as disciplinas por prioridade.">
      <div className="max-w-4xl mx-auto p-5 md:p-8 bg-neutral-900 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-neutral-700 pb-3">
          Minhas Matérias Cadastradas
        </h2>

        <div className="space-y-4 mb-6">

          <div className="flex items-center justify-between p-4 bg-neutral-800 border border-neutral-700 rounded-lg transition duration-200 hover:bg-neutral-700">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white">Cálculo I</h3>
              <p className="text-sm text-neutral-400 mt-1">
                <span className="font-medium text-neutral-300">Segunda e Quarta, 19:00 - 21:00</span> / <span className="text-neutral-500">Sala B-205</span>
              </p>
            </div>
            <div className="flex space-x-2 ml-4">
              <button className="p-2 bg-neutral-700 rounded-full text-white hover:bg-neutral-600 transition duration-150" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="p-2 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-150" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-neutral-800 border border-neutral-700 rounded-lg transition duration-200 hover:bg-neutral-700">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white">Introdução à Programação</h3>
              <p className="text-sm text-neutral-400 mt-1">
                <span className="font-medium text-neutral-300">Terça e Quinta, 19:00 - 21:00</span> / <span className="text-neutral-500">Lab de Informática 3</span>
              </p>
            </div>
            <div className="flex space-x-2 ml-4">
              <button className="p-2 bg-neutral-700 rounded-full text-white hover:bg-neutral-600 transition duration-150" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="p-2 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-150" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-neutral-800 border border-neutral-700 rounded-lg transition duration-200 hover:bg-neutral-700">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white">Física Experimental</h3>
              <p className="text-sm text-neutral-400 mt-1">
                <span className="font-medium text-neutral-300">Sexta, 19:00 - 22:00</span> / <span className="text-neutral-500">Lab de Física 101</span>
              </p>
            </div>
            <div className="flex space-x-2 ml-4">
              <button className="p-2 bg-neutral-700 rounded-full text-white hover:bg-neutral-600 transition duration-150" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="p-2 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-150" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-neutral-800 border border-neutral-700 rounded-lg transition duration-200 hover:bg-neutral-700">
            <div className="flex-grow">
              <h3 className="text-xl font-semibold text-white">Língua Portuguesa</h3>
              <p className="text-sm text-neutral-400 mt-1">
                <span className="font-medium text-neutral-300">Quarta, 17:00 - 19:00</span> / <span className="text-neutral-500">Sala A-102</span>
              </p>
            </div>
            <div className="flex space-x-2 ml-4">
              <button className="p-2 bg-neutral-700 rounded-full text-white hover:bg-neutral-600 transition duration-150" aria-label="Editar">
                <span role="img" aria-label="lápis">✏️</span>
              </button>
              <button className="p-2 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-150" aria-label="Excluir">
                <span role="img" aria-label="lixeira">🗑️</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-4 border-t border-neutral-700">

          <Link className="text-center md:text-left text-lg font-bold text-neutral-300 hover:text-white transition duration-200 mb-4 md:mb-0">
            + Adicionar Matéria
          </Link>

          <Link
            to="/syllabus"
            className="inline-block px-6 py-2 border border-transparent rounded-md bg-neutral-600 text-white font-semibold text-base text-center transition duration-200 hover:bg-neutral-500"
          >
            Salvar
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CourseList;