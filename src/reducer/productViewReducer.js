import { createSlice } from "@reduxjs/toolkit";

const initState ={
    productView:[]
}

const productViewReducer = createSlice({
    name:'setProductView',
    initialState:initState,
    reducers:{
        productView:(state, action)=>{
            state.productView = action.payload;
        }
    }
});

export default productViewReducer.reducer;
export const {productView} = productViewReducer.actions;