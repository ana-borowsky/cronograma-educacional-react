import express from "express";
import { getScheduleEvents } from "../Controllers/ScheduleController.js";

const router = express.Router()

router.get("/ScheduleEvents", getScheduleEvents)
console.log("Backend rodando 😎")

export default router