import { createSlice } from "@reduxjs/toolkit";

const initState ={
    isSubMeun2:null
}

const isSubMeun2Reducer = createSlice({
    name:'setIsSubMeun2',
    initialState:initState,
    reducers:{
        isSubMeun2In:(state, action)=>{
            console.log(action);
            state.isSubMeun2 = action.payload;
        }
    }
});

export default isSubMeun2Reducer.reducer;
export const {isSubMeun2In} = isSubMeun2Reducer.actions;