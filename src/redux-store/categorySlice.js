import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name : "category",
    initialState: {
        isMenuOpen : false
    },
    reducers: {
        toggleMenu: (state) => {
        state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {toggleMenu} = categorySlice.actions;

export default categorySlice.reducer