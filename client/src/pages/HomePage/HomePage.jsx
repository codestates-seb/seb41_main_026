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
      <RegionSection id={0} region="seoul" />
      <RegionSection id={1} region="Busan" />
    </Container>
  );
}

export default HomePage;
