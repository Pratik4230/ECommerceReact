
import './App.css'

import Ecard from './components/Ecard'
import Home from './components/Home'
import Header from './components/Header'
import Info from './components/Info'
import {Outlet} from 'react-router-dom'
import createStore from './redux-store/createStore'


import {Provider} from 'react-redux'

import Cart from './components/Cart'
import Footer from './components/Footer'


function App() {


  return (
    <Provider store={createStore}>
    
    <>
    <Header/>

    <Outlet/>
    <Footer/>
    </>
   
    </Provider>
  )
}

export default App
