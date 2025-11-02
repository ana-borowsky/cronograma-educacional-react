const DUMMY_DISCIPLINES = [
  {
    idDiscipline: 1,
    idUser: 1,
    name: "Cálculo I",
    color: 1,
    project: "Vestibular",
    classroom: "B-102",
    day: "Segunda",
    startTime: "10:00:00",
    endTime: "12:00:00",
    weight: 10
  },
  {
    idDiscipline: 2,
    idUser: 1,
    name: "Programação Web",
    color: 2,
    project: "Vestibular",
    classroom: "Lab-Inf 5",
    day: "Terça",
    startTime: "16:00:00",
    endTime: "19:00:00",
    weight: 8
  },
  {
    idDiscipline: 3,
    idUser: 1,
    name: "Estruturas de Dados",
    color: 3,
    project: "Vestibular",
    classroom: "A-201",
    day: "Terça",
    startTime: "12:00:00",
    endTime: "14:00:00",
    weight: 9
  },
  {
    idDiscipline: 4,
    idUser: 1,
    name: "Redes de Computadores",
    color: 4,
    project: "Vestibular",
    classroom: "C-305",
    day: "Quinta",
    startTime: "17:00:00",
    endTime: "20:00:00",
    weight: 7
  },
  {
    idDiscipline: 5,
    idUser: 1,
    name: "Física Experimental",
    color: 5,
    project: "Vestibular",
    classroom: "Lab-Fis 2",
    day: "Sexta",
    startTime: "16:00:00",
    endTime: "19:00:00",
    weight: 8
  }
]

export const findAllDisciplines = () => {
  return DUMMY_DISCIPLINES
}

export const findDisciplineById = (id) => {
  return DUMMY_DISCIPLINES.find(d => d.idDiscipline === id)
}


class DisciplineModel {
  constructor(
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
  ) {
    this.name = name
    this.color = color
    this.project = project
    this.classroom = classroom
    this.day = day
    this.startTime = startTime
    this.endTime = endTime
    this.weight = weight
    this.idUser = idUser
    this.idDiscipline = idDiscipline
  }
}
export default DisciplineModel