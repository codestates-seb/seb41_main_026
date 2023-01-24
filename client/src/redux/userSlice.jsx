import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  accessToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      // 유저 정보를 저장하는 reducer (ex. 로그인)
      state.userId = action.payload.userid;
      state.accessToken = action.payload.authorization;
      console.log(
        '저장되었습니다. 저장된 값은 -> ',
        state.userId,
        state.accessToken,
      );
    },
    resetUserInfo: state => {
      // 유저 정보를 제거하는 reducer (ex. 로그아웃)
      state.userId = -1;
      state.accessToken = '';
    },
  },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;

export default userSlice.reducer;

export const getUserId = state => state.user.userId;

export const getAccessToken = state => state.user.accessToken;
