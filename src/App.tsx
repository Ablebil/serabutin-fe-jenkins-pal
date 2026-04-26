import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import AuthLayout from './shared/layouts/AuthLayout'
import RegisterForm from './features/auth/components/RegisterForm'
import LoginForm from './features/auth/components/LoginForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/jobs" replace/>}/>

        <Route path='/' element={<AuthLayout />}>
          <Route path='register' element={<RegisterForm />}/>
          <Route path='login' element={<LoginForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
