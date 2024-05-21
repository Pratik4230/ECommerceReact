import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Info from './Info'
import Ecard from './Ecard'
import { Link } from 'react-router-dom'
import { clearCart } from '../redux-store/cartSlice'

const Cart = () => {

const cartItems = useSelector((store) => store.cart.items)
console.log(cartItems)

  const dispatch = useDispatch()

  const removeItem = (e) => {
   let a = e.target.value
   console.log("clicked")
   console.log(a)
  }
  return (
    <div className=''>
        <div>
            <h1>Cart</h1>
            <button onClick={() => (dispatch(clearCart()))}>Clear Cart</button>
        </div>

        <section> 
        {cartItems.map((obj) => (
           <section key={obj.id}>  <Link  to={`info/${obj.id}`}> <Ecard  resData={obj}/>  </Link>  <button onClick={removeItem}>Remove</button> </section> 
        ))}
        </section>
    </div>
  )
}

export default Cart