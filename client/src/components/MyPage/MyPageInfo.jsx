import React from 'react';
import ModalConfirmEdit from '../Modal/ModalConfirmEdit';
import Sidebar from './Sidebar';

function MyPageInfo() {
  return (
    <div className="container overflow-auto">
      <div className="row flex-grow-sm-1 flex-grow-0">
        <Sidebar />
        <div className="col overflow-auto h-100 mt-5 mb-5">
          <div className="mb-3">
            <h1 className="mb-3 fs-2 fw-bold">회원 정보 수정</h1>

            <form className="pt-3">
              <div className="mb-3">
                <label htmlFor="inputPassword5" className="form-label">
                  이름
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  placeholder="김개똥"
                  aria-describedby="passwordHelpBlock"
                />
                <div id="passwordHelpBlock" className="form-text" />
              </div>
              <fieldset disabled>
                <div className="mb-3">
                  <label htmlFor="disabledTextInput" className="form-label">
                    이메일
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="김개똥@gmail.com"
                  />
                </div>
              </fieldset>

              <div className="mb-3">
                <label htmlFor="inputPassword5" className="form-label">
                  새로운 비밀번호
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  placeholder="새로운 비밀번호를 입력해주세요"
                  aria-describedby="passwordHelpBlock"
                />
                <div id="passwordHelpBlock" className="form-text">
                  8-20 글자 사이의 비밀번호
                </div>
              </div>

              <ModalConfirmEdit />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
