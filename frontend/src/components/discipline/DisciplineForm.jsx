'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DisciplineForm = ({ disciplineData, setDisciplineData }) => {
  const colorOptions = [
    { pt: "Amarelo", en: "yellow" },
    { pt: "Vermelho", en: "red" },
    { pt: "Verde", en: "green" },
    { pt: "Azul", en: "blue" },
    { pt: "Roxo", en: "purple" },
    { pt: "Laranja", en: "orange" },
    { pt: "Rosa", en: "pink" },
    { pt: "Branco", en: "white" },
    { pt: "Preto", en: "black" },
  ]

  const dayOptions = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setDisciplineData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <div className="space-y-1">
        <label className="block text-neutral-600 font-semibold text-sm">Nome</label>
        <Input name="name" value={disciplineData.name} onChange={handleChange} required placeholder="Ex: Banco de Dados" />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-600 font-semibold text-sm">Sala / Local</label>
        <Input name="classroom" value={disciplineData.classroom} onChange={handleChange} required placeholder="Ex: Sala 203" />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-600 font-semibold text-sm">Dia</label>
        <div className="relative">
          <select
            name="day"
            value={disciplineData.day}
            onChange={handleChange}
            required
            className="w-full h-12 p-2.5 rounded-md bg-neutral-100 text-neutral-600 focus:outline-none focus:border-yellow-600 text-sm appearance-none pr-10"
          >
            <option value="" disabled>Selecione um dia</option>
            {dayOptions.map((day) => (
              <option key={day} value={day}>{day}</option>
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

      <div className="flex space-x-4">
        <div className="space-y-1 flex-1">
          <label className="block text-neutral-600 font-semibold text-sm">Início</label>
          <Input name="startTime" type="time" step="60" value={disciplineData.startTime} onChange={handleChange} required />
        </div>
        <div className="space-y-1 flex-1">
          <label className="block text-neutral-600 font-semibold text-sm">Fim</label>
          <Input name="endTime" type="time" step="60" value={disciplineData.endTime} onChange={handleChange} required />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-600 font-semibold text-sm">Nível de dificuldade</label>
        <Input
          name="weight"
          type="number"
          value={disciplineData.weight}
          onChange={handleChange}
          required
          min="1"
          max="10"
          placeholder="1 a 10"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-neutral-600 font-semibold text-sm">Cor</label>
        <div className="relative">
          <select
            name="color"
            value={disciplineData.color}
            onChange={handleChange}
            required
            className="w-full h-12 p-2.5 rounded-md bg-neutral-100 text-neutral-500 focus:outline-none focus:border-yellow-600 text-sm appearance-none pr-10"
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
    </>
  )
}

export default DisciplineForm
