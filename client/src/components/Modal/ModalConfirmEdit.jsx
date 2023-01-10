import React from 'react';

function ModalConfirmEdit() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
      >
        수정 사항 변경
      </button>
      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel5"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                네, 수정을 완료합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalConfirmEdit;
