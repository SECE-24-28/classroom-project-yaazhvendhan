import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [list,setList]=useState([
    {id:1,sname:"Vinoth",fee:false},
    {id:2,sname:"Ram",fee:true},
    {id:3,sname:"Sita",fee:true},
    {id:4,sname:"Noor",fee:false}
  ]
  );

  const handleDelete=(id)=>
  {
    const newList=list.filter((ls)=>ls.id!=id)
    setList(newList)
  }
  
  const handleCheck=(id)=>
  {
    const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
    setList(newList)
  }


  return (
    <>
    <div className="container">
    <h1>Student List</h1>
    <hr />
    <ul>
      {
        list.map((ls)=>
          <li key={ls.id} className="innerContainer">
            <input type="checkbox" checked={ls.fee} onChange={()=>handleCheck(ls.id)}></input>
            <label>{ls.sname}</label>
            <button onClick={()=>handleDelete(ls.id)}>Delete</button>
          </li>
        
        )
      }
    
    </ul>
    </div>
    </>
  )
}

export default App
