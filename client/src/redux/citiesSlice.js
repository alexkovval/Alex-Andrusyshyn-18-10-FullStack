import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavorites } = citiesSlice.actions;

export default citiesSlice.reducer;
