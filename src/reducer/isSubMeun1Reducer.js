import { createSlice } from "@reduxjs/toolkit";

const initState ={
    isSubMeun1:null
}

const isSubMeun1Reducer = createSlice({
    name:'setIsSubMeun1',
    initialState:initState,
    reducers:{
        isSubMeun1In:(state, action)=>{
            console.log(action);
            state.isSubMeun1 = action.payload;
        }
    }
});

export default isSubMeun1Reducer.reducer;
export const {isSubMeun1In} = isSubMeun1Reducer.actions;