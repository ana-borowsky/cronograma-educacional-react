import request from "supertest";
import app from "../app.js"
import db from "../db.js";

describe("Testes cronograma",  () => {

  it("Inserir cronograma", async () => {
    const created = await request(app) 
    .post("/schedules")
    .send({
      idUser: 1
    })

    expect(created.statusCode).toBe(200)

  })

  it("Selecionar cronograma do usuário", async () => {

    const res = await request(app).get("/schedules/all/1").query({ idUser: 1 })
  
    expect(res.statusCode).toBe(200)
  })

  it("Selecionar cronograma semanal do usuário", async () => {

    const res = await request(app).get("/schedules/weekSchedule/1").query({ idUser: 1 })
  
    expect(res.statusCode).toBe(200)
  })

  it("Selecionar cronograma mensal do usuário", async () => {

    const res = await request(app).get("/schedules/monthSchedule/1").query({ idUser: 1 })
  
    expect(res.statusCode).toBe(200)
  })

  afterAll(async () => {
    await db.end();
  })
})