import express from "express"
import { GeminiController } from "../Controllers/GeminiController.js"

const router = express.Router()

router.get("/buildPlanning/:idUser", GeminiController.buildPlanning)
router.post("/pdf/:idUser", GeminiController.generateDisciplineAndTasksFromPdf)

export default router