import { StrictMode, useState } from 'react'
import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Gallary from './Gallary'
import Home from './Home'
import Post from './Post'



function App() {

  return (
    <div>

      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to='/gallary'>Gallary</Link> </li>

      </ul>

    

      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/gallary" element={<Gallary />}>Gallary</Route>
        <Route path="/gallary/:id" element={<Post />}>post</Route>        

      </Routes>
    </div>
  
  )
}

export default App




