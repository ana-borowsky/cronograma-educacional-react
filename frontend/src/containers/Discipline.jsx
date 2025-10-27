import { Button } from "@/components/ui/button"
import { ListItem } from "@/components/ListItem"
import { DisciplineTitle } from "@/components/DisciplineTitle"
import { WorkFormModal } from "@/components/WorkFormModal"
import { ExamFormModal } from "@/components/ExamFormModal"
import { useState } from "react"

const Discipline = ({ disciplineData }) => {
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false)
  const [isExamModalOpen, setIsExamModalOpen] = useState(false)

  const { title, color, works, exams } = disciplineData

  return (
    <div className="bg-neutral-800 p-6 border border-neutral-700 rounded-lg shadow-lg flex-shrink-0 w-[312px] flex flex-col">
      <DisciplineTitle
        title={title}
        color={color}
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

      <WorkFormModal
        isOpen={isWorkModalOpen}
        onClose={() => setIsWorkModalOpen(false)}
      />
      <ExamFormModal
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
      />
    </div>
  )
}

export default Discipline