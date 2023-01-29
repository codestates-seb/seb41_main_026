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
      봄: true,
      여름: true,
      가을: true,
      겨울: true,
      서울: true,
      부산: true,
      경상도: true,
      강원도: true,
      경기도: true,
      최윤정: true,
      김원도: true,
      유성민: true,
      김동현: true,
      이동국: true,
      최진우: true,
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

  const filterHandler = () => {
    getFilteredSearch(result);
  };

  useEffect(() => {
    setFilterState({
      passingTags: {
        봄: true,
        여름: true,
        가을: true,
        겨울: true,
        서울: true,
        부산: true,
        경상도: true,
        강원도: true,
        경기도: true,
        최윤정: true,
        김원도: true,
        유성민: true,
        김동현: true,
        이동국: true,
        최진우: true,
      },
    });
  }, []);

  return (
    <aside className="col-md-3 pb-23 pt-5">
      <div className="mt-2 justify-content-around">
        <div className="p-1 d-flex flex-column">
          <div className="accordion" id="accordionPanel">
            <button
              onClick={filterHandler}
              className="btn btn-primary my-2 text-light"
            >
              필터 적용
            </button>
            <SearchList
              data={sideDB.location}
              filterHandler={filterHandler}
              handleFilter={handleFilter}
            />
            <SearchList
              data={sideDB.season}
              filterHandler={filterHandler}
              handleFilter={handleFilter}
            />
            <SearchList
              data={sideDB.guide}
              handleFilter={handleFilter}
              filterHandler={filterHandler}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SearchSidebar;
