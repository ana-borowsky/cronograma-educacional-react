import express from "express"
import disciplineRoutes from "./Routes/discipline-router.js"
import taskRoutes from "./Routes/task-router.js"
import freeTimeRouter from "./Routes/freetime-router.js"
import planningRouter from "./Routes/planning-router.js"
import geminiRouter from "./Routes/gemini-router.js"
import scheduleRouter from "./Routes/schedule-router.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/discipline", disciplineRoutes)
app.use("/tasks", taskRoutes)
app.use("/freeTime", freeTimeRouter)
app.use("/plannings", planningRouter)
app.use("/buildPlanning", geminiRouter)
app.use("/schedules", scheduleRouter)

export default app;
