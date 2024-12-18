import { createSlice } from "@reduxjs/toolkit";

export enum TAB1_TYPE {
  CHATS = "chats",
  STATUS = "status",
  SETTINGS = "settings",
  PROFILE = "profile",
  NEW_CHAT = "newChat",
}

export enum TAB2_TYPE {
  CHAT = "chat",
}

type State = {
  activeTab1?: TAB1_TYPE;
  activeTab2?: TAB2_TYPE;
};

const initialState: State = {
  activeTab1: TAB1_TYPE.CHATS,
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    set: (
      state: State,
      action: {
        payload: State;
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

export const { set, reset } = tabsSlice.actions;

export default tabsSlice.reducer;
