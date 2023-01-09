import styled from 'styled-components';
import RegionSection from '../../components/RegionSection/RegionSection';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function HomePage() {
  return (
    <Container>
      <RegionSection region="서울" />
      <RegionSection region="부산" />
      <RegionSection region="경남" />
      <RegionSection region="충북" />
    </Container>
  );
}

export default HomePage;
