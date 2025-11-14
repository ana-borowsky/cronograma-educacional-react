import app from "./app.js"
// import { promises as fsPromises } from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'

app.listen(8800)
// app.listen(8800, async () => {
//   console.log("Server listening on http://localhost:8800")
//   // Necessário para obter __dirname em ES Modules
//   const __filename = fileURLToPath(import.meta.url)
//   const __dirname = path.dirname(__filename)

//   // Versão assíncrona
//   async function verificarPDFExiste(caminho) {
//     try {
//       await fsPromises.access(caminho)
//       console.log('PDF existe!')
//       return true
//     } catch (erro) {
//       console.log('PDF não existe')
//       return false
//     }
//   }
//   // Enviar o PDF ao iniciar (com validações)
//   const caminhoPDF = path.join(__dirname, 'plano-ensino.pdf')
//   try {
//     const stats = await fsPromises.stat(caminhoPDF)
//     if (!stats.isFile()) {
//       console.log('Arquivo não encontrado (não é arquivo). Pulando upload.')
//     } else {
//       const MAX_BYTES = 10 * 1024 * 1024 // 10 MB
//       if (stats.size > MAX_BYTES) {
//         console.error(`Arquivo muito grande (${(stats.size / (1024 * 1024)).toFixed(2)} MB). Máx: 10 MB. Upload cancelado.`)
//       } else {
//         const buffer = await fsPromises.readFile(caminhoPDF)
//         const header = buffer.slice(0, 4).toString('utf8')
//         if (!header.startsWith('%PDF')) {
//           console.error('Arquivo inválido: não parece ser um PDF (assinatura mágica inválida). Upload cancelado.')
//         } else {
//           try {
//             // A rota atual aceita upload via body (base64) quando multer não está presente.
//             const base64 = buffer.toString('base64')
//             const payload = {
//               file: `data:application/pdf;base64,${base64}`,
//               filename: 'plano-ensino.pdf',
//               mimetype: 'application/pdf',
//             }

//             const res = await fetch('http://localhost:8800/pdf/5', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify(payload),
//             })

//             const body = await res.text()
//             console.log('Startup request to /pdf/5:', res.status, body)
//           } catch (fetchErr) {
//             console.error('Erro ao enviar POST para /pdf/5:', fetchErr)
//           }
//         }
//       }
//     }
//   } catch (err) {
//     if (err && err.code === 'ENOENT') {
//       console.log('PDF não existe. Pulando upload.')
//     } else {
//       console.error('Erro ao verificar/ler o PDF de startup:', err)
//     }
//   }

// })