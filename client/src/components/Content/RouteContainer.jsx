import React from 'react';
import styled from 'styled-components';

/* image items */
import time from '../../img/time.png';
import route from '../../img/route.png';
import github from '../../img/vector.png';
import jinwoo from '../../img/jinwoo.png';
import sampleImg from '../../img/sampleImg.jpg';

const Container = styled.div`
  margin-top: 20px;
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

const RouteBox = styled.div``;

const RouteCard = styled.div`
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
  color: white;
  margin-bottom: 10px;
`;

const RouteDes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #9c9c9c;
`;

const GuideWrap = styled.div`
  width: 100%;
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
  width: 100%;
  height: 360px;
  border: 3px solid #00a8cc;
  border-radius: 20px;
  text-align: center;
`;

const Guideline = styled.div`
  width: 100%;
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
  border-radius: 50%;
  margin-top: 20px;
`;
const GithubImg = styled.img`
  width: 25px;
  top: 80px;
  left: 120px;
`;

const GuideName = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 20px;
  color: white;
`;

const GuideText = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #9c9c9c;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 126px;
  background: #f2f4d1;
  border: 1px solid #b2d3be;
  border-radius: 5px;
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

const TagWrap = styled.div`
  width: 100%;
  height: 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

function RouteContainer({ data, courseData }) {
  return (
    <Container className="row min-vh-100 flex-column flex-md-row my-5">
      <nav className="col-sm-8 px-0 flex-grow-1 mb-5">
        <div className="nav nav-pills tabCustom" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
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
                    임진각 공원 - DMZ 영상관 - 제3터널 - 도라산역 - 도라전망대 -
                    통일촌
                  </Course>
                  <Course>3시간</Course>
                </CourseBox2>
              </InfoBox>
            </InfoContainer>
          </div>
        </div>
      </nav>
      <aside style={{ zIndex: '2' }} className="col-sm-4 ps-5 py-0 sticky-top">
        <TagWrap>
          <TagTitle>태그</TagTitle>
          <TagBox>
            {courseData !== null
              ? courseData.tag.map(ele => {
                  return <Tag>{ele}</Tag>;
                })
              : null}
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
      </aside>
    </Container>
  );
}

export default RouteContainer;
