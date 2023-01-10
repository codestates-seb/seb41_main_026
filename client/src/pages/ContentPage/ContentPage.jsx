import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';
import styled from 'styled-components';
import axios from 'axios';
import union from '../../img/union.png';
import polygon from '../../img/Polygon.png';
import sampleImg from '../../img/sampleImg.jpg';
import time from '../../img/time.png';
import route from '../../img/route.png';

const Container = styled.div`
  width: 1200px;
`;

const TitleBox = styled.div`
  width: 1200px;
  border-bottom: 1px solid #b2d3be;
  margin-top: 70px;
`;

const Title = styled.span`
  width: 135px;
  height: 38px;
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #212529;
  margin-left: 20px;
`;

const Des = styled.span`
  width: 30px;
  height: 19px;
  font-family: 'ABeeZee';
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
  font-family: 'Roboto';
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
  font-family: 'ABeeZee';
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
  font-family: 'ABeeZee';
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
  font-family: 'Roboto';
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
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #313131;
  position: absolute;
  left: 100px;
  top: 30px;
`;

const InfoContainer = styled.div`
  width: 1200px;
`;

const InfoBox = styled.div`
  width: 642px;
  height: 126px;
  background: #f2f4d1;
  border: 1px solid #b2d3be;
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
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5e6073;
  display: flex;
`;

const Course = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5e6073;
  display: flex;
  align-items: center;
`;

const TagBox = styled.div`
  width: 558px;
  height: 126px;
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

  const markers = [
    {
      id: 1,
      name: '한국 서울타워점',
      position: { lat: 37.5512141, lng: 126.9882024 },
    },
    {
      id: 2,
      name: 'Denver, Colorado',
      position: { lat: 39.739235, lng: 124.99025 },
    },
    {
      id: 3,
      name: 'Los Angeles, California',
      position: { lat: 34.052235, lng: -118.243683 },
    },
    {
      id: 4,
      name: 'New York, New York',
      position: { lat: 40.712776, lng: -74.005974 },
    },
  ];

  const locationHandler = idValue => {
    setCenter(markers[idValue - 1].position);
  };

  return (
    <Container>
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
            style={{ width: '600px', height: '600px' }}
            zoom={13}
            center={center}
            mapContainerClassName="map-container"
          >
            {markers.map(ele => {
              return (
                <MarkerF key={ele.id} position={ele.position}>
                  {ele.name}
                </MarkerF>
              );
            })}
          </GoogleMap>
        </LoadScriptNext>
        <LocationBox>
          {markers.map(ele => {
            return (
              <Location onClick={() => locationHandler(ele.id)}>
                <LocationImg src={sampleImg} alt="기본" />
                <LocationText>{ele.name}</LocationText>
              </Location>
            );
          })}
        </LocationBox>
      </MapBox>
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
              임진각 공원 - DMZ 영상관 - 제3터널 - 도라산역 - 도라전망대 -
              통일촌
            </Course>
            <Course>3시간</Course>
          </CourseBox2>
        </InfoBox>
        <TagBox />
      </InfoContainer>
    </Container>
  );
}

export default ContentPage;
