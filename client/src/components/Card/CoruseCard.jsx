import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardBox = styled.div`
  div {
    overflow: hidden;
  }
  :hover {
    transform: translateY(-2px);
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
  }

  div img {
    width: 292px;
    height: 199px;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
`;

// const CardImg = styled.img`
//   -webkit-transform: scale(1);
//   transform: scale(1);
//   -webkit-transition: 0.3s ease-in-out;
//   transition: 0.3s ease-in-out;

//   :hover {
//     -webkit-transform: scale(1.1);
//     transform: scale(1.1);
//   }
// `;

const CardTitle = styled.div`
  width: 261px;
  height: 24px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  color: #fff;
  margin-left: 15px;
  margin-top: 13px;
  margin-bottom: 50px;
`;

// const CardText = styled.div`
//   width: 261px;
//   height: 66px;
//   font-family: 'ABeeZee';
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 140%;
//   color: #212529;
//   margin-left: 15px;
//   margin-top: 13px;
// `;

const CardButton = styled.button`
  background: #00a8cc;
  border: none;
  cursor: pointer;
  color: #eee;
  :hover {
    background: #77d4fc;
  }
`;

function CourseCard({ ele, thumbnail }) {
  return (
    <CardBox className="mb-3">
      <div
        className="card h-100 m-2 border-0"
        style={{ backgroundColor: '#0c7b93' }}
      >
        <Link
          style={{ textDecoration: 'none' }}
          to={`./course/${ele.courseId}`}
        >
          {thumbnail.map(
            el =>
              ele.courseId === el.id && (
                <img
                  src={el.imgLink}
                  alt="carouselImg"
                  className="card-img-top hover"
                />
              ),
          )}
          <CardTitle>{ele.courseName}</CardTitle>
          {/* <CardText>{ele.content}</CardText> */}
          <CardButton className="btn btn-primary ms-2">
            코스 살펴보기
          </CardButton>
        </Link>
      </div>
    </CardBox>
  );
}

export default CourseCard;
