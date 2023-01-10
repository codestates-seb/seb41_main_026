import React from 'react';
import Sidebar from './Sidebar';

function MyPageInfo() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-sm-9">회원 정보 변경</div>
      </div>
    </div>
  );
}

export default MyPageInfo;
