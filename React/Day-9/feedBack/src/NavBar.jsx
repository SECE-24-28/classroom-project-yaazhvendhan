import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nv'>
        <nav> <Link to="/" >Home</Link></nav>
        <nav> <Link to="/newpost" >Post</Link> </nav>
    </div>
  )
}

export default NavBar