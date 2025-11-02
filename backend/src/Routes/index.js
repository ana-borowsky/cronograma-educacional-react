import express from "express";
import { getScheduleEvents } from "../Controllers/ScheduleController.js";
import { getTasks } from "../Controllers/TasksController.js";

const router = express.Router()

router.get("/ScheduleEvents", getScheduleEvents)
router.get("/Tasks", getTasks)

console.log("Backend rodando 😎")

export default router