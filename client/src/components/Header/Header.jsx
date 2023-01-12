import { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import ModalLogin from '../Modal/ModalLogin';
import ModalSignUp from '../Modal/ModalSignUp';
import profileImg from '../../img/jinwoo.png';

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    setIsLogin(console.log(isLogin));
  });
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand me-3" href="/">
          <img src={logo} alt="logo" height="40px" />
        </a>
        <button
          className="navbar-toggler border-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a className="nav-link px-2 text-white" href="/">
                쇼츠
              </a>
            </li>
            <li>
              <a className="nav-link px-2 text-white" href="/destination">
                지역
              </a>
            </li>
            <li>
              <a className="nav-link px-2 text-white" href="/season">
                계절
              </a>
            </li>
            <li>
              <a className="nav-link px-2 text-white" href="/guide">
                가이드
              </a>
            </li>
          </ul>

          <form
            className="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5"
            role="search"
          >
            <input
              className="form-control form-control-dark text-bg-dark me-3"
              type="search"
              placeholder="검색하기"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>

          {isLogin ? (
            <div className="dropdown">
              <a
                href="/mypage"
                className="nav-link"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profileImg}
                  alt="mdo"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small">
                <li className="mt-2">
                  <a className="dropdown-item" href="/mypage">
                    나의 정보
                  </a>
                </li>
                {/* <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="mb-3">
                  <a className="dropdown-item" href="/mypage/like">
                    내 좋아요
                  </a>
                </li>
                <li className="mb-3">
                  <a className="dropdown-item" href="/mypage/comment">
                    내 댓글
                  </a>
                </li>
                <li className="mb-3">
                  <a className="dropdown-item" href="/mypage/edit">
                    회원 정보 변경
                  </a>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="ms-3 mt-3 mb-1">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    로그아웃
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <form className="d-flex justify-content-end">
              <ModalLogin />
              <ModalSignUp />
            </form>
          )}
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                로그아웃
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body mb-3">정말 로그아웃 하시겠습니까?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                취소
              </button>
              <button type="button" className="btn btn-outline-danger">
                예, 로그아웃 합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
