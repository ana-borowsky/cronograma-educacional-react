class ScheduleModel {
  constructor(
    idUser,
    dayIndex,
    startHour,
    endHour,
    text,
    color,
    executionDate
  ) {
    this.idUser = idUser
    this.dayIndex = dayIndex,
    this.startHour = startHour,
    this.endHour = endHour,
    this.text = text,
    this.color = color,
    this.executionDate = executionDate
  }
}

export default ScheduleModel