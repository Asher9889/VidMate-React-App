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

    removePerson: (state, actions)=>{
      state.info = null;
    }
    
  }
})

export const {showPerson, removePerson} = personSlice.actions;
export default personSlice.reducer;