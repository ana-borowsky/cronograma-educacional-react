import express from "express";
import ScheduleController from "../Controllers/ScheduleController.js";

const router =  express.Router()

router.post("/", ScheduleController.insertSchedule)
router.get("/all/:idUser", ScheduleController.getScheduleByUser)
router.get("/weekSchedule/:idUser", ScheduleController.getWeekScheduleByUser)
router.get("/monthSchedule/:idUser", ScheduleController.getMonthScheduleByUser)

export default router