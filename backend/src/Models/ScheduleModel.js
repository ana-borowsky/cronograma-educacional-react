class ScheduleModel {
  constructor(
    idUser,
    userName,
    disciplineName,
    taskName,
    type,
    status,
    project,
    executionDate,
    startTime,
    endTime,
    finalWeight
  ) {
    this.idUser = idUser
    this.userName = userName
    this.disciplineName = disciplineName
    this.taskName = taskName
    this.type = type
    this.status = status
    this.project = project
    this.executionDate = executionDate
    this.startTime = startTime
    this.endTime = endTime
    this.finalWeight = finalWeight
  }
}


export default ScheduleModel