import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/sampleImg.jpg';

function MyPageCard({ title, location, id }) {
  return (
    <div className="col">
      <div className="card m-2 border-0" style={{ backgroundColor: '#0c7b93' }}>
        <img src={img} className="rounded" alt="img" />
        <div className="card-body p-2">
          <div className="d-flex">
            <h3 className="card-title flex-grow-1">{title}</h3>
            <p className="ms-2 text-info">{location}</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to={`../course/${id}`}>
            <button className="btn btn-secondary btn-sm mt-3">
              코스 바로가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyPageCard;
