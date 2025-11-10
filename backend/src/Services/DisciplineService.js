import DisciplineRepository from "../Models/Repositories/DisciplineRepository.js"

class DisciplineService {
  constructor() { }

  async insert(disciplineModel) {
    const repo = new DisciplineRepository()
    return await repo.insert(disciplineModel)
  }

  async delete(idUser) {
    const repo = new DisciplineRepository()
    return await repo.delete(idUser)
  }

  async update(disciplineModel) {
    const repo = new DisciplineRepository()
    return await repo.update(disciplineModel)
  }

  async getAll(idUser) {
    const repo = new DisciplineRepository()
    return await repo.getAll(idUser)
  }
}

export default DisciplineService
