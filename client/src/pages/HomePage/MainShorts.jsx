import React from 'react';
import Layout from '../../components/Common/Layout';

function MainShorts() {
  return (
    <Layout header footer>
      <div
        className="container-fluid d-flex justify-content-center fixed-top ps-0 pe-0 py-5"
        style={{ marginTop: '60px', zIndex: '1' }}
      >
        <iframe
          title="taggbox"
          className="container"
          src="https://widget.taggbox.com/121080"
          style={{ height: '100vh', border: 'none' }}
        />
      </div>
    </Layout>
  );
}

export default MainShorts;
