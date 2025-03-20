export default function ItemTodo(props) {
  const { id, title, completed } = props.todo

  return (
    <div className="d-flex flex-row align-items-center justify-content-between card p-2 mb-2">
      <div className="d-flex flex-row gap-3 align-items-center">
        <input
          type="checkbox"
          className="form-check-input m-0"
          role="button"
          checked={completed}
        />
        <strong className={completed && 'text-decoration-line-through'}>
          {title}
        </strong>
      </div>
      <button className="btn btn-sm btn-danger">&times;</button>
    </div>
  )
}
