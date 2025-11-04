import express from "express"
import PlanningController from "../Controllers/PlanningController.js"

const router = express.Router()

router.post("/", PlanningController.insertPlannning)
router.put("/", PlanningController.updatePlanning)
router.get("/:idTask", PlanningController.getAll)
router.delete("/:idPlanning", PlanningController.delete)
export default router