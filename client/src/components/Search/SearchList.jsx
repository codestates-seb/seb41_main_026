import React from 'react';
import Search from './Search';

function SearchList({ data, handleFilter, filterHandler }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          key={data.index}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          {data.title}
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body">
          {data.data.map(el => {
            return (
              <Search
                handleFilter={handleFilter}
                key={el.index}
                data={el}
                onChange={filterHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchList;
