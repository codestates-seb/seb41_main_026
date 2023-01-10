import React from 'react';
import Sidebar from './Sidebar';

function MyPageLike() {
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-sm-9">좋아요</div>
      </div>
    </div>
  );
}

export default MyPageLike;
