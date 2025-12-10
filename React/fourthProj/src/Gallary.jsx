import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Gallary = () => {
    const navigate = useNavigate()
  return (
    <div>
       
        <p>This is Gallary Page</p>

        <button onClick={() => navigate("/gallary/1")}>post-1</button>
        <button onClick={() => navigate("/gallary/2")}>post-2</button>
        <button onClick={() => navigate("/gallary/3")}>post-3</button>

    </div>
  )
}

export default Gallary