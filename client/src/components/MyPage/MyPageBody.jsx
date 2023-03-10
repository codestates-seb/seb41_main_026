import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import MyPageCard from '../Card/MyPageCard';
import MyPageUsercard from './MyPageUsercard';
import { getUserId } from '../../redux/userSlice';
import { getCookie } from '../../util/cookie';

function MyPageBody() {
  const [myCommentCourse, setMyCommentCourse] = useState([]);
  const [myLikeCourse, setMyLikeCourse] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  const userId = useSelector(getUserId);

  const getMyCourse = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
        headers: {
          authorization: getCookie('accessToken'),
        },
      })
      .then(res => {
        setMyLikeCourse(res.data.courseLikes);
        setMyCommentCourse(res.data.comments);
        setUserData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const recentComments = myCommentCourse.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
  const myRecentComment = recentComments.slice(0, 3);
  const myRecentLike = myLikeCourse.slice(0, 3);

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
    <main className="col-12 col-md-9 px-0 flex-grow-1 mb-5">
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
                myRecentLike.map(data => {
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
                <h1 className="fw-bold mt-3 flex-grow-1 fs-3">내 최근 댓글</h1>
                <Link to="/mypage/comment">
                  {myCommentCourse.length === 0 ? (
                    <div />
                  ) : (
                    <button className="btn btn-sm btn-info mt-3">더보기</button>
                  )}
                </Link>
              </div>
              <div className="row row-cols-1 row-cols-md-1 g-4 p-3 mb-5">
                {myCommentCourse.length === 0 ? (
                  <div className="p-4 text-light-emphasis flex-grow-1">
                    아직 작성한 댓글이 없습니다.
                  </div>
                ) : (
                  myRecentComment.map(data => {
                    return (
                      <div>
                        <Link
                          key={data.commentId}
                          to={`../course/${data.courseId}`}
                          className="text-decoration-none"
                        >
                          <li className="text-info">
                            {data.content.length < 30
                              ? `${data.content.slice(0, 30)}`
                              : `${data.content.slice(0, 30)}...`}
                          </li>
                        </Link>
                      </div>
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
                  내가 작성한 댓글 목록
                </h1>
              </div>
              <div className="row row-cols-1 row-cols-md-1 p-3 g-4">
                {myCommentCourse.length === 0 ? (
                  <div className="p-4 text-light-emphasis flex-grow-1 ">
                    아직 작성한 댓글이 없습니다.
                  </div>
                ) : (
                  myCommentCourse.map(data => {
                    let day = Number(data.createdAt.slice(8, 10)) + 1;
                    if (day > 31) {
                      day = 1;
                    }
                    let hour = Number(data.createdAt.slice(-8, -6)) - 6;

                    if (hour > 23) {
                      hour = Number(data.createdAt.slice(-8, -6)) - 6;
                    } else if (hour > 18) {
                      hour = Number(data.createdAt.slice(-8, -6)) + 18;
                    }
                    return (
                      <div className="mb-0">
                        <Link
                          key={data.commentId}
                          to={`../course/${data.courseId}`}
                          className="text-decoration-none"
                        >
                          <li className="text-info mb-2">
                            {data.content.length < 30
                              ? `${data.content.slice(0, 30)}`
                              : `${data.content.slice(0, 30)}...`}
                          </li>
                        </Link>
                        <div className="text-secondary ms-3">
                          {data.createdAt.slice(2, 8) + String(day)}
                          &ensp;
                          {String(hour) + data.createdAt.slice(-6, -3)}
                        </div>
                        <hr className="text-light" />
                      </div>
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
