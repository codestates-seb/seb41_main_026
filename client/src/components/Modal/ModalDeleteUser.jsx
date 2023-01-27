import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../util/cookie';
import { getUserId } from '../../redux/userSlice';

const Buttons = styled.button`
  background-color: rgba(20, 40, 80, 1);
  color: white;
  &:hover {
    background-color: rgba(39, 73, 109, 1);
  }
`;

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
      .then(res => {
        removeCookie('accessToken');
        removeCookie('refreshToken');
        sessionStorage.clear();
        navigate('/');
        window.location.reload();
        window.alert(res, '회원 탈퇴 완료...');
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header border-bottom-0">
              <div className="col-lg-8 col-sm-10 text-lg-end text-center mt-3">
                <h1 className="modal-title fs-3 p-4" id="exampleModalLabel">
                  회원 탈퇴
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
              <div
                className="p-1"
                style={{
                  textAlign: 'center',
                  marginBottom: '30px',
                  marginTop: '-30px',
                }}
              >
                <p>여행을 그만두시겠습니까?</p>
              </div>
              <div className="col-lg-12 col-sm-12 text-sm-end text-center">
                <button
                  type="button"
                  className="btn btn-secondary me-3"
                  data-bs-dismiss="modal"
                >
                  취소
                </button>
                <Buttons
                  type="submit"
                  className="btn"
                  onClick={handelDeleteUser}
                >
                  확인
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDeleteUser;
