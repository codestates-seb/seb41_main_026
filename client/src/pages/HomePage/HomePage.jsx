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
      <RegionSection region="seoul" />
      <RegionSection region="Busan" />
    </Container>
  );
}

export default HomePage;
