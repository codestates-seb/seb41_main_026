import React from 'react';
import Sidebar from './Sidebar';

function MyPageComment() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-sm-9">댓글</div>
      </div>
    </div>
  );
}

export default MyPageComment;
