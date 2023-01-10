import React from 'react';
import Sidebar from '../../components/MyPage/Sidebar';

function MyPage() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-sm-9">본문</div>
      </div>
    </div>
  );
}

export default MyPage;
