import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import FreeTimeService from "../Services/FreeTimeService.js"
import DisciplineService from "../Services/DisciplineService.js"
import TasksService from "../Services/TaskService.js"
import ScheduleService from "../Services/ScheduleService.js"
import DisciplineModel from "../Models/DisciplineModel.js"
import TasksModel from "../Models/TasksModel.js"
import PlanningModel from "../Models/PlanningModel.js"
import PlanningService from "../Services/PlanningService.js"
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
            "Usar exclusivamente os horários disponíveis definidos em freeTime.",
            "Planejar atividades apenas dentro dos intervalos de freeTime, sem ultrapassar nenhum minuto.",
            "Utilizar somente tasks cujo status seja exatamente 'Pendente'.",
            "Organizar e alocar atividades priorizando aquelas com maior valor de weight primeiro.",
            "Garantir que toda task seja completamente finalizada antes da data limite dueDate.",
            "Descartar automaticamente qualquer atividade que não caiba nos horários livres disponíveis.",
            "Nunca criar planejamentos em horários que não existam explicitamente no freeTime.",
            "Retornar a resposta exclusivamente no formato JSON descrito em outputFormat.",
            "Gerar apenas um único arquivo JSON como resposta, sem qualquer texto adicional.",
            "Manter o campo finalWeight rigorosamente no intervalo 0 a 10 conforme o schema.",
            "Utilizar startTime e endTime exatamente no formato HH:MM:SS.",
            "Utilizar executionDate exatamente no formato YYYY-MM-DD.",
            "Seguir fielmente o schema fornecido: idPlanning, executionDate, startTime, endTime, finalWeight e idTask.",
            "Validar todos os horários para garantir que nenhum planejamento ultrapasse o tempo livre.",
            "Garantir que a soma de estimatedHours seja coerente com o intervalo disponível.",
            "Nunca modificar os dados fornecidos pelo usuário (freeTime ou tasks).",
            "Nunca criar, inventar ou alterar tasks ou horários.",
            "Nunca retornar explicações, mensagens, comentários ou justificativas fora do JSON."
          ],
          outputFormat: {
            type: "array",
            description: "Array de objetos com estrutura de planejamento no formato JSON",
            schema: {
              idPlanning: "number|null",
              executionDate: "YYYY-MM-DD",
              startTime: "HH:MM:SS format",
              endTime: "HH:MM:SS format",
              finalWeight: "number (0-100)",
              idTask: "number",
            },
            example: [
              {
                idPlanning: null,
                executionDate: "2025-11-16",
                startTime: "15:00:00",
                endTime: "19:00:00",
                finalWeight: 92,
                idTask: 4
              },
            ],
          },
        },
      }

      const prompt = JSON.stringify(payload, null, 2)
      const contents = [{ text: prompt }]

      console.log("Entrando no primeiro gemini")

      const response = await googleAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        generationConfig: {
          temperature: 0.1,
          topP: 0.95,
          topK: 40,
        },
      })

      const responseJson = JSON.parse((response.text)
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
      )

      const checkPlanningPayload = {
        freeTime: freeTime.map((free) => ({
          idTime: free.idTime,
          idUser: free.idUser,
          weekDay: free.weekDay,
          startTime: free.startTime,
          durationTime: free.durationTime,
        })),
        proposedPlanning: responseJson.map((p) => ({
          idPlanning: p.idPlanning,
          executionDate: p.executionDate,
          startTime: p.startTime,
          endTime: p.endTime,
          finalWeight: p.finalWeight,
          idTask: p.idTask,
        })),
        instructions: {
          objective: "Regras obrigatórias para verificação e correção de planejamentos com base nos tempos livres.",
          rules: [
            "Analise cuidadosamente a chave 'freeTime' e a chave 'proposedPlanning'. Ambas devem ser comparadas criteriosamente.",
            "Para cada item em 'proposedPlanning', verifique se o intervalo entre 'startTime' e 'endTime' está totalmente contido em algum intervalo equivalente de 'freeTime' para o mesmo 'weekDay'.",
            "Realize realocação somente dos plannings que apresentarem horários de execução incongruentes com os tempos livres definidos em 'freeTime'.",
            "Somente três campos podem ser alterados durante a correção: 'executionDate', 'startTime' e 'endTime'. Nenhum outro campo deve ser modificado.",
            "Nunca altere plannings que já estejam corretamente alinhados com os horários de 'freeTime'. Esses devem permanecer exatamente como estão.",
            "Ao corrigir um planning, selecione o tempo livre adequado mais próximo que comporte completamente a duração da atividade.",
            "Jamais altere a quantidade de horas planejadas, o idTask ou qualquer outro atributo que não seja explicitamente autorizado.",
            "Caso não exista nenhum freeTime compatível para realocação, o planning deve ser removido do array final.",
            "Todas as correções devem preservar o formato original do objeto planning.",
            "Retorne APENAS o JSON corrigido, sem explicações ou texto adicional."
          ],
          outputFormat: {
            type: "array",
            description: "Array de objetos com estrutura de planejamento corrigida no formato JSON",
            schema: {
              idPlanning: null,
              executionDate: "YYYY-MM-DD",
              startTime: "HH:MM:SS format",
              endTime: "HH:MM:SS format",
              finalWeight: "number (0-100)",
              idTask: "number",
            },
          },
        },
      }

      const checkprompt = JSON.stringify(checkPlanningPayload, null, 2)
      const checkContent = [{ text: checkprompt }]

      console.log('Entrando no segundo gemini')

      const checkGeminiResponse = await googleAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: checkContent,
        generationConfig: {
          temperature: 0.1,
          topP: 0.95,
          topK: 40,
        },
      })

      const checkedResponse = JSON.parse((checkGeminiResponse.text)
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
      )

      console.log('Dados verificados!')
      console.log('Dados sendo inseridos!')

      await new PlanningService().deleteByUser(idUser)
      const planningService = new PlanningService()
      for (const p of checkedResponse) {
        await planningService.insert(
          new PlanningModel(
            p.idPlanning,
            p.executionDate,
            p.startTime,
            p.endTime,
            p.finalWeight,
            p.idTask
          )
        )
      }

      const result = await new ScheduleService().insert(idUser)

      return res.status(200).json({
        message: 'Planejamento criado com sucesso',
        planningsCreated: checkedResponse.length
      })

    } catch (err) {
      console.error('Erro ao gerar planejamento:', err)
      return res.status(500).json({ error: err.message })
    }
  }

  static async generateDisciplineAndTasksFromPdf(req, res) {
    try {
      const googleAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
      const { idUser } = req.params
      const { project } = req.body
      // lida com o upload do PDF via multer ou body      
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
          objective: "Retorne apenas um objeto json com duas posições: discipline e tasks, seguindo as regras especificas em 'rules'",
          rules: [
            "Leia o plano de ensino do arquivo PDF anexado",
            "Crie uma 'discipline' com os dados do plano de ensino",
            "Crie as 'tasks' relacionadas à disciplina criada, baseando-se nas atividades descritas no plano de ensino",
            "Retorne os dados no formato especificado em 'outputFormat' de schema para 'discipline' sendo a chave 'discipline' e 'tasks' sendo a chave 'tasks'",
            "Se algum campo não puder ser extraído do PDF, utilize um valor ficticio comum como valor para esse campo com excessão de classrroom, day, startTime e endTime que podem ser null",
            "Verifique se os dados extraídos fazem sentido para cada campo",
            "Garanta que todas as regras de tipos e formatos dos campos sejam seguidas conforme o schema em 'outputFormat'",
            "Garanta que todas as regras dessa seçao sejam seguidas rigorosamente!",
          ],
          outputFormat: {
            type: "array",
            description: "Array com duas posições e suas chaves são respectivamente: 'discipline' e 'tasks', cada uma seguindo o  formato de  'schema' especificado",
            schema: {
              discipline: {
                idDiscipline: "number|null",
                idUser: `${idUser}`,
                name: "string",
                color: "ENUM('yellow', 'red', 'green', 'blue', 'purple', 'orange', 'pink', 'white', 'black')",
                project: `${project}`,
                classroom: "string|null",
                day: "string|null",
                startTime: "HH:MM:SS|null",
                endTime: "HH:MM:SS|null",
                weight: "number(0-10)",
              },
              tasks: {
                idTask: "null",
                idDiscipline: "null",
                name: "varchar(50) NOT NULL",
                type: "ENUM('Prova', 'Trabalho') NOT NULL",
                estimatedHours: "TIME NOT NULL",
                dueDate: "DATE NOT NULL",
                status: "ENUM('Pendente', 'Concluído') NOT NULL",
                weight: "SMALLINT NOT NULL(0-10)",
              },
            },
            example: [
              {
                discipline: {
                  idDiscipline: null,
                  idUser: 1,
                  name: "Introdução à Programação",
                  color: "red",
                  project: `${project}`,
                  classroom: "Sala 101",
                  day: "Segunda-feira",
                  startTime: "08:00:00",
                  endTime: "10:00:00",
                  weight: 8,
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
                    weight: 5,
                    idDiscipline: null,
                  }
                ]
              }
            ],
          },
        }
      }
      const prompt = JSON.stringify(payload, null, 2)

      const contents = [{ text: prompt }]

      // fallback: enviar inlineData como antes (base64 + mime)
      contents.push({
        inlineData: {
          mimeType: 'application/pdf',
          data: pdf.buffer ? pdf.buffer.toString('base64') : Buffer.from(pdf).toString('base64'),
        }
      })

      let response
      try {
        response = await googleAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: contents,
          generationConfig: {
            temperature: 0.1,
            topP: 0.95,
            topK: 40,
          },
        })
      } catch (apiErr) {
        console.error('Erro na chamada ao Google GenAI (generateFromPdf):', apiErr)
        const details = apiErr.response || apiErr.message || apiErr
        return res.status(502).json({ error: 'Falha ao chamar a API Gemini', details })
      }

      const responseJson = JSON.parse((response.text)
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
      )
      console.log('Parsed json do gemini:', responseJson)
      const disciplineData = responseJson[0].discipline
      console.log('Discipline Data:', disciplineData)
      const tasksData = responseJson[1].tasks
      console.log('Tasks Data:', tasksData)

      const disciplineService = new DisciplineService()
      const insertedDiscipline = await disciplineService.insert(
        new DisciplineModel(
          disciplineData.idDiscipline,
          disciplineData.idUser,
          disciplineData.name,
          disciplineData.color,
          project,
          disciplineData.classroom,
          disciplineData.day,
          disciplineData.startTime,
          disciplineData.endTime,
          disciplineData.weight
        )
      )

      const tasksService = new TasksService()
      for (const task of tasksData) {
        await tasksService.insert(
          new TasksModel(
            task.idTask,
            task.name,
            task.type,
            task.estimatedHours,
            task.dueDate,
            task.status,
            task.weight,
            insertedDiscipline.insertId  // ← Alterado: usar o ID da disciplina inserida
          )
        )
      }

      return res.status(200).json({ message: response.text })
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }

}