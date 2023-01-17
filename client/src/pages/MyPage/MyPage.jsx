import React from 'react';
import MyPageBody from '../../components/MyPage/MyPageBody';
import Sidebar from '../../components/MyPage/Sidebar';

function MyPage() {
  return (
    <div className="container">
      <div className="row min-vh-100 flex-column flex-md-row">
        <Sidebar />
        <MyPageBody />
      </div>
    </div>
  );
}

export default MyPage;
