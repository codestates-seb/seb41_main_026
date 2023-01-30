import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '../../redux/userSlice';
import { regEmail, regPassword } from '../../util/regStore';
// import whiteNaver from '../../img/whiteNaver.png';
import { handleEmail, handlePassword } from '../../util/alertStore';
import { setCookie } from '../../util/cookie';
import findPasswordApi from '../../API/findPasswordApi';

const Buttons = styled.button`
  background-color: rgba(20, 40, 80, 1);
  color: white;
  &:hover {
    background-color: rgba(39, 73, 109, 1);
  }
`;

// const SocialButtons = styled.button`
//   border-radius: 20px;
//   width: 80px;
//   margin-left: 10px;
//   margin-top: 20px;
//   &:hover {
//     background-color: rgb(0, 168, 204);
//   }
// `;

function ModalLogin() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  // eslint-disable-next-line no-unused-vars

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const loginRequestHandler = () => {
  //   window.location.assign(
  //     `${process.env.REACT_APP_API_URL}/login/oauth2/code/google`,
  //   );
  // };

  const handleInputValue = key => e => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

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
        const expires = dayjs().add('60', 'm').toDate();
        const { authorization, refresh, userid } = res.headers;
        setCookie('accessToken', decodeURIComponent(`${authorization}`), {
          expires,
        });
        setCookie('refreshToken', refresh);
        navigate('/');
        window.location.reload();

        dispatch(setUserInfo({ userid })); // userSlice에 유저 정보 저장
        window.alert('로그인 성공!');
      })
      // eslint-disable-next-line no-unused-vars
      .catch(err => {
        let errorText;
        const { message } = err;
        const code = Number(message.slice(-3));
        switch (code) {
          case 401:
            errorText =
              '잘못된 이메일이나 패스워드 입니다, 다시 한번 확인해 주세요.';
            break;
          case 500:
            errorText = '서비스에 문제가 있습니다.';
            break;
          default:
            errorText = message;
        }
        return alert(errorText);
      });
  };
  // 비번 찾기 로직
  // eslint-disable-next-line consistent-return
  const onSubmitHandler = e => {
    e.preventDefault();
    const { email } = loginInfo;
    if (email.length === 0 || !regEmail.test(email)) {
      handleEmail();
      return false;
    }
    findPasswordApi(email)
      .then(() => {
        window.alert('이메일이 발송되었습니다.');
      })
      .catch(err => {
        window.alert(err, '올바른 이메일을 입력해주세요.');
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
                  className="modal-title fs-3 text-white"
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
                  id="loginEmail"
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
                  autoComplete="off"
                  className="form-control border-0 border-bottom ms-3"
                  id="loginPassword"
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
            {/* <div className="p-5">
              <div className="modal-body border-top d-flex gap-4 m-auto"> */}
            {/* <SocialButtons type="submit" className="btn btn-outline-light">
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
                <SocialButtons
                  type="button"
                  className="btn btn-outline-light"
                  onClick={loginRequestHandler}
                >
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
                </SocialButtons> */}
            {/* </div>
            </div> */}
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
                  onChange={handleInputValue('email')}
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
                <Buttons
                  type="submit"
                  className="btn"
                  onClick={onSubmitHandler}
                >
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
