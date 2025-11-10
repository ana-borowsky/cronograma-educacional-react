import request from "supertest";
import app from "../app.js"


describe("Testes cronograma",  () => {

  it("Selecionar cronograma do usuário", async () => {
    const createdPlanning =  await request(app)
    .post("/plannings")
    .send({
      idPlanning: null,
      idTask: 1,
      executionDate: "2025-11-10",
      startTime: "10:30:00",
      endTime: "12:00:00",
      finalWeight: 10
    })
    expect(createdPlanning.statusCode).toBe(200)

    const res = await request(app).get("/schedules/1").query({ idUser: 1 })
  
    expect(res.statusCode).toBe(200)
  })

  it("Inserir cronograma", async () => {
    const created = await request(app) 
    .post("/schedules")
    .send({
      idUser: 1
    })

    expect(created.statusCode).toBe(200)

    const res = await request(app).get("/schedules/1").query({ idUser: 1 })
  
    expect(res.statusCode).toBe(200)
  })

})