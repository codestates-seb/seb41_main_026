import axios from 'axios';

const logInAPI = async (email, password) => {
  await axios.post(
    `${process.env.REACT_APP_API_URL}/user/login`,
    {
      email,
      password,
    },
    { withCredentials: true },
  );
};

export default logInAPI;
