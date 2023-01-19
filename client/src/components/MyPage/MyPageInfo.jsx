import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { regName, regPassword } from '../../util/regStore';

function MyPageInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userDataModified = { name, password };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/1`)
      .then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    if (name.length === 0 || !regName.test(name)) {
      alert('이름은 한글, 숫자, 영어만 가능합니다.');
    }
    if (name.length < 2 || name.length > 15) {
      alert('이름을 최소 2자 이상 15자 이하로 적어주세요.');
    }
    if (password.length === 0 || !regPassword.test(password)) {
      alert(
        '최소 6자 최대 12자, 하나 이상의 문자, 하나 이상의 숫자를 적어주세요.',
      );
    }

    axios
      .patch(`${process.env.REACT_APP_API_URL}/user/1`, userDataModified)
      .then(() => {
        alert('회원 정보 변경을 완료하였습니다.');
        window.location.reload();
      })
      .catch(err => {
        console.log(err, '수정 잘못됨');
        alert('누구인가. 누가 지금 에러를 일으켰어');
      });
  };

  return (
    <div className="container">
      <div className="row ">
        <Sidebar />
        <main className="col-sm-9 px-0 flex-grow-1">
          <div className="container py-3">
            <article>
              <div>
                <h1 className="mb-3 fs-2 px-3 py-2 fw-bold">회원 정보 변경</h1>

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
                    <div
                      id="passwordHelpBlock"
                      className="text-secondary py-2 "
                    >
                      최소 2자 이상 15자 이하의 한글, 숫자, 영어
                    </div>
                  </div>
                  <fieldset disabled>
                    <div className="mb-3 mt-3">
                      <label htmlFor="disabledTextInput" className="form-label">
                        이메일
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        className="form-control text-secondary"
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
                    <div
                      id="passwordHelpBlock"
                      className="text-secondary py-2 "
                    >
                      최소 6자 최대 12자, 하나 이상의 문자와 숫자
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5"
                  >
                    수정 사항 변경
                  </button>
                </form>
              </div>
            </article>
          </div>
        </main>
      </div>
      <div
        className="modal"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel5"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-4">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                회원 정보 수정
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body mb-3">회원 정보 수정을 완료합니까?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                취소
              </button>
              <button
                type="button"
                className="btn btn-outline-info me-2"
                onClick={onSubmit}
              >
                네, 수정을 완료합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
