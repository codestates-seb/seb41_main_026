import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyPageCard from '../../components/Card/MyPageCard';
import Sidebar from '../../components/MyPage/Sidebar';

function MyPage() {
  const [userData, setUserData] = useState('');
  const [commentData, setCommentData] = useState('');
  const [courseData, setCourseData] = useState('');

  useEffect(() => {
    axios
      .get(
        'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user/4',
      )
      .then(res => {
        setUserData(res.data);
        setCommentData(res.data.comments);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course',
      )
      .then(res => {
        setCourseData(res.data);
      });
  }, []);

  console.log(userData, commentData, courseData);

  /* 내가 댓글 단 코스 조회 함수 */
  /* 1. 내 코멘트 ID를 최근 수정일 기준으로 새로운 배열에 넣는다. */
  // const orderedDate = commentData.sort(
  //   (a, b) => new Date(a.modifiedAt) - new Date(b.modifiedAt),
  // );

  // console.log(orderedDate);
  /* 2. 전체 코스에서 해당 코멘트 ID가 있으면 myCommentList 배열에 추가한다. */
  // const commentList = courseData.map(el => el.comments);
  // console.log(commentList);
  // const commentIdList = commentData.map(el => el.commentId);
  // console.log(commentIdList);

  // const myCommentList = commentList.filter(el =>
  //   el.map(ele => ele.commentId === commentIdList),
  // );
  // console.log(myCommentList);

  /* 3. 중복 값은 제거한다. */

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
