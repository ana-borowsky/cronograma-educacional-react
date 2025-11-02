import express from "express";
import DisciplineController from "../Controllers/DisciplineController.js"

const router = express.Router()

router.post("/", DisciplineController.insertDiscipline)
router.put("/", DisciplineController.updateDiscipline)
router.delete("/:idDiscipline", DisciplineController.delete)
router.get("/:idUser", DisciplineController.getAll)

export default router