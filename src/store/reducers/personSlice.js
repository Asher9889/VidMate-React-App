import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
}

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    getPerson: (state, action)=>{
      state.value = action.payload;
    },

    removePerson: (state, actions)=>{
      state.value = null;
    }
    
  }
})

export const {showPerson, removePerson} = personSlice.actions;
export default personSlice.reducer;