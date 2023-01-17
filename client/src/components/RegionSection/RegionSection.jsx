import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CourseCard from '../Card/CoruseCard';
import leftImg from '../../img/leftImg.png';
import rightImg from '../../img/rightImg.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const BgImgBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  width: 1200px;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
`;

const CardBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 30px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 0;
  margin-top: 40px;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  background-color: white;
`;

const ArrowImg = styled.img`
  width: 20px;
`;

const bgLink = [
  { id: 0, region: 'seoul', imgLink: '/img/seoulBg.jpg' },
  { id: 1, region: 'Busan', imgLink: '/img/busanBg.jpg' },
];

function RegionSection({ region }) {
  const ref = useRef();
  const [location, setLocation] = useState(0);
  const [locationData, setLocationData] = useState(null);

  const rightHandler = () => {
    setLocation(prev => prev + 1000);
  };

  const leftHandler = () => {
    setLocation(prev => prev - 1000);
  };

  useEffect(() => {
    if (location < 0) {
      setLocation(0);
    } else if (location > 1900) {
      setLocation(1900);
    }
    ref.current.scrollTo({ left: location, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    axios
      .get(
        'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course',
      )
      .then(res => setLocationData(res?.data));
  }, []);

  console.log(locationData);
  return (
    <Container>
      {bgLink.map(el =>
        region === el.region ? (
          <BgImgBox key={el.id} bg={el.imgLink}>
            <Title>{region}</Title>
            <CardBox ref={ref}>
              {locationData === null ? (
                <div style={{ fontSize: '35px' }}>Loading...</div>
              ) : (
                locationData.map(ele => {
                  if (region === ele.location) {
                    return <CourseCard key={ele.courseId} ele={ele} />;
                  }
                  return '';
                })
              )}
            </CardBox>
            <ButtonBox>
              <Button>
                <ArrowImg src={leftImg} onClick={leftHandler} />
              </Button>
              <Button>
                <ArrowImg src={rightImg} onClick={rightHandler} />
              </Button>
            </ButtonBox>
          </BgImgBox>
        ) : null,
      )}
    </Container>
  );
}

export default RegionSection;
