import db from "../db.js"
import FreeTimeModel from "../Models/FreeTimeModel.js"

class FreeTimeRepository {
  constructor() { }

  async insert(freeTimeModel) {
    const values = [
      freeTimeModel.idUser,
      freeTimeModel.weekDay,
      freeTimeModel.startTime,
      freeTimeModel.durationTime
    ]
    const query = "INSERT INTO freeTime (idUser, weekDay, startTime, durationTime) VALUES (?,?,?,?)"
    const [result] = await db.query(query, values)
    return result
  }

  async update(freeTimeModel) {
    const values = [
      freeTimeModel.idUser,
      freeTimeModel.weekDay,
      freeTimeModel.startTime,
      freeTimeModel.durationTime,
      freeTimeModel.idTime
    ]
    const query = "UPDATE freeTime SET idUser = ?, weekDay = ?, startTime = ?, durationTime = ? WHERE idTime = ?"
    const [result] = await db.query(query, values)
    return result
  }

  async delete(idTime) {
    const values = [idTime]
    const query = "DELETE FROM freeTime WHERE idTime = ?"
    const [result] = await db.query(query, values)
    return result
  }

  async getAll(idUser) {
    const values = [idUser]
    const query = "select * from freeTime where idUser = ?";
    const [result] = await db.query(query, values)
    let freeTime = []
    result.forEach(row => {
      freeTime.push(new FreeTimeModel(
        row.idTime,
        row.idUser,
        row.weekDay,
        row.startTime,
        row.durationTime
      ))
    })
    return freeTime
  }

}
export default FreeTimeRepository