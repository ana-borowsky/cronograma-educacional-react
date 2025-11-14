import TasksRepository from "../Repositories/TasksRepository.js"

class TasksService {
  constructor() { }

  async insert(taskModel) {
    const repo = new TasksRepository()
    return await repo.insert(taskModel)
  }

  async delete(idTask) {
    const repo = new TasksRepository()
    return await repo.delete(idTask)
  }

  async update(taskModel) {
    const repo = new TasksRepository()
    return await repo.update(taskModel)
  }

  async updateStatus(taskModel) {
    const repo = new TasksRepository()
    return await repo.updateStatus(taskModel)
  }
  
  async getAll(idDiscipline) {
    const repo = new TasksRepository()
    return await repo.getAll(idDiscipline)
  }

  async getExam(idDiscipline) {
    const repo = new TasksRepository()
    return await repo.getExam(idDiscipline)
  }

  async getWork(idDiscipline) {
    const repo = new TasksRepository()
    return await repo.getWork(idDiscipline)
  }

  async getDayTask(idDiscipline) {
    const repo = new TasksRepository()
    return await repo.getDayTask(idDiscipline)
  }
  
} export default TasksService