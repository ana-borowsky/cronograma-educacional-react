import { Button } from "@/components/ui/button"
import { ListItem } from "@/components/ListItem"
import { DisciplineTitle } from "@/components/DisciplineTitle"
import { WorkForm } from "@/components/WorkForm"
import { useState } from "react"

const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>

const DisciplineWorkFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <WorkForm onClose={onClose} />
    </div>
  );
};

const Discipline = () => {
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false)
  const [isDisciplineExamFormOpen, setisDisciplineExamFormOpen] = useState(false)

  const works = [
    { id: 'w-1', description: 'Revisão Bibliográfica (Entrega: 05/Nov) | Duração: 5h. Foco nos artigos de 2022.', borderColor: 'yellow', completed: false },
    { id: 'w-2', description: 'Estudo de Caso #1 (Concluído) | Análise de Caso de Sucesso em Transformação de Coordenadas. Duração: 8h.', borderColor: 'green', completed: true },
    { id: 'w-3', description: 'Lista de Exercícios 1 (Entrega: 20/Out) | Seções 1.1 a 1.5. Fazer a prova real dos exercícios pares.', borderColor: 'yellow', completed: false },
  ]

  const exams = [
    { id: 'e-1', description: 'P1 - Unidade 1 (Data: 15/Out) | Escopo: Derivadas e Regras de Cadeia.', borderColor: 'red', completed: false },
    { id: 'e-2', description: 'Mini-Teste Derivadas (Data: 01/Nov) | Teste surpresa sobre Tópicos de Cálculo I.', borderColor: 'red', completed: false },
    { id: 'e-3', description: 'P2 - Unidade 2 (Data: 19/Nov) | Escopo: Integrais e Funções Transcendentais.', borderColor: 'red', completed: false },
    { id: 'e-4', description: 'Exame Final (Data: 10/Dez) | Revisão completa do conteúdo. Preparar 5h de estudo concentrado.', borderColor: 'red', completed: false },
  ]

  return (
    <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0 w-[312px] flex flex-col">
      <DisciplineTitle
        title="Cálculo I"
        color="yellow"
      />

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-300 mb-3">Atividades e Trabalhos</h3>

        <div className="space-y-2 mb-4">
          {works.map((work) => (
            <ListItem
              key={work.id}
              id={work.id}
              fullDescription={work.description}
              borderColor={work.borderColor}
              defaultChecked={work.completed}
            />
          ))}
        </div>

        <hr className="my-4 border-neutral-700" />
        <Button
          className="w-full justify-start flex items-center bg-yellow-700 text-white hover:bg-yellow-600 shadow-md transition duration-200"
          onClick={() => setIsWorkModalOpen(true)}
        >
          <span className="text-lg font-bold mr-2">+</span>
          <p className="font-medium text-sm">Adicionar Novo Trabalho</p>
        </Button>
      </div>

      <hr className="my-6 border-neutral-600" />

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-300 mb-3">Provas e Avaliações</h3>

        <div className="space-y-2 mb-4">
          {exams.map((exam) => (
            <ListItem
              key={exam.id}
              id={exam.id}
              fullDescription={exam.description}
              borderColor={exam.borderColor}
              defaultChecked={exam.completed}
            />
          ))}
        </div>

        <hr className="my-4 border-neutral-700" />
        <div
          className="flex justify-between items-center cursor-pointer p-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition duration-200"
          onClick={() => setisDisciplineExamFormOpen(!isDisciplineExamFormOpen)}
        >
          <p className="text-neutral-300 font-medium text-sm">Adicionar Nova Prova</p>
          <span className="text-neutral-300">
            {isDisciplineExamFormOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {isDisciplineExamFormOpen && (
          <form className="space-y-3 pt-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col">
              <input type="text" placeholder="Nome da Prova/Avaliação" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="calc-p-date" className="text-neutral-400 text-xs mb-1">Data da Prova</label>
              <input type="date" id="calc-p-date" title="Data da Prova" className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 focus:outline-none focus:border-neutral-500 text-sm" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="calc-p-file" className="text-neutral-400 text-xs mb-1">Upload de PDFs (Material)</label>
              <input type="file" id="calc-p-file" name="calc-p-file" multiple className="w-full p-2 border border-neutral-600 rounded-md bg-neutral-700 text-neutral-300 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-neutral-600 file:text-white hover:file:bg-neutral-500" />
            </div>
            <div className="p-3 bg-neutral-700 rounded-md border border-neutral-600">
              <h4 className="text-neutral-300 font-semibold mb-2 text-sm">Arquivos Enviados:</h4>
              <ul className="space-y-1 text-neutral-400 text-xs">
                <li className="flex items-center gap-1.5 truncate">
                  <span role="img" aria-label="PDF Icon">📕</span>
                  Notas_Aula_Derivadas.pdf
                </li>
                <li className="flex items-center gap-1.5 truncate">
                  <span role="img" aria-label="Document Icon">📄</span>
                  Exemplos_Integrais.docx
                </li>
              </ul>
            </div>
            <Button type="submit" className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-600 transition duration-200 text-sm">+ Adicionar Prova</Button>
          </form>
        )}
      </div>

      <DisciplineWorkFormModal
        isOpen={isWorkModalOpen}
        onClose={() => setIsWorkModalOpen(false)}
      />
    </div>
  )
}

export default Discipline