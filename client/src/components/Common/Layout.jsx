import styled from 'styled-components';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Layout({ header, footer, children }) {
  return (
    <Container>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </Container>
  );
}

export default Layout;
