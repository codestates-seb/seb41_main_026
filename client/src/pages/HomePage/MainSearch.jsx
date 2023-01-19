import React from 'react';
import SearchBody from '../../components/Search/SearchBody';
import SearchSidebar from '../../components/Search/SearchSidebar';
import Layout from '../../components/Common/Layout';

function MainSearch() {
  return (
    <Layout header footer>
      <div className="container">
        <div className="row min-vh-100 flex-column flex-md-row">
          <SearchSidebar />
          <SearchBody />
        </div>
      </div>
    </Layout>
  );
}

export default MainSearch;
