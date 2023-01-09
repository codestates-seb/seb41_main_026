import styled from 'styled-components';
import img from '../../img/sampleImg.jpg';

const CardBox = styled.div`
  width: 293px;
  height: 391px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.img`
  width: 292px;
  height: 199px;
  top: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const CardTitle = styled.div`
  width: 261px;
  height: 24px;
  font-family: 'ABeeZee';
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: #212529;
  margin-left: 15px;
  margin-top: 13px;
`;

const CardText = styled.div`
  width: 261px;
  height: 66px;
  font-family: 'ABeeZee';
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #212529;
  margin-left: 15px;
  margin-top: 13px;
`;

const CardButton = styled.button`
  width: 116px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  background: #b2d3be;
  border-radius: 4px;
  border: none;
  color: white;
  margin-left: 15px;
  margin-top: 13px;
`;

function CourseCard({ title, text }) {
  return (
    <CardBox>
      <CardImg src={img} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardButton>코스 살펴보기</CardButton>
    </CardBox>
  );
}

export default CourseCard;
