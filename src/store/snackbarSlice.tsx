import { createSlice } from "@reduxjs/toolkit";
import { AlertPropsColorOverrides, AlertColor } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface Interface {
  message?: string;
  autoHideDuration?: number;
  open?: boolean;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
}

type State = {
  message: string | null;
  autoHideDuration: number;
  open: boolean;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
};

const initialState: State = {
  message: null,
  autoHideDuration: 3000,
  open: false,
  severity: "warning",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: initialState,
  reducers: {
    set: (
      state: State,
      action: {
        payload: Interface;
      }
    ): State => ({
      ...state,
      ...action.payload,
    }),
    reset: (): State => ({
      ...initialState,
    }),
  },
});

export const { set, reset } = snackbarSlice.actions;

export default snackbarSlice.reducer;
