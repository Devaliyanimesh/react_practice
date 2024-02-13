import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:"count",
    initialState:{count:444},
    reducers:{
        incone:(state,action)=>{
            state.count++;
        },
        intten:(state,action)=>{
            state.count +=10
        }
    },
})
export default  countSlice.reducer;
export const {incone} = countSlice.actions;
export const {intten}=countSlice.actions;