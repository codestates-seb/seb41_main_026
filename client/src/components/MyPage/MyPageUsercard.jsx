import React from 'react';
import { useSelector } from 'react-redux';
import { getUserId } from '../../redux/userSlice';

function MyPageUsercard({ userData }) {
  const userId = useSelector(getUserId);
  return (
    <div className="container px-3 py-3 mb-5">
      <div className="row flex-lg-row-reverse align-items-center g-2 border border-3 rounded p-3">
        <div className="col-lg-6 mb-3" style={{ textAlign: '-webkit-center' }}>
          <img
            src={`https://source.boringavatars.com/beam/40/${userId}`}
            className="d-block mx-lg-auto img-fluid rounded-circle"
            alt="Bootstrap Themes"
            width="200"
            height="200"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 p-1">{userData.name}</h1>
          <p className="lead p-2">이메일: {userData.email}</p>
          <p className="p-2 text-secondary">
            가입일: {userData.createdAt.slice(2, 10)}
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start" />
        </div>
      </div>
    </div>
  );
}

export default MyPageUsercard;
