import request from "supertest";
import app from "../app.js"
import db from "../db.js";

describe("Testes Horas livres", () => {

  let created

  beforeAll(async () => {
    created = await request(app)
      .post("/freeTime")
      .send({
        idTime: 1,
        idUser: 1,
        weekDay: "Segunda-feira",
        startTime: "14:00:00",
        durationTime: 45
    })
  })

  it("Criar hora livre", async () => {
    expect(created.statusCode).toBe(200)
  })

  it("Atualiza tempo livre", async () => {
    const freeTime = {
      idTime: null,
      idUser: 1,
      weekDay: "Segunda-feira",
      startTime: "14:00:00",
      durationTime: 45
    }

    const updateData = {
      ...freeTime,
      idTime: created.body.idTime,
      startTime: "12:00:00",
      durationTime: 60
    }

    const res = await request(app).put("/freeTime").send(updateData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idTime", created.body.id)
    expect(res.body.startTime).toBe("12:00:00")
    expect(res.body.durationTime).toBe(60)
  })

  it("Selecionar todos os tempos livres", async () => {

    const res = await request(app).get("/freeTime/1").query({ idUser: created.idUser })

    expect(res.statusCode).toBe(200)
  })

  it("Deletar tempo livre", async () => {

    const res = await request(app).delete(`/freeTime/${created.body.id}`).query({ idTime: created.body.idTime })

    expect(res.statusCode).toBe(200)
  })

  afterAll(async () => {
    await db.end();
  })
})