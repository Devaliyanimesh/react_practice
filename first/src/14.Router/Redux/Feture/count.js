import { createSlice } from "@reduxjs/toolkit";

const countSlice=createSlice({
    name:"count",
    initialState:{count:444},
    reducers:{
        incone:(state,action)=>{
            state.count++;
        },
      
        
    },
})
export default  countSlice.reducer;
export const {incone} = countSlice.actions;
