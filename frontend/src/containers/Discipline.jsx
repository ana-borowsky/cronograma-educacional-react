import { Button } from "@/components/ui/button"
import { ListItem } from "@/components/ListItem"
import { DisciplineTitle } from "@/components/DisciplineTitle"
import { WorkForm } from "@/components/WorkForm"
import { ExamForm } from "@/components/ExamForm"
import { useState } from "react"

const DisciplineWorkFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <WorkForm onClose={onClose} />
    </div>
  )
}

const DisciplineExamFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <ExamForm onClose={onClose} />
    </div>
  )
}

const Discipline = () => {
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false)
  const [isExamModalOpen, setIsExamModalOpen] = useState(false)

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
          className="w-full" 
          variant="yellow-primary"
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
        <Button
          className="w-full"
          variant="yellow-primary"
          onClick={() => setIsExamModalOpen(true)}
        >
          <span className="text-lg font-bold mr-2">+</span>
          <p className="font-medium text-sm">Adicionar Nova Prova</p>
        </Button>
      </div>

      <DisciplineWorkFormModal
        isOpen={isWorkModalOpen}
        onClose={() => setIsWorkModalOpen(false)}
      />
      <DisciplineExamFormModal
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
      />
    </div>
  )
}

export default Discipline