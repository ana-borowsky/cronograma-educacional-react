import request from "supertest";
import app from "../index.js"
import { db } from "../db.js"
import DisciplineModel from "../Models/DisciplineModel.js";
import DisciplineRepository from "../Models/Repositories/DisciplineRepository.js";

describe("Testes da disciplina", () => {
  beforeAll(async () => {
    await db.query("DELETE FROM discipline");
  })

  it("Cria disciplina", async () => {
    const created = await request(app)
      .post("/discipline")
      .send({
        idDiscipline: null,
        idUser: 1,
        name: "Português",
        color: 1,
        project: "Projeto A",
        classroom: "101",
        day: "Segunda-Feira",
        startTime: "08:00",
        endTime: "09:45",
        weight: 2
      })
    expect(created.statusCode).toBe(200)
  })

  it("Atualizar disciplina", async () => {
    const discipline = {
      idDiscipline: null,
      idUser: 1,
      name: "Português",
      color: 1,
      project: "Projeto A",
      classroom: "101",
      day: "Segunda-Feira",
      startTime: "08:00",
      endTime: "09:45",
      weight: 2
    }

    const created = await request(app)
      .post("/discipline")
      .send(discipline)
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

  it("Pega todas as diciplinas por usuário", async () => {
    const discipline = await request(app)
      .post("/discipline")
      .send({
        idDiscipline: null,
        idUser: 1,
        name: "Português",
        color: 1,
        project: "Projeto A",
        classroom: "101",
        day: "Segunda-Feira",
        startTime: "08:00",
        endTime: "09:45",
        weight: 2
      })
      const res = await request(app).get("/discipline/1").query({ idUser: discipline.idUser })

    expect(res.statusCode).toBe(200)

  })

})
