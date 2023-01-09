import { createSlice } from '@reduxjs/toolkit';

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState: {},
  reducers: {},
});

export const loginModalActions = loginModalSlice.actions;

export default loginModalSlice.reducer;
