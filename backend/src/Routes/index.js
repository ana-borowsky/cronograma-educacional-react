import express from "express";
import {
  index
} from "../Controllers/index.js";

const router = express.Router()

router.get("/", index)
router.get("/ScheduleAndTasks", index)
router.get("/RoomSchelude", index)
router.get("/Syllabus", index)
router.get("/StudySchelude", index)
router.get("/Disciplines", index)

export default router