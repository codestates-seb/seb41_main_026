import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import MyPageCard from '../Card/MyPageCard';
import MyPageUsercard from './MyPageUsercard';

function MyPageBody() {
  const [myCommentCourse, setMyCommentCourse] = useState([]);
  const [myLikeCourse, setMyLikeCourse] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const getMyCourse = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/user/1`).then(res => {
      setMyLikeCourse(res.data.courseLikes);
      setMyCommentCourse(res.data.comments);
      setUserData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getMyCourse();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <main className="col-sm-9 px-0 flex-grow-1 mb-5">
      <div className="container py-3">
        {pathname === '/mypage' ? (
          <article>
            <div className="d-flex">
              <MyPageUsercard userData={userData} />
            </div>
            <div className="d-flex p-2">
              <h1 className="fw-bold mt-3 flex-grow-1 fs-3">
                내 최근 좋아요 코스
              </h1>
              <Link to="/mypage/like">
                {myLikeCourse.length === 0 ? (
                  <div />
                ) : (
                  <button className="btn btn-sm btn-info mt-3">더보기</button>
                )}
              </Link>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {myLikeCourse.length === 0 ? (
                <div className="p-4 text-light-emphasis flex-grow-1 ">
                  아직 좋아요를 누른 코스가 없습니다.
                </div>
              ) : (
                myLikeCourse.map(data => {
                  return (
                    <MyPageCard
                      title={data.course.courseName}
                      key={data.course.courseId}
                      location={data.course.location}
                      id={data.course.courseId}
                    />
                  );
                })
              )}
            </div>

            <div className="mt-5">
              <div className="d-flex p-2">
                <h1 className="fw-bold mt-3 flex-grow-1 fs-3">
                  내 최근 댓글 코스
                </h1>
                <Link to="/mypage/comment">
                  {myCommentCourse.length === 0 ? (
                    <div />
                  ) : (
                    <button className="btn btn-sm btn-info mt-3">더보기</button>
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
          </article>
        ) : pathname === '/mypage/like' ? (
          <article>
            <div className="d-flex p-2">
              <h1 className="fw-bold mt-3 flex-grow-1 fs-3">
                내가 누른 좋아요 코스
              </h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {myLikeCourse.length === 0 ? (
                <div className="p-4 text-light-emphasis flex-grow-1 ">
                  아직 좋아요를 누른 코스가 없습니다.
                </div>
              ) : (
                myLikeCourse.map(data => {
                  return (
                    <MyPageCard
                      title={data.course.courseName}
                      key={data.course.courseId}
                      location={data.course.location}
                      id={data.course.courseId}
                    />
                  );
                })
              )}
            </div>
          </article>
        ) : (
          <article>
            <div>
              <div className="d-flex p-2">
                <h1 className="fw-bold mt-3 flex-grow-1 fs-3">
                  내가 작성한 댓글 코스
                </h1>
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
          </article>
        )}
      </div>
    </main>
  );
}

export default MyPageBody;
