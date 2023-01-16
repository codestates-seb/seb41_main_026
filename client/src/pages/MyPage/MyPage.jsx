import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyPageCard from '../../components/Card/MyPageCard';
import Sidebar from '../../components/MyPage/Sidebar';
import LoadingSpinner from '../../components/LoadingSpinner';

function MyPage() {
  const [myCommentCourse, setMyCommentCourse] = useState([]);
  const [myLikeCourse, setMyLikeCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyCourse = () => {
    axios
      .get(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user/4`,
      )
      .then(res => {
        setMyLikeCourse(res.data.courseLikes);
        setMyCommentCourse(res.data.comments);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMyCourse();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mb-5">
      <div className="row flex-grow-sm-1 flex-grow-0">
        <Sidebar />
        <div className="col-sm-3" />
        <div className="col overflow-auto h-100 mt-5 mb-5">
          <div className="mb-3">
            <div>
              <div className="d-flex p-2">
                <h1 className="fw-bold mt-3 flex-grow-1">
                  내 최근 좋아요 코스
                </h1>
                <Link to="/mypage/like">
                  {myLikeCourse.length === 0 ? (
                    <div />
                  ) : (
                    <button className="btn btn-sm btn-info">더보기</button>
                  )}
                </Link>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {myLikeCourse.length === 0 ? (
                  <div className="p-4 text-light-emphasis flex-grow-1 ">
                    아직 좋아요를 누른 코스가 없습니다.
                  </div>
                ) : (
                  myCommentCourse.map(data => {
                    return (
                      <MyPageCard
                        title={data.courseName}
                        key={data.courseId}
                        location={data.location}
                        id={data.course.courseId}
                      />
                    );
                  })
                )}
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex p-2">
                <h1 className="fw-bold mt-3 flex-grow-1">내 최근 댓글 코스</h1>
                <Link to="/mypage/comment">
                  {myCommentCourse.length === 0 ? (
                    <div />
                  ) : (
                    <button className="btn btn-sm btn-info">더보기</button>
                  )}
                </Link>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {myCommentCourse.length === 0 ? (
                  <div className="p-4 text-light-emphasis flex-grow-1 ">
                    아직 댓글을 작성한 코스가 없습니다.
                  </div>
                ) : (
                  myCommentCourse.map(data => {
                    return (
                      <MyPageCard
                        title={data.course.courseName}
                        key={data.commentId}
                        location={data.course.location}
                        id={data.course.courseId}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
