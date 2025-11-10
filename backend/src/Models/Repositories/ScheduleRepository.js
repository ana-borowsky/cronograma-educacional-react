import { db } from "../../db.js";
import ScheduleModel from "../ScheduleModel.js"

class ScheduleRespository {
  constructor () { }

  async getScheduleByUser(idUser){
    const values = [idUser]
    const query = "SELECT \
                    user.idUser, \
                    user.name AS userName, \
                    discipline.name AS disciplineName, \
                    task.name AS taskName, \
                    task.type, \
                    task.status, \
                    discipline.project, \
                    planning.executionDate, \
                    planning.startTime, \
                    planning.endTime, \
                    planning.finalWeight \
                  FROM beezer.schedule \
                  JOIN beezer.planning AS planning ON beezer.schedule.idPlanning = planning.idPlanning \
                  JOIN beezer.task AS task ON planning.idTask = task.idTask \
                  JOIN beezer.discipline AS discipline ON task.idDiscipline = discipline.idDiscipline \
                  JOIN beezer.user AS user ON beezer.schedule.idUser = user.idUser WHERE user.idUser = ? AND task.status = 'Pendente'"

    const [result] = await db.query(query, values)
    let schedules = []

    result.forEach(schedule => {
      schedules.push(new ScheduleModel(
        schedule.idUser,
        schedule.userName,
        schedule.disciplineName,
        schedule.taskName,
        schedule.type,
        schedule.status,
        schedule.project,
        schedule.executionDate,
        schedule.startTime,
        schedule.endTime,
        schedule.finalWeight
      ))
    })
    return schedules
  }
}

export default ScheduleRespository