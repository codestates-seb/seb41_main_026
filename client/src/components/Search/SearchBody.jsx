import React, { useState } from 'react';
import axios from 'axios';
import MyPageCard from '../Card/MyPageCard';

function SearchBody() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const getSearch = e => {
    e.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}/course/search?keyword=${search}`)
      .then(res => {
        console.log(res.data.course);
        setData(res.data.course);
      });
  };

  return (
    <div>
      <input
        type={search}
        placeholder="Search Data"
        onChange={e => setSearch(e.target.value)}
        // onChange={handleInputValue('data')}
      />
      <button type="button" className="btn btn-primary" onClick={getSearch}>
        submit
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
      >
        수정 사항 변경
      </button>

      <main className="col-sm-12 px-0 flex-grow-1 mb-5 py-5">
        <div className="container py-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map(ele => {
              return (
                <MyPageCard
                  title={ele.courseId}
                  location={ele.location}
                  id={ele.courseId}
                />
              );
            })}
          </div>
        </div>
      </main>
      <div
        className="modal"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="searchModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered p-4">
          <div className="modal-content" style={{ backgroundColor: '#0c7b93' }}>
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                검색하기
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-light"
                type="button"
                id="button-addon1"
              >
                Button
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="무엇을 찾고 계신가요"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                취소
              </button>
              <button
                type="button"
                className="btn btn-outline-info me-2"
                // onClick={onSubmit}
              >
                검색하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBody;
