import React, { FC } from 'react'

import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = Boolean(localStorage.getItem('authToken'))

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />
}