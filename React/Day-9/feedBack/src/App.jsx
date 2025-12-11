import { useEffect, useState } from 'react'
import api from './api/Post'
import './App.css'

function App() {
  const [posts,setPosts]=useState([])

  useEffect(()=>
  {
    const fetData=async()=>{
      const res = await api.get("/feedback");
      setPosts(res.data)
    }
    fetData()
  },[])

  return (
    <>
    {
      posts.map((post)=>
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.datetime}</p>
        <p>{post.body}</p>
        <hr />
        </div>

      
      )
    }
  
    </>
  )
}

export default App
