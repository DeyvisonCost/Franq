import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = () => {
    try {
      login(email, password) // Usando o login do hook useAuth
      alert('Login bem-sucedido!')
      navigate('/dashboard') // Redireciona para o Dashboard após o login
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}

export default LoginView
