import React from 'react';

function SearchSidebarBody({ locationData }) {
  console.log(locationData);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          key={locationData.id}
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
                    key={el.name}
                    className="form-check-input"
                    type="checkbox"
                    value={el.name}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label pt-1"
                    key={el.id}
                    htmlFor="flexCheckDefault"
                  >
                    {el.name}
                  </label>
                </div>
                <div key={el.count} className="text-secondary">
                  {el.count}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchSidebarBody;
