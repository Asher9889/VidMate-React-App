import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
}

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovie: (state, action)=>{
      state.info = action.payload;
    },

    removeMovie: (state, actions)=>{
      state.info = null;
    }
    
  }
})

export const {getMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer;