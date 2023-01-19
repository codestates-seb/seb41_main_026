import React from 'react';
// import axios from 'axios';
// import MyPageCard from '../Card/MyPageCard';

function SearchBody() {
  // const [search, setSearch] = useState('');
  // const [data, setData] = useState([]);

  // const getSearch = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/course/search?keyword=${search}`)
  //     .then(res => {
  //       console.log(res.data.course);
  //       setData(res.data.course);
  //     });
  // };
  // const searchText = sessionStorage.getItem('searchText');
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
            {/* {data.map(ele => {
              return (
                <MyPageCard
                  title={ele.courseId}
                  location={ele.location}
                  id={ele.courseId}
                />
              );
            })} */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchBody;
