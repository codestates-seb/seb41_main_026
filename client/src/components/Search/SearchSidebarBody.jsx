import React from 'react';

function SearchSidebarBody({ locationData }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          {locationData.title}
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body">
          {locationData.data.map(el => {
            return (
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={el.name}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label pt-1"
                    htmlFor="flexCheckDefault"
                  >
                    {el.name}
                  </label>
                </div>
                <div className="text-secondary">{el.count}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchSidebarBody;
