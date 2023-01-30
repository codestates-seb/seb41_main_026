import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import heart from '../../img/heart.png';
import heartFill from '../../img/heart_fill.png';
import RouteContainer from '../../components/Content/RouteContainer';
import TitleBox from '../../components/Content/TitleBox';
import MapBox from '../../components/Content/MapBox';
import MainBox from '../../components/Content/MainBox';
import Layout from '../../components/Common/Layout';
import { getUserId } from '../../redux/userSlice';
import { getCookie } from '../../util/cookie';

const HeartWrap = styled.div`
  width: 70px;
  height: 70px;
  background-color: white;
  position: fixed;
  left: 25px;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border-radius: 50%;
`;

const HeartDes = styled.div`
  color: black;
  margin-bottom: 10px;
`;

const HeartBox = styled.span`
  width: 20px;
  height: 20px;
  margin-left: 7px;
`;

const Heart = styled.img`
  width: 24px;
  position: relative;
  top: 5px;
  right: 4px;
  :hover {
    cursor: pointer;
  }
`;

function ContentPage() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [heartData, setHeartData] = useState(null);
  const [heartState, setHeartState] = useState(false);
  const [change, setChange] = useState(false);

  const commentRef = useRef(0);

  const sessionUserId = useSelector(getUserId);

  useEffect(() => {
    axios
      .get(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course/${id}`,
      )
      .then(res => setCourseData(res.data));
  }, []);

  const scrollToBottom = () => {
    commentRef.current?.scrollTo({ top: 100000, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [courseData]);

  const heartHandler = () => {
    axios
      .post(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/courselike/${id}`,
        {
          userId: sessionUserId,
        },
        {
          headers: {
            authorization: getCookie('accessToken'),
          },
        },
      )
      .then(res => {
        setHeartData(res?.data);
        return res.data;
      })
      .then(res => {
        window.localStorage.setItem(
          'heartStatus',
          JSON.stringify(res.courseLikeStatus),
        );
        window.localStorage.setItem(`${id}`, JSON.stringify(`/course/${id}`));
        setHeartState(!heartState);
      });
  };
  console.log(heartData);

  useEffect(() => {
    axios
      .get(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course/${id}`,
      )
      .then(res => setCourseData(res.data));
  }, [heartState]);

  useEffect(() => {
    if (
      window.location.pathname !==
      JSON.parse(window.localStorage.getItem(`${id}`))
    ) {
      window.localStorage.removeItem(`heartStatus`);
    }
  }, []);

  useEffect(() => {
    setChange(!change);
  }, [window.localStorage.getItem('heartStatus')]);

  return (
    <Layout header footer>
      <TitleBox courseData={courseData} />
      <div className="container">
        {sessionUserId && (
          <HeartWrap>
            <HeartBox>
              {JSON.parse(window.localStorage.getItem('heartStatus')) ? (
                <Heart src={heartFill} onClick={heartHandler} />
              ) : (
                <Heart src={heart} onClick={heartHandler} />
              )}
            </HeartBox>
            <HeartDes style={{ marginTop: '14px', fontSize: '13px' }}>
              {courseData !== null && courseData.likeCount}
            </HeartDes>
          </HeartWrap>
        )}
        <MainBox
          courseData={courseData}
          id={id}
          sessionUserId={sessionUserId}
          commentRef={commentRef}
        />
        <MapBox courseData={courseData} />
        <RouteContainer id={id} courseData={courseData} />
      </div>
    </Layout>
  );
}

export default ContentPage;
