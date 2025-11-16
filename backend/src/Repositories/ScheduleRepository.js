import { db } from "../db.js";
import ScheduleModel from "../Models/ScheduleModel.js";

function groupByWeekDay(dateString) {
  const [year, month, day] = dateString.split("-");

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    12, 0, 0
  );

  let dayWeek = date.getDay();

  if (dayWeek == 0) {
    dayWeek = 7;
  }

  const firstDate = new Date(date);
  firstDate.setDate(date.getDate() - dayWeek);

  const lastDate = new Date(firstDate);
  lastDate.setDate(lastDate.getDate() + 7);

  return { firstDate, lastDate };
}

class ScheduleRespository {
  constructor() {}

  async insertSchedule(idUser) {
    const values = [idUser];
    const query = "INSERT INTO schedule (idUser, idPlanning)\
                            SELECT DISTINCT d.idUser, p.idPlanning\
                            FROM planning p\
                            INNER JOIN task t ON p.idTask = t.idTask\
                            INNER JOIN discipline d ON t.idDiscipline = d.idDiscipline\
                            WHERE d.idUser = ? ";

    const [result] = await db.query(query, values);

    return result;
  }

  async getScheduleByUser(idUser) {
    const values = [idUser];
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
                  ORDER BY planning.executionDate;";

    const [result] = await db.query(query, values);

    let schedules = [];

    result.forEach(schedule => {
      const execDate = new Date(schedule.executionDate);
      const jsDayOfWeek = execDate.getDay();
      const dayIndex = jsDayOfWeek === 0 ? 6 : jsDayOfWeek - 1;

      const startHourFormat = Number(schedule.startHour.split(":")[0]);
      const endHourFormat = Number(schedule.endHour.split(":")[0]);

      schedules.push(new ScheduleModel(
        schedule.idUser,
        dayIndex,
        startHourFormat,
        endHourFormat,
        schedule.text,
        schedule.color,
        schedule.executionDate
      ));
    });

    schedules = schedules.map(newSchedule => {
      delete newSchedule.idUser;
      delete newSchedule.executionDate;
      return newSchedule;
    });

    return schedules;
  }

  async getWeekScheduleByUser(idUser, startDate) {
    const { firstDate, lastDate } = groupByWeekDay(startDate);

    const values = [idUser, firstDate, lastDate];

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
                  WHERE user.idUser = ? AND task.status = 'Pendente' AND planning.executionDate BETWEEN ? AND ?\
                  ORDER BY planning.executionDate;";

    const [result] = await db.query(query, values);
    let weekSchedules = [];

    result.forEach(schedule => {
      const execDate = new Date(schedule.executionDate);
      const jsDayOfWeek = execDate.getDay();
      const dayIndex = jsDayOfWeek === 0 ? 6 : jsDayOfWeek - 1;

      const startHourFormat = Number(schedule.startHour.split(":")[0]);
      const endHourFormat = Number(schedule.endHour.split(":")[0]);

      weekSchedules.push(new ScheduleModel(
        schedule.idUser,
        dayIndex,
        startHourFormat,
        endHourFormat,
        schedule.text,
        schedule.color,
        schedule.executionDate
      ));
    });

    weekSchedules = weekSchedules.map(newWeekSchedule => {
      delete newWeekSchedule.idUser;
      delete newWeekSchedule.executionDate;
      return newWeekSchedule;
    });

    return weekSchedules;
  }
}

export default ScheduleRespository;
