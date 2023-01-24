import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
// import dayjs from 'dayjs';
// import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { setUserInfo, getAccessToken, getUserId } from '../../redux/userSlice';
import { regEmail, regPassword } from '../../util/regStore';
import whiteNaver from '../../img/whiteNaver.png';
import { handleEmail, handlePassword } from '../../util/alertStore';

const Buttons = styled.button`
  background-color: rgba(20, 40, 80, 1);
  color: white;
  &:hover {
    background-color: rgba(39, 73, 109, 1);
  }
`;

const SocialButtons = styled.button`
  border-radius: 20px;
  width: 80px;
  margin-left: 10px;
  margin-top: 20px;
  &:hover {
    background-color: rgb(0, 168, 204);
  }
`;

function ModalLogin() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const findUserId = useSelector(getUserId);
  const findAccessToken = useSelector(getAccessToken);

  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie, removeCookie] = useCookies([
    'accessToken',
    'refreshToken',
  ]);
  // const navigate = useNavigate();

  const handleInputValue = key => e => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  // const getUserInfo = () => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}/user/${sessionStorage.getItem(
  //         'userId',
  //       )}`,
  //       {
  //         headers: {
  //           authorization: sessionStorage.getItem('accessTk'),
  //         },
  //       },
  //     )
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  // eslint-disable-next-line consistent-return
  const handleLogIn = e => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { email, password } = loginInfo;
    if (email.length === 0 || !regEmail.test(email)) {
      handleEmail();
      return false;
    }
    if (password.length === 0 || !regPassword.test(password)) {
      handlePassword();
      return false;
    }
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        {
          email,
          password,
        },
        // { withCredentials: true },
      )
      .then(res => {
        // const expires = dayjs().add('40', 'm').toDate();
        const { authorization, refresh, userid } = res.headers;
        setCookie('accessToken', authorization);
        setCookie('refreshToken', refresh);
        setCookie('userId', userid);
        sessionStorage.setItem('access_Token', authorization);
        sessionStorage.setItem('user_Id', userid);
        // navigate('/');
        // window.location.reload();

        dispatch(setUserInfo({ userid, authorization })); // userSlice에 유저 정보 저장
        console.log('이전 상태를 불러왔음 ', findUserId, findAccessToken);
        window.alert('로그인 성공!');
      })
      .catch(err => {
        console.log(err);
        window.alert('로그인 실패!');
      });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light me-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        로그인
      </button>
      <div
        className="modal "
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-4">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header border-bottom-0">
              <div className="col-lg-7 col-sm-12 text-lg-end text-center mt-3">
                <h1
                  className="modal-title fs-3 text-black"
                  id="exampleModalLabel"
                >
                  Log In
                </h1>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-5">
              <div className="d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/email.svg`}
                  alt="email icon"
                  width="20"
                  height="20"
                  className="bi bi-envelope"
                />
                <input
                  type="email"
                  className="form-control border-0 border-bottom ms-3"
                  id="email"
                  placeholder="이메일을 적으세요"
                  onChange={handleInputValue('email')}
                  style={{
                    borderRadius: '0',
                    paddingLeft: '5px',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <br />
              <div className="d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/password.svg`}
                  alt="password icon"
                  width="20"
                  height="20"
                  className="bi bi-envelope"
                />
                <input
                  type="password"
                  className="form-control border-0 border-bottom ms-3"
                  id="password"
                  placeholder="비밀번호를 적으세요"
                  onChange={handleInputValue('password')}
                  style={{
                    borderRadius: '0',
                    paddingLeft: '5px',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>
              <br />
              <div className="col-lg-12 col-sm-12 text-sm-end text-center">
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  data-bs-dismiss="modal"
                >
                  취소
                </button>
                <Buttons type="submit" className="btn" onClick={handleLogIn}>
                  로그인
                </Buttons>
              </div>
            </div>
            <div className="p-5">
              <div className="modal-body border-top d-flex gap-4 m-auto">
                <SocialButtons type="submit" className="btn btn-outline-light">
                  <img
                    src={`${process.env.PUBLIC_URL}/github.svg`}
                    alt="github icon"
                    width="20"
                    height="20"
                    className="bi bi-envelope"
                    style={{
                      marginBottom: '-3px',
                    }}
                  />
                </SocialButtons>
                <SocialButtons type="button" className="btn btn-outline-light">
                  <img
                    src={`${process.env.PUBLIC_URL}/google.svg`}
                    alt="google icon"
                    width="19"
                    height="19"
                    className="bi bi-envelope"
                    style={{
                      marginBottom: '-3px',
                    }}
                  />
                </SocialButtons>
                <SocialButtons type="submit" className="btn btn-outline-light">
                  <img
                    src={whiteNaver}
                    alt="logo"
                    style={{
                      width: '25px',
                      height: '25px',
                      marginBottom: '-6px',
                    }}
                  />
                </SocialButtons>
              </div>
            </div>
            <div className="pe-5 ps-5">
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                >
                  비밀번호 찾기
                </button>
                <button
                  type="button"
                  className="btn border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header border-bottom-0">
              <div className="col-lg-9 col-sm-12 text-lg-end text-center">
                <h1
                  className="modal-title fs-3 p-2"
                  id="exampleModalLabel"
                  style={{ fontFamily: 'Heebo', color: 'black' }}
                >
                  Find a Password
                </h1>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  marginBottom: '20px',
                }}
              />
            </div>
            <div className="modal-body p-5">
              <div className="d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/email.svg`}
                  alt="email icon"
                  width="20"
                  height="20"
                  className="bi bi-envelope"
                />
                <input
                  type="email"
                  className="form-control border-0 border-bottom ms-3"
                  id="email"
                  placeholder="이메일을 적으세요"
                  style={{
                    borderRadius: '0',
                    paddingLeft: '5px',
                    backgroundColor: 'transparent',
                  }}
                />
              </div>

              <br />
              <div className="col-lg-12 col-sm-12 text-sm-end text-center">
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  data-bs-dismiss="modal"
                >
                  취소
                </button>
                <Buttons type="submit" className="btn">
                  보내기
                </Buttons>
              </div>
            </div>
            <div
              className=""
              style={{
                padding: '0 50px 0 50px',
              }}
            >
              <div className="modal-footer ">
                <button
                  type="button"
                  className="btn border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  로그인
                </button>
                <button
                  type="button"
                  className="btn border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLogin;
