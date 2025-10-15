import { Button } from "@/components/ui/button";
import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const Syllabus = () => {
  return (
    <Layout subtitle="Nesta página, você deverá adicionar todos os trabalhos, provas e datas importantes para cada matéria. Você pode fazer isso de forma automática ao inserir o plano de ensino, ou manualmente.">
      <div className="flex flex-col items-center justify-start p-4 sm:p-6 w-full max-w-4xl mx-auto">

        <div className="w-full space-y-8">

          <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white text-center mb-5 border-b border-neutral-600 pb-3">Faça upload do plano de ensino por matéria</h2>

            <form className="space-y-6">

              <div className="space-y-1">
                <label htmlFor="syllabus-calc" className="block text-neutral-300 font-semibold text-sm">Cálculo I (Selecione o Arquivo)</label>
                <input
                  type="file"
                  id="syllabus-calc"
                  name="syllabus-calc"
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="syllabus-prog" className="block text-neutral-300 font-semibold text-sm">Introdução à Programação (Selecione o Arquivo)</label>
                <input
                  type="file"
                  id="syllabus-prog"
                  name="syllabus-prog"
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="syllabus-fisica" className="block text-neutral-300 font-semibold text-sm">Física Experimental (Selecione o Arquivo)</label>
                <input
                  type="file"
                  id="syllabus-fisica"
                  name="syllabus-fisica"
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="syllabus-port" className="block text-neutral-300 font-semibold text-sm">Língua Portuguesa (Selecione o Arquivo)</label>
                <input
                  type="file"
                  id="syllabus-port"
                  name="syllabus-port"
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>
              <Button className="w-full font-semibold" asChild>
                <Link to="/todolist">
                  Salvar
                </Link>
              </Button>

            </form>
          </div>

          <hr className="border-neutral-600 my-8" />

          <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white text-center mb-5 border-b border-neutral-600 pb-3">Ou insira manualmente</h2>

            <form className="space-y-5">

              <div className="space-y-1">
                <label htmlFor="course-select" className="block text-neutral-300 font-semibold text-sm">Selecione a Matéria para Inserir Dados</label>
                <select
                  id="course-select"
                  name="course-select"
                  className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="" className="bg-neutral-700 text-neutral-400">-- Escolha a Matéria --</option>
                  <option value="calculo-i" className="bg-neutral-700">Cálculo I</option>
                  <option value="programacao" className="bg-neutral-700">Introdução à Programação</option>
                  <option value="fisica" className="bg-neutral-700">Física Experimental</option>
                  <option value="portuguesa" className="bg-neutral-700">Língua Portuguesa</option>
                </select>
              </div>
              <hr className="border-neutral-700" />

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-300 border-b border-neutral-700 pb-2">Trabalhos</h3>

                <div className="space-y-1">
                  <label htmlFor="assignment-1-name" className="block text-neutral-300 font-semibold text-sm">Trabalho 1 (Nome)</label>
                  <input
                    type="text"
                    id="assignment-1-name"
                    name="assignment-1-name"
                    placeholder="Ex: Projeto Final"
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="assignment-1-hours" className="block text-neutral-300 font-semibold text-sm">Duração Estimada (Horas)</label>
                  <input
                    type="number"
                    id="assignment-1-hours"
                    name="assignment-1-hours"
                    placeholder="Ex: 10"
                    min="1"
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="assignment-1-date" className="block text-neutral-300 font-semibold text-sm">Data de Entrega</label>
                  <input
                    type="date"
                    id="assignment-1-date"
                    name="assignment-1-date"
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="assignment-1-file" className="block text-neutral-300 font-semibold text-sm">Upload do Arquivo do Trabalho</label>
                  <input
                    type="file"
                    id="assignment-1-file"
                    name="assignment-1-file"
                    className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                  />
                </div>

                <Button type="Button" className="w-full font-semibold">
                  + Adicionar Trabalho
                </Button>
              </div>
              <hr className="border-neutral-700" />


              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-300 border-b border-neutral-700 pb-2">Provas e Material de Apoio</h3>

                <div className="space-y-1">
                  <label htmlFor="exam-1-name" className="block text-neutral-300 font-semibold text-sm">Prova 1 (Nome)</label>
                  <input
                    type="text"
                    id="exam-1-name"
                    name="exam-1-name"
                    placeholder="Ex: P1 - Avaliação Intermediária"
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="exam-1-date" className="block text-neutral-300 font-semibold text-sm">Data da Prova</label>
                  <input
                    type="date"
                    id="exam-1-date"
                    name="exam-1-date"
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-blue-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="full-syllabus-files" className="block text-neutral-300 font-semibold text-sm">Upload de PDFs (material referente à essa prova)</label>
                  <input
                    type="file"
                    id="full-syllabus-files"
                    name="full-syllabus-files"
                    className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                  />
                </div>

                <Button type="Button" className="w-full font-semibold">
                  + Adicionar Prova
                </Button>
              </div>
              <hr className="border-neutral-700" />
              <Button asChild className="w-full font-semibold">

                <Link to="/todolist">
                  Salvar
                </Link>
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Syllabus;