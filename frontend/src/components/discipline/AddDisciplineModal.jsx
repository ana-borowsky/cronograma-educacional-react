import { useEffect } from "react"
import { ProjectModal } from "@/components/discipline/ProjectModal"

export const AddDisciplineModal = ({ onClose }) => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400/70 backdrop-blur-sm p-4"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-background rounded-lg border border-neutral-400 shadow-xl w-full max-w-md p-6 sm:p-8 transform transition-all max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center text-neutral-600 text-2xl font-semibold mb-6">
          Insira disciplinas
        </h2>
        <ProjectModal/>
      </div>
    </div>
  )
}

export default AddDisciplineModal
