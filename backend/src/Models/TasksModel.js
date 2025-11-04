class TasksModel {
  constructor(
    idTask,
    name, 
    type,
    estimatedHours, 
    dueDate, 
    status, 
    weight, 
    idDiscipline
  ) {
    this.idTask = idTask,
    this.name = name,
    this.type = type,
    this.estimatedHours = estimatedHours,
    this.dueDate = dueDate,
    this.status = status,
    this.weight = weight
    this.idDiscipline = idDiscipline
  }
}

export default TasksModel