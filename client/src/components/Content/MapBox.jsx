import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScriptNext,
  MarkerF,
  Polyline,
} from '@react-google-maps/api';
import styled from 'styled-components';

import sampleImg from '../../img/sampleImg.jpg';

const Container = styled.div`
  margin-top: 50px;
  .map-container {
    width: 66%;
    height: 500px;
    border-radius: 20px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

// const LocationBox = styled.div`
//   width: 100%;
//   height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

const Location = styled.div`
  cursor: pointer;
  margin-top: 10px;
`;

// const LocationImg = styled.img`
//   width: 80px;
//   height: 80px;
//   position: absolute;
//   top: -2px;
// `;

// const LocationText = styled.div`
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 100%;
//   color: #313131;
//   position: absolute;
//   left: 100px;
//   top: 30px;
// `;

const Category = styled.div`
  height: 40px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
`;

const Spot = styled.div`
  width: 70px;
  height: 40px;
  // border: 1px solid #b2d3be;
  background-color: ${({ focus }) => (focus ? '#00a8cc' : '#0c7b93')};
  color: ${({ focus }) => (focus ? 'white' : '#ddd')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-size: 14px;
  cursor: pointer;
  margin: 1px;
  :hover {
    background-color: #00a8cc;
  }
`;

function MapBox({ courseData }) {
  const [center, setCenter] = useState({ lat: 37.5662952, lng: 126.9779451 });
  const [marker, setMarker] = useState('travelSpot');
  const [travelFocus, setTravelFocus] = useState(true);
  const [eatFocus, setEatFocus] = useState(false);
  const [sleepFocus, setSleepFocus] = useState(false);
  const [pathCoordinates, setPathCoordinates] = useState([
    {
      id: 1,
      route1: [35.1099097, 128.5413306],
      route2: [35.2066907, 128.5741251],
    },
    {
      id: 2,
      route1: [35.2066907, 128.5741251],
      route2: [35.178936, 128.5811386],
    },
    {
      id: 3,
      route1: [35.178936, 128.5811386],
      route2: [35.2245245, 128.5795397],
    },
  ]);

  useEffect(() => {
    if (courseData !== null) {
      setCenter({
        lat: Number(courseData.travelSpots[0].lat),
        lng: Number(courseData.travelSpots[0].lng),
      });
    }
  }, [courseData]);

  console.log(center);

  // const travelSpot = [
  //   {
  //     id: 1,
  //     name: '1. 한국 서울타워점',
  //     position: { lat: 37.5512141, lng: 126.9882024 },
  //   },
  //   {
  //     id: 2,
  //     name: '2. 잠실 타워',
  //     position: { lat: 37.739235, lng: 126.99025 },
  //   },
  //   {
  //     id: 3,
  //     name: '3. 한강 공원',
  //     position: { lat: 37.052235, lng: 126.243683 },
  //   },
  //   {
  //     id: 4,
  //     name: '4. 명동 거리',
  //     position: { lat: 37.712776, lng: 126.005974 },
  //   },
  // ];

  // const eatSpot = [
  //   {
  //     id: 1,
  //     name: '맛집1',
  //     position: { lat: 37.3512141, lng: 126.9882024 },
  //   },
  //   {
  //     id: 2,
  //     name: '맛집2',
  //     position: { lat: 37.939235, lng: 126.99025 },
  //   },
  //   {
  //     id: 3,
  //     name: '맛집3',
  //     position: { lat: 37.072235, lng: 126.243683 },
  //   },
  //   {
  //     id: 4,
  //     name: '맛집4',
  //     position: { lat: 37.712776, lng: 126.005974 },
  //   },
  // ];

  // const sleepSpot = [
  //   {
  //     id: 1,
  //     name: '숙소1',
  //     lat: 37.4512141,
  //     lng: 126.9882024,
  //   },
  //   {
  //     id: 2,
  //     name: '숙소2',
  //     lat: 37.639235,
  //     lng: 126.99025,
  //   },
  //   {
  //     id: 3,
  //     name: '숙소3',
  //     lat: 37.062235,
  //     lng: 126.243683,
  //   },
  //   {
  //     id: 4,
  //     name: '숙소4',
  //     lat: 37.538235,
  //     lng: 126.59125,
  //   },
  // ];

  const locationHandler = idValue => {
    console.log(center);
    setCenter({
      lat: Number(courseData.travelSpots[idValue - 1].lat),
      lng: Number(courseData.travelSpots[idValue - 1].lng),
    });
  };

  const spot1Handler = () => {
    setMarker('travelSpot');
    setCenter({
      lat: Number(courseData.travelSpots[0].lat),
      lng: Number(courseData.travelSpots[0].lng),
    });
    setPathCoordinates([
      {
        id: 1,
        route1: [35.1099097, 128.5413306],
        route2: [35.2066907, 128.5741251],
      },
      {
        id: 2,
        route1: [35.2066907, 128.5741251],
        route2: [35.178936, 128.5811386],
      },
      {
        id: 3,
        route1: [35.178936, 128.5811386],
        route2: [35.2245245, 128.5795397],
      },
    ]);
    setTravelFocus(true);
    setEatFocus(false);
    setSleepFocus(false);
  };

  const spot2Handler = () => {
    setMarker('eatSpot');
    setCenter({
      lat: Number(courseData.eats[0].lat),
      lng: Number(courseData.eats[0].lng),
    });
    setTravelFocus(false);
    setEatFocus(true);
    setSleepFocus(false);
    setPathCoordinates(null);
  };

  const spot3Handler = () => {
    setMarker('sleepSpot');
    setTravelFocus(false);
    setEatFocus(false);
    setSleepFocus(true);
    setPathCoordinates(null);
    setCenter({
      lat: Number(courseData.sleeps[0].lat),
      lng: Number(courseData.sleeps[0].lng),
    });
  };

  return (
    <Container className="row min-vh-100 flex-column flex-md-row">
      <LoadScriptNext googleMapsApiKey="AIzaSyDuCjHf1X1675gihgZb4q1CHodMfo_9CxM">
        <GoogleMap
          style={{ position: 'relative' }}
          zoom={13}
          center={center}
          mapContainerClassName="map-container"
          className="col-sm-8 px-0 flex-grow-1 mb-5"
        >
          {marker === 'travelSpot' && courseData !== null
            ? courseData.travelSpots.map(ele => {
                const position = { lat: Number(ele.lat), lng: Number(ele.lng) };
                return (
                  <MarkerF
                    key={ele.id}
                    position={position}
                    label={String(ele.id)}
                  />
                );
              })
            : null}

          {marker === 'travelSpot' &&
            pathCoordinates.map(ele => {
              const routeSpot = [
                { lat: ele.route1[0], lng: ele.route1[1] },
                { lat: ele.route2[0], lng: ele.route2[1] },
              ];
              return (
                <Polyline
                  key={ele.id}
                  path={routeSpot}
                  options={{
                    strokeColor: 'black',
                    strokeOpacity: 1,
                    strokeWeight: 2,
                  }}
                />
              );
            })}

          {marker === 'eatSpot' &&
            courseData.eats.map(ele => {
              const position = { lat: Number(ele.lat), lng: Number(ele.lng) };
              return <MarkerF key={ele.id} position={position} />;
            })}

          {marker === 'sleepSpot' &&
            courseData.sleeps.map(ele => {
              const position = { lat: Number(ele.lat), lng: Number(ele.lng) };
              return <MarkerF key={ele.id} position={position} />;
            })}
          <Category>
            <Spot focus={travelFocus} onClick={spot1Handler}>
              주요 명소
            </Spot>
            <Spot focus={eatFocus} onClick={spot2Handler}>
              맛집
            </Spot>
            <Spot focus={sleepFocus} onClick={spot3Handler}>
              숙박
            </Spot>
          </Category>
        </GoogleMap>
      </LoadScriptNext>
      <div className="col-sm-4 ps-3">
        {marker === 'travelSpot' && courseData !== null
          ? courseData.travelSpots.map(ele => {
              return (
                <div className="col">
                  <Location
                    role="presentation"
                    className="card mb-2 border-0 rounded-2"
                    key={ele.id}
                    onClick={() => locationHandler(ele.id)}
                    style={{
                      maxWidth: '540px',
                      backgroundColor: '#0c7b93',
                    }}
                  >
                    <div className="row g-2">
                      <div className="col-md-4 col-sm-4 col-4">
                        <img
                          src={sampleImg}
                          className="rounded-start img-fluid px-1 pt-1"
                          alt="img"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className="d-flex">
                            <h3 className="card-title fw-bold flex-grow-1">
                              {ele.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Location>
                </div>
              );
            })
          : null}

        {marker === 'eatSpot' &&
          courseData.eats.map(ele => {
            return (
              <div className="col">
                <Location
                  role="presentation"
                  className="card mb-2 border-0 rounded-2"
                  key={ele.id}
                  onClick={() => locationHandler(ele.eatId)}
                  style={{
                    maxWidth: '540px',
                    backgroundColor: '#0c7b93',
                  }}
                >
                  <div className="row g-2">
                    <div className="col-md-4 col-sm-4 col-4">
                      <img
                        src={sampleImg}
                        className="rounded-start img-fluid px-1 pt-1"
                        alt="img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex">
                          <h3 className="card-title fw-bold flex-grow-1">
                            {ele.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Location>
              </div>
            );
          })}

        {marker === 'sleepSpot' &&
          courseData.sleeps.map(ele => {
            return (
              <div className="col">
                <Location
                  role="presentation"
                  className="card mb-2 border-0 rounded-2"
                  key={ele.id}
                  onClick={() => locationHandler(ele.sleepId)}
                  style={{
                    maxWidth: '540px',
                    backgroundColor: '#0c7b93',
                  }}
                >
                  <div className="row g-2">
                    <div className="col-md-4 col-sm-4 col-4">
                      <img
                        src={sampleImg}
                        className="rounded-start img-fluid px-1 pt-1"
                        alt="img"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex">
                          <h3 className="card-title fw-bold flex-grow-1">
                            {ele.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Location>
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default MapBox;
