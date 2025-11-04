import FreeTimeModel from "../Models/FreeTimeModel.js"
import FreeTimeRepository from "../Models/Repositories/FreeTimeRepository.js"

class FreeTimeController {

  static async insertFreeTime(req, res) {
    try {
      const {
        idTime,
        idUser,
        weekDay,
        startTime,
        endTime
      } = req.body
      const repo = new FreeTimeRepository()
      const result = await repo.insert(new FreeTimeModel(
        idTime,
        idUser,
        weekDay,
        startTime,
        endTime
      ))

  res.status(200).json({ id: result.insertId, idTime: result.insertId, weekDay })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir o tempo livre" })
    }
  }


  static async delete(req, res) {
    try {
      const { idTime } = req.params
      const repo = new FreeTimeRepository()
      const deleteResult = await repo.delete(idTime)
      if (deleteResult.affectedRows === 0) {
        return res.status(404).json({ error: "Tempo livre não encontrada" })
      }
      return res.status(200).json({ ...req.body })
    } catch (err) {
      console.log(err)
      res.status(400).json({ err: "Erro ao deletar o tempo livre." })
    }
  }

  static async updateFreeTime(req, res) {
    try {
      if (req.body === null) {
        return res.status(204).json({ message: "O body está vazio" })
      }
      const {
        idTime,
        idUser,
        weekDay,
        startTime,
        endTime
      } = req.body
      const repo = new FreeTimeRepository()

      const updateResult = await repo.update(
        new FreeTimeModel(
          idTime,
          idUser,
          weekDay,
          startTime,
          endTime
        )
      )
      
      if (!updateResult || (updateResult.affectedRows === 0)) {
        return res.status(404).json({ error: "Tempo livre não encontrado!" })
      }

      return res.status(200).json({
        idTime,
        idUser,
        weekDay,
        startTime,
        endTime
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a tempo livre" })
    }
  }

  static async getAll(req, res) {
    try {
      const { idUser } = req.params
      const repo = new FreeTimeRepository()
      const result = await repo.getAll(Number(idUser))

      if (!result || (result.length === 0)) {
        return res.status(404).json({ error: "Usuário não encontrado!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter tempos livres" })
    }
  }
}

export default FreeTimeController