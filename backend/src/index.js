import express from "express"
import disciplineRoutes from "./Routes/dicipline-router.js"
import taskRoutes from "./Routes/task-router.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/discipline", disciplineRoutes)
app.use("/tasks", taskRoutes);


app.listen(8800)

export default app;
