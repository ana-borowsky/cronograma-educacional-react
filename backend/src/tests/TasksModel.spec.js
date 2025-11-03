import request from "supertest";
import app from "../index.js"
import { db } from "../db.js"

describe("Testes Taredas", () => {

  it("Criar tarefa", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({
        idTask: null,
        idDiscipline: 1,
        name: "Revisão Bibliográfica",
        estimatedHours: "06:00:00",
        dueDate: "2025-11-05",
        status: "Pending",
        weight: 8
      })
      expect(created.statusCode).toBe(200)
  })

  it("Atualiza tarefa", async () => {
    const task = {
        idTask: null,
        idDiscipline: 1,
        name: "Revisão Bibliográfica",
        estimatedHours: "06:00:00",
        dueDate: "2025-11-05",
        status: "Pending",
        weight: 8
    }

    const created =  await request(app)
      .post("/tasks")
      .send(task)

    const updateData = {
      ...task,
      idTask: created.body.idTask,
      estimatedHours: "07:00:00",
      dueDate: "2025-12-06"
    }

    const res = await request(app).put("/tasks").send(updateData)

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("idTask", created.body.idTask)
    expect(res.body.estimatedHours).toBe("07:00:00")
    expect(res.body.dueDate).toBe("2025-12-06")
  })

  it("Selecionar todas as tarefas", async() => {
    const task = await request(app)
      .post("/tasks")
      .send({
        idTask: null,
        idDiscipline: 1,
        name: "Revisão Bibliográfica",
        estimatedHours: "06:00:00",
        dueDate: "2025-11-05",
        status: "Pending",
        weight: 8
    })

    const res = await request(app).get("/tasks/1").query({ idDiscipline: task.idDiscipline})

    expect(res.statusCode).toBe(200)
  })

  it("Deletar tarefas" , async () => {
    const tasks = await request(app)
      .post("/tasks")
      .send({
        idTask: null,
        idDiscipline: 1,
        name: "Revisão Bibliográfica",
        estimatedHours: "06:00:00",
        dueDate: "2025-11-05",
        status: "Pending",
        weight: 8
    })

    const res = await request(app).delete(`/tasks/${tasks.body.idTask}`).query({idTask: tasks.body.idTask})
    expect(res.statusCode).toBe(200)
  })
})