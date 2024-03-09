import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
let user=JSON.parse(localStorage.getItem("userlogin"))
let jsonToken= localStorage.getItem("token")
let token=jsonToken? JSON.parse(jsonToken):";"

const creteSlicee = createSlice({
  name: "auther",
  initialState: { user, token },
  reducers: {
    loginn: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      localStorage.setItem("userlogin", JSON.stringify(action.payload.data));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
    },
    logout:(state,action)=>{
console.log(state);
console.log(action);
    }
  },
});
export default creteSlicee.reducer;
export const { loginn,logi } = creteSlicee.actions;
