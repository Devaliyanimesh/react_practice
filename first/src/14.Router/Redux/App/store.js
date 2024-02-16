import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./../Feture/count";
import amountcount from './../Feture/Amount'
export default configureStore({
  reducer: {
    store: countSlice,
    amountcount,
  },
});
