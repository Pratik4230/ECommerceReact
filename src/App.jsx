
import './App.css'
import Ecard from './components/Ecard'
import Home from './components/Home'
import Header from './components/Header'
import Info from './components/Info'
import {Outlet} from 'react-router-dom'

function App() {
 

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
