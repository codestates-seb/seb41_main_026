import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  GoogleMap,
  LoadScriptNext,
  MarkerF,
  Polyline,
} from '@react-google-maps/api';
import styled from 'styled-components';
import axios from 'axios';
import union from '../../img/union.png';
import polygon from '../../img/Polygon.png';
import sampleImg from '../../img/sampleImg.jpg';
import time from '../../img/time.png';
import route from '../../img/route.png';
import github from '../../img/vector.png';
import jinwoo from '../../img/jinwoo.png';

const TitleBox = styled.div`
  width: 1200px;
  border-bottom: 1px solid #b2d3be;
  margin-top: 70px;
`;

const Title = styled.span`
  width: 135px;
  height: 38px;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #212529;
  margin-left: 20px;
`;

const Des = styled.span`
  width: 30px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #89a3b2;
  margin-left: 20px;
`;

const MainBox = styled.div`
  width: 1200px;
  display: flex;
  margin-top: 100px;
`;

const ShortsBox = styled.div`
  flex: 0.6;
`;

const ShortsTitle = styled.div`
  position: relative;
`;

const UnionImg = styled.img`
  width: 16px;
  margin-left: 20px;
`;
const PolyGonImg = styled.img`
  width: 5.45px;
  position: absolute;
  left: 25px;
  top: 7px;
`;

const ShortsText = styled.span`
  margin-left: 10px;
  width: 59px;
  height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #111111;
`;

const CommentBox = styled.div`
  flex: 0.4;
  margin-left: 30px;
`;

const CommentTitle = styled.div`
  width: 347px;
  height: 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #212529;
  margin-bottom: 20px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 16px 5px;
  width: 433px;
  height: 415px;
  background: #b2d3be;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
`;

const CommentInputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 433px;
  height: 62px;
  background: #89a3b2;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 20px 20px;
`;

const CommentInput = styled.input`
  padding: 0px 12px;
  width: 353px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #cfd4d9;
  box-shadow: 0px 0px 0px #cbdafc;
  border-radius: 4px 0px 0px 4px;
`;

const CommentButton = styled.div`
  width: 48px;
  height: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -0.32px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6c757d;
  border-radius: 0px 4px 4px 0px;
  padding: 0px 12px;
`;

const Comment = styled.div`
  padding: 16px;
  background-color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  position: relative;
  margin-top: 13px;
`;

const Triangle = styled.div`
  width: 7px;
  height: 7px;
  background: #ffffff;
  transform: rotate(135deg);
  position: absolute;
  top: 19px;
  right: -3px;
`;

const MapBox = styled.div`
  width: 1200px;
  margin: 100px 0;

  display: flex;
  justify-content: space-between;
  .map-container {
    width: 57.5%;
    height: 400px;
  }
`;

const LocationBox = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Location = styled.div`
  width: 435px;
  height: 80px;
  background: #f2f4d1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px;
  position: relative;
  cursor: pointer;
  margin-top: 10px;
`;

const LocationImg = styled.img`
  width: 80px;
  height: 80px;
  position: absolute;
  top: -2px;
`;

const LocationText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #313131;
  position: absolute;
  left: 100px;
  top: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const InfoBox = styled.div`
  width: 642px;
  height: 126px;
  background: #f2f4d1;
  border: 1px solid #b2d3be;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const CourseBox1 = styled.div`
  margin-left: 30px;
  flex: 0.2;
  display: flex;
  flex-direction: column;
`;
const CourseBox2 = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
`;

const CourseTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5e6073;
  display: flex;
`;

const Course = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5e6073;
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  height: 40px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
`;

const Spot = styled.div`
  width: 70px;
  height: 40px;
  border: 1px solid #b2d3be;
  background-color: ${({ focus }) => (focus ? '#b2d3be' : 'white')};
  color: ${({ focus }) => (focus ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-size: 14px;
  cursor: pointer;
`;

const TagWrap = styled.div`
  width: 449px;
  height: 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 70px;
`;

const TagTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #00a8cc;
  margin-bottom: 10px;
`;

const TagBox = styled.div`
  padding: 8px;
  height: 50px;
  border: 3px solid #00a8cc;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const Tag = styled.span`
  width: 50px;
  height: 25px;
  background: #00a8cc;
  border-radius: 4px;
  padding: 0px 4px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: white;
`;

const RouteContainer = styled.div`
  width: 1200px;
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
  .tabCustom button {
    background-color: #0c7b93;
    color: white;
    margin-right: 2px;
    margin-bottom: 2px;
  }
  .tabCustom button:hover {
    background-color: #00a8cc;
  }
  .tabCustom .active {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: #00a8cc;
    margin-bottom: 0px;
  }
  .tabBorderCustom {
    border: 3px solid #00a8cc;
  }
