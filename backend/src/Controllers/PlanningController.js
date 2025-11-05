import PlanningModel from "../Models/PlanningModel.js";
import PlanningRepository from "../Models/Repositories/PlanningRepository.js"

class PlanningController {
  static async insertPlannning (req, res) {
    try {
      const {
        idPlanning, 
        executionDate, 
        startTime,
        endTime,
        finalWeight,
        idTask
      } = req.body

      const repo = new PlanningRepository()
      const result = await repo.insert(new PlanningModel(
        idPlanning,
        executionDate, 
        startTime,
        endTime,
        finalWeight,
        idTask
      )
    )

    res.status(200).json({idPlanning: result.insertId, idTask})
    } catch (err) {
      console.error(err)
      res.status(500).json({error: "Erro ao criar o planejamento!!"})
    }
  }

  static async updatePlanning(req, res) {
    try {
      const {
        idPlanning, 
        executionDate, 
        startTime,
        endTime,
        finalWeight,
        idTask
      } = req.body

      const repo = new PlanningRepository()

      const updateResult =  await repo.update(new PlanningModel(
        idPlanning, 
        executionDate, 
        startTime,
        endTime,
        finalWeight,
        idTask
      )
    )

    if(!updateResult || (updateResult.affectedRows === 0)) {
      return res.status(404).json({ error: "Planejamento não encontrado!"})
    }

    res.status(200).json({
        idPlanning, 
        executionDate, 
        startTime,
        endTime,
        finalWeight,
        idTask
    })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar o planejamento!"})
    }
  }

  static async getAll(req, res) {
    try {
      const {idTask} = req.params
      const repo = new PlanningRepository()
      const result = await repo.getAll(Number(idTask))

      if(!result || result.length == 0){
        return res.status(400).json({ error: "A tarefa não foi encontrada!"})
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter os planejamentos!"})
      
    }
  }

  static async getDayPlanning(req, res) {
    try {
      const {idTask} = req.params
      const repo = new PlanningRepository()
      const result = await repo.getDayPlanning(Number(idTask))

      if(!result || result.length == 0){
        return res.status(400).json({ error: "A tarefa não foi encontrada!"})
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter os planejamentos!"})
      
    }
  }

  static async delete(req, res) {
    try {
      const {idPlanning} = req.params
      const repo = new PlanningRepository()
      const deletePlanning = await repo.delete(idPlanning)

      if(deletePlanning.affectedRows == 0) {
        return res.status(400).json({erro: "Não foi possível o planejamento!"})
      }

      res.status(200).json({...req.body})
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: "Erro ao excluir o planejamento!" })
    }
  }
}

export default PlanningController