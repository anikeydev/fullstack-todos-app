import pg from 'pg'
import { config } from 'dotenv'

config()
const { Client } = pg

const client = new Client({
  user: 'postgres',
  password: process.env.DBPASS,
  host: 'localhost',
  port: 5001,
  database: 'mytodos',
})

await client.connect()

export const selectAll = async () => {
  const { rows } = await client.query(`SELECT * FROM todos order by id`)
  return rows
}

export const insertTodo = async (newTodo) => {
  const queryInsert = {
    text: 'INSERT INTO todos (id, text, completed) VALUES($1, $2, $3)',
    values: [newTodo.id, newTodo.text, false],
  }

  const res = await client.query(queryInsert)
  return res
}

export const deleteTodo = async (id) => {
  const queryDelete = {
    text: `DELETE FROM todos WHERE id='${id}'`,
  }

  return await client.query(queryDelete)
}

export const updateTodo = async (id, newTodo) => {
  const queryUpdate = {
    text: `UPDATE todos SET id='${id}', text='${newTodo.text}', completed='${newTodo.completed}' WHERE id='${id}'`,
  }
  return await client.query(queryUpdate)
}
