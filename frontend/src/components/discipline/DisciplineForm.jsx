'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/**
 * @param {object} props
 * @param {object} [props.disciplineData] 
 * @param {number} [props.idUser=1] 
 * @param {Function} [props.onCancel] 
 * @param {Function} [props.onRefresh] 
 */
export const DisciplineForm = ({ disciplineData, idUser = 1, onCancel, onRefresh }) => {
  const isEditing = !!disciplineData

  const formatTimeForInput = (time) => {
    if (!time) return ""
    return time.length === 8 ? time.slice(0, 5) : time 
  }

  const [formData, setFormData] = useState({
    name: disciplineData?.name || "",
    project: disciplineData?.project || "",
    classroom: disciplineData?.classroom || "",
    day: disciplineData?.day || "",
    startTime: formatTimeForInput(disciplineData?.startTime) || "",
    endTime: formatTimeForInput(disciplineData?.endTime) || "",
    weight: disciplineData?.weight || "",
    color: disciplineData?.color || 1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatTimeForBackend = (time) => {
    if (!time) return null
    return time.length === 5 ? `${time}:00` : time
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      ...formData,
      startTime: formatTimeForBackend(formData.startTime),
      endTime: formatTimeForBackend(formData.endTime),
      idUser,
      ...(isEditing && { idDiscipline: disciplineData.idDiscipline }),
    }

    console.log("📦 Enviando payload:", payload)

    const method = isEditing ? "PUT" : "POST"

    try {
      const response = await fetch("http://localhost:8800/discipline/", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

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
      const response = await fetch(`http://localhost:8800/discipline/${disciplineData.idDiscipline}`, { method: "DELETE" })
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
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Nome</label>
        <Input name="name" value={formData.name} onChange={handleChange} required variant="dark" placeholder="Ex: Banco de Dados" />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Projeto</label>
        <Input name="project" value={formData.project} onChange={handleChange} required variant="dark" placeholder="Ex: Sistema Web" />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Sala / Local</label>
        <Input name="classroom" value={formData.classroom} onChange={handleChange} required variant="dark" placeholder="Ex: Sala 203" />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Dia</label>
        <Input name="day" value={formData.day} onChange={handleChange} required variant="dark" placeholder="Ex: Segunda-feira" />
      </div>

      <div className="flex space-x-2">
        <div className="space-y-1 flex-1">
          <label className="block text-neutral-300 font-semibold text-sm">Início</label>
          <Input name="startTime" type="time" step="60" value={formData.startTime} onChange={handleChange} required variant="dark" />
        </div>
        <div className="space-y-1 flex-1">
          <label className="block text-neutral-300 font-semibold text-sm">Fim</label>
          <Input name="endTime" type="time" step="60" value={formData.endTime} onChange={handleChange} required variant="dark" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Peso</label>
        <Input name="weight" type="number" value={formData.weight} onChange={handleChange} required variant="dark" min="0" max="10" />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Cor</label>
        <Input name="color" type="number" value={formData.color} onChange={handleChange} required variant="dark" min="1" max="5" />
      </div>

      {isEditing ? (
        <div className="flex justify-between gap-3 pt-3">
          <Button type="button" variant="destructive" className="flex-1" onClick={handleDelete}>
            Excluir
          </Button>
          <Button type="submit" variant="yellow-primary" className="flex-1">
            Salvar
          </Button>
        </div>
      ) : (
        <Button type="submit" className="w-full" variant="yellow-primary">
          Adicionar disciplina
        </Button>
      )}
    </form>
  )
}
