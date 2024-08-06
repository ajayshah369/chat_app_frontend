import { createSlice } from "@reduxjs/toolkit";

interface ChatType {
  uuid: string;
  title?: string | null;
  name?: string | null;
  email?: string | null;
  isGroupChat: boolean;
  updatedAt: string;
}

type State = {
  activeChat: ChatType | null;
};

const initialState: State = {
  activeChat: null,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState: initialState,
  reducers: {
    setActiveChat: (
      state: State,
      action: {
        payload: ChatType;
      }
    ): State => ({
      ...state,
      activeChat: action.payload,
    }),
    reset: (): State => ({
      ...initialState,
    }),
  },
});

export const { setActiveChat, reset } = chatsSlice.actions;

export default chatsSlice.reducer;
