import { useEffect } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import RegionSection from '../../components/RegionSection/RegionSection';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const options = {
  activeClass: 'active',
  anchors: [
    'sectionOne',
    'sectionTwo',
    'sectionThree',
    'sectionFour',
    'sectionFive',
  ],
  sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
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
  useEffect(() => {
    if (document.readyState === 'interactive') {
      const location = window.location.href;
      const index = location.indexOf('#');
      const path = location.slice(index - 1);

      if (
        path === '/#sectionOne' ||
        path === '/#sectionTwo' ||
        path === '/#sectionThree' ||
        path === '/#sectionFour' ||
        path === '/#sectionFive'
      ) {
        window.location.replace('/');
      }
    }
  }, [document]);

  return (
    <>
      <Container>
        <Header />
        {/* eslint-disable-next-line */}
        <SectionsContainer {...options}>
          <Section>
            {' '}
            <RegionSection region="서울" />
          </Section>
          <Section>
            {' '}
            <RegionSection region="부산" />
          </Section>
          <Section>
            {' '}
            <RegionSection region="경상도" />
          </Section>
          <Section>
            {' '}
            <RegionSection region="경기도" />
          </Section>
          <Section>
            {' '}
            <RegionSection region="강원도" />
          </Section>
        </SectionsContainer>
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
