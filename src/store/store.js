import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./reducers/movieSlice" 
import tvReducer from "./reducers/tvSlice" 
import personReducer from "./reducers/personSlice" 

export const store = configureStore({
  reducer: {
    movieReducer: movieReducer,
    tvReducer: tvReducer,
    personReducer: personReducer,
  },
})