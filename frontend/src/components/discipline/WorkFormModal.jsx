'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const XMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"
    className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export const WorkFormModal = ({ isOpen, onClose, idDiscipline, editData, type, onRefresh }) => {
  const isEditMode = !!editData

  const [formData, setFormData] = useState({
    name: "",
    estimatedHours: "",
    dueDate: "",
    weight: "",
    file: null,
  })

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
        estimatedHours: editData.estimatedHours
          ? editData.estimatedHours.replace(":00:00", "")
          : "",
        dueDate: editData.dueDate ? editData.dueDate.split("T")[0] : "",
        weight: editData.weight || "",
        file: null,
      })
    }
  }, [editData])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const body = {
        idTask: editData?.id,
        name: formData.name,
        type: "Trabalho",
        estimatedHours: `${formData.estimatedHours}:00:00`,
        dueDate: formData.dueDate,
        status: "Pendente",
        weight: formData.weight,
        idDiscipline: idDiscipline,
      }

      const url = isEditMode
        ? "http://localhost:8800/tasks"
        : "http://localhost:8800/tasks/"

      const method = isEditMode ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (!response.ok) throw new Error("Falha ao salvar atividade")

      alert(isEditMode ? "Trabalho atualizado com sucesso!" : "Atividade adicionada com sucesso!")
      onRefresh()
      onClose()
    } catch (error) {
      console.error("Erro ao enviar atividade:", error)
      alert("Erro ao salvar atividade.")
    }
  }

  const handleDelete = async () => {
    if (!editData?.id) return
    if (!confirm("Tem certeza que deseja excluir esta atividade?")) return

    try {
      const response = await fetch(`http://localhost:8800/tasks/${editData.id}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Erro ao excluir atividade")

      alert("Atividade excluída com sucesso!")
      onRefresh()
      onClose()
    } catch (error) {
      console.error("Erro ao excluir atividade:", error)
      alert("Erro ao excluir trabalho.")
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-400/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-neutral-300 rounded-lg border border-neutral-400 shadow-xl w-full max-w-md sm:p-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fspace-y-4 mt-4">
          <h2 id="modal-title" className="text-center text-neutral-600 text-2xl font-semibold mb-6">
            {isEditMode
              ? `Editar ${type.toLowerCase()}`
              : `Adicionar ${type.toLowerCase()}`}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="flex flex-col">
            <label className="block text-neutral-600 font-semibold text-sm mb-1">
              Nome
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Ex: Revisão Bibliográfica"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-neutral-600 font-semibold text-sm mb-1">
              Duração estimada (horas)
            </label>
            <Input
              type="number"
              name="estimatedHours"
              placeholder="Ex: 8"
              min="0.5"
              step="0.5"
              required
              value={formData.estimatedHours}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-neutral-600 font-semibold text-sm mb-1">
              Data de entrega
            </label>
            <Input
              type="date"
              name="dueDate"
              required
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1">
            <label className="block text-neutral-600 font-semibold text-sm">Nível de dificuldade</label>
            <Input
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              required
              min="1"
              max="10"
              placeholder="1 a 10"
            />
          </div>

          <div className="flex space-x-4">
            {isEditMode ? (
              <>
                <Button
                  type="button"
                  className="w-1/2 transition duration-200"
                  variant="destructive"
                  onClick={handleDelete}
                >
                  Excluir
                </Button>

                <Button
                  type="submit"
                  className="w-1/2 transition duration-200"
                  variant="yellow-primary"
                >
                  Salvar alterações
                </Button>
              </>
            ) : (
              <Button
                type="submit"
                className="w-full transition duration-200"
                variant="yellow-primary"
              >
                Adicionar
              </Button>
            )}
          </div>

        </form>
      </div>
    </div>
  )
}
