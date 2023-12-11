
import { createSlice } from "@reduxjs/toolkit";

const initState = {
    인증정보: null
}

const hpsignDateReducer = createSlice({
    name: 'hpsignDate',
    initialState: initState,
    reducers: {
        hpsignDate : (state, action)=>{
            state.인증정보 = action.payload
        }
    }
});

export default hpsignDateReducer.reducer;
export const {hpsignDate} = hpsignDateReducer.actions;