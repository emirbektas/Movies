import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./redux/listSlice";
export default configureStore({
  reducer: {
    list: listSlice,
  },
});
