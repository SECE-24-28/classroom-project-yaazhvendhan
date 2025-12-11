import { useEffect, useState } from 'react'
import api from './api/Post'
import Home from './Home'
import './App.css'

function App() {
  const [posts,setPosts]=useState([])
  const [search,setSearch] = useState("")

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
    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
    <Home posts={posts}/>

    </>
  )
}

export default App
