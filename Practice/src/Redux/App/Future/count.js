import { createSlice } from "@reduxjs/toolkit";

const countslice=createSlice(({
    name:"count",
    initialState:{count:444},
    reducers:{}
}))
export default countslice.reducer;