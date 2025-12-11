import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Home = () => {
  const{searchResult}=useContext(DataContext)

  return (
    <div>
      <table className='tble'>
                  <tr>
            <td>Title</td>
            <td>Date&Time</td>
            <td>Body</td>
          </tr>
            {
      searchResult.map((post)=>
      <tbody>
        

          <tr>
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