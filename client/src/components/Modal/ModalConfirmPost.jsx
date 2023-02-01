import React from 'react';

function ModalConfirmPost() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal6"
      >
        게시하기
      </button>
      <div
        className="modal fade"
        id="exampleModal6"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel6"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                댓글
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body mb-3">정말 댓글을 게시하겠습니까?</div>
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
                네, 게시합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalConfirmPost;
