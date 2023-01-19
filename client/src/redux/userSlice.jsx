import { createSlice } from '@reduxjs/toolkit';

const loginUserId = sessionStorage.getItem('user_Id');
const loginAccessToken = sessionStorage.getItem('access_Token');

const initialState = {
  userId: loginUserId,
  accessToken: loginAccessToken,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state, action) => {
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
    },
    // userAccessToken: (state, action) => {
    //   state.accessToken = action.payload.accessToken;
    // },
  },
});

export const { user } = userSlice.actions;

export default userSlice.reducer;
