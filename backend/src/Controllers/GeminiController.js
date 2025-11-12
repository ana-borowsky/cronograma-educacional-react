import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import FreeTimeService from "../Services/FreeTimeService.js"
import DisciplineService from "../Services/DisciplineService.js"
import TasksService from "../Services/TaskService.js"
import ScheduleService from "../Services/ScheduleService.js"
dotenv.config()

export class GeminiController {
  static async buildPlanning(req, res) {
    try {
      const googleAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
      const { idUser } = req.params
      const freeTime = await new FreeTimeService().getAll(Number(idUser))
      const disciplines = await new DisciplineService().getAll(Number(idUser))

      let tasks = []
      const tasksService = new TasksService()
      for (const d of disciplines) {
        const taskResp = await tasksService.getAll(Number(d.idDiscipline))
        tasks.push(taskResp)
      }
      tasks = tasks.flatMap((t) => t)

      const payload = {
        freeTime: freeTime.map((free) => ({
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
          objective: "Retorne apenas um json de cronograma seguindo as regras especificas",
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

      const result = await new ScheduleService().insert(idUser)
      return res.status(200).json(response.text)
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

  static async createDisciplineAndTasksByPdfUsingAI(req, res) {
    try {
      const googleAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
      const { idUser } = req.params
      const { pdfArchive } = req.body
      const payload = {
        instructions: {
          objective: "Retorne apenas um json com duas posições: discipline e tasks, seguindo as regras especificas em 'rules'",
          rules: [
            "Leia o plano de ensino do arquivo PDF anexado",
            "Crie uma 'discipline' com os dados do plano de ensino",
            "Crie as 'tasks' relacionadas à disciplina criada, baseando-se nas atividades descritas no plano de ensino",
            "Retorne os dados no formato especificado em 'outputFormat' de schema para 'discipline' sendo a posição 0 e 'tasks' sendo a posição 1",
          ],
          outputFormat: {
            type: "array",
            description: "Array com duas posições: [ discipline, tasks ]",
            schema: {
              discipline: {
                idDiscipline: "number|null",
                idUser: `${idUser}`,
                name: "string",
                color: "number",
                project: "string|null",
                classroom: "string|null",
                day: "string|null",
                startTime: "HH:MM:SS|null",
                endTime: "HH:MM:SS|null",
                weight: "number",
              },
              tasks: {
                idTask: "null",
                idDiscipline: "null",
                name: "varchar(50) NOT NULL",
                type:  "ENUM('Prova', 'Trabalho') NOT NULL",
                estimatedHours: "TIME NOT NULL",
                dueDate: "DATE NOT NULL",
                status: "ENUM('Pendente', 'Concluído') NOT NULL",
                weight: "SMALLINT NOT NULL",
              },
            },
            example: [
              {
                discipline: {
                  idDiscipline: null,
                  idUser: 1,
                  name: "Introdução à Programação",
                  color: 5,
                  project: "Projeto A",
                  classroom: "Sala 101",
                  day: "Segunda-feira",
                  startTime: "08:00:00",
                  endTime: "10:00:00",
                  weight: 10,
                }
              },
              {
                tasks: [
                  {
                    idTask: null,
                    name: "Leitura do plano de ensino",
                    type: "Leitura",
                    estimatedHours: 1,
                    dueDate: "2025-11-10",
                    status: "Pendente",
                    weight: 10,
                    idDiscipline: null,
                  }
                ]
              }
            ],
          },
        }
      }
      const prompt = payload.jsonStringify(payload, null, 2)
      const contents = [
        { text: prompt },
        {
          inlineData: {
            mineType: "aplication/pdf",
            data: Buffer.from(pdfArchive).toString("base64"),
          }
        }
      ]
      const response = await googleAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
      });

      return res.status(200).json({ message: "Disciplinas e tarefas criadas com sucesso usando AI." })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

}