import db from "../db.js"
import PlanningModel from "../Models/PlanningModel.js"

class PlanningRepository {
  constructor() { }

  async insert(planningModel) {
    const values = [
      planningModel.executionDate,
      planningModel.startTime,
      planningModel.endTime,
      planningModel.finalWeight,
      planningModel.idTask
    ]

    const query = "INSERT INTO planning(executionDate, startTime, endTime, finalWeight, idTask) VALUES (?,?,?,?,?)"


    const [result] = await db.query(query, values)

    return result
  }

  async update(planningModel) {
    const values = [
      planningModel.executionDate,
      planningModel.startTime,
      planningModel.endTime,
      planningModel.finalWeight,
      planningModel.idPlanning
    ]

    const query = "UPDATE planning SET executionDate = ?, startTime = ?, endTime = ?, finalWeight = ? WHERE idPlanning = ?"
    const result = await db.query(query, values)

    return result
  }

  async getAll(idTask) {
    const values = [idTask]
    const query = "SELECT * FROM planning WHERE idTask = ?"
    const [result] = await db.query(query, values)
    let plannings = []

    result.forEach(planning => {
      plannings.push(new PlanningModel(
        planning.idPlanning,
        planning.executionDate,
        planning.startTime,
        planning.endTime,
        planning.finalWeight,
        planning.idTask
      ))
    })
    return plannings
  }

  async getDayPlanning(idTask) {
    const values = [idTask]
    const query = "SELECT * FROM planning WHERE idTask = ? AND executionDate = CURDATE()"
    const [result] = await db.query(query, values)
    let plannings = []

    result.forEach(planning => {
      plannings.push(new PlanningModel(
        planning.idPlanning,
        planning.executionDate,
        planning.startTime,
        planning.endTime,
        planning.finalWeight,
        planning.idTask
      ))
    })

    return plannings
  }

  async getDayPlanningByUser(idUser){
    const values = [idUser]
    const query = "SELECT planning.idPlanning, \
                          planning.executionDate, \
                          planning.idTask, \
                          task.name AS fullDescription, \
                          discipline.color AS borderColor, \
                          task.status AS defaultChecked \
                  FROM beezer.planning AS planning \
                  JOIN beezer.task AS task ON planning.idTask = task.idTask \
                  JOIN beezer.discipline ON discipline.idDiscipline = task.idDiscipline \
                  WHERE discipline.idUser = ? AND task.status = 'Pendente' AND planning.executionDate = CURDATE();"
    
    const [result] = await db.query(query, values)
    let plannings = []

    result.forEach(planning => {
      if(planning.defaultChecked === "Pendente") {
        planning.defaultChecked = false
      } else if(planning.defaultChecked === "Concluído"){
        planning.defaultChecked = true
      }
      
      plannings.push(new PlanningModel(
        planning.idPlanning,
        planning.executionDate,
        planning.startTime,
        planning.endTime,
        planning.finalWeight,
        planning.idTask,
        planning.fullDescription,
        planning.borderColor,
        planning.defaultChecked
      ))
    })

    plannings = plannings.map(newPlanning => {
      delete newPlanning.executionDate

      return newPlanning
    })

    return plannings
  }

  async delete(idPlanning) {
    const values = [idPlanning]
    const query = "DELETE FROM planning WHERE idPlanning = ?"
    const [result] = await db.query(query, values)

    return result
  }


}

export default PlanningRepository