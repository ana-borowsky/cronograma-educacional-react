import TasksModel from "../Models/TasksModel.js";
import TasksService from "../Services/TaskService.js";

class TasksController {
  static async insertTask(req, res) {
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

      const result = await new TasksService().insert(
        new TasksModel(
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
      res.status(200).json({ idTask: result.insertId, name })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir a tarefa" })
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

      const updateResult = await new TasksService().update(
        new TasksModel(
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

      if (!updateResult || (updateResult.affectedRows === 0)) {
        return res.status(404).json({ error: "Tarefa não encontrado!" })
      }

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
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a tarefa!" })
    }
  }

  static async updateStatus(req, res) {
    try {
      const { status } = req.body
      const { idTask } = req.params

      const statusPermitidos = ["Pendente", "Concluído"]

      if (!status || !statusPermitidos.includes(status)) {
        return res.status(422).json({ error: "Status inválido!" })
      }

      const updateResult = await new TasksService().updateStatus(
        new TasksModel(
          idTask,
          null,
          null,
          null,
          null,
          status,
          null,
          null
        )
      )

      if (!updateResult || (updateResult.affectedRows === 0)) {
        return res.status(404).json({ error: "Tarefa não encontrado!" })
      }


      res.status(200).json({ status })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a tarefa!" })
    }
  }

  static async getAll(req, res) {
    try {
      const { idDiscipline } = req.params
      const result = await new TasksService().getAll(
        Number(idDiscipline)
      )

      if (!result) {
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
      const { idDiscipline } = req.params
      const result = await new TasksService().getExam(
        Number(idDiscipline)
      )

      if (!result ) {
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
      const { idDiscipline } = req.params
      const result = await new TasksService().getWork(
        Number(idDiscipline)
      )
      if (!result) {
        return res.status(404).json({ error: "A disciplina não foi encontrada!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter os trabalhos" })
    }
  }

  static async getDayTask(req, res) {
    try {
      const { idDiscipline } = req.params
      const result = await new TasksService().getDayTask(
        Number(idDiscipline)
      )
      if (!result) {
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
      const { idTask } = req.params
      const deleteTask = await new TasksService().delete(
        Number(idTask)
      )

      if (deleteTask.affectedRows == 0) {
        return res.status(400).json({ erro: "Não foi possível encontrar a tarefa!" })
      }

      res.status(200).json({ ...req.body })
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: "Erro ao excluir a tarefas" })
    }
  }
}

export default TasksController
