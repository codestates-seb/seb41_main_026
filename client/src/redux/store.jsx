import { configureStore } from '@reduxjs/toolkit';
import loginModalSlice from './loginModalSlice';

const reducer = {
  loginModal: loginModalSlice,
};

const store = configureStore({
  reducer,
});

export default store;
