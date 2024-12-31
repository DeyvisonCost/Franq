import { useEffect, useState } from 'react'

import { AuthService } from '@/services/AuthService'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(AuthService.isAuthenticated())
  }, [])

  const login = (email: string, password: string) => {
    try {
      AuthService.login(email, password)
      setIsAuthenticated(true) // Atualiza o estado após o login
    } catch (error) {
      alert(error.message)
    }
  }

  const logout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
  }

  return { isAuthenticated, login, logout }
}
