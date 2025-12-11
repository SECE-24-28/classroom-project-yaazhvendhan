import React from 'react'

const AddPost = ({title,setTitle,body,setBody,handleSubmit}) => {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" id="" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br></br><br></br>
        <textarea name="" id="" placeholder='Body'value={body} onChange={(e)=>setBody(e.target.value)}></textarea><br></br>
        <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default AddPost