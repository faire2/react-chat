import cors from "cors"
import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
app.use(cors())

const port = process.env.PORT || 4001
const server = http.createServer(app)

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ["GET", "POST"]
	}
})

io.on('connection', (socket) => {
	console.log(`Logged  in: ${socket.id}`)

	socket.on('disconnect', () => {
		console.log(`Logged out: ${socket.id}`)
	})
})

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello world',
	})
})

server.listen(port, () => {
	console.log(`Server listening on ${port}`)
})
