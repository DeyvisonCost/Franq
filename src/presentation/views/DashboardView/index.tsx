import React, { useState } from 'react'

import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

const DashboardView = () => {
  const { logout } = useAuth()
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  const handleLogout = () => {
    logout()
    setRedirectToLogin(true) // Atualiza o estado para redirecionar
  }

  // Se a flag de redirecionamento for verdadeira, redireciona para o login
  if (redirectToLogin) {
    return <Navigate to={ROUTES.LOGIN} />
  }

  return (
    <>
      DashboardView <button onClick={handleLogout}>LOGOUT</button>
    </>
  )
}

export default DashboardView
