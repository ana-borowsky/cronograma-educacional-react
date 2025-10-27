import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { DisciplineForm } from "@/components/DisciplineForm"

const ChevronUp = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
const ChevronDown = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-neutral-400"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>

/**
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose 
 * @param {object} [props.disciplineData] 
 */
export const DisciplineFormModal = ({ isOpen, onClose, disciplineData }) => {
  const isEditing = !!disciplineData
  const modalTitle = isEditing ? `Editar ${disciplineData.title}` : "Adicionar Nova Disciplina"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])


  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const FormContent = () => {
    return (
      <div className="bg-neutral-800 p-6 sm:p-8 border border-neutral-700 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-5">{modalTitle}</h2>

        <div className="border-t border-neutral-700 pt-5">
          <DisciplineForm disciplineData={disciplineData} />
        </div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-lg mx-4 md:mx-auto max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <FormContent />

        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition-colors"
          aria-label="Fechar Modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
