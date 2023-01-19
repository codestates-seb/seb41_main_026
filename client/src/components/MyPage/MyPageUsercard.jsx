import React from 'react';

function MyPageUsercard({ userData }) {
  return (
    <div className="container col-xxl-8 px-3 py-3 mb-5">
      <div className="row flex-lg-row-reverse align-items-center g-2 border border-3 rounded p-3">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/img/jinwoo.png"
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
