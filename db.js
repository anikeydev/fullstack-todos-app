import pg from 'pg'

const { Client } = pg

const client = new Client({
  user: 'server',
  password: process.env.DBPASS || 'vdbcr#8v',
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
    values: [newTodo.id, newTodo.title, false],
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
    text: `UPDATE todos SET id='${id}', title='${newTodo.title}', completed='${newTodo.completed}' WHERE id='${id}'`,
  }
  return await client.query(queryUpdate)
}

// console.log(
//   await updateTodo('e08bcf39-03f3-43f3-8639-8d899943e8e0', {
//     title: 'Добавить удаление',
//     completed: false,
//   })
// )

// await deleteTodo('da786dd9-6629-4cd8-bef9-7a035dedb937')

// console.log(await selectAll())
