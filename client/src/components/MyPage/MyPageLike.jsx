import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import MyPageCard from '../Card/MyPageCard';
import LoadingSpinner from '../LoadingSpinner';

function MyPageLike() {
  const [myLikeCourse, setMyLikeCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyCourse = () => {
    axios
      .get(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/user/4`,
      )
      .then(res => {
        setMyLikeCourse(res.data.courseLikes);
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
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {myLikeCourse.length === 0 ? (
                <div className="p-4 text-light-emphasis flex-grow-1 ">
                  아직 좋아요를 누른 코스가 없습니다.
                </div>
              ) : (
                myLikeCourse.map(data => {
                  return (
                    <MyPageCard
                      title={data.courseName}
                      key={data.courseId}
                      location={data.location}
                      id={data.courseId}
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

export default MyPageLike;
