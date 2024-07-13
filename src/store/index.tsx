import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import snackbarSlice from "./snackbarSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
