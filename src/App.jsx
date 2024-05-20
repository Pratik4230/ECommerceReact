
import './App.css'
import Ecard from './components/Ecard'
import Home from './components/Home'
import Header from './components/Header'
import Info from './components/Info'
import {Outlet} from 'react-router-dom'
import userContext from '../utils/userContext'
import { useEffect, useState } from 'react'


function App() {
 
  const [name , setName] = useState()

  useEffect( () => {
    const dummyUser = {
      username : "Pratik"
    }
    setName(dummyUser.username)
  },[])
  

  return (
    <userContext.Provider value={{username : name , setName}}>
    <>
    <Header/>
    <Outlet/>
    </>
    </userContext.Provider>
  )
}

export default App
