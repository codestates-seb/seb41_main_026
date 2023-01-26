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
  height: 90px;
  border-radius: 50%;
  margin-top: 30px;
  cursor: pointer;
`;

const GuideTitle = styled.div`
  font-family: 'ABeeZee';
  font-weight: 400;
  font-size: 38px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.06em;
  color: #ffffff;
  margin-top: 130px;
  margin-bottom: 40px;
`;

const GuideInfoBox = styled.div`
  width: 900px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
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
  margin-bottom: 350px;
`;

const GuideName = styled.div`
  font-family: 'ABeeZee';
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #e1e1e1;
  margin-top: 30px;
`;

const GuideText = styled.div`
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  color: #142850;
  margin-top: 30px;
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
  bottom: 300px;
  @media screen and (max-width: 910px) {
    width: 550x;
  }
  @media screen and (max-width: 650px) {
    width: 400px;
  }
`;

const GuideDefalutBox = styled.div`
  width: 700px;
  height: 378px;
  background: #0c7b93;
  box-shadow: 0px 20px 60px rgba(46, 33, 61, 0.08);
  border-radius: 10px;
  position: absolute;
  bottom: 255px;
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
    text: '난 매일 새벽 6시에 일어나 운동을 해요. 가끔 사람들이 유명인 닮았다는 얘기를 해주는데요,\n솔직히 저는 잘 모르겠어요.\n 저와 친해지고 싶으면 창원, 대구, 구미로 놀러오세요.',
    imgLink: '/img/dk.png',
  });

  const dkHandler = () => {
    setGuideData({
      name: '이동국',
      text: '난 매일 새벽 6시에 일어나 운동을 해요. 가끔 사람들이 유명인 닮았다는 얘기를 해주는데요,\n솔직히 저는 잘 모르겠어요.\n 저와 친해지고 싶으면 창원, 대구, 구미로 놀러오세요.',
      imgLink: '/img/dk.png',
    });
  };

  const yunHandler = () => {
    setGuideData({
      name: '최윤정',
      text: '반가워요!',
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
      text: '역사 여행을 한 번 떠나보시는것 어떠신가요?\n유교문화(안동), 신라(경주)로 역사 여행을 경험해보세요.\n그리고 포항 바람을 느껴 보시는 것도 추천드립니다.',
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
