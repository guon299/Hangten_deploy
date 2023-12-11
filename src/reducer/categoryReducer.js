import { createSlice } from "@reduxjs/toolkit";

const initState ={
    category1:[],
    subMeun1:[],
    subMeun2:[],
    subMeun3:[]
}

const categoryReducer = createSlice({
    name:'setCategory',
    initialState:initState,
    reducers:{
        categoryIn:(state, action)=>{
            console.log(action);
            state.category1 = action.payload.category1;
            state.subMeun1 = action.payload.subMeun1;
            state.subMeun2 = action.payload.subMeun2;
            state.subMeun3 = action.payload.subMeun3;
        }

    }
});

export default categoryReducer.reducer;
export const {categoryIn} = categoryReducer.actions;