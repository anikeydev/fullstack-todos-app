import { createSlice, configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

const todosSlice = createSlice({
  name: 'state',
  initialState: {
    todos: await axios
      .get('http://localhost:8000/api/v1/todos')
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        console.log(e)
      }),
  },
  reducers: {
    addTodo,
  },
})

export const store = configureStore({
  reducer: todosSlice.reducer,
})

function addTodo(todo) {}
