import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
// import Testimonials from './components/Testimonials'

function App() {


  return (
    
    <div className='di' >
      <NavBar />
      <Header />
      <HeroSection />
      {/* <Testimonials /> */}
     </div>
     

     
      
    
  )
}

export default App
