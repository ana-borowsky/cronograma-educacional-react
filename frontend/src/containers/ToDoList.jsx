import React, { useState, useEffect } from 'react'
import { ListItem } from "@/components/ListItem"
import { DateTitle } from "@/components/DateTitle"
import { TimeProgress } from "@/components/TimeProgress"

const getNextDate = (currentDate) => {
  return "Quarta-feira, 16 de Outubro"
}

const getPrevDate = (currentDate) => {
  return "Segunda-feira, 14 de Outubro"
}

const ToDoList = () => {
  const [displayedDate, setDisplayedDate] = useState("Terça-feira, 15 de Outubro")
  
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [progressPercent, setProgressPercent] = useState(0)
  const [progressLabel, setProgressLabel] = useState("0 de 0 Tarefas Concluídas")

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:8800/Tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Erro buscando tarefas:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    const totalTasks = tasks.length;
    if (totalTasks > 0) {
      const completedTasks = tasks.filter(t => t.defaultChecked).length;
      const percent = (completedTasks / totalTasks) * 100;
      setProgressPercent(percent);
      setProgressLabel(`${completedTasks} de ${totalTasks} Tarefas Concluídas`);
    } else {
      setProgressPercent(0);
      setProgressLabel("Nenhuma tarefa para hoje");
    }
  }, [tasks]);

  const handlePrevDate = () => {
    setDisplayedDate(getPrevDate(displayedDate))
  }

  const handleNextDate = () => {
    setDisplayedDate(getNextDate(displayedDate))
  }
  
  return (
    <div className="flex-grow p-6 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">

      <DateTitle
        currentDate={displayedDate}
        onPrevClick={handlePrevDate}
        onNextClick={handleNextDate}
      />

      <TimeProgress
        progressValue={progressPercent}
        progressText={progressLabel}
      />

      <div className="space-y-4">
        {isLoading ? (
          <p className="text-neutral-400 text-center">Carregando tarefas...</p>
        ) : (
          tasks.map((task) => (
            <ListItem
              key={task.id}
              id={task.id}
              fullDescription={task.fullDescription}
              borderColor={task.borderColor}
              defaultChecked={task.defaultChecked}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default ToDoList
