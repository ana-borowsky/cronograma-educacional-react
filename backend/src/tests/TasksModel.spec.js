import request from "supertest";
import app from "../app.js"
import db from "../db.js";

describe("Testes tarefas", () => {

  let created
  const day = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' })

  beforeAll(async () => {
    created = await request(app)
      .post("/tasks")
      .send({
        idTask: null,
        idDiscipline: 1,
        name: "Revisão Bibliográfica",
        type: "Prova",
        estimatedHours: "06:00:00",
        dueDate: day,
        status: "Concluído",
        weight: 8
      })
  })

  it("Criar tarefa", async () => {
    expect(created.statusCode).toBe(200)
  })

  it("Atualiza tarefa", async () => {
    const task = {
        idTask: null,
        idDiscipline: 1,
        name: "Revisão Bibliográfica",
        type: "Prova",
        estimatedHours: "06:00:00",
        dueDate: day,
        status: "Concluído",
        weight: 8
    }

    const updateData = {
      ...task,
      idTask: created.body.idTask,
      estimatedHours: "07:00:00",
      weight: 9
    }

    const res = await request(app).put("/tasks").send(updateData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idTask", created.body.idTask)
    expect(res.body.estimatedHours).toBe("07:00:00")
    expect(res.body.weight).toBe(9)
  })

  it("Atualizar status da tarefa", async () => {
    const status = "Pendente"

    const res = await request(app).patch(`/tasks/${created.body.idTask}`).send({status})

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe("Pendente")
  })

  it("Selecionar todas as tarefas", async() => {

    const res = await request(app).get("/tasks/all/1").query({ idDiscipline: created.idDiscipline})

    expect(res.statusCode).toBe(200)
  })

  it("Selecionar todas as provas", async() => {
    const res = await request(app).get("/tasks/exams/1").query({ idDiscipline: created.idDiscipline})

    expect(res.statusCode).toBe(200)
  })

  it("Selecionar todos os trabalhos", async() => {

    const res = await request(app).get("/tasks/works/1").query({ idDiscipline: created.idDiscipline})

    expect(res.statusCode).toBe(200)
  })

  it("Selecionar todas as tarefas do dia", async() => {

    const res = await request(app).get("/tasks/dayTasks/1").query({ idDiscipline: created.idDiscipline})

    expect(res.statusCode).toBe(200)
  })

  it("Deletar tarefas" , async () => {

    const res = await request(app).delete(`/tasks/${created.body.idTask}`).query({idTask: created.body.idTask})
    expect(res.statusCode).toBe(200)
  })

  afterAll(async () => {
    await db.end();
  })

})