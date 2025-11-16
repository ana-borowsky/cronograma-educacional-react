import ScheduleService from "../Services/ScheduleService.js"

class ScheduleController {
  static async insertSchedule (req, res) {
    try {
      const {idUser} = req.body
      const result =  await new ScheduleService().insert(Number(idUser))
      res.status(200).json({ message: "Cronograma criado!", result })
    } catch (err) {
      console.error(err)
      res.status(500).json({error: "Erro ao inserir o cronograma"})
    }
  }

  static async getScheduleByUser (req, res) {
    try {
      const {idUser} = req.params
      const result = await new ScheduleService().getSchedule(Number(idUser))

      if(!result){
        return res.status(404).json({message: "Nenhum cronograma encontrado!"})
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter o cronograma!"})
    }
  }

  static async getWeekScheduleByUser (req, res) {
    try {
      const {idUser} = req.params
      const { weekStartDate } = req.query

      if (!weekStartDate) {
        return res.status(400).json({ error: "A data de início (weekStartDate) é obrigatória!" })
      }

      const result = await new ScheduleService().getWeekScheduleByUser(Number(idUser), weekStartDate)

      if(!result){
        return res.status(404).json({message: "Nenhum cronograma encontrado!"})
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter o cronograma!"})
    }
  }
}

export default ScheduleController
