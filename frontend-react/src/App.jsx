import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import TodosLayout from './routes/TodosLayout'
import LoginLayout from './routes/LoginLayout'
import RegisterLayout from './routes/RegisterLayout'
import { store } from './states/StateTodos'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodosLayout />} />
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/register" element={<RegisterLayout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
