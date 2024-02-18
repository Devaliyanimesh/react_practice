import { createSlice } from "@reduxjs/toolkit";

let amountcount = createSlice({
  name: "amount",
  initialState: { amount: 200 },
  reducers: {
    amounthand: (state, action) => {
      state.amount+=10;
    },
  },
});

export default amountcount.reducer;
export const {amounthand}=amountcount.actions;