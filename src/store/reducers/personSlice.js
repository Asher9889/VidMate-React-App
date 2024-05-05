import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
}

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    getPerson: (state, action)=>{
      state.info = action.payload;
    },

    removePerson: (state, action)=>{
      state.info = null;
    }
    
  }
})

export const {getPerson, removePerson} = personSlice.actions;
export default personSlice.reducer;