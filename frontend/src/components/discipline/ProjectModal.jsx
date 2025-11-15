import React from 'react'
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const colorMap = {
  yellow: "bg-yellow-600",
  red: "bg-red-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
  purple: "bg-blue-600",
  orange: "bg-orange-600",
  pink: "bg-pink-500",
  white: "bg-white",
  black: "bg-black",
}

export function ProjectModal() {
    
  const [selectedProject, setSelectedProject] = useState("vestibular")

  const [projects, setProjects] = useState([
    "vestibular",
    "concurso",
    "enem",
    "Enade",
    "OAB",
    "primeiro periodo",
    "segundo periodo",
    "terceiro periodo",
    "quarto periodo",
    "primeiro ano",
    "segundo ano",
    "terceiro ano",
  ])
  const [newProject, setNewProject] = useState("")

  const handleCreateProject = () => {
    const trimmed = newProject.trim()
    if (!trimmed) return alert("Digite um nome válido para o projeto.")
    if (projects.includes(trimmed)) return alert("Esse projeto já existe.")
    setProjects([...projects, trimmed])
    setSelectedProject(trimmed)
    setNewProject("")
  }

  return (
    <div className="w-full">
      <h2 className="text-neutral-600 flex items-center text-xl font-bold mb-4  pb-2 truncate">Projeto</h2>
      <form className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="project-select" className="block text-neutral-600 font-semibold text-sm">
            Selecione o projeto
          </label>
          <div className="relative">
            <select
              id="project-select"
              name="project-select"
              className="w-full h-12 p-2.5 rounded-md bg-neutral-100 text-neutral-500 focus:outline-none focus:border-yellow-600 text-sm appearance-none pr-10"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              {projects.map((p) => (
                <option key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
              <option disabled>──────────</option>
              <option value="" disabled>
                Selecione ou crie um novo
              </option>
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

        <div className="space-y-1">
          <label htmlFor="new-project" className="block text-neutral-600 font-semibold text-sm">
            Ou crie um novo projeto
          </label>
          <div className="flex space-x-4">
            <Input
              type="text"
              id="new-project"
              name="new-project"
              placeholder="Nome do novo projeto..."
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
            />
            <Button type="button" variant="yellow-primary" onClick={handleCreateProject} className="transition duration-200">
              Criar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
