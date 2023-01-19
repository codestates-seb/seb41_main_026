import React from 'react';
import Layout from '../Common/Layout';
import MyPageBody from './MyPageBody';
import Sidebar from './Sidebar';

function MyPageLike() {
  return (
    <Layout header footer>
      <div className="container">
        <div className="row min-vh-100 flex-column flex-md-row">
          <Sidebar />
          <MyPageBody />
        </div>
      </div>
    </Layout>
  );
}

export default MyPageLike;
