import express from "express"
import { GeminiController } from "../Controllers/GeminiController.js"

const router = express.Router()

router.get("/:idUser", GeminiController.buildPlanning)

export default router