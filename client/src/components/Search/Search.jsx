import React, { useState } from 'react';

function Search({ data, checkedItemHandler }) {
  const [isChecked, setIsChecked] = useState(true);

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(data.name, target.checked);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          key={data.name}
          className="form-check-input"
          type="checkbox"
          value={data.name}
          id="flexCheckChecked"
          checked={isChecked}
          onChange={e => checkHandler(e)}
        />
        <label
          className="form-check-label pt-1"
          key={data.id}
          htmlFor="flexCheckChecked"
        >
          {data.name}
        </label>
      </div>
      <div key={data.count} className="text-secondary">
        {data.count}
      </div>
    </div>
  );
}

export default Search;
