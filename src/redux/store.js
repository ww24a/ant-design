import { configureStore } from "@reduxjs/toolkit";
import UpdateModalSlice from "./slices/UpdateModalSlice";

const store = configureStore({
  reducer: {
    UpdateModalSlice: UpdateModalSlice,
  },
});

export default store;
