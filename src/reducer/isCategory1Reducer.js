import { createSlice } from "@reduxjs/toolkit";

const initState ={
    isCategory1:null,
}

const isCategory1Reducer = createSlice({
    name:'setIsCategory1',
    initialState:initState,
    reducers:{
        isCategory1In:(state, action)=>{
            console.log(action);
            state.isCategory1 = action.payload;
        }
    }
});

export default isCategory1Reducer.reducer;
export const {isCategory1In} = isCategory1Reducer.actions;