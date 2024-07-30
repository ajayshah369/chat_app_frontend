import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import snackbarReducer from "./snackbarSlice";
import tabsReducer from "./tabsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer,
    tabs: tabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
