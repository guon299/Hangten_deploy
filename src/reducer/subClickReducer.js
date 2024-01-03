import { createSlice } from "@reduxjs/toolkit";

const initState ={
    subName : ''
};

const subClickReducer = createSlice({
    name : 'setClickSubName',
    initialState:initState,
    reducers:{
        clickSubMeun:(state,action)=>{
            state.subName = action.payload;
        }
    }
});

export default subClickReducer.reducer;
export const {clickSubMeun} = subClickReducer.actions;