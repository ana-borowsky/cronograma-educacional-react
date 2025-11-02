import DisciplineModel from "../Models/DisciplineModel.js"

class DisciplineController {
  static async insertDiscipline(req, res) {
    try {
      const { name, color, project, classroom, day, startTime, endTime, weight, idUser } = req.body

      const discipline = new DisciplineModel(name, color, project, classroom, day, startTime, endTime, weight, idUser)
      const result = await discipline.insert()

      res.status(200).json({ id: result.insertId, name })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir a disciplina" })
    }
  }

  static async delete(req, res) {
    try {
      const { idDiscipline } = req.body
      const discipline = new DisciplineModel({ ...req.body })
      const deleteResult = await discipline.delete(idDiscipline)
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
      const { idDiscipline, name, color, project, classroom, day, startTime, endTime, weight } = req.body

      const discipline = new DisciplineModel(name, color, project, classroom, day, startTime, endTime, weight)
      const updateResult = await discipline.update(idDiscipline)

      res.status(200).json({ idDiscipline, name, color, project, classroom, day, startTime, endTime, weight })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a disciplina" })
    }
  }

  static async getAll(req, res) {
    try {
      const { idUser } = req.body
      const discipline = new DisciplineModel({ ...req.body })
      const result = await discipline.getAll(idUser)

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