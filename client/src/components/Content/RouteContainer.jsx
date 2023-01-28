import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* image items */
import time from '../../img/time.png';
import route from '../../img/route.png';
import github from '../../img/vector.png';
import tripImg from '../../img/tripImg.jpg';

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
  border-radius: 10px;
`;

const RouteText = styled.div`
  margin-left: 20px;
  text-align: justify;
`;

const RouteTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  margin-bottom: 10px;
`;

const RouteDes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #bbb;
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
  width: 80px;
  height: 80px;
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
`;

const GuideText = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding: 14px;
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

function RouteContainer({ id, courseData }) {
  const [filteredImg, setFilteredImg] = useState(null);
  // const [profileImg, setProfileImg] = useState('');
  const routeAllImg = [
    {
      id: 1,
      imgLink: [
        '/img/1busan1.jpg',
        '/img/1busan2.jpg',
        '/img/1busan3.jpg',
        '/img/1busan4.jpg',
      ],
    },
    {
      id: 2,
      imgLink: [
        '/img/2busan1.jpg',
        '/img/2busan2.jpg',
        '/img/2busan3.jpg',
        '/img/2busan4.jpg',
      ],
    },
    {
      id: 3,
      imgLink: [
        '/img/3busan1.jpg',
        '/img/3busan2.jpg',
        '/img/3busan3.jpg',
        '/img/3busan4.jpg',
        '/img/3busan5.jpg',
        '/img/3busan6.jpg',
      ],
    },
    {
      id: 4,
      imgLink: [
        '/img/1paju1.jpeg',
        '/img/1paju2.jpeg',
        '/img/1paju3.jpeg',
        '/img/1paju4.jpeg',
      ],
    },
    {
      id: 5,
      imgLink: ['/img/2paju1.jpeg', '/img/2paju2.jpg', '/img/2paju3.jpg'],
    },
    {
      id: 6,
      imgLink: [
        '/img/3paju1.jpeg',
        '/img/3paju2.jpeg',
        '/img/3paju3.jpeg',
        '/img/3paju4.jpeg',
      ],
    },
    {
      id: 7,
      imgLink: [
        '/img/daegu1.jpeg',
        '/img/daegu2.jpeg',
        '/img/daegu3.jpeg',
        '/img/daegu4.jpeg',
        '/img/daegu5.jpeg',
      ],
    },
    {
      id: 8,
      imgLink: [
        '/img/gumi1.jpeg',
        '/img/gumi2.jpeg',
        '/img/gumi3.jpeg',
        '/img/gumi4.jpeg',
      ],
    },
    {
      id: 9,
      imgLink: [
        '/img/changwon1.jpeg',
        '/img/changwon2.jpeg',
        '/img/changwon3.jpeg',
        '/img/changwon4.jpeg',
        '/img/changwon5.jpeg',
        '/img/changwon6.jpeg',
      ],
    },
    {
      id: 10,
      imgLink: [
        '/img/andong1.jpeg',
        '/img/andong2.jpeg',
        '/img/andong3.jpeg',
        '/img/andong4.jpeg',
      ],
    },
    {
      id: 11,
      imgLink: [
        '/img/geongju1.jpeg',
        '/img/geongju2.jpeg',
        '/img/geongju3.jpeg',
        '/img/geongju4.jpeg',
        '/img/geongju5.jpeg',
      ],
    },
    {
      id: 12,
      imgLink: [
        '/img/pohang1.jpeg',
        '/img/pohang2.jpeg',
        '/img/pohang3.jpeg',
        '/img/pohang4.jpeg',
      ],
    },
    {
      id: 13,
      imgLink: [
        '/img/hapcheon1.jpg',
        '/img/hapcheon2.jpg',
        '/img/hapcheon3.jpg',
      ],
    },
    {
      id: 14,
      imgLink: [
        '/img/masan1.jpg',
        '/img/masan2.jpg',
        '/img/masan3.jpg',
        '/img/masan4.jpg',
      ],
    },
    {
      id: 15,
      imgLink: [
        '/img/sokcho1.jpg',
        '/img/sokcho2.jpg',
        '/img/sokcho3.jpg',
        '/img/sokcho4.jpg',
      ],
    },
    {
      id: 16,
      imgLink: [
        '/img/1seoul1.jpeg',
        '/img/1seoul2.jpeg',
        '/img/1seoul3.jpeg',
        '/img/1seoul4.jpeg',
      ],
    },
    {
      id: 17,
      imgLink: [
        '/img/2seoul1.jpeg',
        '/img/2seoul2.jpeg',
        '/img/2seoul3.jpeg',
        '/img/2seoul4.jpeg',
        '/img/2seoul5.jpeg',
      ],
    },

    {
      id: 18,
      imgLink: [
        '/img/3seoul1.jpeg',
        '/img/3seoul2.jpeg',
        '/img/3seoul3.jpeg',
        '/img/3seoul4.jpeg',
      ],
    },
  ];

  // const guideImg = [
  //   {
  //     name: '유성민',
  //     imgLink: '/img/seong.png',
  //     bgLink: '/img/2busan1.jpg',
  //   },
  //   {
  //     name: '이동국',
  //     imgLink: '/img/dk.png',
  //     bgLink: '/img/changwon1.jpeg',
  //   },
  //   {
  //     name: '최윤정',
  //     imgLink: '/img/yun.png',
  //     bgLink: '/img/2seoul1.jpeg',
  //   },
  //   {
  //     name: '김동현',
  //     imgLink: '/img/dh.png',
  //     bgLink: '/img/hapcheon1.jpg',
  //   },
  //   {
  //     name: '최진우',
  //     imgLink: '/img/jinwoo.png',
  //     bgLink: '/img/3paju1.jpeg',
  //   },
  //   {
  //     name: '김원도',
  //     imgLink: '/img/wondo.png',
  //     bgLink: '/img/geongju1.jpeg',
  //   },
  // ];
  // const [profile, setProfile] = useState([]);
  // useEffect(() => {
  //   setProfile(
  //     guideImg.filter(i => {
  //       return i.name === courseData.guideName;
  //     }),
  //   );
  // }, []);

  useEffect(() => {
    setFilteredImg(
      routeAllImg.filter(ele => {
        return ele.id === Number(id);
      }),
    );
  }, []);

  console.log(filteredImg);
  return (
    <Container className="row min-vh-100 flex-column flex-md-row my-5">
      <nav className="col-md-8 px-2">
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
            {courseData !== null &&
            filteredImg !== null &&
            filteredImg.length !== 0
              ? courseData.courseDatas.map((ele, idx) => {
                  return (
                    <RouteCard key={ele.courseDataId}>
                      <RouteImg src={filteredImg[0].imgLink[idx]} />
                      <RouteText>
                        <RouteTitle>{ele.title}</RouteTitle>
                        <RouteDes>{ele.text}</RouteDes>
                      </RouteText>
                    </RouteCard>
                  );
                })
              : null}
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
                  <Course>{courseData !== null && courseData.route}</Course>
                  <Course>{courseData !== null && courseData.time}시간</Course>
                </CourseBox2>
              </InfoBox>
            </InfoContainer>
          </div>
        </div>
      </nav>
      <aside style={{ zIndex: '2' }} className="col-md-4 ps-5 py-0 sticky-top">
        <TagWrap>
          <TagTitle>추천 계절</TagTitle>
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
            <GuideImg src={tripImg} />
            <GithubImg src={github} />
            <GuideName>{courseData !== null && courseData.guideName}</GuideName>
            <GuideText>{courseData !== null && courseData.guideText}</GuideText>
          </GuideBox>
        </GuideWrap>
      </aside>
    </Container>
  );
}

export default RouteContainer;
