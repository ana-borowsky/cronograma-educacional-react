import { useEffect } from "react"
import { useState } from "react"
import { ProjectModal } from "@/components/discipline/ProjectModal"
import { AiOrManualInputModal } from "@/components/discipline/AiOrManualInputModal"
import { DisciplineManualInputModal } from "@/components/discipline/DisciplineManualInputModal"
import { DisciplineAInputModal } from "@/components/discipline/DisciplineAInputModal"
import { Button } from "@/components/ui/button"

export const AddDisciplineModal = ({ onClose }) => {

  const [step, setStep] = useState(1) 
  const [disciplineInput, setDisciplineInput] = useState("ai") 

  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const handleClose = () => {
    document.body.style.overflow = ""
    onClose()
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const onDisciplineInputSelected = (e) => {
    setDisciplineInput(e.target.value)
  }

  console.log(step)
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
          <div className="text-center">
            <p className="text-neutral-100 text-sm mb-2">
              <span className={step == 1 && "font-bold"}>Passo 1</span>  → 
              <span className={step == 2 && "font-bold"}>Passo 2</span> → 
              <span className={step == 3 && "font-bold"}>Passo 3</span>
            </p>
          </div>

          {step == 1 ? <ProjectModal /> : null}
          {step == 2 ? <AiOrManualInputModal onDisciplineInputSelected={onDisciplineInputSelected} /> : null}
          {step == 3 ? 
            disciplineInput == "manual" ? <DisciplineManualInputModal /> : <DisciplineAInputModal /> 
            : null}
          
          <Button onClick={nextStep} type="submit" variant="yellow-primary" className="w-full flex-1 transition duration-200 mt-8">
            Próximo
          </Button>
        </div>
      </div>
    )
}

export default AddDisciplineModal
