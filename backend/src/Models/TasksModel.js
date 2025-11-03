const DUMMY_TASKS = [
  {
    idTask: 1,
    idDiscipline: 1,
    name: "Revisão Bibliográfica",
    estimatedHours: "05:00:00",
    dueDate: "2025-11-05",
    status: "Pending",
    weight: 8
  },
  {
    idTask: 2,
    idDiscipline: 1,
    name: "Estudo de Caso #1",
    estimatedHours: "08:00:00",
    dueDate: "2025-10-10",
    status: "Done",
    weight: 8
  },
  {
    idTask: 3,
    idDiscipline: 1,
    name: "P1 - Unidade 1 (Derivadas)",
    estimatedHours: "03:00:00",
    dueDate: "2025-10-15",
    status: "Pending",
    weight: 10
  },
  {
    idTask: 4,
    idDiscipline: 1,
    name: "P2 - Unidade 2 (Integrais)",
    estimatedHours: "03:00:00",
    dueDate: "2025-11-19",
    status: "Pending",
    weight: 10
  },
  {
    idTask: 5,
    idDiscipline: 2,
    name: "Projeto Final - Dashboard",
    estimatedHours: "20:00:00",
    dueDate: "2025-12-15",
    status: "Pending",
    weight: 10
  },
  {
    idTask: 6,
    idDiscipline: 2,
    name: "Exame Teórico Final",
    estimatedHours: "04:00:00",
    dueDate: "2025-12-10",
    status: "Pending",
    weight: 9
  },

  // Tarefas de Estruturas de Dados (idDiscipline: 3)
  {
    idTask: 7,
    idDiscipline: 3,
    name: "Implementação de Árvore AVL",
    estimatedHours: "10:00:00",
    dueDate: "2025-11-25",
    status: "Pending",
    weight: 9
  },
  {
    idTask: 8,
    idDiscipline: 3,
    name: "Prova de Conceitos (Pilhas, Filas)",
    estimatedHours: "02:00:00",
    dueDate: "2025-11-05",
    status: "Pending",
    weight: 10
  }
];

export const findAllTasks = () => {
  return DUMMY_TASKS;
};

export const findTasksByDiscipline = (idDiscipline) => {
  return DUMMY_TASKS.filter(t => t.idDiscipline === idDiscipline);
};

class TasksModel {
  constructor(
    idTask,
    name, 
    estimatedHours, 
    dueDate, 
    status, 
    weight, 
    idDiscipline
  ) {
    this.idTask = idTask,
    this.name = name,
    this.estimatedHours = estimatedHours,
    this.dueDate = dueDate,
    this.status = status,
    this.weight = weight
    this.idDiscipline = idDiscipline
  }
}

export default TasksModel