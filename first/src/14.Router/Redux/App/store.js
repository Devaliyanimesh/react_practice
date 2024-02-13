import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./../Feture/count";
 export default configureStore({
  reducer: {
    store: countSlice,
  },
});
