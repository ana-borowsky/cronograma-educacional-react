import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DisciplineForm } from "@/components/discipline/DisciplineForm"
import { Container } from "@/components/ui/container"

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

export const AddDiscipline = ({ startOpen = false }) => {
  const [isFormVisible, setIsFormVisible] = useState(startOpen)
  const isEditing = false
  const mainButtonText = isEditing ? "Salvar disciplina" : "Adicionar disciplina"

  const toggleForm = () => setIsFormVisible(!isFormVisible)

  return (
    <div className="w-[330px] space-y-8 mb-8 md:mb-0 transition-all duration-500 ease-in-out">
      <Container className="overflow-hidden duration-500 ease-in-out">
        <div
          className="flex justify-between items-center cursor-pointer w-full"
          onClick={toggleForm}
        >
          <h2 className="w-full text-xl font-bold text-white border-b border-neutral-700 pb-1">
            Insira disciplinas
          </h2>
          {isFormVisible ? <ChevronUp /> : <ChevronDown />}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${isFormVisible ? "max-h-[1600px] mt-5 pt-5" : "max-h-0"
            }`}
        >
          <div className="pt-5">
            <div>
              <h2 className="text-neutral-300 flex items-center text-xl font-bold mb-4 border-b border-neutral-700 pb-2 truncate">
                Projeto
              </h2>
              <form className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="project-select"
                    className="block text-neutral-300 font-semibold text-sm"
                  >
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
                      <option value="" disabled>
                        Selecione ou Crie um Novo
                      </option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="new-project"
                    className="block text-neutral-300 font-semibold text-sm"
                  >
                    Ou crie um novo projeto
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      id="new-project"
                      name="new-project"
                      placeholder="Nome do novo projeto..."
                      variant="dark"
                    />
                    <Button type="button" variant="yellow-primary">
                      Criar
                    </Button>
                  </div>
                </div>
              </form>

              <hr className="border-t border-neutral-700 my-6" />
            </div>

            <h2 className="text-neutral-300 flex items-center text-xl font-bold mb-4 border-b border-neutral-700 pb-2 truncate">
              Ler arquivo com IA
            </h2>
            <form className="space-y-6">
              <p className="text-neutral-400 text-sm text-center">
                Carregue um arquivo (ex: print) contendo a lista de disciplinas,
                salas e horários.
              </p>

              <div className="space-y-2">
                <label
                  htmlFor="file-upload-ensalamento"
                  className="block text-neutral-300 font-semibold text-sm"
                >
                  Selecione o Arquivo do Ensalamento
                </label>
                <Input
                  type="file"
                  id="file-upload-ensalamento"
                  name="schedule-file"
                  required
                  variant="dark"
                  className="file:bg-neutral-600 file:text-white hover:file:bg-neutral-500"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="file-upload-planos"
                  className="block text-neutral-300 font-semibold text-sm"
                >
                  Selecione os arquivos dos planos de ensino das disciplinas
                </label>
                <Input
                  type="file"
                  id="file-upload-planos"
                  name="schedule-file"
                  required
                  multiple
                  variant="dark"
                  className="file:bg-neutral-600 file:text-white hover:file:bg-neutral-500"
                />
              </div>

              <Button className="w-full" asChild variant="yellow-primary">
                <a href="/disciplines">{mainButtonText}s (via IA)</a>
              </Button>
            </form>

            <br />
            <hr className="border-t border-neutral-700 my-4" />

            <h2 className="text-neutral-300 flex items-center text-xl font-bold mb-4 border-b border-neutral-700 pb-2 truncate">
              Ou insira manualmente
            </h2>
            <DisciplineForm />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AddDiscipline
