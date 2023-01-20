import React from 'react';
import SearchBody from '../../components/Search/SearchBody';
import SearchSidebar from '../../components/Search/SearchSidebar';
import Layout from '../../components/Common/Layout';

function MainSearch() {
  return (
    <Layout header footer>
      <div className="container">
        <div className="row d-flex row" style={{ height: '100vh' }}>
          <SearchSidebar />
          <SearchBody />
        </div>
      </div>
    </Layout>
  );
}

export default MainSearch;
