import { createSlice } from "@reduxjs/toolkit";

type State = {
  authenticated: boolean;
  loading: boolean;
  user: Record<string, unknown> | null;
};

interface Interface {
  authenticated?: boolean;
  loading?: boolean;
  user?: Record<string, unknown> | null;
}

const initialState: State = {
  authenticated: false,
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    set: (
      state: State,
      action: {
        payload: Interface;
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
