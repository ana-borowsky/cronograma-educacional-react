import React, { useState, useEffect } from 'react'
import { ListItem } from "@/components/ListItem"
import { DateTitle } from "@/components/schedule/DateTitle"
import { TimeProgress } from "@/components/schedule/TimeProgress"
import { ChevronLeft, ChevronRight } from "@/components/schedule/ScheduleData.jsx"

const formatDateForDisplay = (date) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formatted = date.toLocaleDateString('pt-BR', options);
  return formatted.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

const formatDateForAPI = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const ToDoList = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [progressPercent, setProgressPercent] = useState(0)
  const [progressLabel, setProgressLabel] = useState("0 de 0 Tarefas Concluídas")

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true);
      
      const apiDate = formatDateForAPI(currentDate);
      console.group("Debugging ToDoList Fetch");
      console.log("1. Current Date State:", currentDate);
      console.log("2. Formatted Date for API:", apiDate);

      try {
        const url = `http://localhost:8800/plannings/userDayPlannings/1`;
        console.log("3. Request URL:", url);

        const response = await fetch(url);
        console.log("4. Response Status:", response.status);

        if (response.ok) {
          const data = await response.json();
          console.log("5. Raw JSON Data from API:", data);

          if (data.length === 0) {
            console.warn("!!! API returned an empty array. No tasks found for this date in the DB.");
          }

          const formattedData = data.map(task => ({
            ...task,
            defaultChecked: task.defaultChecked === true || task.status === 'Concluído'
          }));
          
          const uniqueTasks = formattedData.filter((task, index, self) =>
            index === self.findIndex((t) => (
              t.idPlanning === task.idPlanning
            ))
          );

          console.log("6. Final Tasks sent to State:", uniqueTasks);
          setTasks(uniqueTasks);
        } else {
          console.error("API Error - Status:", response.status);
          setTasks([]);
        }
      } catch (error) {
        console.error("FETCH ERROR:", error);
        setTasks([]);
      } finally {
        console.groupEnd();
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, [currentDate]);

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

  const handleStatusChange = async (idTask, newStatus) => {
    console.log(`Updating Task ${idTask} to status: ${newStatus}`);
    try {
      const response = await fetch(`http://localhost:8800/tasks/${idTask}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (!response.ok) throw new Error('Erro ao atualizar status');
      
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.idTask === idTask ? { 
            ...task, 
            status: newStatus, 
            defaultChecked: newStatus === 'Concluído' 
          } : task
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    }
  };

  return (
    <div className="w-1/3 flex-grow p-6 bg-neutral-300 border border-neutral-400 rounded-lg">
      <div className="text-neutral-600 flex justify-center mb-4">
        <DateTitle
          currentDate={formatDateForDisplay(currentDate)}
        />
      </div>

      <TimeProgress
        progressValue={progressPercent}
        progressText={progressLabel}
      />

      {tasks.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img
            src="/assets/gatinho_balao_disciplinas.svg"
            style={{ width: '400px', height: 'auto' }}
            className="mt-10"
            alt="Sem tarefas"
          />
           {!isLoading && (
            <p className="text-neutral-500 mt-4">Sem tarefas para {formatDateForDisplay(currentDate)}</p>
          )}
        </div>
      ) : ""}

      <div className="space-y-4 mt-4">
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
              editButton={false}
            />          
          ))
        )}
      </div>
    </div>
  )
}

export default ToDoList
