import { configureStore } from "@reduxjs/toolkit";
import author from './../../Reduxx/State/Statee'

export default configureStore({
    reducer:{
        athorsli:author

    }
})