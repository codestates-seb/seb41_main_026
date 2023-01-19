import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyPageCard from '../Card/MyPageCard';

function SeasonSection({ season }) {
  const [seasonData, setSeasonData] = useState(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/course`).then(res =>
      setSeasonData(
        res?.data.filter(ele => {
          return ele.tag.map(el => el === season);
        }),
      ),
    );
  }, []);

  // let selSeasonData = [];
  // if (seasonData && typeof seasonData !== 'undefined') {
  //   selSeasonData = seasonData.slice(0, 3);
  // } else {
  //   selSeasonData = 'null or undefined';
  // }

  return (
    <main className="col-sm-12 px-0 flex-grow-1 mb-5 py-5">
      <div className="container py-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {seasonData &&
            seasonData.map(el => {
              return <MyPageCard key={el.courseId} el={el} />;
            })}
        </div>
      </div>
    </main>
  );
}

export default SeasonSection;
