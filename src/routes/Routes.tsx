import React, { FC, lazy, Suspense } from 'react'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { MainLayout } from '@/presentation/layouts/MainLayout'

import { PrivateRoute } from './PrivateRoute'

const HomeView = lazy(async () => await import('@/presentation/views/HomeView'))
const LoginView = lazy(async () => await import('@/presentation/views/LoginView'))
const DashboardView = lazy(async () => await import('@/presentation/views/DashboardView'))

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <MainLayout>
                  <DashboardView />
                </MainLayout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  )
}
