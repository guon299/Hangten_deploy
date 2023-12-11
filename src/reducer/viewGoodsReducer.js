import { createSlice } from "@reduxjs/toolkit";

const initState = {
    viewGoods:[]
}

const viewGoodsReducer = createSlice({
    name:'setViewGoods',
    initialState:initState,
    reducers:{
        displayViewGoods:(state, action)=>{
            console.log(action);
            state.viewGoods = action.payload
        }
    }
});

export default viewGoodsReducer.reducer;
export const {displayViewGoods} = viewGoodsReducer.actions;