import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Redux/userSlice";

export default configureStore({
  reducer: {
    user: employeeReducer,
  },
});
