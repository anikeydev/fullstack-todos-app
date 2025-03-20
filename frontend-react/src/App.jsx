import { BrowserRouter, Routes, Route } from 'react-router'
import TodosLayout from './routes/TodosLayout'
import LoginLayout from './routes/LoginLayout'
import RegisterLayout from './routes/RegisterLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodosLayout />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/register" element={<RegisterLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
