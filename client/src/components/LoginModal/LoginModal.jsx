import gitHub from '../../img/gitHub.png';
import google from '../../img/google.png';
import naver from '../../img/naver.png';
import email from '../../img/email.png';
import password from '../../img/password.png';

function LoginModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light me-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        로그인
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-4">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <div className="col-lg-7 col-sm-12 text-lg-end text-center mt-3">
                <h1
                  className="modal-title fs-3"
                  id="exampleModalLabel"
                  style={{ fontFamily: 'Heebo' }}
                >
                  Log In
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
              <img
                src={email}
                alt="logo"
                style={{
                  width: '30px',
                  height: '30px',
                  marginBottom: '-36px',
                }}
              />
              <input
                type="email"
                className="form-control border-0 border-bottom"
                id="floatingInput"
                placeholder="     이메일을 적으세요"
              />
              <br />
              <br />
              <img
                src={password}
                alt="logo"
                style={{
                  width: '23px',
                  height: '23px',
                  marginBottom: '-33px',
                  marginLeft: '4px',
                }}
              />
              <input
                type="password"
                className="form-control border-0 border-bottom"
                id="floatingInput"
                placeholder="     비밀번호를 적으세요"
              />
              <br />
              <div className="col-lg-12 col-sm-12 text-sm-end text-center">
                <button
                  type="submit"
                  className="btn text-white"
                  style={{
                    backgroundColor: 'rgba(178, 211, 190, 1)',
                  }}
                >
                  로그인
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="modal-body border-top d-flex gap-4 m-auto">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'rgba(178, 211, 190, 1)',
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={gitHub}
                    alt="logo"
                    style={{
                      width: '25px',
                      height: '25px',
                      marginBottom: '-6px',
                    }}
                  />
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'rgba(178, 211, 190, 1)',
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={google}
                    alt="logo"
                    style={{
                      width: '25px',
                      height: '25px',
                      marginBottom: '-6px',
                    }}
                  />
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'rgba(178, 211, 190, 1)',
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={naver}
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
                <button type="button" className="btn">
                  비밀번호 찾기
                </button>
                <button type="button" className="btn">
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

export default LoginModal;
