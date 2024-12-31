import { User } from './types'

export const AuthService = {
  register: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user))
    return { message: 'Usuário registrado com sucesso!' }
  },

  login: (email: string, password: string) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (user.email === email && user.password === password) {
      const token = 'fake-jwt-token'
      localStorage.setItem('token', token)
      return { token }
    }
    throw new Error('Credenciais inválidas')
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },
}
