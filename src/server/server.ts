import cors from "cors"
import express from "express"
import http from "http"

const app = express()
app.use(cors())

const port = process.env.PORT || 4001
const server = http.createServer(app)

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello world',
	})
})

server.listen(port, () => {
	console.log(`Server listening on ${port}`)
})
