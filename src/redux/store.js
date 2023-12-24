import { configureStore } from "@reduxjs/toolkit";
import surfDataReducer from "./surfDataSlice";
import uiReducer from "./uiSlice";
export const store = configureStore({
  reducer: {
    surf: surfDataReducer,
    ui: uiReducer,
  },
});
