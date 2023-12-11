import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subMeun1:[]
}

const sub6SubMeunReducer = createSlice({
    name:'setSub6SubMeun',
    initialState:initState,
    reducers:{
        sub6MeunIn:(state, action)=>{
            state.subMeun1 = action.payload;
        }
    }
});

export default sub6SubMeunReducer.reducer;
export const {sub6MeunIn} = sub6SubMeunReducer.actions;