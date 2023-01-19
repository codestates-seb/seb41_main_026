import axios from 'axios';

const logInAPI = async (email, password) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/auth/user`,
      {
        email,
        password,
      },
      // { withCredentials: true },
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export default logInAPI;
