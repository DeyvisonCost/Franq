import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { AuthService } from '@/services/AuthService'

export interface AuthContextProps {
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const hasToken = AuthService.isAuthenticated()
    setIsAuthenticated(hasToken)
  }, [])

  const login = (email: string, password: string) => {
    try {
      AuthService.login(email, password)
      setIsAuthenticated(true)
    } catch (error) {
      alert(error.message)
    }
  }

  const logout = () => {
    AuthService.logout()
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}