`;

const RouteBox = styled.div`
  width: 642px;
`;

const RouteCard = styled.div`
  width: 642px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 80px;
  border-radius: 5px;
`;

const RouteImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

const RouteText = styled.div`
  margin-left: 20px;
  text-align: justify;
`;

const RouteTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #313131;
  margin-bottom: 10px;
`;

const RouteDes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #828282;
`;

const GuideWrap = styled.div`
  width: 500px;
  margin-left: 70px;
  margin-top: 40px;
`;

const GuideTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #00a8cc;
  margin-bottom: 10px;
`;

const GuideBox = styled.div`
  width: 449px;
  height: 300px;
  position: relative;
  border: 3px solid #00a8cc;
  border-radius: 20px;
  text-align: center;
`;

const Guideline = styled.div`
  width: 445px;
  height: 95px;
  background: #00a8cc;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  border-bottom-left-radius: 170px;
  border-bottom-right-radius: 170px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GuideImg = styled.img`
  width: 100px;
  position: absolute;
  top: 50px;
  left: 169px;
  border-radius: 50%;
`;
const GithubImg = styled.img`
  width: 25px;
  position: absolute;
  top: 80px;
  left: 120px;
`;

const GuideName = styled.div`
  margin-top: 80px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #212529;
`;

const GuideText = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #828282;
`;

