import React from 'react';
import Layout from '../../components/Common/Layout';

function MainShorts() {
  return (
    <Layout header footer>
      <div className="container-fluid ps-0 pe-0">
        <iframe
          title="taggbox"
          src="https://widget.taggbox.com/119175"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      </div>
    </Layout>
  );
}

export default MainShorts;
