import { db } from "../../db.js";
import TasksModel from "../TasksModel.js";

class TasksRepository {
  constructor() { }

  async insert(tasksModel) {
      const values = [
        tasksModel.name,
        tasksModel.estimatedHours,
        tasksModel.dueDate,
        tasksModel.status,
        tasksModel.weight,
        tasksModel.idDiscipline
      ]
  
      const query = "INSERT INTO task(name, estimatedHours, dueDate, status, weight, idDiscipline) VALUES (?,?,?,?,?,?)"
      const [result] = await db.query(query, values)
  
      return result
    }
  
    async update(tasksModel) {
      const values = [
        tasksModel.name,
        tasksModel.estimatedHours,
        tasksModel.dueDate,
        tasksModel.status,
        tasksModel.weight,
        tasksModel.idTask
      ]
  
      const query = "UPDATE task SET name = ?, estimatedHours = ?, dueDate = ?, status = ?, weight = ? WHERE idTask = ?"
      const result = await db.query(query, values)
  
      return result
    }

    
    async getAll(idDiscipline) {
      const values = [idDiscipline]
      const query = "SELECT * FROM task WHERE idDiscipline = ?"
      const [result] = await db.query(query, values)
      let tasks = []
      
      result.forEach(task => {
        console.log(task)
        tasks.push(new TasksModel(
          task.idTask,
          task.name,
          task.estimatedHours,
          task.dueDate,
          task.status,
          task.weight,
          task.idDiscipline
        ))
      })
      return tasks
    }
    
    async delete(idTask) {
      const values = [idTask]
      const query = "DELETE FROM task WHERE idTask = ?"
      const [result] = await db.query(query, values)
      
      return result
    }
  }
  
export default TasksRepository