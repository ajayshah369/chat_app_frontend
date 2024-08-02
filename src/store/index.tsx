import { configureStore } from "@reduxjs/toolkit";

import authReducer, { reset as resetAuth } from "./authSlice";
import snackbarReducer, { reset as resetSnackbar } from "./snackbarSlice";
import tabsReducer, { reset as resetTab } from "./tabsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer,
    tabs: tabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export const resetAll = () => {
  store.dispatch(resetAuth());
  store.dispatch(resetTab());
  store.dispatch(resetSnackbar());
};
