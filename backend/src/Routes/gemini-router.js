import express from "express"
import { GeminiController } from "../Controllers/geminiController.js"

const router = express.Router()

router.get("/:idUser", GeminiController.buildPlanning)

export default router