import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import logo from '../../img/logo.png';
import ModalLogin from '../Modal/ModalLogin';
import ModalSignUp from '../Modal/ModalSignUp';
import profileImg from '../../img/jinwoo.png';

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [removeCookie] = useCookies(['hj']);
  function handleLogOut() {
    removeCookie('hj');
    window.location.reload();
  }
  useEffect(() => {
    setIsLogin(console.log(isLogin));
  });
  return (
    <nav
      className="navbar  navbar-expand-lg sticky-top"
      data-bs-theme="dark"
      style={{ backgroundColor: '#142850' }}
    >
      <div className="container">
        <a className="navbar-brand me-3" href="/">
          <img src={logo} alt="logo" height="40px" />
        </a>
        <button
          className="navbar-toggler border-secondary border-2 "
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

          {!isLogin ? (
            <div className="d-flex justify-content-end">
              <div className="dropdown">
                <a
                  href="/mypage"
                  className="btn btn-scondary dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
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
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end mt-2 dropdown-menu-dark text-small">
                  <li className="mt-2 ms-2">
                    <a className="dropdown-item" href="/mypage">
                      나의 정보
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="ms-4 mt-3 mb-1">
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
        className="modal fade "
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
              <button className="btn btn-outline-danger" onClick={handleLogOut}>
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
