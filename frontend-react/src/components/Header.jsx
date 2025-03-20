import { useNavigate } from 'react-router'

export default function Header() {
  let navigate = useNavigate()

  return (
    <header className="d-flex justify-content-between mb-4 bg-dark p-4 text-white bg-opacity-75 rounded-bottom shadow">
      <h1 role="button" onClick={() => navigate('/')}>
        Todos
      </h1>
      <div className="btn-group w-50">
        <button
          className="btn btn-outline-light"
          onClick={() => navigate('/register')}>
          Регистрация
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => navigate('/login')}>
          Вход
        </button>
      </div>
    </header>
  )
}
