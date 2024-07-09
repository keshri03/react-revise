import React,{ useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      {/* <h1 className='bg-orange-500'>Good</h1> */}
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
