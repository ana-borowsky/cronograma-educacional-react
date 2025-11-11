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

} export default ScheduleService
