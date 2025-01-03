import React, { FC, ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'
import { useAuth } from '@/hooks/useAuth'

interface PublicRouteProps {
  children: ReactNode
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate to={ROUTES.DASHBOARD} /> : <>{children}</>
}
