import { Routes, Route, useParams } from 'react-router-dom'
import Main from './pages/main'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}
