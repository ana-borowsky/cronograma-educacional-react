import express from "express"
import FreeTimeController from "../Controllers/FreeTimeController.js"
import PlanningController from "../Controllers/PlanningController.js"

const router = express.Router()

router.post("/", PlanningController.insertPlannning)
router.put("/", PlanningController.updatePlanning)
router.get("/:idTask", PlanningController.getAll)
router.delete("/:idPlanning", PlanningController.delete)
// router.put("/:idPlanning", PlanningController.delete)
export default router