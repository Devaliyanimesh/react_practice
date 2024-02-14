import { configureStore } from "@reduxjs/toolkit";
import countslice from './../Future/count'
 export default configureStore({
    reducer:{
        store:countslice
    }
})