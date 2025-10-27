import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
dotenv.config()

const googleAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export async function gemini(pdfBuffer) {
  const contents = [
    { text: "Faça um cronograma para estudos no periodo de 1 semana do conteúdo do pds recebido. O tempo de estudo diário é de apenas uma hora. Monte uma tabela separando por topicos de estudos." },
    {
      inlineData: {
        mimeType: "application/pdf",
        data: pdfBuffer.toString("base64"),
      },
    },
  ]

  const response = await googleAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  })

  return response.text
}

