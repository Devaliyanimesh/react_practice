import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:"count",
    initialState:{count:444},
    reducers:{},
})
export default  countSlice.reducer;