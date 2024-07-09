import React from 'react'
import Header from './src/Components/Header'
import Footer from './src/Components/Footer'
import { Outlet } from 'react-router-dom'


// changes will happen only in outlet and rest will be fixed and jaha rakha uske upar neeche sab fix
// is file ko router ko bhi bolte

function Layout() {
  return (
    <>
    <Header/>
    {/* through outlet nesting is done keeping Header and footer fixed */}
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout