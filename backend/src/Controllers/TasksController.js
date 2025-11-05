import TasksModel from "../Models/TasksModel.js";
import TasksRepository from "../Models/Repositories/TasksRepository.js"

class TasksController {
  static async insertTask (req, res) {
    try {
      const {
        idTask,
        name, 
        type,
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
        type,
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
        type,
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
        type,
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
        type,
        estimatedHours, 
        dueDate, 
        status, 
        weight,
        idDiscipline
    })
      if (!updateResult || (updateResult.affectedRows === 0)) {
        return res.status(404).json({ error: "Usuário não encontrado!" })
      }
      return res.status(200).json()
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

  static async getExam(req, res) {
    try {
      const {idDiscipline} = req.params
      const repo = new TasksRepository()
      const result = await repo.getExam(Number(idDiscipline))

      if(!result || result.length == 0){
        return res.status(404).json({ error: "A disciplina não foi encontrada!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter as provas" })
    }
  }

  static async getWork(req, res) {
    try {
      const {idDiscipline} = req.params
      const repo = new TasksRepository()
      const result = await repo.getWork(Number(idDiscipline))

      if(!result || result.length == 0){
        return res.status(404).json({ error: "A disciplina não foi encontrada!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter os trabalhos" })
    }
  }
  

  static async delete(req, res) {
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
