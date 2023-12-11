import { createSlice } from "@reduxjs/toolkit";

const initState ={
    isSubMeun3:null
}

const isSubMeun3Reducer = createSlice({
    name:'setIsSubMeun3',
    initialState:initState,
    reducers:{
        isSubMeun3In:(state, action)=>{
            console.log(action);
            state.isSubMeun3 = action.payload;
        }
    }
});

export default isSubMeun3Reducer.reducer;
export const {isSubMeun3In} = isSubMeun3Reducer.actions;