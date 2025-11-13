class ScheduleModel {
  constructor(
    idUser,
    taskName,
    status,
    color,
    executionDate,
    startTime,
    endTime
  ) {
    this.idUser = idUser
    this.taskName = taskName
    this.status = status
    this.color = color
    this.executionDate = executionDate
    this.startTime = startTime
    this.endTime = endTime
  }
}

export default ScheduleModel