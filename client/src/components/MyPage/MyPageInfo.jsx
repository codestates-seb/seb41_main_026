import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalConfirmEdit from '../Modal/ModalConfirmEdit';
import Sidebar from './Sidebar';

function MyPageInfo() {
  const url =
    'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user/4';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get(url).then(res => {
      setName(res.data.name);
      setEmail(res.data.email);
    });
  }, []);

  const onSubmit = () => {
    axios
      .patch(url, {
        name,
        password,
      })
      .then(res => {
        console.log(res);
      });
  };

  return (
    <div className="container">
      <div className="row ">
        <Sidebar />
        <div className="col-sm-3" />
        <div className="col-lg-5 overflow-auto h-100 mt-5 mb-5">
          <div className="mb-3 ">
            <h1 className="mb-3 fs-2 fw-bold">회원 정보 변경</h1>

            <form className="pt-3 container">
              <div className="mb-3 mt-3">
                <label htmlFor="inputPassword5" className="form-label">
                  이름
                </label>
                <input
                  type="name"
                  id="inputPassword5"
                  className="form-control"
                  placeholder="김개똥"
                  aria-describedby="passwordHelpBlock"
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
                <div id="passwordHelpBlock" className="form-text" />
              </div>
              <fieldset disabled>
                <div className="mb-3 mt-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    이메일
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="김개똥@gmail.com"
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    disabled
                  />
                </div>
              </fieldset>

              <div className="mb-3 mt-3">
                <label htmlFor="inputPassword5" className="form-label">
                  새로운 비밀번호
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  placeholder="새로운 비밀번호를 입력해주세요"
                  aria-describedby="passwordHelpBlock"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <div id="passwordHelpBlock" className="form-text ">
                  8-20 글자 사이의 비밀번호
                </div>
              </div>
              <button onClick={onSubmit}>submit</button>
              <ModalConfirmEdit />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
