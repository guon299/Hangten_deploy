import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subMeun1:[]
}

const sub2SubMeunReducer = createSlice({
    name:'setSub2SubMeun',
    initialState:initState,
    reducers:{
        sub2MeunIn:(state, action)=>{
            state.subMeun1 = action.payload;
        }
    }
});

export default sub2SubMeunReducer.reducer;
export const {sub2MeunIn} = sub2SubMeunReducer.actions;