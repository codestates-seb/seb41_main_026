import { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
// import signUpAPI from '../../API/signUpAPI';
import { regEmail } from '../../util/regStore';
import whiteNaver from '../../img/whiteNaver.png';

function ModalSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [setCookie] = useCookies(['hj']);
  const [setMsg] = useState(false);

  // const naviagte = useNavigate();

  const onChangeName = e => {
    setName(e.target.value);
  };
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  // eslint-disable-next-line consistent-return
  const handleSignUp = e => {
    e.preventDefault();
    if (name.length === 0) {
      alert('이름이 비어있습니다.');
      return false;
    }
    if (name.length < 2 || name.length > 15) {
      alert('이름을 최소 2글자 이상 15글자 이하로 적어주세요.');
      return false;
    }
    // if (!regName.test(name)) {
    //   alert('이름은 숫자나 영어만 가능합니다.');
    //   return false;
    // }
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

    // signUpAPI(name, email, password).then(res => {
    //   if (res !== '') {
    //     window.alert('회원가입 성공!');
    //     console.log(res.data);
    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //   } else {
    //     alert('회원가입 실패');
    //   }
    // });
    axios(
      {
        method: 'post',
        url: `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user`,
        data: {
          name,
          email,
          password,
        },
      },
      { withCredentials: true },
    ).then(res => {
      axios
        .post(
          `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user`,
          {
            email,
            password,
          },
          { withCredentials: true },
          console.log(res),
        )
        // eslint-disable-next-line no-shadow
        .then(res => {
          const data = JSON.stringify({
            id: res.data.id,
            token: res.headers.authorization,
          });
          const expires = moment().add('40', 'm').toDate();
          setCookie('hj', data, { expires });
          setMsg(true);
          setTimeout(() => {
            setMsg(false);
            window.location.reload();
          }, 4000);
        })
        .catch(() => console.log('회원가입'));
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        회원가입
      </button>
      <div
        className="modal"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
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
                  Sign Up
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
                  src={`${process.env.PUBLIC_URL}/name.svg`}
                  alt="name icon"
                  width="20"
                  height="20"
                  className="bi bi-envelope"
                />
                <input
                  type="name"
                  className="form-control border-0 border-bottom ms-3"
                  id="floatingInput"
                  placeholder="이름을 적으세요"
                  onChange={onChangeName}
                  value={name}
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
                  src={`${process.env.PUBLIC_URL}/email.svg`}
                  alt="email icon"
                  width="20"
                  height="20"
                  className="bi bi-envelope"
                />
                <input
                  type="name"
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
                <Buttons type="submit" className="btn" onClick={handleSignUp}>
                  회원가입
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
            <div
              style={{
                padding: '0 50px 0 50px',
              }}
            >
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSignUp;

const Buttons = styled.button`
  background-color: rgba(20, 40, 80, 1);
  color: white;
  &:hover {
    background-color: rgba(39, 73, 109, 1);
  }
`;
