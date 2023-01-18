import axios from 'axios';

const logInAPI = axios.post(
  `${process.env.REACT_APP_API_URL}/auth/login`,
  {
    // eslint-disable-next-line no-undef
    email,
    // eslint-disable-next-line no-undef
    password,
  },
  // { withCredentials: true },
);

export default logInAPI;
