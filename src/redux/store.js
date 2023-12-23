import { configureStore } from "@reduxjs/toolkit";
import surfDataReducer from "./surfDataSlice";

export const store = configureStore({
  reducer: {
    surf: surfDataReducer,
  },
});
