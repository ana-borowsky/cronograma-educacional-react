import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import app from "../app.js"
dotenv.config()

export class GeminiController {
  static async buildPlanning(req, res) {
    try {
      const googleAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
      const { idUser } = req.params

      let freeTIme = []
      freeTime = await request(app).get(`/freeTime/${idUser}`).query({ idUser: idUser })
      
      const disciplines = await request(app).get(`/discipline/${idUser}`).query({ idUser: idUser })
      let tasks = []
      for (const d of disciplines) {
        const taskResp = await request(app).get(`/tasks/${d.idDiscipline}`).query({ idDiscipline: d.idDiscipline })
        tasks.push(taskResp)
      }
      
      const payload = {
        freeTime: freeTIme.map((free) => ({
          idTime: free.idTime,
          idUser: free.idUser,
          weekDay: free.weekDay,
          startTime: free.startTime,
          durationTime: free.durationTime,
        })),
        tasks: tasks.map((task) => ({
          idTask: task.idTask,
          name: task.name,
          type: task.type,
          estimatedHours: task.estimatedHours,
          dueDate: task.dueDate,
          status: task.status,
          weight: task.weight,
          idDiscipline: task.idDiscipline,
        })),
        instructions: {
          objective: "Retorne um json se cronograma seguindo as regras especificas",
          rules: [
            "Os horários dos planejamentos devem ser nos mesmos horários dos tempos livres",
            "Atividades com o nível de prioridade (weight) maior devem ser finalizadas antes das demais",
            "Todas as atividades devem ser planejadas para que sejam concluídas antes da dueDate da atividade",
            "Utilize apenas atividades com status 'Pendente' para o planejamento",
          ],
          outputFormat: {
            type: "array",
            description: "Array de objetos com estrutura de planejamento",
            schema: {
              idPlanning: "number|null",
              executionDate: "ISO 8601 date string",
              startTime: "HH:MM:SS format",
              endTime: "HH:MM:SS format",
              finalWeight: "number (0-100)",
              idTask: "number",
            },
            example: [
              {
                idPlanning: null,
                executionDate: "2025-11-08T03:00:00.000Z",
                startTime: "14:00:00",
                endTime: "16:00:00",
                finalWeight: 90,
                idTask: 1,
              },
            ],
          },
        },
      }

      const prompt = JSON.stringify(payload, null, 2)
      const contents = [
        {
          text: prompt
        }
      ]
      const response = await googleAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
      })

      return res.status(200).json(response.text)
    } catch (err) {

    }
  }

}