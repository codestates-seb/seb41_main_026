import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import MyPageCard from '../Card/MyPageCard';
import LoadingSpinner from '../LoadingSpinner';

function MyPageComment() {
  const [myCommentCourse, setMyCommentCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyCommentCourse = () => {
    axios
      .get(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user/4`,
      )
      .then(res => {
        setMyCommentCourse(res.data.comments);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMyCommentCourse();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (myCommentCourse.length === 0) {
    return (
      <div className="p-4 text-light-emphasis flex-grow-1 ">
        아직 댓글을 작성한 코스가 없습니다.
      </div>
    );
  }

  return (
    <div className="container mb-5">
      <div className="row flex-grow-sm-1 flex-grow-0">
        <Sidebar />
        <div className="col-sm-3" />
        <div className="col overflow-auto h-100 mt-5 mb-5">
          <div className="mb-3">
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
  );
}

export default MyPageComment;
