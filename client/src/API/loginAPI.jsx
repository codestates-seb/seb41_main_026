import axios from 'axios';

const logInAPI = async (email, password) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/auth/user`, {
    email,
    password,
  });
};

export default logInAPI;
