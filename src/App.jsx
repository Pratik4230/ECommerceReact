
import './App.css'
import Ecard from './components/Ecard'
import Home from './components/Home'
import Header from './components/Header'
import Info from './components/Info'
import {Outlet} from 'react-router-dom'
import userContext from '../utils/userContext'
import { useEffect, useState } from 'react'
import {Provider} from 'react-redux'
import createStore from './redux-store/createStore'
import Cart from './components/Cart'


function App() {
 
  const [name , setName] = useState()

  useEffect( () => {
    const dummyUser = {
      username : "Pratik"
    }
    setName(dummyUser.username)
  },[])
  

  return (
    <Provider store={createStore}>
    <userContext.Provider value={{username : name , setName}}>
    <>
    
    <Header/>
    <Outlet/>
    </>
    </userContext.Provider>
    </Provider>
  )
}

export default App
