import React, { FC, lazy, Suspense } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { LoadingFallback } from '@/components/LoadingFallback'
import { ROUTES } from '@/config/routes'
import { MainLayout } from '@/presentation/layouts/MainLayout'

import { PrivateRoute } from './PrivateRoute'

const HomeView = lazy(async () => await import('@/presentation/views/HomeView'))
const LoginView = lazy(async () => await import('@/presentation/views/LoginView'))
const DashboardView = lazy(async () => await import('@/presentation/views/DashboardView'))
const NotFoundView = lazy(async () => await import('@/presentation/views/NotFoundView'))

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path={ROUTES.LOGIN} element={<LoginView />} />

          <Route
            path={ROUTES.DASHBOARD}
            element={
              <PrivateRoute>
                <MainLayout>
                  <DashboardView />
                </MainLayout>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
