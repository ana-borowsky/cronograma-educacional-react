import request from "supertest";
import app from "../index.js"
import { db } from "../db.js"

describe("Testes da disciplina", () => {
  // beforeAll(async () => {
  //   await db.query("DELETE FROM discipline");
  // })

  it("Atualizar disciplina", async () => {
    const discipline = {
      name: "Português",
      color: 1,
      project: "Projeto A",
      classroom: "101",
      day: "Segunda-Feira",
      startTime: "08:00",
      endTime: "09:45",
      weight: 2,
      idUser: 1
    }

    const created = await request(app).post("/discipline").send(discipline)

    const updatedData = {
      ...discipline,
      idDiscipline: created.body.id,
      name: "Matematica",
      color: 2
    };


    const res = await request(app).put("/discipline").send(updatedData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idDiscipline", created.body.id)
    expect(res.body.name).toBe("Matematica")
    expect(res.body.color).toBe(2)
  })
})
