 import ScheduleModel from "../Models/ScheduleModel.js";
 import ScheduleRepository from "../Models/Repositories/ScheduleRepository.js"

 class ScheduleController {
  static async getScheduleByUser (req, res) {
    try {
      const {idUser} = req.params
      const repo  = new ScheduleRepository()
      const result = await repo.getScheduleByUser(Number(idUser))

      if(!result || result.length == 0){
        return res.status(200).json({message: "Nenhum cronograma encontrado!"})
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter o cronograma!"})
    }
  }
 }

 export default ScheduleController