import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  margin: 10px 0px;
  padding: 5px 0;
  justify-content: center;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  top: 55px;
  z-index: 100;
`;

const Title = styled.span`
  width: 470px;
  height: 38px;
  font-weight: 400;
  font-size: 20px;
  line-height: 48px;
  color: white;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 350px;
  }
`;

const Des = styled.div`
  width: 70px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #35b8d6;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    width: 40px;
    font-size: 12px;
  }
`;

function TitleBox({ courseData }) {
  return (
    <Box>
      <Title>
        {courseData !== null ? courseData.courseName : <span>Loading...</span>}
      </Title>
      {courseData !== null
        ? courseData.tag.map(ele => {
            return (
              <>
                <Des>|</Des>
                <Des>{ele}</Des>
              </>
            );
          })
        : null}
    </Box>
  );
}

export default TitleBox;
