import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  currentCoords: [],
  infoBar: { name: "El Sardinero", state: "Santander" },
};
export const surfDataSlice = createSlice({
  name: "surf",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCurrentCoords: (state, action) => {
      state.currentCoords = action.payload;
    },
    setInfoBarData: (state, action) => {
      state.infoBar = action.payload;
    },
  },
});

export const { setData, setCurrentCoords, setInfoBarData } =
  surfDataSlice.actions;

export const selectData = (state) => state.surf.data;
export const selectInfoBarData = (state) => state.surf.infoBar;

export default surfDataSlice.reducer;
