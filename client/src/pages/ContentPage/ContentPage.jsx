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

  // const data = [
  //   {
  //     id: 1,
  //     title: '임진각공원',
  //     text: '임진각은 한국인들에게 6.25전쟁의 비통한 한이 서려 있는 곳이다.북향 실향민을 위한 망배단, 한국전쟁의 대표 유산인 자유의 다리, 평화의 종 등이 있는한국의 대표적인 통일안보 관광지다.특히 이곳의 망배단은 설, 추석 명절이면 고향을 그리워하는 실향민들이 차례를 지내는곳으로 유명하다.정전 후 한국군의 포로 12,773명이 북한에서 귀환 할 때 사용된 ‘자유의 다리’ 끝에는 남북통일을 염원하는 평화의 리본이 수십만개가 달려있어 장관을 연출하고 있다.',
  //   },
  //   {
  //     id: 2,
  //     title: 'DMZ 영상관 및 전시관 & 제3터널',
  //     text: "DMZ 영상관 및 전시관: 민간인출입통제선 안에 있는 독특한 박물관이다. 국•도비 445억 원이 투입돼 2009년 8월 14일 공식 개관한 곳이다. DMZ전시관에는 6•25전쟁 당시 사용된 ‘삐라(전단)’를 비롯해 군사편지, 총검, 탄피, DMZ에서 발견된 토기, 조류 박제 등이 전시돼 있다. DMZ영상관에서는 분단의 역사를 알기쉽게 담아 놓은 입체영상물을 상영하고 있다.제3터널: 1978년에 발견된 제3땅굴에서 서울까지는 52㎞이며 땅굴의 규모는 폭 2m 높이 2m에 총 길이는 1635m. 북한은 제3땅굴이 발견될 당시 남측이 북침용으로 뚫은 것이라고 주장했다. 땅굴 내부를 살펴보면 굴을 뚫을 때 폭파흔적(장전공)이 남쪽을 향해 있고' 갱도로 위장하기 위해 석탄가루를 묻히는 등 북한 주장이 사실과 다르다는 증거를 발견할 수 있다.",
  //   },
  //   {
  //     id: 3,
  //     title: '도라산역',
  //     text: '도라산역은 남쪽의 마지막 역이 아닌 북으로 가는 첫 번째 역이다.통일이 된다면 유라시아대륙을 잇는 횡단열차의 기점이자 종착역이기도 하다. 현재는 운행을 하지 않고 있는 상태다.2002년도에 한국의 김대중 대통령과 미국의 부시대통령이 방문하여 세계적인 관심을 모았으며, 외신기자들에게도 참신한 관광지로 부각되기 시작했다.',
  //   },
  //   {
  //     id: 4,
  //     title: '도라전망대',
  //     text: '도라전망대는 DMZ 남측의 경계선, 즉 남한의 최북단으로 북한을 가장 잘 조망할 수 있는 곳이다. 이곳에서는 육안으로 군사 분계선에 쳐진 철조망을 볼 수 있으며, 날씨가 좋은 날에는 북쪽의 개성공단과 북한민들의 주거마을까지 확인할 수 있다.가까워 보이지만 정작 갈 수 없는 먼 곳 북한을 바라보며 한국이 분단국가라는 사실을 다시 깨닫게 해주는 곳이다.',
  //   },
  // ];

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

  console.log(courseData);
  console.log(heartData);
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
        <RouteContainer courseData={courseData} />
      </div>
    </Layout>
  );
}

export default ContentPage;
