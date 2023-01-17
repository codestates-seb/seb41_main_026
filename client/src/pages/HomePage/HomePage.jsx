import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';
import RegionSection from '../../components/RegionSection/RegionSection';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const options = {
  activeClass: 'active',
  anchors: ['sectionOne', 'sectionTwo'],
  arrowNavigation: true,
  className: 'SectionContainer',
  delay: 1000,
  navigation: true,
  scrollBar: false,
  sectionClassName: 'Section',
  sectionPaddingTop: '0',
  sectionPaddingBottom: '0',
  verticalAlign: false,
};

function HomePage() {
  return (
    <Container>
      {/* eslint-disable-next-line */}
      <SectionsContainer {...options}>
        <Section>
          {' '}
          <RegionSection region="seoul" />
        </Section>
        <Section>
          {' '}
          <RegionSection region="Busan" />
        </Section>
      </SectionsContainer>
    </Container>
  );
}

export default HomePage;
