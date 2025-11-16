import { Button } from "@/components/ui/button"
import { ListItem } from "@/components/ListItem"
import { DisciplineTitle } from "@/components/discipline/DisciplineTitle"
import { WorkFormModal } from "@/components/discipline/WorkFormModal"
import { DisciplineFormModal } from "@/components/discipline/EditDisciplineModal"
import { Container } from "@/components/ui/container"
import { useState, useEffect } from 'react'
import { truncateText, highlightIfEditable } from "@/lib/utils"

const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400 group-hover:text-yellow-600 transition-colors">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6.3 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
)

const Discipline = ({ disciplineData, onRefresh }) => {
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false)
  const [isDisciplineModalOpen, setIsDisciplineModalOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [works, setWorks] = useState([])
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingTask, setEditingTask] = useState(null)
  const [modalType, setModalType] = useState("Trabalho")
  const [selectedIdTask, setSelectedIdTask] = useState(null)

  const {
    name,
    color,
    project,
    classroom,
    day,
    startTime,
    endTime,
    weight,
    idDiscipline
  } = disciplineData

  const openDisciplineModal = () => setIsDisciplineModalOpen(true)

  const handleStatusChange = async (idTask, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8800/tasks/${idTask}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      if (!response.ok) throw new Error("Erro ao atualizar status da tarefa")
      setWorks(prev =>
        prev.map(task => task.idTask === idTask ? { ...task, status: newStatus } : task)
      )
      setExams(prev =>
        prev.map(task => task.idTask === idTask ? { ...task, status: newStatus } : task)
      )
    } catch (error) {
      console.error("Erro ao atualizar status:", error)
    }
  }

  const fetchTasks = async () => {
    try {
      const response = await fetch(`http://localhost:8800/tasks/all/${disciplineData.idDiscipline}`)
      if (!response.ok) throw new Error('Falha ao buscar tarefas')
      const data = await response.json()
      const worksData = data.filter(task => task.type === "Trabalho")
      const examsData = data.filter(task => task.type === "Prova")
      setWorks(worksData)
      setExams(examsData)
    } catch (error) {
      console.error("Erro buscando tarefas:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [disciplineData.idDiscipline])

  const handleOpenModal = (type, task = null) => {
    setModalType(type)
    setEditingTask(task)
    setSelectedIdTask(task ? task.idTask : null)
    setIsWorkModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsWorkModalOpen(false)
    setEditingTask(null)
    setSelectedIdTask(null)
    fetchTasks()
  }

  return (
    <Container className="w-[400px]">
      <div
        className="relative flex items-start justify-between cursor-pointer group mb-4 transition-all duration-200"
        onClick={openDisciplineModal}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <DisciplineTitle title={name} color={color} project={project} weight={weight} classroom={classroom} />
        <div
          className={`absolute top-0 right-0 p-1.5 bg-neutral-300 flex hover:text-yellow-600 items-center justify-center transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        >
          <PencilIcon className="w-4 h-4" />
        </div>

      </div>

      <div className="mb-10 text-neutral-500">
        <p className="text-neutral-600 text-sm flex gap-2 flex-wrap">

          <span
            className={`
        px-2 py-0.5 rounded-md font-medium
        ${highlightIfEditable(day || "Edite o dia")}
      `}
          >
            {truncateText(day || "Edite o dia", 20)}
          </span>

          <span
            className={`
        px-2 py-0.5 rounded-md font-medium
        ${highlightIfEditable(startTime || "Edite o horário de início")}
      `}
          >
            {truncateText(startTime || "Edite o horário de início", 20)}
          </span>

          <span>-</span>

          <span
            className={`
        px-2 py-0.5 rounded-md font-medium
        ${highlightIfEditable(endTime || "Edite o horário de término")}
      `}
          >
            {truncateText(endTime || "Edite o horário de término", 20)}
          </span>

        </p>
      </div>

      {loading ? (
        <p className="text-neutral-600 text-sm">Carregando tarefas...</p>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="text-neutral-500 flex items-center text-xl font-bold mb-4  pb-2 truncate">
              Atividades e Trabalhos
            </h2>
            <div className="space-y-4 mb-4">
              {works.length > 0 ? (
                works.map((work) => (
                  <ListItem
                    key={work.idTask}
                    id={work.idTask}
                    fullDescription={work.name || "Edite o nome do trabalho"}
                    borderColor="green"
                    onStatusChange={handleStatusChange}
                    onEdit={() => handleOpenModal("Trabalho", work)}
                    taskData={work}
                  />
                ))
              ) : (
                <p className="text-neutral-600 text-sm">Nenhum trabalho cadastrado.</p>
              )}
            </div>
            <Button
              className="w-full transition duration-200 mt-2 mb-6"
              variant="yellow-primary"
              onClick={() => handleOpenModal("Trabalho")}
            >
              <p>Adicionar trabalho</p>
            </Button>
          </div>

          <div className="mb-4">
            <h2 className="text-neutral-500 flex items-center text-xl font-bold mb-4  pb-2 truncate">
              Provas e Avaliações
            </h2>
            <div className="space-y-4 mb-4">
              {exams.length > 0 ? (
                exams.map((exam) => (
                  <ListItem
                    key={exam.idTask}
                    id={exam.idTask}
                    fullDescription={exam.name || "Edite o nome da prova"}
                    borderColor="blue"
                    onStatusChange={handleStatusChange}
                    onEdit={() => handleOpenModal("Prova", exam)}
                    taskData={exam}
                  />
                ))
              ) : (
                <p className="text-neutral-600 text-sm">Nenhuma prova cadastrada.</p>
              )}
            </div>
            <Button
              className="w-full transition duration-200  mt-2"
              variant="yellow-primary"
              onClick={() => handleOpenModal("Prova")}
            >
              <p>Adicionar prova</p>
            </Button>
          </div>
        </>
      )}

      <WorkFormModal
        isOpen={isWorkModalOpen}
        onClose={handleCloseModal}
        idDiscipline={idDiscipline}
        editData={editingTask ? { ...editingTask, id: selectedIdTask } : null}
        type={modalType}
        onRefresh={onRefresh}
      />

      <DisciplineFormModal
        isOpen={isDisciplineModalOpen}
        onClose={() => setIsDisciplineModalOpen(false)}
        onRefresh={onRefresh}
        disciplineData={disciplineData}
      />
    </Container>
  )
}

export default Discipline
