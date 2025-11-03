import TasksModel from "../Models/TasksModel.js";
import TasksRepository from "../Models/Repositories/TasksRepository.js"
// import { findPlanningByDate } from "../Models/PlanningModel.js";
// import { findAllTasks } from "../Models/TasksModel.js";
// import { findAllDisciplines } from "../Models/DisciplineModel.js";
// const colorMap = [
//   "gray",
//   "yellow",
//   "blue",
//   "purple",
//   "green",
//   "red"
// ];

// export const getTasks = (_, res) => {
//   try {
//     const planningDate = "2025-10-14";
//     const plannedItems = findPlanningByDate(planningDate);
    
//     const allTasks = findAllTasks();
//     const allDisciplines = findAllDisciplines();

//     const formattedTasks = plannedItems.map(plan => {
//       const task = allTasks.find(t => t.idTask === plan.idTask);
//       if (!task) return null;
      
//       const discipline = allDisciplines.find(d => d.idDiscipline === task.idDiscipline);
      
//       return {
//         id: `plan-${plan.idPlanning}`,
//         fullDescription: `${plan.startTime.substring(0, 5)} - ${plan.endTime.substring(0, 5)} | ${discipline ? discipline.name : ''}: ${task ? task.name : 'Tarefa'}`,
//         borderColor: discipline ? colorMap[discipline.color] : "gray",
//         defaultChecked: task ? task.status === 'Done' : false
//       };
//     }).filter(Boolean);

//     console.log("Enviando tarefas formatadas para o frontend:", formattedTasks);

//     return res.status(200).json(formattedTasks);
    
//   } catch (error) {
//     console.error("Erro ao buscar tarefas:", error);
//     return res.status(500).json({ message: "Erro interno do servidor" });
//   }
// };

class TasksController {
  static async insertTask (req, res) {
    try {
      const {
        idTask,
        name, 
        estimatedHours, 
        dueDate, 
        status, 
        weight, 
        idDiscipline 
      } = req.body

      const repo = new TasksRepository()
      const result = await repo.insert(new TasksModel(
        idTask,
        name, 
        estimatedHours, 
        dueDate, 
        status, 
        weight, 
        idDiscipline
      )
    )
      res.status(200).json({idTask: result.insertId, name})
    } catch (err) {
      console.error(err)
      res.status(500).json({error: "Erro ao inserir a tarefa"})
    }
  }

  static async updateTask(req, res) {
    try {
      const {
        idTask,
        name, 
        estimatedHours, 
        dueDate, 
        status, 
        weight,
        idDiscipline
      } = req.body

      const repo = new TasksRepository()

      const updateResult = await repo.update(new TasksModel( 
        idTask,
        name, 
        estimatedHours, 
        dueDate, 
        status, 
        weight,
        idDiscipline
      )
    )
    
    res.status(200).json({
       idTask,
        name, 
        estimatedHours, 
        dueDate, 
        status, 
        weight,
        idDiscipline
    })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a tarefa" })
    }
  }


  static async getAll(req, res) {
    try {
      const {idDiscipline} = req.params
      const repo = new TasksRepository()
      const result = await repo.getAll(Number(idDiscipline))

      if(!result || result.length == 0){
        return res.status(404).json({ error: "A disciplina não foi encontrada!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter as tarefas" })
    }
  }
  

  static async deleteTask(req, res) {
    try {
      const {idTask} = req.params
      const repo = new TasksRepository()
      const deleteTask = await repo.delete(idTask)

      if(deleteTask.affectedRows == 0){
        return res.status(400).json({erro: "Não foi possível encontrar a tarefa!"})
      }

      res.status(200).json({...req.body})
    } catch (err) {
       console.log(err)
      res.status(400).json({ error: "Erro ao excluir a tarefas" })
    }
  }
}

export default TasksController
