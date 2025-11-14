import { db } from "../db.js";
import TasksModel from "../Models/TasksModel.js";

class TasksRepository {
  constructor() { }

  async insert(tasksModel) {
      const values = [
        tasksModel.name,
        tasksModel.type,
        tasksModel.estimatedHours,
        tasksModel.dueDate,
        tasksModel.status,
        tasksModel.weight,
        tasksModel.idDiscipline
      ]
  
      const query = "INSERT INTO task(name, type, estimatedHours, dueDate, status, weight, idDiscipline) VALUES (?,?,?,?,?,?,?)"
      const [result] = await db.query(query, values)
  
      return result
    }
  
    async update(tasksModel) {
      const values = [
        tasksModel.name,
        tasksModel.type,
        tasksModel.estimatedHours,
        tasksModel.dueDate,
        tasksModel.status,
        tasksModel.weight,
        tasksModel.idTask
      ]
  
      const query = "UPDATE task SET name = ?, type = ?, estimatedHours = ?, dueDate = ?, status = ?, weight = ? WHERE idTask = ?"
      const result = await db.query(query, values)
  
      return result
    }

    async updateStatus(taskModel){
      const values = [
        taskModel.status,
        taskModel.idTask
      ]

      const query = "UPDATE task SET status = ? WHERE idTask = ?"
      const result = await db.query(query, values)

      return result
    }
    
    async getAll(idDiscipline) {
      const values = [idDiscipline]
      const query = "SELECT * FROM task WHERE idDiscipline = ? AND status = 'Pendente'"
      const [result] = await db.query(query, values)
      let tasks = []
      
      result.forEach(task => {
        tasks.push(new TasksModel(
          task.idTask,
          task.name,
          task.type,
          task.estimatedHours,
          task.dueDate,
          task.status,
          task.weight,
          task.idDiscipline
        ))
      })
      return tasks
    }

    async getExam(idDiscipline) {
      const values = [idDiscipline]
      const query = "SELECT * FROM task WHERE idDiscipline = ? AND type = 'Prova' AND status = 'Pendente'"
      const [result] = await db.query(query, values)
      let tasks = []
      
      result.forEach(task => {
        tasks.push(new TasksModel(
          task.idTask,
          task.name,
          task.type,
          task.estimatedHours,
          task.dueDate,
          task.status,
          task.weight,
          task.idDiscipline
        ))
      })
      return tasks
    }

    async getWork(idDiscipline) {
      const values = [idDiscipline]
      const query = "SELECT * FROM task WHERE idDiscipline = ? AND type = 'Trabalho' AND status = 'Pendente'"
      const [result] = await db.query(query, values)
      let tasks = []
      
      result.forEach(task => {
        tasks.push(new TasksModel(
          task.idTask,
          task.name,
          task.type,
          task.estimatedHours,
          task.dueDate,
          task.status,
          task.weight,
          task.idDiscipline
        ))
      })
      return tasks
    }


    async getDayTask(idDiscipline) {
      const values = [idDiscipline]
      const query = "SELECT * FROM beezer.task WHERE idDiscipline = ? AND dueDate = CURDATE() AND status = 'Pendente'"
      const [result] = await db.query(query, values)
      let tasks = []
      
      result.forEach(task => {
        tasks.push(new TasksModel(
          task.idTask,
          task.name,
          task.type,
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