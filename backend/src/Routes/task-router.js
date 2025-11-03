import express from "express";
import TasksController from "../Controllers/TasksController.js";

const router = express.Router()

router.post("/", TasksController.insertTask)
router.put("/", TasksController.updateTask)
router.get("/:idDiscipline", TasksController.getAll)
router.delete("/:idTask", TasksController.deleteTask)

export default router