import ScheduleRespository from "../Repositories/ScheduleRepository.js"

class ScheduleService {
  constructor() {}

  async insert(idUser) {
    const repo = new ScheduleRespository()
    return await repo.insertSchedule(idUser)
  }

  async getSchedule(idUser) {
    const repo = new ScheduleRespository()
    return await repo.getScheduleByUser(Number(idUser))
  }

  async getWeekScheduleByUser(idUser, startDate) {
    const repo = new ScheduleRespository()
    return await repo.getWeekScheduleByUser(Number(idUser), startDate)
  }

} export default ScheduleService
