import request from "supertest";
import app from "../app.js"

describe("Testes planejamento", () => {

  let created 
  const day = new Date().toISOString().split("T")[0]

  beforeAll(async () => {
    created = await request(app)
    .post("/plannings")
    .send({
      idPlanning: null,
      executionDate: day,
      startTime: "10:30:00",
      endTime: "12:00:00",
      finalWeight: 10,
      idTask: 1
    })
  })

  
  it("Criar planejamento", async () => {
    expect(created.statusCode).toBe(200)
  })

  it("Atualiza planejamento" , async () => {
    const plannings = {
      idPlanning: null,
      executionDate: day,
      startTime: "10:30:00",
      endTime: "12:00:00",
      finalWeight: 10,
      idTask: 1
    }

    console.log("planning: ", plannings)
    const updateData = {
      ...plannings,
      idPlanning:created.body.idPlanning,
      startTime: "11:00:00",
      endTime: "12:30:00",
      finalWeight: 9
    }


    const res = await request(app).put("/plannings").send(updateData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idPlanning", created.body.idPlanning)
    expect(res.body.startTime).toBe("11:00:00")
    expect(res.body.endTime).toBe("12:30:00")
    expect(res.body.finalWeight).toBe(9)
  })

  it("Selecionar todas os planejamentos", async() => {
    const res = await request(app).get("/plannings/all/1").query({ idTask: created.idTask })


    expect(res.statusCode).toBe(200)
  })
  
    it("Selecionar todas os planejamentos do dia", async() => {
    const res = await request(app).get("/plannings/dayPlannings/1").query({ idTask: created.idTask })

    expect(res.statusCode).toBe(200)
  })

  it("Deletar planejamento",  async() => {

    const res = await request(app).delete(`/plannings/${created.body.idPlanning}`).query({ idPlanning: created.idPlanning })
    
    expect(res.statusCode).toBe(200)
  })
})