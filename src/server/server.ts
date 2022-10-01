import express from "express"

const app = express()
const port = process.env.PORT || 4001

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello world',
	})
})

app.listen(port, () => {
	console.log(`Server listening on ${port}`)
})
