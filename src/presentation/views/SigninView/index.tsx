import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { AuthService } from '@/services/AuthService'

const SigninView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    try {
      const response = AuthService.register({ email, password })
      alert(response.message)
      navigate('/login') // Redireciona para a tela de login após o registro
    } catch (error) {
      alert('Erro ao criar conta')
    }
  }

  return (
    <div>
      <h2>Criar conta</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Criar</button>
    </div>
  )
}

export default SigninView