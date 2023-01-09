function LogoutModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        로그아웃
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                취소
              </button>
              <button
                type="button"
                className="btn text-white"
                style={{ backgroundColor: 'rgba(178, 211, 190, 1)' }}
              >
                예, 로그아웃 합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoutModal;
