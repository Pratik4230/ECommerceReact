import React , {Suspense ,lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import Info from './components/Info.jsx'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import LogIn from './components/LogIn.jsx'
import Contact from './components/Contact.jsx'

const Profile = lazy(() => import('../src/components/Profile'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='/' element={<Home/>}/>
     
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>} />
      
      <Route path='/profile' element={( <Suspense fallback= {<p>heelo</p>}> <Profile/> </Suspense> )} />
             
      <Route path='/info/:id' element={<Info/>}/>
      <Route path='/cart/info/:id' element={<Info/>}/>
      

    </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
