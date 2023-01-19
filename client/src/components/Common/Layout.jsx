import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ header, footer, children }) {
  return (
    <>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </>
  );
}

export default Layout;
