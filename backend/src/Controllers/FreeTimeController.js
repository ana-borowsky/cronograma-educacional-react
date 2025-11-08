import FreeTimeModel from "../Models/FreeTimeModel.js"
import FreeTimeService from "../Services/FreeTimeService.js"

class FreeTimeController {

  static async insertFreeTime(req, res) {
    try {
      const {
        idTime,
        idUser,
        weekDay,
        startTime,
        durationTime
      } = req.body
      
      const result = await new FreeTimeService().insert(
        new FreeTimeModel(
          idTime,
          idUser,
          weekDay,
          startTime,
          durationTime
        )
      )
      res.status(200).json({ id: result.insertId, idTime: result.insertId, weekDay })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir o tempo livre" })
    }
  }


  static async delete(req, res) {
    try {
      const { idTime } = req.params
      const deleteResult = new FreeTimeService().delete(Number(idTime))
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
        durationTime
      } = req.body

      const updateResult = await new FreeTimeService().update(
        new FreeTimeModel(
          idTime, 
          idUser,
          weekDay,
          startTime,
          durationTime
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
        durationTime
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a tempo livre" })
    }
  }

  static async getAll(req, res) {
    try {
      const { idUser } = req.params
      const result = await new FreeTimeService().getAll(Number(idUser))

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