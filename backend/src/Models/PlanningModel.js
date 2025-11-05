class PlanningModel {
    constructor(
        idPlanning,
        executionDate,
        startTime,
        endTime,
        finalWeight,
        idTask
    ) {
        this.idPlanning = idPlanning,
        this.executionDate = executionDate,
        this.startTime = startTime,
        this.endTime = endTime,
        this.finalWeight = finalWeight,
        this.idTask = idTask
    }
}

export default PlanningModel