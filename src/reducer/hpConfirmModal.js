import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isHpConfirmModal: false
}

const hpconfirmModalReducer = createSlice({
    name: 'hpconfirmModal',
    initialState: initState,
    reducers : {
        hpconfirmModal: (state, action)=>{
            state.isHpConfirmModal = action.payload;
        }
    }
});

export default hpconfirmModalReducer.reducer;
export const {hpconfirmModal} = hpconfirmModalReducer.actions;