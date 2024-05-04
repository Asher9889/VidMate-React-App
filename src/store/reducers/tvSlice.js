import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
}

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    getTv: (state, action)=>{
      state.value = action.payload;
    },

    removeTv: (state, actions)=>{
      state.value = null;
    }
    
  }
})

export const {showTv, removeTv} = tvSlice.actions;
export default tvSlice.reducer;