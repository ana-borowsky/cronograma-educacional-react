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

function formatDateArray(date) {
  const currentDate = new Date(date)
  const day = currentDate.getDate().toString()
  const month = currentDate.toLocaleString('pt-BR', { month: 'short' })
  const year = currentDate.getFullYear().toString()

  return [day, month, year]
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
        date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric'})

      const range = `${formatDate(firstDay)} - ${formatDate(lastDay)}`

      const daysOfWeek = {
        0: 'Domingo',
        1: 'Segunda',
        2: 'Terca',
        3: 'Quarta',
        4: 'Quinta',
        5: 'Sexta',
        6: 'Sabado'
      }
      
      const dayName = daysOfWeek[dateNow.getDay()]

      if(!weeks[range]) {
          weeks[range] = {
            startDate: formatDateArray(firstDay),
            endDate: formatDateArray(lastDay),
            dayWeek: {}
          }
        }

      if (!weeks[range].dayWeek[dayName]) {
        weeks[range].dayWeek[dayName] = []
      }

      weeks[range].dayWeek[dayName].push(schedule)
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

  async getScheduleByUser(idUser) {
  const values = [idUser]
  const query = "SELECT \
                    user.idUser, \
                    planning.startTime AS startHour, \
                    planning.endTime AS endHour, \
                    task.name AS text, \
                    discipline.color, \
                    planning.executionDate \
                FROM beezer.schedule \
                JOIN beezer.planning AS planning ON beezer.schedule.idPlanning = planning.idPlanning \
                JOIN beezer.task AS task ON planning.idTask = task.idTask \
                JOIN beezer.discipline AS discipline ON task.idDiscipline = discipline.idDiscipline \
                JOIN beezer.user AS user ON beezer.schedule.idUser = user.idUser \
                WHERE user.idUser = ? AND task.status = 'Pendente' \
                ORDER BY planning.executionDate;"

  const [result] = await db.query(query, values)

  let schedules = [] 
  
  result.forEach(schedule => {
    const dateFormat = schedule.executionDate.toISOString().split("T")[0]
    const [year, month, day] = dateFormat.split("-")

    const dayIndex = Number(day)
    const startHourFormat =  Number(schedule.startHour.split(":")[0])
    const endHourFormat =  Number(schedule.endHour.split(":")[0])

    schedules.push(new ScheduleModel(
      schedule.idUser,
      dayIndex,
      startHourFormat,
      endHourFormat,
      schedule.text,
      schedule.color,
      schedule.executionDate
    ))
  })

  schedules = schedules.map(newSchedule => {
    delete newSchedule.idUser
    delete newSchedule.executionDate

    return newSchedule
  })

  return schedules
}

  async getWeekScheduleByUser(idUser){
    const values = [idUser]
    const query = "SELECT \
                    user.idUser, \
                    planning.startTime AS startHour, \
                    planning.endTime AS endHour, \
                    task.name AS text, \
                    discipline.color, \
                    planning.executionDate \
                FROM beezer.schedule \
                JOIN beezer.planning AS planning ON beezer.schedule.idPlanning = planning.idPlanning \
                JOIN beezer.task AS task ON planning.idTask = task.idTask \
                JOIN beezer.discipline AS discipline ON task.idDiscipline = discipline.idDiscipline \
                JOIN beezer.user AS user ON beezer.schedule.idUser = user.idUser \
                WHERE user.idUser = ? AND task.status = 'Pendente' \
                ORDER BY planning.executionDate;"
                      
    const [result] = await db.query(query, values)
    let weekSchedules = []
    
    result.forEach(schedule => {
    
      const dateFormat = schedule.executionDate.toISOString().split("T")[0]
      const [year, month, day] = dateFormat.split("-")

      const dayIndex = Number(day)
      const startHourFormat =  Number(schedule.startHour.split(":")[0])
      const endHourFormat =  Number(schedule.endHour.split(":")[0])
      
      weekSchedules.push(new ScheduleModel(
        schedule.idUser,
        dayIndex,
        startHourFormat,
        endHourFormat,
        schedule.text,
        schedule.color,
        schedule.executionDate
      ))
    })

    weekSchedules = weekSchedules.map( newWeekSchedule =>{
      delete newWeekSchedule.idUser
      delete newWeekSchedule.executionDate

      return newWeekSchedule
    })

  return weekSchedules
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