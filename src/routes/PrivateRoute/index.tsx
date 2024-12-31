import React, { FC, ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { AuthService } from '@/services/AuthService'

interface PrivateRouteProps {
  children: ReactNode
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated()

  return isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />
}
