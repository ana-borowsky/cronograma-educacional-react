import { db } from "../../db.js";
import DisciplineModel from "../DisciplineModel.js";

class DisciplineRepository {
  constructor() { }

  async insert(disciplineModel) {
    const values = [
      disciplineModel.name,
      disciplineModel.color,
      disciplineModel.project,
      disciplineModel.classroom,
      disciplineModel.day,
      disciplineModel.startTime,
      disciplineModel.endTime,
      disciplineModel.weight,
      disciplineModel.idUser
    ]
    const query = "INSERT INTO discipline (name, color, project, classroom, day, startTime, endTime, weight, idUser) VALUES (?,?,?,?,?,?,?,?,?)"
    const [result] = await db.query(query, values)

    return result
  }

  async update(disciplineModel) {
    const values = [
      disciplineModel.name,
      disciplineModel.color,
      disciplineModel.project,
      disciplineModel.classroom,
      disciplineModel.day,
      disciplineModel.startTime,
      disciplineModel.endTime,
      disciplineModel.weight,
      disciplineModel.idDiscipline
    ]
    const query = "UPDATE discipline SET name = ?, color = ?, project = ?, classroom = ?, day = ?, startTime = ?, endTime = ?, weight = ? WHERE idDiscipline = ?"
    const [result] = await db.query(query, values)

    return result
  }

  async delete(idDiscipline) {
    const values = [idDiscipline]
    const query = "DELETE FROM discipline WHERE idDiscipline = ?"
    const [result] = await db.query(query, values)
    return result
  }

  async getAll(idUser) {
    const values = [idUser]
    const query = "select * from discipline where idUser = ?";
    const [result] = await db.query(query, values)
    let disciplines = []
    result.forEach(discipline => {
      console.log(discipline)
      disciplines.push(new DisciplineModel(
        discipline.idDiscipline,
        discipline.idUser,
        discipline.name,
        discipline.color,
        discipline.project,
        discipline.classroom,
        discipline.day,
        discipline.startTime,
        discipline.endTime,
        discipline.weight
      ))
    });
    return disciplines
  }
}

export default DisciplineRepository