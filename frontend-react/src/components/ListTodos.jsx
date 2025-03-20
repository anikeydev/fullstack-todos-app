import ItemTodo from './ItemTodo'
import { useSelector, useDispatch } from 'react-redux'

export default function ListTodo() {
  const todosDB = useSelector((state) => state.todos)

  return (
    <div className="p-4 pb-3 bg-dark bg-opacity-75 rounded shadow">
      {todosDB.map((todo) => (
        <ItemTodo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}
