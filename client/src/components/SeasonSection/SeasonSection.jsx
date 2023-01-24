import React from 'react';
import MyPageCard from '../Card/MyPageCard';
import useAxios from '../../util/useAxios';

function SeasonSection({ season }) {
  const seasonData = useAxios(`${process.env.REACT_APP_API_URL}/course`);
  let data = null;
  if (seasonData !== null) {
    data = seasonData.filter(ele => {
      return ele.tag.indexOf(season) >= 0;
    });
  }

  return (
    <main className="col-sm-12 px-0 flex-grow-1 mb-5 py-5">
      <div className="container py-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data &&
            data.map(el => {
              return (
                <MyPageCard
                  key={el.courseId}
                  title={el.courseName}
                  location={el.location}
                  id={el.courseId}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}

export default SeasonSection;
