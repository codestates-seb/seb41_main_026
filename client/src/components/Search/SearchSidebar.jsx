import React from 'react';
import SearchList from './SearchList';

const sideDB = {
  location: {
    title: '지역',
    data: [
      { name: '서울', count: 3 },
      { name: '부산', count: 3 },
      { name: '경상도', count: 3 },
      { name: '강원도', count: 3 },
      { name: '경기도', count: 3 },
    ],
  },
  season: {
    title: '계절',
    data: [
      { name: '봄', count: 5 },
      { name: '여름', count: 10 },
      { name: '가을', count: 9 },
      { name: '겨울', count: 4 },
    ],
  },
  guide: {
    title: '가이드',
    data: [
      { name: '최윤정', count: 3 },
      { name: '김원도', count: 3 },
      { name: '유성민', count: 3 },
      { name: '김동현', count: 3 },
      { name: '이동국', count: 3 },
      { name: '최진우', count: 3 },
    ],
  },
};

function SearchSidebar() {
  return (
    <aside className="col-md-3 pb-23 pt-5">
      <div className="mt-2 justify-content-around">
        <div className="p-1 d-flex flex-column">
          <div className="accordion" id="accordionPanel">
            <SearchList data={sideDB.location} />
            <SearchList data={sideDB.season} />
            <SearchList data={sideDB.guide} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SearchSidebar;
