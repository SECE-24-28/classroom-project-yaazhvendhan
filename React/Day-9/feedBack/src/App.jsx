import { useContext, useEffect, useState } from 'react'
import api from './api/Post'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import './App.css'
import { format } from 'date-fns'
import { DataProvider } from './context/DataContext'

function App() {
  

  return (
    <>
    <DataProvider>
    <Search />
            <hr />
    <AddPost />
    <hr />
    <Home />
</DataProvider>
    </>
  )
}

export default App



