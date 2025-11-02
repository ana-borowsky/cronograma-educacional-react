import express from "express"
import userRoutes from "./Routes/index.js"
import disciplineRoutes from "./Routes/index.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)
app.use("/discipline", disciplineRoutes);

app.listen(8800)

export default app;
