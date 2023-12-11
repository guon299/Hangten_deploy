import { createSlice } from "@reduxjs/toolkit";

const initState = {
    totalGoodsLength:0,
    displayViewLimet:36,
    viewPageLimet:10,
    goods:[]
}

const goodsPageReducer = createSlice({
    name:'setGoods',
    initialState:initState,
    reducers:{
        goodsPage:(state, action)=>{
            console.log(action);
            state.totalGoodsLength = action.payload.totalGoodsLength;
            state.displayViewLimet = action.payload.displayViewLimet;
            state.viewPageLimet = action.payload.viewPageLimet;
            state.goods = action.payload.goods;
        },
    }
});

export default goodsPageReducer.reducer;
export const {goodsPage} = goodsPageReducer.actions;