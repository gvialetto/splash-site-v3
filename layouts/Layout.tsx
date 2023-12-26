import React from 'react'
import './Layout.css'

export { Layout }

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 min-h-screen">
      <div className="container mx-auto pt-10 pl-10 pr-10">
        {children}
      </div>
    </div>
  )
}
