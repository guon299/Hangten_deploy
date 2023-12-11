import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isConfirmModal: false
}

const confirmModalReducer = createSlice({
    name: 'confirmModal',
    initialState: initState,
    reducers : {
        confirmModal: (state, action)=>{
            state.isConfirmModal = action.payload;
        }
    }
});

export default confirmModalReducer.reducer;
export const {confirmModal} = confirmModalReducer.actions;