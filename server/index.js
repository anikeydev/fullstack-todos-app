import express from 'express'
import cors from 'cors'
import { v4 } from 'uuid'
import { config } from 'dotenv'
import { deleteTodo, insertTodo, selectAll, updateTodo } from './db.js'

config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('<h1>This is Fullstack app</h1>')
})

app.get('/api/v1/todos', async (req, res) => {
  const todos = await selectAll()
  res.status(200).send(todos)
})

app.post('/api/v1/todos', async (req, res) => {
  const newTodo = {
    ...req.body,
    id: v4(),
  }
  await insertTodo(newTodo)
  res.status(200).send({ message: `Created new todo with ID: ${newTodo.id}` })
})

app.delete('/api/v1/todos/:id', async (req, res) => {
  await deleteTodo(req.params.id)
  res.status(200).send({ message: `Deleted todo with ID: ${req.params.id}` })
})

app.put('/api/v1/todos/:id', async (req, res) => {
  await updateTodo(req.params.id, req.body)
  res.status(200).send({ message: `Update todo with ID: ${req.params.id}` })
})

app.listen(PORT, () => {
  return `Server has been started on port: ${PORT}`
})
