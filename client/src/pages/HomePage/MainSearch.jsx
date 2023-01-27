import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBody from '../../components/Search/SearchBody';
import SearchSidebar from '../../components/Search/SearchSidebar';
import Layout from '../../components/Common/Layout';

function MainSearch() {
  const [search, setSearch] = useState('');
  const searchText = localStorage.getItem('searchText');
  const getSearch = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/course/search?keyword=${searchText}`,
      )
      .then(res => {
        setSearch(res.data.course);
      });
  };
  useEffect(() => {
    getSearch();
  }, []);

  return (
    <Layout header footer>
      <div className="container">
        <div className="row d-flex row" style={{ height: '100vh' }}>
          <SearchSidebar />
          <SearchBody search={search} searchText={searchText} />
        </div>
      </div>
    </Layout>
  );
}

export default MainSearch;
