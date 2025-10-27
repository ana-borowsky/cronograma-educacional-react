import React, { useState } from 'react';
import { TaskItem } from "@/components/TaskItem"
import { ToDoListTitle } from "@/components/ToDoListTitle"

const getNextDate = (currentDate) => {
  return "Quarta-feira, 16 de Outubro";
};

const getPrevDate = (currentDate) => {
  return "Segunda-feira, 14 de Outubro";
};

const ToDoList = () => {
  const [displayedDate, setDisplayedDate] = useState("Terça-feira, 15 de Outubro");

  const handlePrevDate = () => {
    setDisplayedDate(getPrevDate(displayedDate));
  };

  const handleNextDate = () => {
    setDisplayedDate(getNextDate(displayedDate));
  };

  return (
    <div className="flex-grow p-6 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">

      <ToDoListTitle
        currentDate={displayedDate}
        onPrevClick={handlePrevDate}
        onNextClick={handleNextDate}
      />

      {/* Barra de Progresso */}
      <div className="mb-8 p-4 bg-neutral-700 rounded-lg border border-neutral-600">
        <div className="h-2 bg-neutral-600 rounded-full mb-1">
          <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }}></div>
        </div>
        <p className="text-neutral-300 text-sm font-medium">4 de 10 Horas Concluídas</p>
      </div>

      {/* Lista de Tarefas */}
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