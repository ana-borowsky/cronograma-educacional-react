import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { DisciplineForm } from "@/components/discipline/DisciplineForm"

export const DisciplineFormModal = ({ isOpen, onClose, disciplineData }) => {
  const isEditing = !!disciplineData
  const modalTitle = isEditing ? `Editar ${disciplineData.name}` : "Adicionar Nova Disciplina"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-lg mx-4 md:mx-auto max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-all duration-500 ease-in-out scale-100 opacity-100">
        <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-bold text-white mb-5">{modalTitle}</h2>
          <DisciplineForm
            disciplineData={disciplineData}
            onCancel={onClose}
            onDelete={() => console.log("Excluir disciplina")}
            onSave={() => console.log("Salvar disciplina")}
          />
        </div>

        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition-colors"
          aria-label="Fechar Modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default DisciplineFormModal
