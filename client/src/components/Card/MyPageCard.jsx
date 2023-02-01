import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardImg = styled.div`
  div {
    overflow: hidden;
  }
  :hover {
    transform: translateY(-2px);
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
  }

  div img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  div img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

function MyPageCard({ title, location, id }) {
  const thumbnail = [
    { id: 1, imgLink: '/img/1busan1.jpg' },
    { id: 2, imgLink: '/img/2busan1.jpg' },
    { id: 3, imgLink: '/img/3busan1.jpg' },
    { id: 4, imgLink: '/img/1paju1.jpeg' },
    { id: 5, imgLink: '/img/2paju1.jpeg' },
    { id: 6, imgLink: '/img/3paju1.jpeg' },
    { id: 7, imgLink: '/img/daegu1.jpeg' },
    { id: 8, imgLink: '/img/gumi1.jpeg' },
    { id: 9, imgLink: '/img/changwon1.jpeg' },
    { id: 10, imgLink: '/img/andong1.jpeg' },
    { id: 11, imgLink: '/img/geongju1.jpeg' },
    { id: 12, imgLink: '/img/pohang1.jpeg' },
    { id: 13, imgLink: '/img/hapcheon1.jpg' },
    {
      id: 14,
      imgLink: '/img/masan1.jpg',
    },
    { id: 15, imgLink: '/img/sokcho1.jpg' },
    { id: 16, imgLink: '/img/1seoul1.jpeg' },
    { id: 17, imgLink: '/img/2seoul1.jpeg' },
    { id: 18, imgLink: '/img/3seoul1.jpeg' },
  ];
  return (
    <CardImg className="col">
      <div
        className="card h-100 m-2 border-0"
        style={{ backgroundColor: '#0c7b93' }}
      >
        {thumbnail.map(
          el =>
            id === el.id && (
              <a href={`../course/${id}`}>
                <img
                  src={el.imgLink}
                  alt="thumbnail"
                  className="card-img-top hover"
                />
              </a>
            ),
        )}
        <div className="card-body p-2">
          <div className="d-flex">
            <h3 className="card-title lh-base flex-grow-1">{title}</h3>
            <p className="ms-2 text-info text-end" style={{ width: '50px' }}>
              {location}
            </p>
          </div>
          <Link style={{ textDecoration: 'none' }} to={`../course/${id}`}>
            <button className="btn btn-secondary btn-sm mt-3">
              코스 바로가기
            </button>
          </Link>
        </div>
      </div>
    </CardImg>
  );
}

export default MyPageCard;
