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
    setUserInfo: (state, action) => {
      // 유저 정보를 저장하는 reducer (ex. 로그인)
      console.log('이전 값은 -> ', state.userId, state.accessToken);
      state.userId = action.payload.userId;
      state.accessToken = action.payload.accessToken;
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
    // extractMailHome: state => {
    //   // @ 뒷부분을 추출함
    //   // donguk@google.com -> 'google' 만 추출하는 함수

    //   return 'google';
    // },
    // reformingEnglishName: state => {
    //   return ;
    // },
    // user: (state, action) => {
    //   state.userId = action.payload.userId;
    //   state.accessToken = action.payload.accessToken;
    // },
    // userAccessToken: (state, action) => {
    //   state.accessToken = action.payload.accessToken;
    // },
  },
});

export const { setUserInfo, resetUserInfo, user } = userSlice.actions;

export default userSlice.reducer;

export const getUserId = state => state.user.userId;

export const getAccessToken = state => state.user.accessToken;
