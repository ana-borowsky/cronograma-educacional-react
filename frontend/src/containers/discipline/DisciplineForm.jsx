'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DisciplineFormComponent from "@/components/discipline/DisciplineForm"
import { createDiscipline, editDiscipline, deleteDiscipline } from "@/lib/api/discipline"
import { formatTimeForBackend } from "@/lib/utils"

export const DisciplineForm = ({ disciplineData, idUser = 1, selectedProject = "", onCancel, onRefresh }) => {
  const isEditing = !!disciplineData

  const formatTimeForInput = (time) => {
    if (!time) return ""
    return time.length === 8 ? time.slice(0, 5) : time
  }

  const [formData, setFormData] = useState({
    name: disciplineData?.name || "",
    project: disciplineData?.project || selectedProject || "",
    classroom: disciplineData?.classroom || "",
    day: disciplineData?.day || "",
    startTime: formatTimeForInput(disciplineData?.startTime) || "",
    endTime: formatTimeForInput(disciplineData?.endTime) || "",
    weight: disciplineData?.weight || "",
    color: disciplineData?.color || "blue",
  })

  useEffect(() => {
    if (selectedProject && selectedProject !== formData.project) {
      setFormData((prev) => ({ ...prev, project: selectedProject }))
    }
  }, [selectedProject])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      ...formData,
      project: formData.project || selectedProject,
      startTime: formatTimeForBackend(formData.startTime),
      endTime: formatTimeForBackend(formData.endTime),
      idUser,
      ...(isEditing && { idDiscipline: disciplineData.idDiscipline }),
    }

    console.log("📦 Enviando payload:", payload)

    const saveDiscipline = isEditing ? editDiscipline : createDiscipline

    try {
      const response = await saveDiscipline(payload)

      if (!response.ok) throw new Error("Erro ao salvar a disciplina.")

      alert(isEditing ? "Disciplina atualizada com sucesso!" : "Disciplina adicionada com sucesso!")
      onRefresh?.()
      onCancel?.()
    } catch (err) {
      alert(err.message)
    }
  }

  const handleDelete = async () => {
    if (!disciplineData?.idDiscipline) return alert("ID da disciplina não encontrado.")
    if (!confirm("Tem certeza que deseja excluir esta disciplina?")) return

    try {
      const response = await deleteDiscipline(disciplineData.idDiscipline)
      if (!response.ok) throw new Error("Erro ao excluir a disciplina.")
      alert("Disciplina excluída com sucesso!")
      onRefresh?.()
      onCancel?.()
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <DisciplineFormComponent disciplineData={formData} setDisciplineData={setFormData} />

      {isEditing ? (
        <div className="flex justify-between gap-4 pt-3 ">
          <Button type="button" variant="destructive" className="flex-1 transition duration-200 mt-2" onClick={handleDelete}>
            Excluir
          </Button>
          <Button type="submit" variant="yellow-primary" className="flex-1 transition duration-200 mt-2">
            Salvar
          </Button>
        </div>
      ) : (
        <Button type="submit" className="w-full transition duration-200 mt-2" variant="yellow-primary">
          Adicionar disciplina
        </Button>
      )}
    </form>
  )
}
