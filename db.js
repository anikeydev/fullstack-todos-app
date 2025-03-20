import pg from 'pg'
import { v4 } from 'uuid'

const { Client } = pg

const client = new Client({
  user: 'server',
  password: 'vdbcr#8v',
  host: 'localhost',
  port: 5001,
  database: 'mytodos',
})

await client.connect()

export const selectAll = async () => {
  const { rows } = await client.query(`SELECT * FROM todos`)
  return rows
}

export const insertTodo = async (newTodo) => {
  const queryInsert = {
    text: 'INSERT INTO todos (id, title, completed) VALUES($1, $2, $3)',
    values: [v4(), newTodo.title, false],
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

// console.log(await insert({ title: 'Добавить удаление' }))

// await deleteTodo('43acfc02-218f-4407-a69e-a45a66ac1357')

// console.log(await selectAll())
