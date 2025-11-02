import DisciplineModel from "../Models/DisciplineModel.js";

class DisciplineController {
   static async insertDiscipline(req, res) {
    try {
      const { name, color, project, classroom, day, startTime, endTime, weight, idUser } = req.body

      const discipline = new DisciplineModel(name, color, project, classroom, day, startTime, endTime, weight, idUser);
      const result = await discipline.insert()

      res.status(200).json({ id: result.insertId, name });
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir a disciplina" })
    }
  }

  static async updateDiscipline(req , res) {
    try {
        const {idDiscipline, name, color, project, classroom, day, startTime, endTime, weight} = req.body

        const discipline = new DisciplineModel(name, color, project, classroom, day, startTime, endTime, weight)
        const updateResult = await discipline.update(idDiscipline)

        res.status(200).json( {idDiscipline, name, color, project, classroom, day, startTime, endTime, weight })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Erro ao atualizar a disciplina"})
    }
  }
}

export default DisciplineController