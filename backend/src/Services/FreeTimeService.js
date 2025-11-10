import FreeTimeRepository from "../Repositories/FreeTimeRepository.js"

class FreeTimeService {
  constructor() {}

  async insert(freeTimeModel) {
    const repo = new FreeTimeRepository()
    return await repo.insert(freeTimeModel)
  }

  async delete(idTime) {
    const repo = new FreeTimeRepository()
    return await repo.delete(idTime)
  }

  async update(freeTimeModel) {
    const repo = new FreeTimeRepository()
    return await repo.update(freeTimeModel)
  }

  async getAll(idTime) {
    const repo = new FreeTimeRepository()
    return await repo.getAll(idTime)
  }
}

export default FreeTimeService
