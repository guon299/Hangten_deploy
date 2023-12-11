import { createSlice } from "@reduxjs/toolkit";

const initState = {
    currentPage:1,
}

const currentPageReducer = createSlice({
    name:'setCurrentPage',
    initialState:initState,
    reducers:{
        currentPageIn:(state, action)=>{
            state.currentPage = action.payload
        }
    }
})

export default currentPageReducer.reducer;
export const {currentPageIn} = currentPageReducer.actions;