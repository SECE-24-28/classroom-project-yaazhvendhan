import { useEffect, useState } from 'react'
import api from './api/Post'
import Home from './Home'
import './App.css'

function App() {
  const [posts,setPosts]=useState([])
  const [search,setSearch] = useState("")
  const [searchResult,setSearchResult]=useState([])

  useEffect(()=>
  {
    const fetData=async()=>{
      const res = await api.get("/feedback");
      setPosts(res.data)
    }
    fetData()
  },[])


  useEffect(()=>
  {
    const filterd=posts.filter((post)=>(post.title).includes(search.toLowerCase()))
    setSearchResult(filterd)
  },[posts,search])



  return (
    <>
    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
    <Home searchResult={searchResult}/>

    </>
  )
}

export default App


