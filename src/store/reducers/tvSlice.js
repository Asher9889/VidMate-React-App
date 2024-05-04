import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
}

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    getTv: (state, action)=>{
      state.info = action.payload;
    },

    removeTv: (state, actions)=>{
      state.info = null;
    }
    
  }
})

export const {getTv, removeTv} = tvSlice.actions;
export default tvSlice.reducer;