import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  authenticated: boolean;
  loading: boolean;
  user: Record<string, unknown> | null;
};

interface StateInterface {
  authenticated?: boolean;
  loading?: boolean;
  user?: Record<string, unknown> | null;
}

const initialState: InitialState = {
  authenticated: false,
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
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

export const { set } = authSlice.actions;

export default authSlice.reducer;
