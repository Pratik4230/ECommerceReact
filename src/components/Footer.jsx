
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { TiHomeOutline } from "react-icons/ti";
import { MdPermContactCalendar , MdPermIdentity} from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";


import { FaShoppingCart } from "react-icons/fa";


const Footer = () => {


const cartItems = useSelector((store) => store.cart.items )



  return (
    <div className= " md:hidden  w-full fixed bottom-0  bg-black rounded-xl ">
        <nav className=' w-full '>
      <ul className="   flex  p-1 items-center  justify-evenly font-semibold  rounded-bl-3xl rounded-tr-3xl " >
                <li className="cursor-pointer flex items-center justify-center p-2 h-10 rounded-lg text-white hover:bg-white   border-2 hover:text-blue-600 duration-300  hover:scale-y-110  hover:-scale-x-125"> <Link to={'/'}> <TiHomeOutline /> </Link> </li>
                <li className="cursor-pointer flex items-center justify-center p-2 h-10 rounded-lg text-white   hover:bg-white   border-2 hover:text-blue-600 duration-300  hover:scale-y-110  hover:-scale-x-125"> <Link to={'/'}> <MdPermContactCalendar /> </Link> </li>
                <li className="cursor-pointer flex items-center justify-center p-2 h-10 rounded-lg text-white   hover:bg-white   border-2 hover:text-blue-600   duration-300  hover:scale-y-110  hover:-scale-x-125"> <Link to={'/profile'}> <MdPermIdentity /> </Link> </li>
                <li className="cursor-pointer flex items-center justify-center p-1 h-10 w-10  rounded-lg text-white  hover:bg-white   border-2 hover:text-blue-600  "> <Link to={'/cart'}> <FaShoppingCart /> {cartItems.length} </Link> </li>
                <li className="cursor-pointer flex  items-center justify-center p-2 h-10 rounded-lg text-white  hover:bg-white  border-2 hover:text-blue-600   duration-300  hover:scale-y-110  "> <Link to={'/login'}> <PiSignOutFill /> </Link> </li>
            </ul>   
        </nav>
    </div>
  )
}

export default Footer
