import { configureStore } from "@reduxjs/toolkit";
import sliceCount from "./components/sliceCount";

export default configureStore({
  reducer: {
    Counter: sliceCount,
  },
});
