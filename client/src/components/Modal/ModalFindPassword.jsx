import email from '../../img/email.png';

function ModalFindPassword() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        비밀번호 찾기
      </button>
      <div
        className="modal"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel4"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-white">
            <div className="modal-header border-bottom-0">
              <div className="col-lg-9 col-sm-12 text-lg-end text-center">
                <h1
                  className="modal-title fs-3 p-2"
                  id="exampleModalLabel"
                  style={{ fontFamily: 'Heebo', color: 'black' }}
                >
                  Find a Password
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
                placeholder="이메일을 적으세요"
                style={{
                  borderRadius: '0',
                  paddingLeft: '30px',
                }}
              />
              <br />
              <div className="col-lg-12 col-sm-12 text-sm-end text-center">
                <button
                  type="submit"
                  className="btn text-white"
                  style={{ backgroundColor: 'rgba(178, 211, 190, 1)' }}
                >
                  보내기
                </button>
              </div>
            </div>
            <div
              className=""
              style={{
                padding: '0 50px 0 50px',
              }}
            >
              <div className="modal-footer p-4">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  로그인
                </button>
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
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

export default ModalFindPassword;
