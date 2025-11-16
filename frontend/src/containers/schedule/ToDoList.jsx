import React, { useState, useEffect } from 'react'
import { ListItem } from "@/components/ListItem"
import { DateTitle } from "@/components/schedule/DateTitle"
import { TimeProgress } from "@/components/schedule/TimeProgress"
import { ChevronLeft, ChevronRight } from "@/components/schedule/ScheduleData.jsx"

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
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:8800/plannings/userDayPlannings/1');
        if (response.status === 400 || response.status === 404) {
          setTasks([]);
        } else if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          throw new Error("Falha ao buscar tarefas do dia");
        }
      } catch (error) {
        console.error("Erro buscando tarefas:", error);
        setTasks([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, [displayedDate]);

  const handleStatusChange = async (idTask, newStatus) => {
    try {
      const response = await fetch(`http://localhost:8800/tasks/${idTask}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) throw new Error('Erro ao atualizar status');
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.idTask === idTask ? { ...task, defaultChecked: newStatus === 'Concluído' } : task
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

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
    <div className="w-1/3 flex-grow p-6 bg-neutral-300 border border-neutral-400 rounded-lg">
      <div className="text-neutral-600 flex items-center justify-between mb-4 bg-neutral-200 rounded-lg h-12 pl-4 pr-4">
       <ChevronLeft />
        <DateTitle
          currentDate={displayedDate}
          onPrevClick={handlePrevDate}
          onNextClick={handleNextDate}
        />
        <ChevronRight />
      </div>

      <TimeProgress
        progressValue={progressPercent}
        progressText={progressLabel}
      />

      {tasks.length === 0 && (
        <div className="flex justify-center items-center">
          <img
            src="/assets/gatinho_balao_disciplinas.svg"
            style={{ width: '400px', height: 'auto' }}
            className="mt-10"
          />
        </div>
      )}

      <div className="space-y-4">
        {isLoading ? (
          <p className="text-neutral-500 text-center">Carregando tarefas...</p>
        ) : (
          tasks.map((planning) => (
            <ListItem
              key={planning.idPlanning}
              id={planning.idPlanning}
              fullDescription={planning.fullDescription}
              borderColor={planning.borderColor}
              defaultChecked={planning.defaultChecked}
              onStatusChange={(id, newStatus) => handleStatusChange(planning.idTask, newStatus)}
              taskData={planning} 
            />          
          ))
        )}
      </div>
    </div>
  )
}

export default ToDoList