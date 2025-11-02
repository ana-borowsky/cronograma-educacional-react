import { findPlanningByDate } from "../Models/PlanningModel.js";
import { findAllTasks } from "../Models/TasksModel.js";
import { findAllDisciplines } from "../Models/DisciplineModel.js";

const colorMap = [
  "gray",
  "yellow",
  "blue",
  "purple",
  "green",
  "red"
];

export const getTasks = (_, res) => {
  try {
    const planningDate = "2025-10-14";
    const plannedItems = findPlanningByDate(planningDate);
    
    const allTasks = findAllTasks();
    const allDisciplines = findAllDisciplines();

    const formattedTasks = plannedItems.map(plan => {
      const task = allTasks.find(t => t.idTask === plan.idTask);
      if (!task) return null;
      
      const discipline = allDisciplines.find(d => d.idDiscipline === task.idDiscipline);
      
      return {
        id: `plan-${plan.idPlanning}`,
        fullDescription: `${plan.startTime.substring(0, 5)} - ${plan.endTime.substring(0, 5)} | ${discipline ? discipline.name : ''}: ${task ? task.name : 'Tarefa'}`,
        borderColor: discipline ? colorMap[discipline.color] : "gray",
        defaultChecked: task ? task.status === 'Done' : false
      };
    }).filter(Boolean);

    console.log("Enviando tarefas formatadas para o frontend:", formattedTasks);

    return res.status(200).json(formattedTasks);
    
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
