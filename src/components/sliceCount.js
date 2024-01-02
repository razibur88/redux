import { createSlice } from "@reduxjs/toolkit";

export const sliceCount = createSlice({
  name: "counter",
  initialState: {
    counter: JSON.parse(localStorage.getItem("count"))
      ? JSON.parse(localStorage.getItem("count"))
      : 0,
  },

  reducers: {
    increment: (state) => {
      let tumi = (state.counter += 1);
      localStorage.setItem("count", JSON.stringify(tumi));
    },
    decrement: (state) => {
      let ami = state.counter;
      if (ami > 0) {
        state.counter -= 1;
        localStorage.setItem("count", JSON.stringify(ami));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = sliceCount.actions;

export default sliceCount.reducer;
