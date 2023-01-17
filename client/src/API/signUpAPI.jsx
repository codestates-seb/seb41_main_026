import axios from 'axios';

const signUpAPI = async (name, email, password) => {
  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user`,
      {
        name,
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

export default signUpAPI;
