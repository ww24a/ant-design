import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: null,
};

const openSlice = createSlice({
  name: "UpdateModalSlice",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpen } = openSlice.actions;
export default openSlice.reducer;
