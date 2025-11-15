import PlanningModel from "../Models/PlanningModel.js";
import PlanningService from "../Services/PlanningService.js";

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

      const result = await new PlanningService().insert(new PlanningModel(
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

      const updateResult = await new PlanningService().update(new PlanningModel(
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
      const result =  await new PlanningService().getAll(Number(idTask))      

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
      const result = await new PlanningService().getDayPlanning(Number(idTask))

      if(!result || result.length == 0){
        return res.status(400).json({ error: "A tarefa não foi encontrada!"})
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter os planejamentos!"})
      
    }
  }

  static async getDayPlanningByUser(req, res) {
    try {
      const {idUser} = req.params
      const result = await new PlanningService().getDayPlanningByUser(Number(idUser))

      if(!result || result.length == 0){
        return res.status(400).json({ error: "O planejamento não foi encontrada!"})
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
      const deletePlanning = await new PlanningService().delete(Number(idPlanning))
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