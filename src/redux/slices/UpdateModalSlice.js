import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: null,
  nameOfSection: "",
};

const openSlice = createSlice({
  name: "UpdateModalSlice",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setNameOfSection: (state, action) => {
      state.nameOfSection = action.payload;
    },
  },
});

export const { setOpen, setNameOfSection } = openSlice.actions;
export default openSlice.reducer;
