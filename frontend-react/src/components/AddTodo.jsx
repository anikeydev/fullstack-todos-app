export default function AddTodo() {
  return (
    <div className="d-flex justify-content-between p-3 mb-4 bg-dark bg-opacity-75 rounded shadow">
      <div className="w-75">
        <input
          type="text"
          className="form-control w-100"
          placeholder="Добавить задачу"
        />
      </div>
      <button className="btn btn-primary">Добавить</button>
    </div>
  )
}
