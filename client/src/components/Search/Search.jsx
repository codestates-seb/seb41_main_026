import React, { useState } from 'react';

function Search({ data }) {
  // const [isChecked, setIsChecked] = useState(false);
  // const [checkedValues, setValue] = useState([]);

  const checkHandler = event => {
    // setIsChecked(!isChecked);
    const [list, setList] = useState([]);

    const { value, checked } = event.target;
    if (checked) {
      setList([...list, value]);
    } else {
      setList(list.filter(e => e !== value));
    }

    console.log(list);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          key={data.name}
          className="form-check-input"
          type="checkbox"
          value={data.name}
          id={data.name}
          onChange={checkHandler}
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
