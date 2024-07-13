import { createSlice } from "@reduxjs/toolkit";
import { AlertPropsColorOverrides, AlertColor } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface StateInterface {
  message?: string | null;
  autoHideDuration?: number;
  open?: boolean;
  severity?:
    | OverridableStringUnion<AlertColor, AlertPropsColorOverrides>
    | undefined;
}

export type InitialState = {
  message: string | null;
  autoHideDuration: number;
  open: boolean;
  severity:
    | OverridableStringUnion<AlertColor, AlertPropsColorOverrides>
    | undefined;
};

const initialState: InitialState = {
  message: null,
  autoHideDuration: 3000,
  open: false,
  severity: undefined,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: initialState,
  reducers: {
    set: (
      state: InitialState,
      action: {
        payload: StateInterface;
      }
    ) => ({
      ...state,
      ...action.payload,
    }),
    reset: () => ({
      ...initialState,
    }),
  },
});

export const { set, reset } = snackbarSlice.actions;

export default snackbarSlice.reducer;
