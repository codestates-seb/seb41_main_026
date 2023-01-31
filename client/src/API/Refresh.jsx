import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRefreshToken, setUserInfo } from '../redux/userSlice';

// eslint-disable-next-line import/prefer-default-export
export const onSilentRefresh = () => {
  const getRefresh = useSelector(getRefreshToken);
  const dispatch = useDispatch();
  if (!getRefresh) return;
  const onSilentRefreshType = {
    refreshToken: getRefresh,
  };
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/auth/reissuetoken`,
      onSilentRefreshType,
    )
    .then(res => {
      // eslint-disable-next-line no-use-before-define
      onLoginSuccess(res.headers.authorization);
      if (res.headers.refresh) {
        dispatch(setUserInfo({ refresh: res.headers.refresh }));
      }
    });
};

export const onLoginSuccess = accessToken => {
  axios.defaults.headers.common.authorization = `Bearer ${accessToken}`;

  setTimeout(onSilentRefresh, 6 * 3600 * 1000 - 60000);
};
