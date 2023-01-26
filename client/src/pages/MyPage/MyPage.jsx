import React from 'react';
import MyPageBody from '../../components/MyPage/MyPageBody';
import Sidebar from '../../components/MyPage/Sidebar';
import Layout from '../../components/Common/Layout';
import NotFound from '../../components/MyPage/NotFound';
import { getCookie } from '../../util/cookie';

function MyPage() {
  return (
    <Layout header footer>
      <div className="container">
        <div className="row min-vh-100 flex-column flex-md-row">
          <Sidebar />
          {getCookie('accessToken') ? <MyPageBody /> : <NotFound />}
        </div>
      </div>
    </Layout>
  );
}

export default MyPage;
