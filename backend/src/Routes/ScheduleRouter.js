import express from "express";
import ScheduleController from "../Controllers/ScheduleController.js";

const router =  express.Router()

router.post("/", ScheduleController.insertSchedule)
router.get("/:idUser", ScheduleController.getScheduleByUser)
router.get("/weekTasks/:idUser", ScheduleController.getWeekScheduleByUser)

export default router