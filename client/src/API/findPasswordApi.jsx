import axios from 'axios';

const findPasswordApi = async email => {
  const tempPassword = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/findpw/sendemail`,
    {
      email,
    },
  );

  return tempPassword;
};

export default findPasswordApi;
