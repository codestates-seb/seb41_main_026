import React, { useState } from 'react';
import styled from 'styled-components';
import useAxios from '../../util/useAxios';
import Layout from '../../components/Common/Layout';
import MyPageCard from '../../components/Card/MyPageCard';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GuideBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (max-width: 910px) {
    width: 355px;
  }
  flex-wrap: wrap;
`;

const GuideImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
`;

const GuideTitle = styled.div`
  font-size: 38px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const GuideInfoBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
`;

const GuideInfo = styled.div`
  background: #0c7b93;
  box-shadow: 20px 20px 60px rgba(46, 33, 61, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideName = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #e1e1e1;
`;

const GuideText = styled.div`
  line-height: 150%;
  text-align: center;
  color: #ccc;
  margin-top: 10px;
  padding: 20px;
`;

function MainGuide() {
  const [guideData, setGuideData] = useState({
    name: '이동국',
    text: '난 매일 새벽 6시에 일어나 운동을 해요. 가끔 사람들이 유명인 닮았다는 얘기를 해주는데요,\n솔직히 저는 잘 모르겠어요.\n 저와 친해지고 싶으면 창원, 대구, 구미로 놀러오세요.',
    imgLink: '/img/dk.png',
  });

  const dkHandler = () => {
    setGuideData({
      name: '이동국',
      text: '난 매일 새벽 6시에 일어나 운동을 해요.\n 가끔 사람들이 유명인 닮았다는 얘기를 해주는데요,\n솔직히 저는 잘 모르겠어요.\n 저와 친해지고 싶으면 창원, 대구, 구미로 놀러오세요.',
      imgLink: '/img/dk.png',
    });
  };

  const yunHandler = () => {
    setGuideData({
      name: '최윤정',
      text: '하루하루 빠르게 변하지만\n 도시 한복판에 600년의 역사를 가지고 있는 매력적인 도시 서울!\n 갈 곳 많고 볼 것 많은 서울을\n 알차고 즐겁게 여행하실 수 있도록 도와드립니다.',
      imgLink: '/img/yun.png',
    });
  };

  const dhHandler = () => {
    setGuideData({
      name: '김동현',
      text: '여행지의 설레는 마음을 어떤곳이든 느낄 수 있도록!',
      imgLink: '/img/dh.png',
    });
  };

  const jinHandler = () => {
    setGuideData({
      name: '최진우',
      text: '여행은 즐거워야 한다!',
      imgLink: '/img/jinwoo.png',
    });
  };

  const seongHandler = () => {
    setGuideData({
      name: '유성민',
      text: '시원한 바닷바람 맞으며 힐링! 부산으로 여행오세요!',
      imgLink: '/img/seong.png',
    });
  };

  const wonHandler = () => {
    setGuideData({
      name: '김원도',
      text: '역사 여행을 한 번 떠나보시는 것 어떠신가요?\n유교문화(안동), 신라(경주)의 역사를 경험해보세요.\n그리고 포항 바람을 느껴 보시는 것도 추천드립니다.',
      imgLink: '/img/wondo.png',
    });
  };

  let filteredData = null;
  const data = useAxios(`${process.env.REACT_APP_API_URL}/course`);

  if (data !== null) {
    filteredData = data.filter(ele => {
      return ele.guideName === guideData.name;
    });
  }

  return (
    <Layout header footer>
      <Container>
        <GuideBox>
          <GuideImg src="/img/dk.png" onClick={dkHandler} />
          <GuideImg src="img/yun.png" onClick={yunHandler} />
          <GuideImg src="/img/dh.png" onClick={dhHandler} />
          <GuideImg src="/img/jinwoo.png" onClick={jinHandler} />
          <GuideImg src="/img/seong.png" onClick={seongHandler} />
          <GuideImg src="/img/wondo.png" onClick={wonHandler} />
        </GuideBox>
        <GuideTitle className="text-info">저희가 여행을 안내합니다!</GuideTitle>
        <GuideInfoBox>
          <GuideInfo
            className="card col-5 col-md-7"
            style={{ backgroundColor: '#0c7b93' }}
          >
            <GuideName className="card-title flex-grow-1 mt-3">
              {guideData.name}
            </GuideName>
            <GuideImg
              // style={{ marginTop: '50px', marginLeft: '8px' }}
              src={guideData.imgLink}
            />

            <GuideText>
              {guideData.text.split('\n').map(ele => {
                return (
                  <div key={ele.id}>
                    {ele}
                    <br />
                  </div>
                );
              })}
            </GuideText>
          </GuideInfo>
          {/* <GuideAnimationBox />
          <GuideDefalutBox /> */}
        </GuideInfoBox>
        <main className="container col-sm-12 px-0 mb-5 py-5">
          <h1 className="text-center fs-2">
            {guideData.name} 가이드의 담당 코스들
          </h1>
          <div className="container py-3 mb-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {filteredData &&
                filteredData.map(el => {
                  return (
                    <MyPageCard
                      key={el.courseId}
                      title={el.courseName}
                      location={el.location}
                      id={el.courseId}
                    />
                  );
                })}
            </div>
          </div>
        </main>
      </Container>
    </Layout>
  );
}

export default MainGuide;
