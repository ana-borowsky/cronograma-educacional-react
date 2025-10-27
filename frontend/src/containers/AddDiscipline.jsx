import { Button } from "@/components/ui/button"
import { useState } from "react"

const AddDiscipline = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  return (

    <div className="w-full space-y-8 mb-8 md:mb-0">
      <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl transition-all duration-300">
        {/* Cabeçalho Clicável */}
        <div
          className="flex justify-between items-center cursor-pointer w-[312px]"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <h2 className="text-2xl font-bold text-white">Insira matérias</h2>
          {isFormVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l7.5 7.5-7.5-7.5" />
            </svg>
          )}
        </div>


        {/* Conteúdo Expansível */}
        {isFormVisible && (
          <div className="mt-5 border-t border-neutral-700 pt-5">
            <form className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="project-select" className="block text-neutral-300 font-semibold text-sm">
                  Selecione o projeto
                </label>
                <div className="relative">
                  <select
                    id="project-select"
                    name="project-select"
                    className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white focus:outline-none focus:border-blue-500 text-sm appearance-none pr-10"
                    defaultValue="vestibular"
                  >
                    <option value="vestibular">Vestibular</option>
                    <option value="quinto-periodo">Quinto Período</option>
                    <option value="terceirao">Terceirão</option>
                    <option disabled>──────────</option>
                    <option value="" disabled>Selecione ou Crie um Novo</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="new-project" className="block text-neutral-300 font-semibold text-sm">
                  Criar novo projeto
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="new-project"
                    name="new-project"
                    placeholder="Nome do novo projeto..."
                    className="flex-grow p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                  />
                  <Button type="button" className="shrink-0 px-4 py-2.5 text-sm">
                    Criar
                  </Button>
                </div>
              </div>
            </form>
            <hr className="border-t border-neutral-700 my-4" />
            <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">Ler arquivo com IA</h2>
            <form className="space-y-6">
              <p className="text-neutral-400 text-sm text-center">Carregue um arquivo (ex: print) contendo a lista de matérias, salas e horários.</p>
              <div className="space-y-2">
                <label htmlFor="file-upload-ensalamento" className="block text-neutral-300 font-semibold text-sm">Selecione o Arquivo do Ensalamento</label>
                <input
                  type="file"
                  id="file-upload-ensalamento"
                  name="schedule-file"
                  required
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="file-upload-planos" className="block text-neutral-300 font-semibold text-sm">Selecione os arquivos dos planos de ensino das matérias</label>
                <input
                  type="file"
                  id="file-upload-planos"
                  name="schedule-file"
                  required
                  multiple
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>
              <Button className="w-full" asChild>
                <a href="/disciplines">
                  Adicionar matéria
                </a>
              </Button>
            </form><br />
            <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">Ou insira manualmente</h2>
            <form className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="course-name" className="block text-neutral-300 font-semibold text-sm">Nome da Matéria</label>
                <input
                  type="text"
                  id="course-name"
                  name="course-name"
                  placeholder="Ex: Cálculo I"
                  required
                  className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="room-name" className="block text-neutral-300 font-semibold text-sm">Sala / Local</label>
                <input
                  type="text"
                  id="room-name"
                  name="room-name"
                  placeholder="Ex: Sala B-205 ou Laboratório de Física"
                  required
                  className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="schedule-time" className="block text-neutral-300 font-semibold text-sm">Horário e Dia</label>
                <input
                  type="text"
                  id="schedule-time"
                  name="schedule-time"
                  placeholder="Ex: Segunda e Quarta, 19:00 - 21:00"
                  required
                  className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="file-upload-manual" className="block text-neutral-300 font-semibold text-sm">Selecione o arquivo de plano de ensino da matéria</label>
                <input
                  type="file"
                  id="file-upload-manual"
                  name="schedule-file"
                  required
                  className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500 cursor-pointer"
                />
              </div>
              <Button className="w-full" asChild>
                <a href="/disciplines">
                  Adicionar Matéria
                </a>
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddDiscipline
