import express from 'express'
import { selectAll } from './db.js'

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('<h1>This is Fullstack app</h1>')
})

app.get('/api/v1/todos', async (req, res) => {
  const todos = await selectAll()
  res.status(200).send(todos)
})

app.listen(PORT, () => `Server has been started on port: ${PORT}`)
