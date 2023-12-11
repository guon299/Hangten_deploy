import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subMeun1:[]
}

const sub1SubMeunReducer = createSlice({
    name:'setSub1SubMeun',
    initialState:initState,
    reducers:{
        sub1MeunIn:(state, action)=>{
            state.subMeun1 = action.payload;
        }
    }
});

export default sub1SubMeunReducer.reducer;
export const {sub1MeunIn} = sub1SubMeunReducer.actions;