import { useEffect, useState } from 'react'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import './App.css'
import { format } from 'date-fns'

function App() {
  const [posts,setPosts]=useState([])
  const [search,setSearch] = useState("") 
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')

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
    const filterd=posts.filter((post)=>(post.title.toLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filterd)
  },[posts,search])



  const handleSubmit=(e)=>
  {
    e.preventDefault()
    const id = (posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime = format(new Date(), "MMM dd,yyyy pp")
    // newObj={id:id,title:title,datetime:datetime,body:body} This is valid
   const  newObj={id,title,datetime,body}
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
  }




  return (
    <>
    <Search search={search}
            setSearch={setSearch}/>
            <hr />
    <AddPost title={title} setTitle={setTitle}
             body={body} setBody={setBody}
             handleSubmit={handleSubmit}/>
    <hr />
    <Home searchResult={searchResult}/>

    </>
  )
}

export default App



