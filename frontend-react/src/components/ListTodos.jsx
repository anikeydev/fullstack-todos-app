import ItemTodo from './ItemTodo'

export default function ListTodo() {
  const todos = [
    {
      id: '1',
      title: 'Go To Work',
      completed: false,
    },
    {
      id: '2',
      title: 'learn',
      completed: false,
    },
  ]

  return (
    <div className="p-4 pb-3 bg-dark bg-opacity-75 rounded shadow">
      {todos.map((todo) => (
        <ItemTodo todo={todo} />
      ))}
    </div>
  )
}
