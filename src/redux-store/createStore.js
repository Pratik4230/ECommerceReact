import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import categoryReducer from './categorySlice'


const createStore = configureStore({
     reducer:{
        cart : cartReducer,
        category: categoryReducer
     },
})

export default createStore;