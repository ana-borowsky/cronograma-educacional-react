import { db } from "../db.js";

class DisciplineModel {
    constructor(name, color, project, classroom, day, startTime, endTime, weight, idUser) {
        this.name = name
        this.color = color
        this.project = project
        this.classroom = classroom 
        this.day = day
        this.startTime = startTime
        this.endTime = endTime
        this.weight = weight
        this.idUser = idUser
    }

    async insert() {
        const values = [
            this.name,
            this.color, 
            this.project,
            this.classroom,
            this.day,
            this.startTime,
            this.endTime,
            this.weight, 
            this.idUser
        ]
        const query = "INSERT INTO discipline (name, color, project, classroom, day, startTime, endTime, weight, idUser) VALUES (?,?,?,?,?,?,?,?,?)"
        const [result] = await db.query(query, values)

        return result
    }

    async update(idDiscipline) {
        const values = [
            this.name,
            this.color, 
            this.project,
            this.classroom,
            this.day,
            this.startTime,
            this.endTime,
            this.weight, 
            idDiscipline
        ]
        const query = "UPDATE discipline SET name = ?, color = ?, project = ?, classroom = ?, day = ?, startTime = ?, endTime = ?, weight = ? WHERE idDiscipline = ?"
        const result = await db.query(query, values)

        return result
    }
}

export default DisciplineModel