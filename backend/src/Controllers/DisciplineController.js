import DisciplineModel from "../Models/DisciplineModel.js"
import DisciplineService from "../Services/DisciplineService.js"

class DisciplineController {

  static async insertDiscipline(req, res) {
    try {
      const {
        idDiscipline,
        idUser,
        name,
        color,
        project,
        classroom,
        day,
        startTime,
        endTime,
        weight
      } = req.body

      const result = await new DisciplineService().insert(
        new DisciplineModel(
          idDiscipline,
          idUser,
          name,
          color,
          project,
          classroom,
          day,
          startTime,
          endTime,
          weight
        )
      )

      res.status(200).json({ id: result.insertId, name })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir a disciplina" })
    }
  }

  static async delete(req, res) {
    try {
      const { idDiscipline } = req.params
      const deleteResult = await new DisciplineService().delete(
        Number(idDiscipline)
      )
      if (deleteResult.affectedRows === 0) {
        return res.status(404).json({ error: "Disciplina não encontrada" })
      }

      return res.status(200).json({ ...req.body })
    } catch (err) {
      console.log(err)
      res.status(400).json({ err: "Erro ao deletar o disciplina." })
    }
  }

  static async updateDiscipline(req, res) {
    try {
      const { idUser, idDiscipline, name, color, project, classroom, day, startTime, endTime, weight } = req.body
      const updateResult = await new DisciplineService().update(
        new DisciplineModel(
          idDiscipline,
          idUser,
          name,
          color,
          project,
          classroom,
          day,
          startTime,
          endTime,
          weight
        )
      )

      if (!updateResult || (updateResult.affectedRows === 0)) {
        return res.status(404).json({ error: "Usuário não encontrado!" })
      }

      res.status(200).json({
        idDiscipline,
        idUser,
        name,
        color,
        project,
        classroom,
        day,
        startTime,
        endTime,
        weight
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a disciplina" })
    }
  }

  static async getAll(req, res) {
    try {
      const { idUser } = req.params
      const result = await new DisciplineService().getAll(
        Number(idUser)
      )

      if (!result || (result.length === 0)) {
        return res.status(404).json({ error: "Usuário não encontrado!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter disciplinas" })
    }
  }
}

export default DisciplineController