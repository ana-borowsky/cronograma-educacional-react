import PlanningRepository from "../Repositories/PlanningRepository"

class PlanningService {
  constructor() {}

  async insert(planningModel) {
    const repo = new PlanningRepository()
    return await repo.insert(planningModel)
  }

  async update(planningModel) {
    const repo = new PlanningRepository()
    return await repo.update(planningModel)
  }

  async getAll(idTask) {
    const repo = new PlanningRepository()
    return await repo.getAll(Number(idTask))
  }

  async getDayPlanning(idPlanning) {
    const repo = new PlanningRepository()
    return await repo.getDayPlanning(idPlanning)
  }

  async delete(idPlanning) {
    const repo = new PlanningRepository()
    return await repo.delete(idPlanning)
  }

} export default PlanningService