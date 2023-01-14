import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CourseCard from '../Card/CoruseCard';
import leftImg from '../../img/leftImg.png';
import rightImg from '../../img/rightImg.png';

const Container = styled.div`
  width: 1200px;
  margin-bottom: 120px;
`;

const Title = styled.div`
  width: 1200px;
  text-align: center;
  margin: 50px 0px;
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
`;

const ArrowImg = styled.img`
  width: 20px;
`;

function RegionSection({ region }) {
  const ref = useRef();
  const [location, setLocation] = useState(0);
  const [locationData, setLocationData] = useState(null);
  const rightHandler = () => {
    setLocation(prev => prev + 500);
  };

  const leftHandler = () => {
    setLocation(prev => prev - 500);
  };

  useEffect(() => {
    if (location < 0) {
      setLocation(0);
    } else if (location > 1000) {
      setLocation(1000);
    }
    ref.current.scrollTo({ left: location, behavior: 'smooth' });
  }, [location]);

  /* axios.get으로 전체 도시 데이터를 받고,
  useEffect에서 locationData가 변하면,
  아래 코드가 실행되도록 구현. */
  // if(region === '서울') {
  //   setlocationData(locationData.seoul)
  // }
  // else if(region === '부산') {
  //   setlocationData(locationData.busan)
  // }

  useEffect(() => {
    axios
      .get(
        'http://ec2-13-124-62-101.ap-northeast-2.compute.amazonaws.com:8080/course',
      )
      .then(res => setLocationData(res.data));
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default RegionSection;
