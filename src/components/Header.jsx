import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import userContext from "../../utils/userContext"
import { useSelector } from "react-redux"

import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";


const Header = () => {

const[hamb , sethamb] = useState(false);
console.log(hamb)

  const {username} = useContext(userContext)
  // console.log("data" ,username)

const cartItems = useSelector((store) => store.cart.items )
// console.log(cartItems);

  return (
    <div className="w-12/12" >
        <nav className="  flex bg-white p-1  justify-between ">
            <div className="flex justify-center "><img src="" alt="Image" /></div>
   <p className="md:hidden flex items-center " onClick={ () => {sethamb(!hamb)}}> {hamb ? <ImCross /> : <IoMenu /> }  </p>
   

   { hamb &&
    <section className=" md:hidden bg-red-500 mt-8 w-9/12 absolute  indent-0 h-48">
   <ul className="  bg-slate-100  p-1  flex flex-col  items-center  font-semibold  rounded-bl-3xl rounded-tr-3xl " >
                <li className=" w-3/12 flex justify-center cursor-pointer  p-1.5  my-3 rounded-tr-3xl text-white bg-blue-500 hover:bg-white border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Home </Link> </li>
                <li className=" w-3/12  flex justify-center cursor-pointer p-1.5 my-3 rounded-ss-3xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Contact </Link> </li>
                <li className=" w-3/12 flex justify-center cursor-pointer p-1.5 my-3 rounded-3xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> About </Link> </li>
                <li className="w-3/12 flex justify-center cursor-pointer p-1.5 my-3 pr-3 rounded-e-3xl text-white bg-blue-400  hover:bg-white border-blue-600 border-2 hover:text-red-900"> <Link to={'/cart'}> Cart {cartItems.length} </Link> </li>
                <li className=" w-3/12 flex justify-center cursor-pointer p-1.5 my-3 rounded-bl-2xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900">  {username}</li>
            </ul> 
            </section>}   

          <ul className=" hidden md:flex bg-slate-100  p-1  sm:w-1/3 justify-evenly font-semibold  rounded-bl-3xl rounded-tr-3xl " >
                <li className="   cursor-pointer p-1.5  rounded-tr-3xl text-white bg-blue-500 hover:bg-white border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Home </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-ss-3xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> Contact </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-3xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900"> <Link to={'/'}> About </Link> </li>
                <li className="  cursor-pointer p-1.5 pr-3 rounded-e-3xl text-white bg-blue-400  hover:bg-white border-blue-600 border-2 hover:text-red-900"> <Link to={'/cart'}> Cart {cartItems.length} </Link> </li>
                <li className="  cursor-pointer p-1.5 rounded-bl-2xl text-white bg-blue-500 hover:bg-white  border-blue-600  border-2 hover:text-red-900">  {username}</li>
            </ul>   
        </nav>
    </div>
  )
}

export default Header