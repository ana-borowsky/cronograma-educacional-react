 import ScheduleRepository from "../Repositories/ScheduleRepository.js"

 class ScheduleController {
  static async insertSchedule (req, res) {
    try {
      const {idUser} = req.body
      const repo = new ScheduleRepository()
      const result = await repo.insertSchedule(idUser)
  
      res.status(200).json({ message: "Cronograma criado!", result })
      
    } catch (err) {
      console.error(err)
      res.status(500).json({error: "Erro ao inserir o cronograma"})
    }
  }
 

  static async getScheduleByUser (req, res) {
    try {
      const {idUser} = req.params
      const repo  = new ScheduleRepository()
      const result = await repo.getScheduleByUser(Number(idUser))

      if(!result || result.length == 0){
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