import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  setUserInfo: {
    userId: '',
    refreshToken: '',
    isLogin: false,
  },
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      // 유저 정보를 저장하는 reducer (ex. 로그인)
      state.userId = action.payload.userid;
      state.refreshToken = action.payload.refresh;
      state.isLogin = action.payload.isLogin;
    },
    resetUserInfo: state => {
      // 유저 정보를 제거하는 reducer (ex. 로그아웃)
      state.userId = '';
      state.refreshToken = '';
      state.isLogin = false;
    },
  },
});

export const { setUserInfo, resetUserInfo } = userSlice.actions;

export default userSlice.reducer;

export const getUserId = state => state.user.userId;
export const getIsLogin = state => state.user.isLogin;
export const getRefreshToken = state => state.user.refresh;
