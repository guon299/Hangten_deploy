import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subMeun1:[]
}

const sub5SubMeunReducer = createSlice({
    name:'setSub5SubMeun',
    initialState:initState,
    reducers:{
        sub5MeunIn:(state, action)=>{
            state.subMeun1 = action.payload;
        }
    }
});

export default sub5SubMeunReducer.reducer;
export const {sub5MeunIn} = sub5SubMeunReducer.actions;