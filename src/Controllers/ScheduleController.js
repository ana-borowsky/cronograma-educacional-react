import { findAllDisciplines } from "../Models/DisciplineModel.js";
import { findPlanningByDate } from "../Models/PlanningModel.js";
import { findAllTasks } from "../Models/TasksModel.js";

const colorMap = ["gray", "yellow", "blue", "purple", "green", "red"];
const dayMap = { 'Segunda': 0, 'Terça': 1, 'Quarta': 2, 'Quinta': 3, 'Sexta': 4, 'Sábado': 5, 'Domingo': 6 };
const jsDayIndexToInternalIndex = [6, 0, 1, 2, 3, 4, 5];

export const getScheduleEvents = (_, res) => {
  try {
    const disciplines = findAllDisciplines();
    const classEvents = disciplines.map(disc => {
      const startHour = parseInt(disc.startTime.split(':')[0], 10);
      const endHour = parseInt(disc.endTime.split(':')[0], 10);
      
      return {
        dayIndex: dayMap[disc.day] || 0,
        text: `Aula ${disc.name}`,
        startHour: startHour,
        endHour: endHour,
        color: colorMap[disc.color] || "gray"
      };
    });

    const planningDate = "2025-10-14";
    const plannedTasks = findPlanningByDate(planningDate);
    const allTasks = findAllTasks();

    const studyEvents = plannedTasks.map(plan => {
      const task = allTasks.find(t => t.idTask === plan.idTask);
      const disc = task ? disciplines.find(d => d.idDiscipline === task.idDiscipline) : null;
      if (!task || !disc) return null; 

      const startHour = parseInt(plan.startTime.split(':')[0], 10);
      const endHour = parseInt(plan.endTime.split(':')[0], 10);
      const jsDayIndex = new Date(plan.executionDate + 'T12:00:00').getUTCDay();
      const internalDayIndex = jsDayIndexToInternalIndex[jsDayIndex];

      return {
        dayIndex: internalDayIndex,
        text: `Estudo: ${task.name}`,
        startHour: startHour,
        endHour: endHour,
        color: colorMap[disc.color] || "gray"
      };
    }).filter(Boolean);

    const allEvents = [...classEvents, ...studyEvents];
    
    return res.status(200).json(allEvents);

  } catch (error) {
    console.error("Erro ao buscar eventos da agenda:", error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
