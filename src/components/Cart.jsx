import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Info from './Info'
import Ecard from './Ecard'
import { Link } from 'react-router-dom'
import { clearCart } from '../redux-store/cartSlice'

const Cart = () => {



const cartItems = useSelector((store) => store.cart.items)
// console.log(cartItems)

  const dispatch = useDispatch()

  
  return (
    <div className='flex mb-10 md:mb-0 flex-col items-center '>

       { cartItems.length == 0  ? <p>Looks like your cart is empty</p> : <p> anything else </p> }

        
            <h1 className='text-slate-800 text-5xl font-bold'>Cart</h1>

            <div className='flex flex-col items-center mt-7'>
            <button onClick={() => (dispatch(clearCart()))} className='bg-blue-600 p-2 text-white border-blue-600 border-2 font-semibold rounded-xl   hover:bg-white hover:text-black'>Clear Cart</button>
        

        <section> 
        {cartItems.map((obj) => (
           <section key={obj.id}>  <Link  to={`info/${obj.id}`}> <Ecard  resData={obj}/>  </Link>   </section> 
        ))}
        </section>

        </div>
    </div>
  )
}

export default Cart