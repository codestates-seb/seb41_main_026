import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  Polyline,
  StandaloneSearchBox,
} from '@react-google-maps/api';
import styled from 'styled-components';

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

const Location = styled.div`
  cursor: pointer;
  margin-top: 10px;
  background-color: #0c7b93;
  :hover {
    background-color: #00a8cc;
  }
`;

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
  const [path, setPath] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [searchMarker, setSearchMarker] = useState(null);

  useEffect(() => {
    if (courseData !== null) {
      setCenter({
        lat: Number(courseData.travelSpots[0].lat),
        lng: Number(courseData.travelSpots[0].lng),
      });
    }
  }, [courseData]);

  useEffect(() => {
    if (courseData !== null) {
      setPath(courseData.paths);
    }
  }, [courseData]);

  const locationHandler = (idValue, spot) => {
    if (spot === 'travel') {
      setCenter({
        lat: Number(courseData.travelSpots[idValue].lat),
        lng: Number(courseData.travelSpots[idValue].lng),
      });
    } else if (spot === 'eat') {
      setCenter({
        lat: Number(courseData.eats[idValue].lat),
        lng: Number(courseData.eats[idValue].lng),
      });
    } else if (spot === 'sleep') {
      setCenter({
        lat: Number(courseData.sleeps[idValue].lat),
        lng: Number(courseData.sleeps[idValue].lng),
      });
    }
  };

  const spot1Handler = () => {
    setMarker('travelSpot');
    setCenter({
      lat: Number(courseData.travelSpots[0].lat),
      lng: Number(courseData.travelSpots[0].lng),
    });
    setPath(courseData.paths);
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
    setPath(null);
  };

  const spot3Handler = () => {
    setMarker('sleepSpot');
    setTravelFocus(false);
    setEatFocus(false);
    setSleepFocus(true);
    setPath(null);
    setCenter({
      lat: Number(courseData.sleeps[0].lat),
      lng: Number(courseData.sleeps[0].lng),
    });
  };

  const onPlacesChanged = () => {
    const [place] = searchBox.getPlaces();
    if (place) {
      setSearchMarker({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };
  const onSBLoad = ref => {
    setSearchBox(ref);
  };

  return (
    <Container className="row min-vh-100 flex-column flex-md-row">
      <LoadScript
        libraries={['places']}
        googleMapsApiKey="AIzaSyDuCjHf1X1675gihgZb4q1CHodMfo_9CxM"
      >
        <GoogleMap
          style={{ position: 'relative' }}
          zoom={13}
          center={center}
          mapContainerClassName="map-container"
          className="col-sm-8 px-0 flex-grow-1 mb-5"
        >
          <StandaloneSearchBox
            onPlacesChanged={onPlacesChanged}
            onLoad={onSBLoad}
          >
            <input
              type="text"
              className="form-control"
              placeholder="지역을 검색하세요"
              style={{
                position: 'absolute',
                width: '350px',
                height: '40px',
                backgroundColor: 'white',
                top: '10px',
                left: '180px',
              }}
            />
          </StandaloneSearchBox>

          {searchMarker !== null && <MarkerF key={1} position={searchMarker} />}

          {marker === 'travelSpot' && courseData !== null
            ? courseData.travelSpots.map((ele, idx) => {
                const position = { lat: Number(ele.lat), lng: Number(ele.lng) };
                return (
                  <MarkerF
                    key={ele.id}
                    position={position}
                    label={String(idx + 1)}
                  />
                );
              })
            : null}

          {marker === 'travelSpot' && courseData !== null && path !== null
            ? path.map(ele => {
                const routeSpot = [
                  {
                    lat: Number(ele.route.route1[0]),
                    lng: Number(ele.route.route1[1]),
                  },
                  {
                    lat: Number(ele.route.route2[0]),
                    lng: Number(ele.route.route2[1]),
                  },
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
              })
            : null}

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
      </LoadScript>
      <div className="col-md-4 ps-3">
        {marker === 'travelSpot' && courseData !== null
          ? courseData.travelSpots.map((ele, idx) => {
              return (
                <div className="col">
                  <Location
                    role="presentation"
                    className="card mb-2 border-0 rounded-2"
                    onClick={() => locationHandler(idx, 'travel')}
                    style={{
                      maxWidth: '540px',
                    }}
                  >
                    <div className="row g-2">
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
          courseData.eats.map((ele, idx) => {
            return (
              <div className="col">
                <Location
                  role="presentation"
                  className="card mb-2 border-0 rounded-2"
                  key={ele.id}
                  onClick={() => locationHandler(idx, 'eat')}
                  style={{
                    maxWidth: '540px',
                    backgroundColor: '#0c7b93',
                  }}
                >
                  <div className="row g-2">
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
          courseData.sleeps.map((ele, idx) => {
            return (
              <div className="col">
                <Location
                  role="presentation"
                  className="card mb-2 border-0 rounded-2"
                  key={ele.id}
                  onClick={() => locationHandler(idx, 'sleep')}
                  style={{
                    maxWidth: '540px',
                    backgroundColor: '#0c7b93',
                  }}
                >
                  <div className="row g-2">
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
