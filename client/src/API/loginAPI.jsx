import axios from 'axios';

const logInAPI = async (email, password) => {
  await axios
    .post(
      'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user',
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
