import React, { FC, ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

interface PrivateRouteProps {
  children: ReactNode
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />
}
