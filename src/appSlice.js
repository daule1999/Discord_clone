import { createSlice } from "@reduxjs/toolkit";
// import db from "./firebase";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: "1",
    channelName: "Daule squad",
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
