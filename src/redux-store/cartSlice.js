import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: [],
    },
    reducers:{
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      

            // if (!existingItem) {
            //   state.items.push(item);
            // }
            if (existingItem) {
                existingItem.count += 1;
              } else {
                state.items.push({ ...item, count: 1 });
              }
          },
        // addItem: (state,action) => {
        //     state.items.push(action.payload);
        // },
        removeItems: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(cartItem => cartItem.id !== id);
          },

        // removeItems:(state) => {
        //     state.items.pop();
        // },

        incrementItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.id === id);
            if (existingItem) {
              existingItem.count += 1;
            }
          },
          decrementItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(cartItem => cartItem.id === id);
            if (existingItem && existingItem.count > 1) {
              existingItem.count -= 1;
            }
          },

        clearCart: (state,action) =>{
            state.items.length = 0;
        }
    }
})

export const {addItem,removeItems,clearCart , decrementItem , incrementItem} = cartSlice.actions
export default cartSlice.reducer;