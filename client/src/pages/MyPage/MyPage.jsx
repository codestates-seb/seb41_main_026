import React from 'react';
import { Link } from 'react-router-dom';
import MyPageCard from '../../components/Card/MyPageCard';
import Sidebar from '../../components/MyPage/Sidebar';

function MyPage() {
  return (
    <div className="container">
      <div className="row flex-grow-sm-1 flex-grow-0">
        <Sidebar />
        <div className="col-sm-3" />
        <div className="col-sm-9">
          <div className="mb-3">
            <div className="d-flex justify-content-between mt-4">
              <div className="pt-2 fw-bold">내 최근 좋아요</div>
              <Link to="/mypage/like">
                <button className="btn btn-outline-success btn-sm">
                  더보기
                </button>
              </Link>
            </div>
            <div className="d-flex mt-1 mb-5 p-3 bg-light bg-opacity-10 border border-3 border-success-subtle  rounded">
              <MyPageCard title="DMZ TOUR" destination="PAJU" id="1" />
              <MyPageCard title="🛤️ DMZ 투어" id="2" />
              <MyPageCard title="🛤️ DMZ 투어" id="3" />
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between mt-4">
              <div className="pt-2 fw-bold">내 최근 댓글</div>
              <Link to="/mypage/comment">
                <button className="btn btn-outline-info btn-sm">더보기</button>
              </Link>
            </div>
            <div className="d-flex mt-1 mb-5 p-3 bg-light bg-opacity-10 border border-3 border-info-subtle  rounded">
              <MyPageCard title="🛤️ DMZ 투어" id="1" />
              <MyPageCard title="🛤️ DMZ 투어" id="2" />
              <MyPageCard title="🛤️ DMZ 투어" id="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
