import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function MainSearch() {
  return (
    <Container>
      <h1>검색결과</h1>
    </Container>
  );
}

export default MainSearch;
