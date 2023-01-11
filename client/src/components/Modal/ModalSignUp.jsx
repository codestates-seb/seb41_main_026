import gitHub from '../../img/gitHub.png';
import google from '../../img/google.png';
import naver from '../../img/naver.png';
import email from '../../img/email.png';
import password from '../../img/password.png';
import name from '../../img/name.png';

function ModalSignUp() {
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
          <div className="modal-content bg-white">
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
                style={{
                  marginBottom: '20px',
                  color: 'black',
                }}
              />
            </div>
            <div className="modal-body p-5">
              <img
                src={name}
                alt="logo"
                style={{
                  width: '35px',
                  height: '35px',
                  marginBottom: '-39px',
                }}
              />
              <input
                type="email"
                className="form-control border-0 border-bottom"
                id="floatingInput"
                placeholder="이름을 적으세요"
                style={{
                  borderRadius: '0',
                  paddingLeft: '30px',
                }}
              />
              <br />
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
                placeholder="이메일을 적으세요"
                style={{
                  borderRadius: '0',
                  paddingLeft: '30px',
                }}
              />
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
                placeholder="비밀번호를 적으세요"
                style={{
                  borderRadius: '0',
                  paddingLeft: '30px',
                  borderColor: 'rgba(222, 226, 230, 1)',
                }}
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
                  회원가입
                </button>
              </div>
            </div>
            <div className="">
              <div
                className="modal-body d-flex gap-4 m-auto"
                style={{
                  paddingBottom: '40px',
                }}
              >
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'rgba(178, 211, 190, 1)',
                    borderRadius: '20px',
                    width: '80px',
                    marginLeft: '50px',
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
