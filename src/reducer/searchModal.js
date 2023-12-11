
import { createSlice } from "@reduxjs/toolkit"; 

const initState = {
    isSearchModal: false
}

const searchModalReducer = createSlice({
    name: 'searchModal',
    initialState: initState,
    reducers: {
        isSearchModal: (state, action)=>{
            state.isSearchModal = action.payload 
        }
    }
});

export default searchModalReducer.reducer;
export const {isSearchModal} = searchModalReducer.actions;