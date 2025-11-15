import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DisciplineForm } from "@/components/discipline/DisciplineForm"

export function DisciplineManualInputModal() {

  return (
    <div>
      <h2 className="text-neutral-600 flex items-center text-xl font-bold mb-4  pb-2 truncate">Insira manualmente</h2>
      < DisciplineForm />
    </div>
  )
}
