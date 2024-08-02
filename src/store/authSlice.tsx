import { createSlice } from "@reduxjs/toolkit";

type State = {
  authenticated: boolean;
  loading: boolean;
  user: Record<string, unknown> | null;
  showLogoutDialog: boolean;
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
  showLogoutDialog: false,
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
    ): State => ({
      ...state,
      ...action.payload,
    }),
    setLogoutModal: (
      state: State,
      action: {
        payload: boolean;
      }
    ): State => ({
      ...state,
      showLogoutDialog: action.payload,
    }),
    reset: (): State => ({
      ...initialState,
      loading: false,
    }),
  },
});

export const { set, reset, setLogoutModal } = authSlice.actions;

export default authSlice.reducer;
