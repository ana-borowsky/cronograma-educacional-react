import express from "express";
import TasksController from "../Controllers/TasksController.js";

const router = express.Router()

router.post("/", TasksController.insertTask)
router.put("/", TasksController.updateTask)
router.get("/all/:idDiscipline", TasksController.getAll)
router.get("/exams/:idDiscipline", TasksController.getExam)
router.get("/works/:idDiscipline", TasksController.getWork)
router.get("/dayTasks/:idDiscipline", TasksController.getDayTask)
router.delete("/:idTask", TasksController.delete)

export default router