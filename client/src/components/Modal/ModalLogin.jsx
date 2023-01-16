import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { useCookies } from 'react-cookie';
import { regEmail } from '../../util/regStore';
import whiteNaver from '../../img/whiteNaver.png';
// import logInAPI from '../../API/loginAPI';
// import { setTOKEN, setUser } from '../../util/tokenStore';

function ModalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [setCookie] = useCookies(['hj']);

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  // eslint-disable-next-line consistent-return
  const handleLogIn = e => {
    e.preventDefault();
    if (email.length === 0) {
      alert('이메일이 비어있습니다.');
      return false;
    }
    if (!regEmail.test(email)) {
      alert('이메일이 타당하지 않습니다.');
      return false;
    }
    if (password.length === 0) {
      alert('비밀번호가 비어있습니다.');
      return false;
    }
    // if (!regPassword.test(password)) {
    //   alert('최소 8자, 하나 이상의 문자, 하나 이상의 숫자를 적어주세요.');
    // }
    // logInAPI(email, password).then(res => {
    //   setTOKEN(res.headers.authorization);
    //   axios
    //     .get('ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user')
    //     .then(response => {
    //       const { data } = response;
    //       setUser(data);
    //     })
    //     .catch(err => {
    //       let errorText;
    //       const { message } = err;
    //       const code = Number(message.slice(-3));
    //       switch (code) {
    //         case 401:
    //         case 404:
    //         case 500:
    //         default:
    //           errorText = message;
    //       }
    //       return alert(errorText);
    //     });
    // });
    axios
      .post(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user`,
        {
          email,
          password,
        },
        { withCredentials: true },
      )
      .then(res => {
        const data = JSON.stringify({
          id: res.data.id,
          token: res.headers.authorization,
        });
        const expires = moment().add('40', 'm').toDate();
        setCookie('hj', data, { expires });
        window.location.reload();
      })
      .catch(err => {
        console.log(err, 'login error!!');
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
                  className="modal-title fs-3"
                  id="exampleModalLabel"
                  style={{ fontFamily: 'Heebo', color: 'black' }}
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
                  id="floatingInput"
                  placeholder="이메일을 적으세요"
                  onChange={onChangeEmail}
                  value={email}
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
                  id="floatingInput"
                  placeholder="비밀번호를 적으세요"
                  onChange={onChangePassword}
                  value={password}
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
                <Buttons type="button" className="btn" onClick={handleLogIn}>
                  로그인
                </Buttons>
              </div>
            </div>
            <div className="p-5">
              <div className="modal-body border-top d-flex gap-4 m-auto">
                <button
                  type="submit"
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/github.svg`}
                    alt="github icon"
                    width="20"
                    height="20"
                    className="bi bi-envelope"
                    style={{
                      marginBottom: '-5px',
                    }}
                  />
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/google.svg`}
                    alt="google icon"
                    width="19"
                    height="19"
                    className="bi bi-envelope"
                    style={{
                      marginBottom: '-5px',
                    }}
                  />
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={whiteNaver}
                    alt="logo"
                    style={{
                      width: '25px',
                      height: '25px',
                      marginBottom: '-6px',
                    }}
                  />
                </button>
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
                  id="floatingInput"
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

const Buttons = styled.button`
  background-color: rgba(20, 40, 80, 1);
  color: white;
  &:hover {
    background-color: rgba(39, 73, 109, 1);
  }
`;
