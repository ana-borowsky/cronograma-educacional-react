import { db } from "../db.js";
import ScheduleModel from "../Models/ScheduleModel.js"

function getWeekMonth(date){
  const currentDate = new Date(date)
  const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const dayMonth = currentDate.getDate()
  const firstDayWeek = firstDate.getDay()
  const getWeek = Math.ceil((dayMonth + firstDayWeek) / 7)

  return getWeek
}

function groupByWeekDay(schedules) {
  const weeks = {}

    schedules.forEach(schedule => {
      const dateNow = new Date(schedule.executionDate)
      const week = getWeekMonth(dateNow)

      const firstDay = new Date(dateNow)
      let dayOfWeek = dateNow.getDay()

      if (dayOfWeek === 0) {
        dayOfWeek = 7 
      }

      firstDay.setDate(dateNow.getDate() - (dayOfWeek - 1))

      const lastDay = new Date(firstDay)
      lastDay.setDate(firstDay.getDate() + 6)

      const formatDate = (date) => 
        date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })


      const range = `${formatDate(firstDay)} - ${formatDate(lastDay)}`

      if(!weeks[range]) {
      weeks[range] = {}
    }

    const daysOfWeek = {
      0: 'Domingo',
      1: 'Segunda',
      2: 'Terça',
      3: 'Quarta',
      4: 'Quinta',
      5: 'Sexta',
      6: 'Sábado'
    }

    const dayName = daysOfWeek[dateNow.getDay()]

    if(!weeks[range][dayName]){
      weeks[range][dayName] = []
    }

    weeks[range][dayName].push(schedule)
  })
    return weeks
}

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
                    task.name AS taskName, \
                    task.status, \
                    discipline.color,\
                    planning.executionDate, \
                    planning.startTime, \
                    planning.endTime \
                  FROM beezer.schedule \
                  JOIN beezer.planning AS planning ON beezer.schedule.idPlanning = planning.idPlanning \
                  JOIN beezer.task AS task ON planning.idTask = task.idTask \
                  JOIN beezer.discipline AS discipline ON task.idDiscipline = discipline.idDiscipline \
                  JOIN beezer.user AS user ON beezer.schedule.idUser = user.idUser WHERE user.idUser = ? AND task.status = 'Pendente'\
                  ORDER BY planning.executionDate;"

    const [result] = await db.query(query, values)
    let schedules = []

    result.forEach(schedule => {
      schedules.push(new ScheduleModel(
        schedule.idUser,
        schedule.taskName,
        schedule.status,
        schedule.color,
        schedule.executionDate,
        schedule.startTime,
        schedule.endTime
      ))
    })
    return groupByWeekDay(schedules)
  }

  async getWeekScheduleByUser(idUser){
    const values = [idUser]
    const query ="SELECT \
                    user.idUser,\
                    task.name AS taskName, \
                    task.status,\
                    discipline.color, \
                    planning.startTime, \
                    planning.endTime, \
                    planning.executionDate \
                  FROM beezer.schedule \
                  JOIN beezer.planning AS planning ON beezer.schedule.idPlanning = planning.idPlanning\
                  JOIN beezer.task AS task ON planning.idTask = task.idTask JOIN beezer.discipline AS discipline ON task.idDiscipline = discipline.idDiscipline \
                  JOIN beezer.user AS user  ON beezer.schedule.idUser = user.idUser \
                  WHERE planning.executionDate BETWEEN DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) DAY) AND DATE_ADD(CURDATE(), \
                  INTERVAL(6- WEEKDAY(CURDATE())) DAY) AND user.idUser = ? AND task.status = 'Pendente'\
                  ORDER BY WEEKDAY(planning.executionDate), planning.executionDate;"
                      
    const [result] = await db.query(query, values)
    let WeekSchedules = []
    
    result.forEach(schedule => {
      WeekSchedules.push(new ScheduleModel(
        schedule.idUser,
        schedule.taskName,
        schedule.status,
        schedule.color,
        schedule.executionDate,
        schedule.startTime,
        schedule.endTime,
      ))
    })

  return groupByWeekDay(WeekSchedules)
  }

  async getMonthScheduleByUser(idUser){
    const values = [idUser]
    const query = "SELECT user.idUser,\
                    task.name AS taskName,\
                    task.status,\
                    discipline.color,\
                    planning.startTime,\
                    planning.endTime,\
                    planning.executionDate\
                  FROM beezer.schedule\
                  JOIN beezer.planning AS planning ON beezer.schedule.idPlanning = planning.idPlanning\
                  JOIN beezer.task AS task ON planning.idTask = task.idTask\
                  JOIN beezer.discipline AS discipline ON task.idDiscipline = discipline.idDiscipline\
                  JOIN beezer.user AS user ON beezer.schedule.idUser = user.idUser\
                  WHERE planning.executionDate BETWEEN DATE_FORMAT(CURDATE(), '%Y-%m-01')  AND LAST_DAY(CURDATE())  AND user.idUser = ? AND task.status = 'Pendente'\
                  ORDER BY planning.executionDate;"

    const [result] = await db.query(query, values)
    let MonthSchedules = []
    
    result.forEach(schedule => {
      MonthSchedules.push(new ScheduleModel(
        schedule.idUser,
        schedule.taskName,
        schedule.status,
        schedule.color,
        schedule.executionDate,
        schedule.startTime,
        schedule.endTime,
      ))
    })

    return groupByWeekDay(MonthSchedules)
  }
}

export default ScheduleRespository