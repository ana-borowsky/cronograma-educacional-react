import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { DisciplineForm } from "@/components/discipline/DisciplineForm"

export const DisciplineFormModal = ({ isOpen, onClose, disciplineData }) => {
  const isEditing = !!disciplineData
  const modalTitle = isEditing
    ? `Editar ${disciplineData.name}`
    : "Adicionar nova disciplina"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
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
          {modalTitle}
        </h2>

        <DisciplineForm
          disciplineData={disciplineData}
          onCancel={onClose}
          onDelete={() => console.log("Excluir disciplina")}
          onSave={() => console.log("Salvar disciplina")}
        />
      </div>
    </div>
  )
}

export default DisciplineFormModal
