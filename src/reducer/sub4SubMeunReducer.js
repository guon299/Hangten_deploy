import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subMeun1:[]
}

const sub4SubMeunReducer = createSlice({
    name:'setSub4SubMeun',
    initialState:initState,
    reducers:{
        sub4MeunIn:(state, action)=>{
            state.subMeun1 = action.payload;
        }
    }
});

export default sub4SubMeunReducer.reducer;
export const {sub4MeunIn} = sub4SubMeunReducer.actions;