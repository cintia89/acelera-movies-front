import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login/login'
import { Home } from './pages/Home/home'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  )
}
