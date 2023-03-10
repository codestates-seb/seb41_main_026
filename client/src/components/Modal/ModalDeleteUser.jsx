import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../util/cookie';
import { getUserId } from '../../redux/userSlice';

function ModalDeleteUser() {
  const userId = useSelector(getUserId);
  const navigate = useNavigate();
  const handelDeleteUser = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        headers: {
          authorization: getCookie('accessToken'),
        },
      })
      // eslint-disable-next-line no-unused-vars
      .then(res => {
        removeCookie('accessToken');
        removeCookie('refreshToken');
        sessionStorage.clear();
        navigate('/');
        window.location.reload();
        window.alert('회원 탈퇴 완료...');
      })
      .catch(() => window.alert('회원 탈퇴 실패.'));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal6"
      >
        회원 탈퇴
      </button>
      <div
        className="modal"
        id="exampleModal6"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-4">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header">
              <div className="col-lg-7 col-sm-12 text-lg-end text-center">
                <h1 className="modal-title fs-3" id="exampleModalLabel">
                  회원 탈퇴
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
              탈퇴를 하시겠습니까?
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
                onClick={handelDeleteUser}
              >
                예, 탈퇴를 합니다.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDeleteUser;
