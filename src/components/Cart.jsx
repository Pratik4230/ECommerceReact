import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus , FaPlus  } from "react-icons/fa";
import Info from './Info'
import Ecard from './Ecard'
import { Link } from 'react-router-dom'
import { clearCart, removeItems , incrementItem , decrementItem } from '../redux-store/cartSlice'

const Cart = () => {



const cartItems = useSelector((store) => store.cart.items)
// console.log(cartItems)

  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    dispatch(removeItems(id));
  }

  const handleIncrementItem = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrementItem = (id) => {
    dispatch(decrementItem(id));
  };
  
  return (
    <div className='flex mb-10 md:mb-0 flex-col items-center '>

       { cartItems.length == 0  ? <p>Looks like your cart is empty</p> : <p> anything else </p> }

        
            <h1 className='text-slate-800 text-5xl font-bold'>Cart</h1>

            <div className='flex flex-col items-center mt-7'>
            <button onClick={() => (dispatch(clearCart()))} className='bg-blue-600 p-2 text-white border-blue-600 border-2 font-semibold rounded-xl   hover:bg-white hover:text-black'>Clear Cart</button>
        

        <section className=' mt-4'> 
        {cartItems.map((obj) => (
           <section key={obj.id} className='bg-slate-300 m-7 p-2'>  <Link  to={`info/${obj.id}`}> <Ecard  resData={obj}/>   </Link>   
            <div className='flex justify-between   m-2 mt-5' > 
              <section className=' w-1/2  flex justify-evenly  items-center  bg-[#dbeafe] py-2 rounded-lg border-2 border-blue-700  '>
              <button onClick={() => handleDecrementItem(obj.id)} className='text-black font-bold p-1 text-xl '><FaMinus /></button>
              <span className='text-black font-bold px-2 bg-[#bae6fd] rounded-md '>{obj.count}</span>
              <button onClick={() => handleIncrementItem(obj.id)} className='text-black font-bold p-1'><FaPlus/></button>
              </section>

              <button onClick={() => handleRemoveItem(obj.id)}  className='bg-blue-500 p-1  text-white font-semibold rounded' >Remove</button>

               </div>
          
             </section> 
        ))}
        </section>

        </div>
    </div>
  )
}

export default Cart