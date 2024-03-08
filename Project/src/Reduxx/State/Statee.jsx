import { createSlice } from "@reduxjs/toolkit";

const creteSlicee = createSlice({
  name: "auther",
  initialState: { user: {}, token: "" },
  reducers: {
    loginn: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      localStorage.setItem("userlogin",JSON.stringify(action.payload.data))
      localStorage.setItem("token",JSON.stringify(action.payload.token))

    },
  },
});
export default creteSlicee.reducer;
export const { loginn } = creteSlicee.actions;
