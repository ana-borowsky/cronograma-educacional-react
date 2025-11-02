
class DisciplineModel {
  constructor(
    idDiscipline,
    idUser,
    name,
    color,
    project,
    classroom,
    day,
    startTime,
    endTime,
    weight
  ) {
    this.name = name
    this.color = color
    this.project = project
    this.classroom = classroom
    this.day = day
    this.startTime = startTime
    this.endTime = endTime
    this.weight = weight
    this.idUser = idUser
    this.idDiscipline = idDiscipline
  }
}
export default DisciplineModel