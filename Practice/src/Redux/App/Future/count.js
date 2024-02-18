import { createSlice } from "@reduxjs/toolkit";

const countslice = createSlice({
  name: "count",
  initialState: { count: 444 },
  reducers: {
    intone: (state, action) => {
      state.count + 10;
    },
  },
});
export default countslice.reducer;
export const {intone} =countslice.actions
