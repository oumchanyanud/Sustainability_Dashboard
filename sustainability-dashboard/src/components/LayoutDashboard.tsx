'use client'
import React from 'react'

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 flex flex-col text-gray-800 dark:text-white font-rounded scroll-smooth">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">🌱 Sustainability Dashboard</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-green-100 dark:bg-green-800 p-4 hidden md:block">
          <nav className="space-y-2 text-sm font-semibold">
            <p className="text-gray-600 dark:text-gray-300">Sections:</p>
            <ul className="space-y-1">
              <li><a href="#upload" className="hover:underline">📂 Import Data</a></li>
              <li><a href="#insight" className="hover:underline">📌 Data Summary</a></li>
              <li><a href="#table" className="hover:underline">📊 Table</a></li>
              <li><a href="#chart" className="hover:underline">📈 Chart</a></li>
              <li><a href="#api" className="hover:underline">🔄 API Metrics</a></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 space-y-6">{children}</main>
      </div>
    </div>
  )
}