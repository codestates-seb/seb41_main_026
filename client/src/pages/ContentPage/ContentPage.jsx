import styled from 'styled-components';
import union from '../../img/union.png';
import polygon from '../../img/Polygon.png';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

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

function ContentPage() {
  // const { params } = useParams();
  // const [courseData, setCourseData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course/${params}`,
  //     )
  //     .then(res => console.log(res.data));
  // });
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
          <CommentList>테스트</CommentList>
          <CommentInputSection>
            <CommentInput placeholder="댓글 달기" />
            <CommentButton>게시</CommentButton>
          </CommentInputSection>
        </CommentBox>
      </MainBox>
    </Container>
  );
}

export default ContentPage;
