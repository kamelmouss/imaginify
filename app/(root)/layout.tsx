import React from 'react'
import Sidebar from '../components/shared/Sidebar'
import MobileNav from '../components/shared/MobileNav'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
     

      <Sidebar />

      <MobileNav />
      
      <div className="root-container">
        
           {children}

       
      </div>      
    </main>
  )
}

export default Layout

