import request from "supertest";
import app from "../app.js"

describe("Testes planejamento", () => {

  it("Criar planejamento", async () => {
    const created = await request(app)
    .post("/plannings")
    .send({
      idPlanning: null,
      idTask: 1,
      executionDate: "2025-11-05",
      startTime: "10:30:00",
      endTime: "12:00:00",
      finalWeight: 10
    })
    expect(created.statusCode).toBe(200)
  })

  it("Atualiza planejamento" , async () => {
    const planning = {
      idPlanning: null,
      idTask: 1,
      executionDate: "2025-11-05",
      startTime: "10:30:00",
      endTime: "12:00:00",
      finalWeight: 10
    }

    const created = await request(app)
      .post("/plannings")
      .send(planning)

    const updateData = {
      ...planning,
      idPlanning: created.body.idPlanning,
      executionDate: "2025-11-06",
      startTime: "10:00:00",
      endTime: "11:00:00",
      finalWeight: 90
    }

    const res = await request(app).put("/plannings").send(updateData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idPlanning", created.body.idPlanning)
    expect(res.body.executionDate).toBe("2025-11-06")
    expect(res.body.startTime).toBe("10:00:00")
    expect(res.body.endTime).toBe("11:00:00")
    expect(res.body.finalWeight).toBe(90)
  })

  it("Selecionar todas os planejamentos", async() => {
    const planning = await request(app)
      .post("/plannings")
      .send({
        idPlanning: null,
        idTask: 1,
        executionDate: "2025-11-05",
        startTime: "10:30:00",
        endTime: "12:00:00",
        finalWeight: 10
    })

    const res = await request(app).get("/plannings/all/1").query({ idTask: planning.idTask })

    expect(res.statusCode).toBe(200)
  })
  
    it("Selecionar todas os planejamentos do dia", async() => {
    const planning = await request(app)
      .post("/plannings")
      .send({
        idPlanning: null,
        idTask: 1,
        executionDate: "2025-11-05",
        startTime: "10:30:00",
        endTime: "12:00:00",
        finalWeight: 10
    })

    const res = await request(app).get("/plannings/dayPlannings/1").query({ idTask: planning.idTask })

    expect(res.statusCode).toBe(200)
  })
  it("Deletar planejamento",  async() => {
     const planning = await request(app)
      .post("/plannings")
      .send({
        idPlanning: null,
        idTask: 1,
        executionDate: "2026-11-05",
        startTime: "10:30:00",
        endTime: "12:00:00",
        finalWeight: 10
    })

    const res = await request(app).delete(`/plannings/${planning.body.idPlanning}`).query({ idPlanning: planning.idPlanning })
    
    expect(res.statusCode).toBe(200)
  })
})