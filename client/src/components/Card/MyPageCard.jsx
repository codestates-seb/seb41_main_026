import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/sampleImg.jpg';

function MyPageCard({ title, destination, id }) {
  return (
    <div className="card p-1 m-2">
      <img src={img} alt="img" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p>{destination}</p>
        <Link style={{ textDecoration: 'none' }} to={`../course/${id}`}>
          <button className="btn btn-secondary btn-sm mt-3">view tour</button>
        </Link>
      </div>
    </div>
  );
}

export default MyPageCard;
