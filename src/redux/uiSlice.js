import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menuState: false,
  menuContent: 0,
};
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMenuState: (state, action) => {
      state.menuState = !state.menuState;
    },
    setMenuContent: (state, action) => {
      state.menuContent = action.payload;
    },
  },
});

export const { setMenuState, setMenuContent } = uiSlice.actions;

export const selectMenuState = (state) => state.ui.menuState;
export const selectMenuContent = (state) => state.ui.menuContent;

export default uiSlice.reducer;
