import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

const createStore = configureStore({
     reducer:{
        cart : cartReducer
     },
})

export default createStore;