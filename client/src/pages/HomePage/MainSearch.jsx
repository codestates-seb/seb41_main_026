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

  const getFilteredSearch = seasonData => {
    if (search !== null) {
      let filteredData = null;
      filteredData = search.filter(ele => {
        return ele.tag.indexOf(seasonData) >= 0;
      });
    }
  };

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <Layout header footer>
      <div className="container">
        <div className="row d-flex row" style={{ height: '100vh' }}>
          <SearchSidebar getFilteredSearch={getFilteredSearch} />
          <SearchBody
            search={filteredSearch}
            searchText={searchText}
            getFilteredSearch={getFilteredSearch}
          />
        </div>
      </div>
    </Layout>
  );
}

export default MainSearch;
