import React from 'react';
import MyPageBody from './MyPageBody';
import Sidebar from './Sidebar';

function MyPageComment() {
  return (
    <div className="container">
      <div className="row min-vh-100 flex-column flex-md-row">
        <Sidebar />
        <MyPageBody />
      </div>
    </div>
  );
}

export default MyPageComment;
