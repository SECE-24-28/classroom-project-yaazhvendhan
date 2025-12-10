import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
    const {id}=useParams();
    const navigate = useNavigate()
  return (
    <div>
        <p>Post-{id}</p>
        <button onClick={() => {navigate("/gallary")}}>move to gallary</button>
    </div>
  )
}

export default Post