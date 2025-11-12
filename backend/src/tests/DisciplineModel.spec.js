import request from "supertest";
import app from "../app.js"

describe("Testes da disciplina", () => {

  let created

  beforeAll(async () => {
    created = await request(app)
      .post("/discipline")
      .send({
        idDiscipline: null,
        idUser: 1,
        name: "Português",
        color: "red",
        project: "Projeto A",
        classroom: "101",
        day: "Segunda-Feira",
        startTime: "08:00",
        endTime: "09:45",
        weight: 2
      })
  })

  it("Cria disciplina", async () => {
    expect(created.statusCode).toBe(200)
  })

  it("Atualizar disciplina", async () => {
     const updatedData = {
      idDiscipline: created.body.id,
      idUser: 1,
      name: "Matematica",
      color: "green",
      project: "Projeto A",
      classroom: "101",
      day: "Segunda-Feira",
      startTime: "08:00",
      endTime: "09:45",
      weight: 2
  }
    const res = await request(app).put("/discipline").send(updatedData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idDiscipline", created.body.id)
    expect(res.body.name).toBe("Matematica")
    expect(res.body.color).toBe("green")
  })

  it("Pega todas as diciplinas por usuário", async () => {

    const res = await request(app).get("/discipline/1").query({ idUser: created.idUser })
    expect(res.statusCode).toBe(200)

  })

  it("Delete disciplina", async () => {
    const res = await request(app).delete(`/discipline/${created.body.id}`)
      .query({ idDiscipline: created.body.idDiscipline })

    expect(res.statusCode).toBe(200)
  })

})