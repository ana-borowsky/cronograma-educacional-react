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

  // Lista de cores simples (sem nomes compostos)
  const colorOptions = [
    { pt: "Vermelho", en: "red" },
    { pt: "Azul", en: "blue" },
    { pt: "Verde", en: "green" },
    { pt: "Amarelo", en: "yellow" },
    { pt: "Roxo", en: "purple" },
    { pt: "Laranja", en: "orange" },
    { pt: "Rosa", en: "pink" },
    { pt: "Cinza", en: "gray" },
    { pt: "Preto", en: "black" },
    { pt: "Branco", en: "white" },
    { pt: "Marrom", en: "brown" },
    { pt: "Ciano", en: "cyan" },
    { pt: "Magenta", en: "magenta" },
    { pt: "Dourado", en: "gold" },
    { pt: "Prata", en: "silver" },
  ]

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
    color: disciplineData?.color || "blue", // padrão azul
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
      {/* Nome */}
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Nome</label>
        <Input name="name" value={formData.name} onChange={handleChange} required variant="dark" placeholder="Ex: Banco de Dados" />
      </div>

      {/* Projeto */}
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Projeto</label>
        <Input name="project" value={formData.project} onChange={handleChange} required variant="dark" placeholder="Ex: Sistema Web" />
      </div>

      {/* Sala */}
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Sala / Local</label>
        <Input name="classroom" value={formData.classroom} onChange={handleChange} required variant="dark" placeholder="Ex: Sala 203" />
      </div>

      {/* Dia */}
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Dia</label>
        <Input name="day" value={formData.day} onChange={handleChange} required variant="dark" placeholder="Ex: Segunda-feira" />
      </div>

      {/* Horários */}
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

      {/* Peso */}
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Peso</label>
        <Input name="weight" type="number" value={formData.weight} onChange={handleChange} required variant="dark" min="0" max="10" />
      </div>

  
      <div className="space-y-1">
        <label className="block text-neutral-300 font-semibold text-sm">Cor</label>
        <div className="relative">

          <select
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
            className="w-full p-2.5 border border-neutral-600 rounded-md bg-neutral-700 text-white focus:outline-none focus:border-yellow-500 text-sm appearance-none pr-10"
    
          >
            {colorOptions.map((color) => (
              <option key={color.en} value={color.en}>
                {color.pt}
              </option>
            ))}
          </select>

        
          <svg
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Botões */}
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
