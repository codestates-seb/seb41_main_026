import { useEffect, useState, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import ModalLogin from '../Modal/ModalLogin';
import ModalSignUp from '../Modal/ModalSignUp';
import { getUserId } from '../../redux/userSlice';
import { getCookie, removeCookie } from '../../util/cookie';

function Header() {
  const [searchText, setSearchText] = useState('');
  const search = useRef();
  const navigate = useNavigate();
  const [img, setimg] = useState('https://source.boringavatars.com/beam/40');

  const userId = useSelector(getUserId);

  function handleSearch() {
    localStorage.setItem('searchText', searchText);
    navigate('/search');
  }

  function handleLogOut() {
    removeCookie('accessToken');
    sessionStorage.clear();
    navigate('/');
    window.alert('로그아웃 되었습니다.');
    window.location.reload();
  }

  const onClickRemove = () => {
    localStorage.removeItem('searchText');
  };
  const randomImg = () => {
    setimg(`https://source.boringavatars.com/beam/40/${userId}`);
  };

  useEffect(() => {
    randomImg();
  }, []);

  useEffect(() => {
    if (!getCookie('accessToken')) {
      sessionStorage.clear();
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (!userId) {
      sessionStorage.clear();
      removeCookie('accessToken');
    }
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-dark"
      data-bs-theme="dark"
      style={{
        backgroundColor: '#142850',
        width: '100vw',
      }}
    >
      <div className="container">
        <Link className="navbar-brand me-3" to="/" onClick={onClickRemove}>
          <img src={logo} alt="logo" height="40px" />
        </Link>
        <button
          className="navbar-toggler border-secondary border-2 btn btn-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <a className="nav-link px-2" href="/shorts">
                쇼츠
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 " href="/">
                지역
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 " href="/season">
                계절
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 " href="/guide">
                가이드
              </a>
            </li>
          </ul>
          <form
            className="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-5"
            role="search"
          >
            <div className="input-group">
              <input
                className="form-control form-control-dark text-bg-dark"
                type="text"
                onChange={e => {
                  setSearchText(e.target.value);
                }}
                placeholder="검색하기"
                aria-label="Search"
                ref={search}
              />
              <div onSubmit={handleSearch}>
                <button
                  className="btn btn-outline-secondary rounded-0 rounded-end"
                  onClick={handleSearch}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 -1 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          {getCookie('accessToken') ? (
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
                    src={img}
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
            <div className="d-flex column justify-content-end">
              <form className="d-flex justify-content-end">
                <ModalLogin />
              </form>
              <form className="d-flex justify-content-end">
                <ModalSignUp />
              </form>
            </div>
          )}
        </div>
      </div>

      <div
        className="modal "
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel3"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-4">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header">
              <div className="col-lg-7 col-sm-12 text-lg-end text-center">
                <h1 className="modal-title fs-3" id="exampleModalLabel">
                  로그아웃
                </h1>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-5" style={{ textAlign: 'center' }}>
              정말 로그아웃 하시겠습니까?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary me-3"
                data-bs-dismiss="modal"
              >
                취소
              </button>

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleLogOut}
              >
                예, 로그아웃 합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
