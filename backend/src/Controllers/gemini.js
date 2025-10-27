import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function gemini(pdfBuffer) {
  const contents = [
    { text: "Faça um cronograma para estudos no periodo de 1 semana do conteúdo do pds recebido. O tempo de estudo diário é de apenas uma hora. Monte uma tabela separando por topicos de estudos. Quando houver mais do que um arquivo, separe os cronogrmas pelo nome do arquivo, para que seja legivel. " },
    {
      inlineData: {
        mimeType: "application/pdf",
        data: pdfBuffer.toString("base64"),
      },
    },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  });

  return response.text;
}

