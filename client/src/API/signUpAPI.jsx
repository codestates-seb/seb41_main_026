import axios from 'axios';

const signUpAPI = async (name, email, password) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/user`, {
    name,
    email,
    password,
  });
};

export default signUpAPI;
