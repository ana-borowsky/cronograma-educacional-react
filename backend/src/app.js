import express from "express"
import disciplineRoutes from "./Routes/DisciplineRouter.js"
import taskRoutes from "./Routes/TaskRouter.js"
import freeTimeRouter from "./Routes/FreetimeRouter.js"
import planningRouter from "./Routes/PlanningRouter.js"
import geminiRouter from "./Routes/GeminiRouter.js"
import scheduleRouter from "./Routes/ScheduleRouter.js"
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
