import express from "express";
import ScheduleController from "../Controllers/ScheduleController.js";

const router =  express.Router()

router.post("/", ScheduleController.insertSchedule)
router.get("/:idUser", ScheduleController.getScheduleByUser)

export default router