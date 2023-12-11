import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subMeun1:[]
}

const sub3SubMeunReducer = createSlice({
    name:'setSub3SubMeun',
    initialState:initState,
    reducers:{
        sub3MeunIn:(state, action)=>{
            state.subMeun1 = action.payload;
        }
    }
});

export default sub3SubMeunReducer.reducer;
export const {sub3MeunIn} = sub3SubMeunReducer.actions;