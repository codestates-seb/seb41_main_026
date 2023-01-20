import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyPageCard from '../Card/MyPageCard';

function SearchBody() {
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
  console.log(search);
  return (
    <main className="col-md-9 mb-5 py-5">
      <h1 className="fs-5 my-3 ms-2">
        검색어: <span className="text-info fs-2">{searchText}</span>
      </h1>
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
          <div className="my-5 fs-5">검색 결과가 없습니다.</div>
        )}
      </div>
    </main>
  );
}

export default SearchBody;
