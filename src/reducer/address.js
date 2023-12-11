// 리듀서 객체(Object) 생성하기
import { createSlice } from "@reduxjs/toolkit";

const initState = {
    주소1:'',
    zonecode:''
}
const addressReducer = createSlice({
    name:'address',
    initialState: initState,
    reducers: {
        address: (state, action)=>{
            state.주소1 = action.payload.주소1;
            state.zonecode = action.payload.zonecode;

        }
    }
});
export default addressReducer.reducer;
export const {address} = addressReducer.actions;
