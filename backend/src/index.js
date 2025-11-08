import app from "./app.js"

app.listen(8800)

// import axios from "axios"
// app.listen(8800, async () => {
// 	console.log(`Server listening on port ${8800}`)
// 	try {
// 		// Trigger building planning for user 1 on startup
//     const url = `http://localhost:${8800}/buildPlanning/1`
// 		const resp = await axios.get(url)
//     console.log("respotas: ", resp.data)
// 		console.log('Triggered buildPlanning for user 1, status:', resp.status)
// 	} catch (err) {
// 		console.error('Error triggering buildPlanning on startup:', err.message)
// 	}
// })
