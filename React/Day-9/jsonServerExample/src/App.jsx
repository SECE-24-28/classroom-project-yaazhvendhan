import { useEffect, useState } from 'react'
import api from './api/Stu_api'

import './App.css'

function App() {
  const [Slist,setSlist]=useState([])

  useEffect(()=>
  {
    const fetData=async()=>{
      const res=await api.get('/student')
      setSlist(res.data)
    }
    fetData()
  },[])


  return (
    <>
    <h1>Student List</h1>
    {
      Slist.map((stu)=>
      <p key={stu.sid}> - {stu.sname} - {stu.smark}</p>
      )
    }
      
    </>
  )
}

export default App
