import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import Search from './Search'

const Home = () => {
  const{searchResult}=useContext(DataContext)

  return (

    <div className='container'>
      <Search />< br></br>
      <table className='tble'>
            <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Date & Time</td>
            <td>Body</td>
          </tr>
            {
      searchResult.map((post)=>
      <tbody key={post.id}>
        

          <tr >
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.datetime}</td>
            <td>{post.body}</td>
          </tr>
          </tbody>

      
      )
    }
     </table>
    </div>
  )
}

export default Home