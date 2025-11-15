import { useEffect } from "react"
import { useState } from "react"
import { ProjectStep } from "@/components/discipline/wizard/ProjectStep"
import { DisciplineInputMethodStep } from "@/components/discipline/wizard/DisciplineInputMethodStep"
import { DisciplineManualInputStep } from "@/components/discipline/wizard/DisciplineManualInputStep"
import { DisciplineAInputStep } from "@/components/discipline/wizard/DisciplineAInputStep"
import { Button } from "@/components/ui/button"
import { createDiscipline } from "@/lib/api/discipline"
import { formatTimeForBackend } from "@/lib/utils"

export const AddDisciplineModal = ({ idUser, onClose }) => {

  const [step, setStep] = useState(1)
  const [disciplineInputMethod, setDisciplineInputMethod] = useState("ai")
  const [project, setProject] = useState("vestibular")
  const [disciplineData, setDisciplineData] = useState({
    name: "",
    classroom: "",
    day: "",
    startTime: "",
    endTime: "",
    weight: "",
    color: "blue",
  })

  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [])

  const handleOverlayClick = (e) => {
    if (e.target != e.currentTarget) {
      return
    }

    document.body.style.overflow = ""
    onClose()
  }

  const save = async () => {
    const payload = {
      ...disciplineData,
      project,
      startTime: formatTimeForBackend(disciplineData.startTime),
      endTime: formatTimeForBackend(disciplineData.endTime),
      idUser,
    }

    console.log("📦 Enviando payload:", payload)

    try {
      const response = await createDiscipline(payload)

      if (!response.ok) throw new Error("Erro ao salvar a disciplina.")

      alert("Disciplina adicionada com sucesso!")

      document.body.style.overflow = ""
      onClose()
    } catch (err) {
      alert(err.message)
    }
  }

  const nextStep = () => {
    step == 3 ? save() : setStep(step + 1)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400/70 backdrop-blur-sm p-4"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-neutral-300 rounded-lg border border-neutral-400 shadow-xl w-full max-w-md p-6 sm:p-8 transform transition-all max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-neutral-600 text-2xl font-semibold mb-6">
          Insira disciplinas
        </h2>
        <div className="text-center mb-4">
          <p className="text-yellow-600 text-xl mb-2">
            <span className={step == 1 && "font-bold"}>Passo 1</span>  →
            <span className={step == 2 && "font-bold"}>Passo 2</span> →
            <span className={step == 3 && "font-bold"}>Passo 3</span>
          </p>
        </div>

        {step == 1 ? <ProjectStep selectedProject={project} onProjectSelected={setProject} /> : null}
        {step == 2 ? <DisciplineInputMethodStep disciplineInputMethod={disciplineInputMethod} setDisciplineInputMethod={setDisciplineInputMethod} /> : null}
        {step == 3 ?
          disciplineInputMethod == "manual" ? <DisciplineManualInputStep disciplineData={disciplineData} setDisciplineData={setDisciplineData} /> : <DisciplineAInputStep />
          : null}

        <Button onClick={nextStep} type="submit" variant="yellow-primary" className="w-full flex-1 transition duration-200 mt-8">
          {step == 3 ? "Enviar" : "Próximo"}
        </Button>
      </div>
    </div>
  )
}

export default AddDisciplineModal