function ContentPage() {
  const { id } = useParams();
  // const [courseData, setCourseData] = useState(null);
  console.log(id);
  useEffect(() => {
    axios
      .get(
        `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course/${id}`,
      )
      .then(res => console.log(res.data));
  });

  const [center, setCenter] = useState({ lat: 37.5400456, lng: 126.9921017 });
  const [marker, setMarker] = useState('travelSpot');
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [pathCoordinates, setPathCoordinates] = useState([
    [
      { lat: 37.5512141, lng: 126.9882024 },
      { lat: 37.739235, lng: 126.99025 },
    ],
    [
      { lat: 37.739235, lng: 126.99025 },
      { lat: 37.052235, lng: 126.243683 },
    ],
    [
      { lat: 37.052235, lng: 126.243683 },
      { lat: 37.712776, lng: 126.005974 },
    ],
  ]);

  const travelSpot = [
    {
      id: 1,
      name: '1. 한국 서울타워점',
      position: { lat: 37.5512141, lng: 126.9882024 },
    },
    {
      id: 2,
      name: '2. 잠실 타워',
      position: { lat: 37.739235, lng: 126.99025 },
    },
    {
      id: 3,
      name: '3. 한강 공원',
      position: { lat: 37.052235, lng: 126.243683 },
    },
    {
      id: 4,
      name: '4. 명동 거리',
      position: { lat: 37.712776, lng: 126.005974 },
    },
  ];

  const eatSpot = [
    {
      id: 1,
      name: '맛집1',
      position: { lat: 37.3512141, lng: 126.9882024 },
    },
    {
      id: 2,
      name: '맛집2',
      position: { lat: 37.939235, lng: 126.99025 },
    },
    {
      id: 3,
      name: '맛집3',
      position: { lat: 37.072235, lng: 126.243683 },
    },
    {
      id: 4,
      name: '맛집4',
      position: { lat: 37.712776, lng: 126.005974 },
    },
  ];

  const sleepSpot = [
    {
      id: 1,
      name: '숙소1',
      position: { lat: 37.4512141, lng: 126.9882024 },
    },
    {
      id: 2,
      name: '숙소2',
      position: { lat: 37.639235, lng: 126.99025 },
    },
    {
      id: 3,
      name: '숙소3',
      position: { lat: 37.062235, lng: 126.243683 },
    },
    {
      id: 4,
      name: '숙소4',
      position: { lat: 37.538235, lng: 126.59125 },
    },
  ];

  const tag = ['파주', '봄', '여름', '가울', '겨울', '최진우'];

  const data = [
    {
      id: 1,
      title: '임진각공원',
      text: '임진각은 한국인들에게 6.25전쟁의 비통한 한이 서려 있는 곳이다.북향 실향민을 위한 망배단, 한국전쟁의 대표 유산인 자유의 다리, 평화의 종 등이 있는한국의 대표적인 통일안보 관광지다.특히 이곳의 망배단은 설, 추석 명절이면 고향을 그리워하는 실향민들이 차례를 지내는곳으로 유명하다.정전 후 한국군의 포로 12,773명이 북한에서 귀환 할 때 사용된 ‘자유의 다리’ 끝에는 남북통일을 염원하는 평화의 리본이 수십만개가 달려있어 장관을 연출하고 있다.',
    },
    {
      id: 2,
      title: 'DMZ 영상관 및 전시관 & 제3터널',
      text: "DMZ 영상관 및 전시관: 민간인출입통제선 안에 있는 독특한 박물관이다. 국•도비 445억 원이 투입돼 2009년 8월 14일 공식 개관한 곳이다. DMZ전시관에는 6•25전쟁 당시 사용된 ‘삐라(전단)’를 비롯해 군사편지, 총검, 탄피, DMZ에서 발견된 토기, 조류 박제 등이 전시돼 있다. DMZ영상관에서는 분단의 역사를 알기쉽게 담아 놓은 입체영상물을 상영하고 있다.제3터널: 1978년에 발견된 제3땅굴에서 서울까지는 52㎞이며 땅굴의 규모는 폭 2m 높이 2m에 총 길이는 1635m. 북한은 제3땅굴이 발견될 당시 남측이 북침용으로 뚫은 것이라고 주장했다. 땅굴 내부를 살펴보면 굴을 뚫을 때 폭파흔적(장전공)이 남쪽을 향해 있고' 갱도로 위장하기 위해 석탄가루를 묻히는 등 북한 주장이 사실과 다르다는 증거를 발견할 수 있다.",
    },
    {
      id: 3,
      title: '도라산역',
      text: '도라산역은 남쪽의 마지막 역이 아닌 북으로 가는 첫 번째 역이다.통일이 된다면 유라시아대륙을 잇는 횡단열차의 기점이자 종착역이기도 하다. 현재는 운행을 하지 않고 있는 상태다.2002년도에 한국의 김대중 대통령과 미국의 부시대통령이 방문하여 세계적인 관심을 모았으며, 외신기자들에게도 참신한 관광지로 부각되기 시작했다.',
    },
    {
      id: 4,
      title: '도라전망대',
      text: '도라전망대는 DMZ 남측의 경계선, 즉 남한의 최북단으로 북한을 가장 잘 조망할 수 있는 곳이다. 이곳에서는 육안으로 군사 분계선에 쳐진 철조망을 볼 수 있으며, 날씨가 좋은 날에는 북쪽의 개성공단과 북한민들의 주거마을까지 확인할 수 있다.가까워 보이지만 정작 갈 수 없는 먼 곳 북한을 바라보며 한국이 분단국가라는 사실을 다시 깨닫게 해주는 곳이다.',
    },
  ];

  const locationHandler = idValue => {
    setCenter(travelSpot[idValue - 1].position);
  };

  const spot1Handler = () => {
    setMarker('travelSpot');
    setPathCoordinates([
      [
        { lat: 37.5512141, lng: 126.9882024 },
        { lat: 37.739235, lng: 126.99025 },
      ],
      [
        { lat: 37.739235, lng: 126.99025 },
        { lat: 37.052235, lng: 126.243683 },
      ],
      [
        { lat: 37.052235, lng: 126.243683 },
        { lat: 37.712776, lng: 126.005974 },
      ],
    ]);
    setFocus1(true);
    setFocus2(false);
    setFocus3(false);
  };

  const spot2Handler = () => {
    setMarker('eatSpot');
    setFocus1(false);
    setFocus2(true);
    setFocus3(false);
    setPathCoordinates(null);
  };

  const spot3Handler = () => {
    setMarker('sleepSpot');
    setFocus1(false);
    setFocus2(false);
    setFocus3(true);
    setPathCoordinates(null);
  };

  return (
    <div className="container">
      <TitleBox>
        <Title>DMZ 투어</Title>
        <Des>|</Des>
        <Des>파주</Des>
        <Des>|</Des>
        <Des>봄, 여름, 가을, 겨울</Des>
        <Des>|</Des>
        <Des>최진우 가이드</Des>
      </TitleBox>
      <MainBox>
        <ShortsBox>
          <ShortsTitle>
            <UnionImg src={union} />
            <PolyGonImg src={polygon} />
            <ShortsText>Shorts</ShortsText>
          </ShortsTitle>
        </ShortsBox>
        <CommentBox>
          <CommentTitle>댓글 목록</CommentTitle>
          <CommentList>
            <Comment>
              댓글 내용입니다
              <Triangle />
            </Comment>
            <Comment>
              댓글 내용입니다!!!
              <Triangle />
            </Comment>
            {/* {comment.map((ele) => {
              return <Comment key={ele.id}>{ele.text}<Triangle/></Comment>
            })} */}
          </CommentList>
          <CommentInputSection>
            <CommentInput placeholder="댓글 달기" />
            <CommentButton>게시</CommentButton>
          </CommentInputSection>
        </CommentBox>
      </MainBox>

      <MapBox>
        <LoadScriptNext googleMapsApiKey="AIzaSyDuCjHf1X1675gihgZb4q1CHodMfo_9CxM">
          <GoogleMap
            style={{ width: '600px', height: '600px', position: 'relative' }}
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
          >
            {marker === 'travelSpot' &&
              travelSpot.map(ele => {
                return (
                  <MarkerF
                    key={ele.id}
                    position={ele.position}
                    label={String(ele.id)}
                  />
                );
              })}

            {marker === 'travelSpot' &&
              pathCoordinates.map(ele => {
                return (
                  <Polyline
                    path={ele}
                    options={{
                      strokeColor: 'black',
                      strokeOpacity: 1,
                      strokeWeight: 2,
                    }}
                  />
                );
              })}

            {marker === 'eatSpot' &&
              eatSpot.map(ele => {
                return (
                  <MarkerF key={ele.id} position={ele.position}>
                    {ele.name}
                  </MarkerF>
                );
              })}

            {marker === 'sleepSpot' &&
              sleepSpot.map(ele => {
                return (
                  <MarkerF key={ele.id} position={ele.position}>
                    {ele.name}
                  </MarkerF>
                );
              })}
            <Category>
              <Spot focus={focus1} onClick={spot1Handler}>
                주요 명소
              </Spot>
              <Spot focus={focus2} onClick={spot2Handler}>
                맛집
              </Spot>
              <Spot focus={focus3} onClick={spot3Handler}>
                숙박
              </Spot>
            </Category>
          </GoogleMap>
        </LoadScriptNext>
        <LocationBox>
          {marker === 'travelSpot' &&
            travelSpot.map(ele => {
              return (
                <Location onClick={() => locationHandler(ele.id)}>
                  <LocationImg src={sampleImg} alt="기본" />
                  <LocationText>{ele.name}</LocationText>
                </Location>
              );
            })}

          {marker === 'eatSpot' &&
            eatSpot.map(ele => {
              return (
                <Location onClick={() => locationHandler(ele.id)}>
                  <LocationImg src={sampleImg} alt="기본" />
                  <LocationText>{ele.name}</LocationText>
                </Location>
              );
            })}

          {marker === 'sleepSpot' &&
            sleepSpot.map(ele => {
              return (
                <Location onClick={() => locationHandler(ele.id)}>
                  <LocationImg src={sampleImg} alt="기본" />
                  <LocationText>{ele.name}</LocationText>
                </Location>
              );
            })}
        </LocationBox>
      </MapBox>

      <RouteContainer>
        <nav>
          <div className="nav nav-pills tabCustom" id="nav-tab" role="tablist">
            <button
              className="nav-link"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              코스소개
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              일정
            </button>
          </div>
          <div
            className="tab-content p-3 rounded-end-4 rounded-bottom-4 tabBorderCustom"
            id="nav-tabContent"
          >
            <RouteBox
              className="tab-pane active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              {data.map(ele => {
                return (
                  <RouteCard key={ele.id}>
                    <RouteImg src={sampleImg} />
                    <RouteText>
                      <RouteTitle>{ele.title}</RouteTitle>
                      <RouteDes>{ele.text}</RouteDes>
                    </RouteText>
                  </RouteCard>
                );
              })}
            </RouteBox>
            <div
              className="tab-pane"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              <InfoContainer>
                <InfoBox>
                  <CourseBox1>
                    <CourseTitle>
                      <img
                        style={{ width: '20px', marginRight: '5px' }}
                        src={route}
                        alt="코스"
                      />
                      도보코스
                    </CourseTitle>
                    <CourseTitle>
                      <img
                        style={{ width: '20px', marginRight: '5px' }}
                        src={time}
                        alt="시간"
                      />
                      소요시간
                    </CourseTitle>
                  </CourseBox1>
                  <CourseBox2>
                    <Course>
                      임진각 공원 - DMZ 영상관 - 제3터널 - 도라산역 - 도라전망대
                      - 통일촌
                    </Course>
                    <Course>3시간</Course>
                  </CourseBox2>
                </InfoBox>
              </InfoContainer>
            </div>
          </div>
        </nav>
        <div>
          <TagWrap>
            <TagTitle>태그</TagTitle>
            <TagBox>
              {tag.map(ele => {
                return <Tag>{ele}</Tag>;
              })}
            </TagBox>
          </TagWrap>
          <GuideWrap>
            <GuideTitle>가이드</GuideTitle>
            <GuideBox>
              <Guideline />
              <GuideImg src={jinwoo} />
              <GithubImg src={github} />
              <GuideName>최진우</GuideName>
              <GuideText>
                여행은 자고로 즐거워야한다!
                <br />
                오롯이 여행에만 집중할 수 있게끔 준비해드립니다.
              </GuideText>
            </GuideBox>
          </GuideWrap>
        </div>
      </RouteContainer>
    </div>
  );
}

export default ContentPage;
