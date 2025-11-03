import DisciplineModel from "../Models/DisciplineModel.js"
import DisciplineRepository from "../Models/Repositories/DisciplineRepository.js"
const DUMMY_DISCIPLINES = [
  {
    id: 'd-1',
    title: "Cálculo I",
    color: "yellow",
    works: [
      { id: 'w-1', description: 'Revisão Bibliográfica (Entrega: 05/Nov) | Duração: 5h. Foco nos artigos de 2022.', borderColor: 'yellow', completed: false },
      { id: 'w-2', description: 'Estudo de Caso #1 (Concluído) | Análise de Caso de Sucesso em Transformação de Coordenadas. Duração: 8h.', borderColor: 'green', completed: true },
      { id: 'w-3', description: 'Lista de Exercícios 1 (Entrega: 20/Out) | Seções 1.1 a 1.5.', borderColor: 'yellow', completed: false },
    ],
    exams: [
      { id: 'e-1', description: 'P1 - Unidade 1 (Data: 15/Out) | Escopo: Derivadas e Regras de Cadeia.', borderColor: 'red', completed: false },
      { id: 'e-2', description: 'Mini-Teste Derivadas (Data: 01/Nov) | Teste surpresa sobre Tópicos de Cálculo I.', borderColor: 'red', completed: false },
      { id: 'e-3', description: 'P2 - Unidade 2 (Data: 19/Nov) | Escopo: Integrais e Funções Transcendentais.', borderColor: 'red', completed: false },
    ],
  },
  {
    id: 'd-2',
    title: "Programação Web",
    color: "blue",
    works: [
      { id: 'w-4', description: 'Projeto Final - Dashboard (Entrega: 15/Dez) | Implementar todas as funcionalidades de CRUD.', borderColor: 'blue', completed: false },
    ],
    exams: [
      { id: 'e-4', description: 'Exame Teórico Final (Data: 10/Dez) | Revisão de JavaScript e React.', borderColor: 'red', completed: false },
    ],
  },
  {
    id: 'd-3',
    title: "Estruturas de Dados",
    color: "purple",
    works: [
      { id: 'w-5', description: 'Implementação de Árvore AVL (Entrega: 25/Nov) | Foco na rotação e balanceamento.', borderColor: 'purple', completed: false },
      { id: 'w-6', description: 'Trabalho sobre Grafos (Concluído) | Algoritmo de Dijkstra em C.', borderColor: 'green', completed: true },
    ],
    exams: [
      { id: 'e-5', description: 'Prova de Conceitos (Data: 05/Nov) | Escopo: Pilhas, Filas e Listas Ligadas.', borderColor: 'red', completed: false },
    ],
  },
  {
    id: 'd-4',
    title: "Redes de Computadores",
    color: "green",
    works: [
      { id: 'w-7', description: 'Configuração de Sub-redes (Entrega: 10/Dez) | Cálculos de máscara e planejamento de IP.', borderColor: 'green', completed: false },
    ],
    exams: [
      { id: 'e-6', description: 'P1 - Modelo OSI e TCP/IP (Data: 01/Nov) | Questões conceituais sobre camadas.', borderColor: 'red', completed: false },
      { id: 'e-7', description: 'Exame Prático de Protocolos (Data: 20/Nov) | Análise de tráfego com Wireshark.', borderColor: 'red', completed: false },
    ],
  },
]

export const getDisciplines = (_, res) => {
  try {
    return res.status(200).json(DUMMY_DISCIPLINES)
  } catch (error) {
    console.error("Erro ao buscar disciplinas (fixo):", error)
    return res.status(500).json({ message: "Erro interno do servidor" })
  }
}
class DisciplineController {

  static async insertDiscipline(req, res) {
    try {
      const {
        idDiscipline,
        idUser,
        name,
        color,
        project,
        classroom,
        day,
        startTime,
        endTime,
        weight
      } = req.body
      const repo = new DisciplineRepository()
      const result = await repo.insert(new DisciplineModel(
        idDiscipline,
        idUser,
        name,
        color,
        project,
        classroom,
        day,
        startTime,
        endTime,
        weight
      ))

      res.status(200).json({ id: result.insertId, name })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao inserir a disciplina" })
    }
  }

  static async delete(req, res) {
    try {
      const { idDiscipline } = req.params
      const repo = new DisciplineRepository()
      const deleteResult = await repo.delete(idDiscipline)
      if (deleteResult.affectedRows === 0) {
        return res.status(404).json({ error: "Disciplina não encontrada" })
      }

      return res.status(200).json({ ...req.body })
    } catch (err) {
      console.log(err)
      res.status(400).json({ err: "Erro ao deletar o disciplina." })
    }
  }

  static async updateDiscipline(req, res) {
    try {
      const { idUser, idDiscipline, name, color, project, classroom, day, startTime, endTime, weight } = req.body
      const repo = new DisciplineRepository()

      const updateResult = await repo.update(
        new DisciplineModel(
          idDiscipline,
          idUser,
          name,
          color,
          project,
          classroom,
          day,
          startTime,
          endTime,
          weight
        )
      )

      res.status(200).json({
        idDiscipline,
        idUser,
        name,
        color,
        project,
        classroom,
        day,
        startTime,
        endTime,
        weight
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: "Erro ao atualizar a disciplina" })
    }
  }

  static async getAll(req, res) {
    try {
      const { idUser } = req.params
      const repo = new DisciplineRepository()
      const result = await repo.getAll(Number(idUser))

      if (!result || (result.length === 0)) {
        return res.status(404).json({ error: "Usuário não encontrado!" })
      }

      return res.status(200).json(result)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Erro ao obter disciplinas" })
    }
  }
}

export default DisciplineController