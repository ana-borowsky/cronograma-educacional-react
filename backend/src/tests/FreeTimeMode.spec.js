import request from "supertest";
import app from "../app.js"

describe("Testes Horas livres", () => {

  it("Criar hora livre", async () => {
    const created = await request(app)
      .post("/freeTime")
      .send({
        idTime: 1,
        idUser: 1,
        weekDay: "Segunda-feira",
        startTime: "14:00:00",
        durationTime: 45
      })
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

    const created = await request(app)
      .post("/freeTime")
      .send(freeTime)

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
    const freeTime = await request(app)
      .post("/freeTime")
      .send({
        idTime: null,
        idUser: 1,
        weekDay: "Segunda-feira",
        startTime: "14:00:00",
        durationTime: 45
      })

    const res = await request(app).get("/freeTime/1").query({ idUser: freeTime.idUser })

    expect(res.statusCode).toBe(200)
  })

  it("Deletar tempo livre", async () => {
    const freeTime = await request(app)
      .post("/freeTime")
      .send({
        idTime: null,
        idUser: 1,
        weekDay: "Segunda-feira",
        startTime: "14:00:00",
        durationTime: 45
      })

    const res = await request(app).delete(`/freeTime/${freeTime.body.id}`).query({ idTime: freeTime.body.idTime })
    expect(res.statusCode).toBe(200)
  })
})