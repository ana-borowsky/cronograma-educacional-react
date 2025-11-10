import { db } from "../../db.js";
import ScheduleModel from "../ScheduleModel.js"

class ScheduleRespository {
  constructor () { }

  async insertSchedule(idUser) {
    const values = [idUser]
    const query =  "INSERT INTO schedule (idUser, idPlanning)\
                    SELECT DISTINCT d.idUser, p.idPlanning\
                    FROM planning p\
                    INNER JOIN task t ON p.idTask = t.idTask\
                    INNER JOIN discipline d ON t.idDiscipline = d.idDiscipline\
                    WHERE d.idUser = ? "
    
    const [result] = await db.query(query,values)


    return result
  }

  async getScheduleByUser(idUser){
    const values = [idUser]
    const query = "SELECT \
                    user.idUser, \
                    user.name AS userName, \
                    task.name AS taskName, \
                    task.type, \
                    task.status, \
                    discipline.color,\
                    planning.executionDate, \
                    planning.startTime, \
                    planning.endTime \
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