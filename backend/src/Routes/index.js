import express from "express";
import { index } from "../Controllers/index.js";
import { getDisciplines } from "../Controllers/DisciplineController.js";
import { getScheduleEvents } from "../Controllers/ScheduleController.js";
import { getTasks } from "../Controllers/TasksController.js";

const router = express.Router()

router.get("/", index)


router.get("/Disciplines", getDisciplines)
router.get("/ScheduleEvents", getScheduleEvents)
router.get("/Tasks", getTasks)

console.log("Backend rodando 😎")

export default router