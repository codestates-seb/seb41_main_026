import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyPageCard from '../Card/MyPageCard';

function SearchBody() {
  const [search, setSearch] = useState('');
  const searchText = sessionStorage.getItem('searchText');
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
  console.log(search);
  return (
    <div>
      {/* <input
        type={search}
        placeholder="Search Data"
        onChange={e => setSearch(e.target.value)}
        // onChange={handleInputValue('data')}
      />
      <button type="button" className="btn btn-primary" onClick={getSearch}>
        submit
      </button> */}

      <main className="col-sm-12 px-0 flex-grow-1 mb-5 py-5">
        <div className="container py-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {search.length !== 0 ? (
              search.map(ele => {
                return (
                  <MyPageCard
                    title={ele.courseId}
                    location={ele.location}
                    id={ele.courseId}
                  />
                );
              })
            ) : (
              <div>검색어를 입력해주세요</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchBody;
