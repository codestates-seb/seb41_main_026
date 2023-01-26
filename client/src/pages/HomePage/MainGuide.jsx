import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Common/Layout';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GuideBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 910px) {
    width: 355px;
  }
  flex-wrap: wrap;
`;

const GuideImg = styled.img`
  width: 90px;
  border-radius: 50%;
  margin-top: 30px;
  cursor: pointer;
`;

const GuideTitle = styled.div`
  font-family: 'ABeeZee';
  font-weight: 400;
  font-size: 42px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #ffffff;
  margin-top: 130px;
`;

const GuideInfoBox = styled.div`
  width: 900px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 150px;
`;

const GuideInfo = styled.div`
  width: 864px;
  height: 450px;
  background: #0c7b93;
  box-shadow: 0px 20px 60px rgba(46, 33, 61, 0.08);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 910px) {
    width: 600x;
  }
  @media screen and (max-width: 650px) {
    width: 450px;
  }
`;

const GuideName = styled.div`
  font-family: 'ABeeZee';
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #171c2c;
  margin-top: 20px;
`;

const GuideAlias = styled.div`
  font-family: 'ABeeZee';
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 20px;
`;

const GuideText = styled.div`
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  color: #142850;
  margin-top: 40px;
  padding: 20px;
`;

const GuideAnimationBox = styled.div`
  width: 783px;
  height: 408px;
  background: #0c7b93;
  box-shadow: 0px 20px 60px rgba(46, 33, 61, 0.08);
  border-radius: 10px;
  position: absolute;
  z-index: -1;
  bottom: 60px;
  @media screen and (max-width: 910px) {
    width: 550x;
    bottom: 30px;
  }
  @media screen and (max-width: 650px) {
    width: 400px;
    bottom: 30px;
  }
`;

const GuideDefalutBox = styled.div`
  width: 700px;
  height: 378px;
  background: #0c7b93;
  box-shadow: 0px 20px 60px rgba(46, 33, 61, 0.08);
  border-radius: 10px;
  position: absolute;
  bottom: 0px;
  z-index: -2;
  @media screen and (max-width: 910px) {
    width: 500x;
  }
  @media screen and (max-width: 650px) {
    width: 350px;
  }
`;

function MainGuide() {
  const [guideData, setGuideData] = useState({
    name: '이동국',
    alias: '26조 팀장',
    text: '난 매일 새벽 6시에 일어나 운동을 해요. 가끔 사람들이 유명인 닮았다는 얘기를 해주는데요,\n솔직히 저는 잘 모르겠어요.\n 저와 친해지고 싶으면 창원, 대구, 구미로 놀러오세요.',
    imgLink: '/img/dk.png',
  });

  const dkHandler = () => {
    setGuideData({
      name: '이동국',
      alias: '26조 팀장',
      text: '난 매일 새벽 6시에 일어나 운동을 해요. 가끔 사람들이 유명인 닮았다는 얘기를 해주는데요,\n솔직히 저는 잘 모르겠어요.\n 저와 친해지고 싶으면 창원, 대구, 구미로 놀러오세요.',
      imgLink: '/img/dk.png',
    });
  };

  const yunHandler = () => {
    setGuideData({
      name: '최윤정',
      alias: '별명',
      text: '인사말인사말',
      imgLink: '/img/yun.png',
    });
  };

  const dhHandler = () => {
    setGuideData({
      name: '김동현',
      alias: '디온',
      text: '여행지의 설레는 마음을 어떤곳이든 느낄 수 있도록!\n 제가 여행하는 느낌으로 코스를 짭니다',
      imgLink: '/img/dh.png',
    });
  };

  const jinHandler = () => {
    setGuideData({
      name: '최진우',
      alias: '별명',
      text: '인사말인사말',
      imgLink: '/img/jinwoo.png',
    });
  };

  const seongHandler = () => {
    setGuideData({
      name: '유성민',
      alias: '별명',
      text: '인사말인사말',
      imgLink: '/img/seong.png',
    });
  };

  const wonHandler = () => {
    setGuideData({
      name: '김원도',
      alias: '별명',
      text: '인사말인사말',
      imgLink: '/img/wondo.png',
    });
  };

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
        <GuideTitle>저희가 여행을 안내합니다!</GuideTitle>
        <GuideInfoBox>
          <GuideInfo>
            <GuideImg
              style={{ marginTop: '50px', marginLeft: '8px' }}
              src={guideData.imgLink}
            />
            <GuideName>{guideData.name}</GuideName>
            <GuideAlias>{guideData.alias}</GuideAlias>
            <GuideText>
              {guideData.text.split('\n').map(ele => {
                return (
                  <div>
                    {ele}
                    <br />
                  </div>
                );
              })}
            </GuideText>
          </GuideInfo>
          <GuideAnimationBox />
          <GuideDefalutBox />
        </GuideInfoBox>
      </Container>
    </Layout>
  );
}

export default MainGuide;
