import express from "express"
import userRoutes from "./Routes/index.js"
import cors from "cors"
import fs from "fs";
import multer from "multer";
import { gemini } from "./Controllers/gemini.js";

const app = express()

app.use(express.json())
app.use(cors())

const upload = multer({ dest: "uploads/"})

app.post("/upload" , upload.single("pdf"), async (req, res) => {
    try {
        const filePath = req.file.path
        const pdf = fs.readFileSync(filePath)
        const result = await gemini(pdf)

        fs.unlinkSync(filePath)
        res.json({ message: "PDF processado com sucesso!!" , result })

    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Falha ao processar o PDF!!" })
    }
})

app.use("/", userRoutes)

app.listen(8800)
