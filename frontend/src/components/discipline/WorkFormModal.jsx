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

export const WorkFormModal = ({ isOpen, onClose, idDiscipline, editData, type }) => {
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
        id: editData?.id,
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
      onClose()
    } catch (error) {
      console.error("Erro ao excluir atividade:", error)
      alert("Erro ao excluir trabalho.")
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-neutral-800 rounded-xl shadow-2xl w-full max-w-md border border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-neutral-700 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">
            {isEditMode
              ? `Editar ${type.toLowerCase()}`
              : `Adicionar ${type.toLowerCase()}`}
          </h3>
          <Button
            className="bg-transparent text-neutral-400 hover:bg-neutral-700 p-1 rounded-full"
            onClick={onClose}
            aria-label="Fechar"
          >
            <XMark />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div className="flex flex-col">
            <label className="text-neutral-400 text-xs mb-1 font-medium">
              Nome
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Ex: Revisão Bibliográfica"
              required
              variant="dark"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-400 text-xs mb-1 font-medium">
              Duração estimada (horas)
            </label>
            <Input
              type="number"
              name="estimatedHours"
              placeholder="Ex: 8"
              min="0.5"
              step="0.5"
              required
              variant="dark"
              value={formData.estimatedHours}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-400 text-xs mb-1 font-medium">
              Data de entrega
            </label>
            <Input
              type="date"
              name="dueDate"
              required
              variant="dark"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-400 text-xs mb-1 font-medium">
              Peso
            </label>
            <Input
              type="number"
              name="weight"
              placeholder="Ex: 8"
              min="1"
              step="1"
              required
              variant="dark"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-400 text-xs mb-1 font-medium">
              Upload de Arquivo (opcional)
            </label>
            <Input
              type="file"
              name="file"
              variant="dark"
              onChange={handleChange}
              className="w-full p-3 border border-neutral-600 rounded-lg bg-neutral-700 text-neutral-300 file:mr-3 file:py-2 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-600 file:text-white hover:file:bg-yellow-500 cursor-pointer"
            />
          </div>

          <div className="flex space-x-2">
            {isEditMode ? (
              <>
                <Button
                  type="button"
                  className="w-1/2"
                  variant="destructive"
                  onClick={handleDelete}
                >
                  Excluir
                </Button>

                <Button type="submit" className="w-1/2" variant="yellow-primary">
                  Salvar alterações
                </Button>
              </>
            ) : (
              <Button type="submit" className="w-full" variant="yellow-primary">
                Adicionar
              </Button>
            )}
          </div>

        </form>
      </div>
    </div>
  )
}
