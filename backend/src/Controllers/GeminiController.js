import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import FreeTimeService from "../Services/FreeTimeService.js"
import DisciplineService from "../Services/DisciplineService.js"
import TasksService from "../Services/TaskService.js"
import ScheduleService from "../Services/ScheduleService.js"
import { console } from "inspector"
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
          objective: "Retorne apenas um aquivo no formato 'JSON' de cronograma seguindo as regras especificas",
          rules: [
            "Os horários dos planejamentos devem ser nos mesmos horários dos tempos livres",
            "Atividades com o nível de prioridade (weight) maior devem ser finalizadas antes das demais",
            "Todas as atividades devem ser planejadas para que sejam concluídas antes da dueDate da atividade",
            "Utilize apenas atividades com status 'Pendente' para o planejamento",
          ],
          outputFormat: {
            type: "array",
            description: "Array de objetos com estrutura de planejamento no formato JSON",
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

  static async generateDisciplineAndTasksFromPdf(req, res) {
    try {
      const googleAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
      const { idUser } = req.params
      // suportar upload via multipart (multer) ou via body (base64)
      if (!req.file) {
        if (req.body && req.body.file) {
          const fileData = req.body.file
          const base64 = typeof fileData === "string" ? fileData.split(",").pop() : null
          if (!base64) {
            return res.status(400).json({ error: "arquivo inválido no body" })
          }
          const buffer = Buffer.from(base64, "base64")
          req.file = {
            originalname: req.body.filename || "file.pdf",
            mimetype: req.body.mimetype || "application/pdf",
            size: buffer.length,
            buffer,
          }
        } else {
          return res.status(400).json({ error: "nenhum arquivo pdf enviado" })
        }
      }
      const pdf = req.file
      console.log("PDF received:", pdf.originalname, pdf.mimetype, pdf.size)

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
                color: "ENUM('yellow', 'red', 'green', 'blue', 'purple', 'orange', 'pink', 'white', 'black')",
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
                type: "ENUM('Prova', 'Trabalho') NOT NULL",
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
                  color: "red",
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
      const prompt = JSON.stringify(payload, null, 2)
      // Tentar extrair texto localmente do PDF para enviar ao modelo como texto.
      // Isso costuma ser mais confiável do que depender apenas de attachment inline.
      let extractedText = null
      try {
        const pdfParse = (await import('pdf-parse')).default
        const parsed = await pdfParse(pdf.buffer)
        extractedText = parsed && parsed.text ? parsed.text.trim() : null
        if (extractedText && extractedText.length > 20000) {
          // truncar para evitar payloads enormes; adaptar conforme necessário
          extractedText = extractedText.slice(0, 20000)
        }
      } catch (parseErr) {
        console.warn('Falha ao extrair texto do PDF localmente:', parseErr)
        extractedText = null
      }

      const contents = [{ text: prompt }]
      if (extractedText) {
        contents.push({ text: `EXTRAIR_PDF:\n${extractedText}` })
      } else {
        // fallback: enviar inlineData como antes (base64 + mime)
        contents.push({
          inlineData: {
            mimeType: 'application/pdf',
            data: pdf.buffer ? pdf.buffer.toString('base64') : Buffer.from(pdf).toString('base64'),
          }
        })
      }

      // Aqui você pode chamar o Google GenAI para processar o PDF.
      // Se a chamada à API for desativada/localmente não utilizada, evitamos referenciar `response` indefinido.
      let response
      try {
        response = await googleAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: contents,
        })
      } catch (apiErr) {
        console.error('Erro na chamada ao Google GenAI (generateFromPdf):', apiErr)
        const details = apiErr.response || apiErr.message || apiErr
        return res.status(502).json({ error: 'Falha ao chamar a API Gemini', details })
      }

      if (response && response.text) {
        try {
          const responseJson = JSON.parse(response.text)
          console.log('Resposta AI (parsed):', responseJson)
        } catch (err) {
          console.warn('Não foi possível parsear response.text:', err)
          console.log('Resposta raw:', response.text)
        }
      } else {
        console.log('Resposta da AI sem texto em `response.text`:', response)
      }
      return res.status(200).json({ message: response.text })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

}