class PlanningModel {
    constructor(
        idPlanning,
        executionDate,
        startTime,
        endTime,
        finalWeight,
        idTask,
        fullDescription,
        borderColor,
        defaultChecked,
    ) {
        this.idPlanning = idPlanning,
        this.executionDate = executionDate,
        this.startTime = startTime,
        this.endTime = endTime,
        this.finalWeight = finalWeight,
        this.idTask = idTask,
        this.fullDescription = fullDescription,
        this.borderColor = borderColor,
        this.defaultChecked = defaultChecked
    }
}

export default PlanningModel