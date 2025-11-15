# Rotas do backend

## Discipline
---

- get/discipline/:idUser
- put/discipline/
- delete/discipline/:idDiscipline
- post/discipline/

## Tasks
---

- get/tasks/all/:idDiscipline
- get/tasks/exams/:idDiscipline
- get/tasks/works/:idDiscipline
- get/tasks/dayTasks/:idDiscipline
- put/tasks/
- patch/tasks/:idTask
- delete/tasks/:idtasks
- post/tasks/

## FreeTime
---

- get/freeTime/:idUser
- put/freeTime/
- delete/freeTime/:idTime
- post/freeTime/

## Planning
---

- get/plannings/all/:idTask
- get/plannings/dayPlannings/id:Task
- get/plannings/userDayPlannings/:idUser
- put/plannings/
- delete/plannings/:idPlanning
- post/plannings/

## Gemini
---

- get/buildPlanning/:idUser  ( retorna os plannings gerados )
- post/pdf/:idUser (FAZ AS DISCIPLINAS E TAREFAS DE UM PDF)

## Schedule
---

- post/schedules
- get/schedules/all/:idUser
- get/schedules/weekSchedule/:idUser (a rota foi criada assim, mas quando for acessar precisa do startDate, dai fica assim localhost:8800/schedules/weekSchedule/1?startDate=2025-11-10)
- get/shedules/monthSchedule/:idUser

