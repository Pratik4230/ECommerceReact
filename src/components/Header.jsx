
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../redux-store/categorySlice"



const Header = () => {
  
  // console.log(toggle);
const cartItems = useSelector((store) => store.cart.items )
// console.log(cartItems);

 const dispatch = useDispatch()

      const toggleCategory = ()=> {
        dispatch(toggleMenu())
      }
      


  return (
    <div   className= " sticky top-0 w-12/12  ">
        <nav className="  flex bg-slate-900 p-1  justify-between ">
          
             <button onClick={toggleCategory} className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-3 py-2 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">Category </button> 

          <ul className=" hidden md:flex bg-slate-100  p-1  sm:w-1/3 justify-evenly font-semibold  rounded-bl-3xl rounded-tr-3xl " >
                <li className="   cursor-pointer p-1.5  rounded-tr-3xl text-white bg-blue-500 hover:bg-white border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Home </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-ss-3xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/contact'}> Contact </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-3xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/profile'}> Profile </Link> </li>
                <li className="  cursor-pointer p-1.5 pr-3 rounded-e-3xl text-white bg-blue-400  hover:bg-white border-blue-600 border-2 hover:text-red-900"> <Link to={'/cart'}> Cart {cartItems.length} </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-bl-2xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900 "> <Link  to={'/login'} >Sign Out</Link> </li>
            </ul>   
        </nav>
    </div>
  )
}

export default Header