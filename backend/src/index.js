import express from "express"
import disciplineRoutes from "./Routes/discipline-router.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/discipline", disciplineRoutes)


app.listen(8800)

export default app;
