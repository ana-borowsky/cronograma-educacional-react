import express from "express"
import FreeTimeController from "../Controllers/FreeTimeController.js"

const router = express.Router()

router.post("/", FreeTimeController.insertFreeTime)
router.put("/", FreeTimeController.updateFreeTime)
router.get("/:idUser", FreeTimeController.getAll)
router.delete("/:idTime", FreeTimeController.delete)

export default router