// 리듀서 객체(Object) 생성하기
import { createSlice } from "@reduxjs/toolkit";

const initState = {
    signUpIsConfirmModal: false,
    signUpConfirmMsg: '',
    userList:false
}

const signUpConfirmModalReducer = createSlice({
    name: 'signUpConfirmModal',
    initialState: initState,
    reducers : {
        signUpConfirmModal: (state, action)=>{
            state.signUpIsConfirmModal = action.payload.signUpIsConfirmModal;
            state.signUpConfirmMsg = action.payload.signUpConfirmMsg;
            state.userList = action.payload.userList;
        }
    }
});

export default signUpConfirmModalReducer.reducer;
export const {signUpConfirmModal} = signUpConfirmModalReducer.actions;