import React, { FC, ReactNode } from 'react'

import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  children?: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow">{children || <Outlet />}</main>
    </div>
  )
}
