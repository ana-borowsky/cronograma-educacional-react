import express from "express";
import {
  index
} from "../Controllers/index.js";
import DisciplineController from  "../Controllers/DisciplineController.js"

const router = express.Router()

router.get("/", index)
router.get("/ScheduleAndTasks", index)
router.get("/RoomSchelude", index)
router.get("/Syllabus", index)
router.get("/StudySchelude", index)
router.get("/Disciplines", index)

router.post("/discipline", DisciplineController.insertDiscipline)
router.put("/discipline", DisciplineController.updateDiscipline)

export default router