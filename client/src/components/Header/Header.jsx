import { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import ModalLogin from '../Modal/ModalLogin';
import ModalLogout from '../Modal/ModalLogout';
import ModalSignUp from '../Modal/ModalSignUp';

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    setIsLogin(console.log(isLogin));
  });
  return (
    <header className="p-3 text-bg-dark sticky-top" data-bs-theme="dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a className="navbar-brand me-3" href="/">
            <img src={logo} alt="logo" height="40px" />
          </a>

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
            <div className="dropdown text-end">
              <a
                href="/mypage"
                className="d-block link text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="/mypage/like">
                    내 좋아요
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/mypage/comment">
                    내 댓글
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/mypage/edit">
                    회원 정보 변경
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <ModalLogout />
                </li>
              </ul>
            </div>
          ) : (
            <form className="justify-content-end">
              <ModalLogin />
              <ModalSignUp />
            </form>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
