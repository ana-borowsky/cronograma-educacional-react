import express from "express"
import FreeTimeController from "../Controllers/FreeTimeController.js"
import PlanningController from "../Controllers/PlanningController.js"

const router = express.Router()

router.post("/", PlanningController.insertPlannning)
router.put("/", PlanningController.updatePlanning)
router.get("/all/:idTask", PlanningController.getAll)
router.get("/dayPlannings/:idTask", PlanningController.getDayPlanning)
router.delete("/:idPlanning", PlanningController.delete)

export default router