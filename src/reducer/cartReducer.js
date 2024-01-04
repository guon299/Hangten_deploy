import { createSlice } from "@reduxjs/toolkit";

const initState={
    cartProduct:[]
}

const cartReducer = createSlice({
    name:'setCartProduct',
    initialState:initState,
    reducers:{
        cartProduct:(state, action)=>{
            state.cartProduct = action.payload;
        }
    }
});

export default cartReducer.reducer;
export const {cartProduct} = cartReducer.actions;