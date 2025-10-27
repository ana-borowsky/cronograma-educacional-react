import React, { useState } from 'react'
import { TaskItem } from "@/components/TaskItem"
import { ToDoListTitle } from "@/components/ToDoListTitle"
import { TimeProgress } from "@/components/TimeProgress"

const getNextDate = (currentDate) => {
  return "Quarta-feira, 16 de Outubro"
}

const getPrevDate = (currentDate) => {
  return "Segunda-feira, 14 de Outubro"
}

const ToDoList = () => {
  const [displayedDate, setDisplayedDate] = useState("Terça-feira, 15 de Outubro")

  const handlePrevDate = () => {
    setDisplayedDate(getPrevDate(displayedDate))
  }

  const handleNextDate = () => {
    setDisplayedDate(getNextDate(displayedDate))
  }

  const totalHours = 10
  const completedHours = 4
  const progressPercent = (completedHours / totalHours) * 100
  const progressLabel = `${completedHours} de ${totalHours} Horas Concluídas`

  return (
    <div className="flex-grow p-6 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">

      <ToDoListTitle
        currentDate={displayedDate}
        onPrevClick={handlePrevDate}
        onNextClick={handleNextDate}
      />

      <TimeProgress
        progressValue={progressPercent}
        progressText={progressLabel}
      />

      <div className="space-y-4">
        <TaskItem
          id="tarefa-1"
          timeRange="09:00 - 10:00"
          description="Revisar Capítulo 3 de Cálculo I"
          borderColor="yellow"
        />
        <TaskItem
          id="tarefa-2"
          timeRange="10:00 - 12:00"
          description="Estudar para a prova de Física Experimental"
          borderColor="red"
          defaultChecked={true}
        />
      </div>
    </div>
  )
}

export default ToDoList