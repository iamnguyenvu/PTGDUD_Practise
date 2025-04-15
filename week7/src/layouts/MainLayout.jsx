import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
        <Sidebar />
        <div className="bg-gray-50">
            <Navbar />
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default MainLayout