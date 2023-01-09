import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../../img/sampleImg.jpg';

const CardBox = styled.div`
  &:hover {
    box-shadow: 0px 65.3611px 52.2889px rgba(68, 68, 68, 0.1),
      0px 42.3637px 30.6229px rgba(68, 68, 68, 0.0759259),
      0px 25.1761px 16.655px rgba(68, 68, 68, 0.0607407),
      0px 13.0722px 8.49694px rgba(68, 68, 68, 0.05),
      0px 5.32572px 4.26057px rgba(68, 68, 68, 0.0392593),
      0px 1.21039px 2.05766px rgba(68, 68, 68, 0.0240741);
    transform: translateY(-2px);
  }
  width: 293px;
  height: 391px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 9px;
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
  cursor: pointer;
`;

function CourseCard({ title, text, id }) {
  return (
    <CardBox>
      <CardImg src={img} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <Link style={{ textDecoration: 'none' }} to={`./course/${id}`}>
        <CardButton>코스 살펴보기</CardButton>
      </Link>
    </CardBox>
  );
}

export default CourseCard;
