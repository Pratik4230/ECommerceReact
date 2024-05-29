import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import userContext from '../../utils/userContext'
import { useContext } from 'react'


const Footer = () => {

  const {username} = useContext(userContext)

const cartItems = useSelector((store) => store.cart.items )



  return (
    <div className=' md:hidden  w-full fixed bottom-0 bg-black  rounded-xl '>
        <nav className=' w-full '>
      <ul className="   flex  p-1   justify-evenly font-semibold  rounded-bl-3xl rounded-tr-3xl " >
                <li className="   cursor-pointer p-1.5  rounded-tr-3xl text-white bg-blue-600 hover:bg-white border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Home </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-ss-3xl text-white bg-blue-600 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Contact </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-3xl text-white bg-blue-600 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> About </Link> </li>
                <li className="  cursor-pointer p-1.5 pr-3 rounded-e-3xl text-white bg-blue-600  hover:bg-white border-blue-600 border-2 hover:text-red-900"> <Link to={'/cart'}> Cart {cartItems.length} </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-bl-2xl text-white bg-blue-600 hover:bg-white  border-blue-600  border-2 hover:text-red-900">  {username}</li>
            </ul>   
        </nav>
    </div>
  )
}

export default Footer
