import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DisciplineAInputStep() {

  return (
    <div>
      <h2 className="text-neutral-600 flex items-center text-xl font-bold mb-4  pb-2 truncate">Ler arquivo com I.A.</h2>
      <form className="space-y-6">
        <p className="text-neutral-600 text-sm">
          Carregue um arquivo (ex: print) contendo a lista de disciplinas, salas e horários.
        </p>

        <div className="space-y-2">
          <label htmlFor="file-upload-ensalamento" className="block text-neutral-600 font-semibold text-sm">
            Selecione o arquivo do ensalamento
          </label>
          <Input
            type="file"
            id="file-upload-ensalamento"
            name="schedule-file"
            required
            variant="dark"
            className="file:bg-neutral-600 file:text-white hover:file:bg-neutral-500"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="file-upload-planos" className="block text-neutral-600 font-semibold text-sm">
            Selecione os arquivos dos planos de ensino das disciplinas
          </label>
          <Input
            type="file"
            id="file-upload-planos"
            name="schedule-file"
            required
            multiple
            variant="dark"
            className="file:bg-neutral-600 file:text-white hover:file:bg-neutral-500"
          />
        </div>
      </form>
      
    </div>
  )
}
