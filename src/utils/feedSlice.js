import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeUserFromFeed: (state, action) => {
      console.log("State in removeUserFromFeed:", state);
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
  },
});
export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export const feedReducer = feedSlice.reducer;
