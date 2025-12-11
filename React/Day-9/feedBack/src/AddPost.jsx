import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const AddPost = () => {
    const {title,setTitle,body,setBody,handleSubmit}=useContext(DataContext)
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" id="" placeholder='Title' className='tle' value={title} onChange={(e)=>setTitle(e.target.value)}/><br></br><br></br>
        <textarea name="" id="" placeholder='Body' className='bdy' value={body} onChange={(e)=>setBody(e.target.value)}></textarea><br></br>
        <button type='submit' className='btn'>Save</button>
        </form>
    </div>
  )
}

export default AddPost