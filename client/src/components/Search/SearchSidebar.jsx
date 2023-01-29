import React, { useState, useCallback, useEffect } from 'react';
import SearchList from './SearchList';

const sideDB = {
  location: {
    title: '지역',
    data: [
      { name: '서울', count: 3 },
      { name: '부산', count: 3 },
      { name: '경상도', count: 8 },
      { name: '강원도', count: 1 },
      { name: '경기도', count: 3 },
    ],
  },
  season: {
    title: '계절',
    data: [
      { name: '봄', count: 10 },
      { name: '여름', count: 7 },
      { name: '가을', count: 10 },
      { name: '겨울', count: 5 },
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

function SearchSidebar({ getFilteredSearch }) {
  const [filterState, setFilterState] = useState({
    passingTags: {
      봄: false,
      여름: false,
      가을: false,
      겨울: false,
    },
  });

  const handleFilter = e => {
    const seasonType = e.target.id;

    setFilterState({
      passingTags: {
        ...filterState.passingTags,
        [seasonType]: !filterState.passingTags[seasonType],
      },
    });
  };

  const filteredCollect = useCallback(() => {
    const clicked = [];
    const now = filterState.passingTags;

    // eslint-disable-next-line
    for (const i in now) {
      if (now[i]) {
        clicked.push(i);
      }
    }
    return clicked;
  }, [filterState.passingTags]);

  const result = filteredCollect();

  useEffect(() => {
    getFilteredSearch(result);
  });
  console.log(result);

  return (
    <aside className="col-md-3 pb-23 pt-5">
      <div className="mt-2 justify-content-around">
        <div className="p-1 d-flex flex-column">
          <div className="accordion" id="accordionPanel">
            <SearchList data={sideDB.location} />
            <SearchList data={sideDB.season} handleFilter={handleFilter} />
            <SearchList data={sideDB.guide} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SearchSidebar;
