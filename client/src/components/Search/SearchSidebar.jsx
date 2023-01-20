import React from 'react';

function SearchSidebar() {
  return (
    <aside className="col-md-3 pb-23">
      <div className="mt-2 justify-content-around">
        <div className="p-1 d-flex flex-column">
          <div className="accordion" id="accordionPanel">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  지역
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Seoul"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        서울
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Busan"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        부산
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Kyeongsangdo"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        경상도
                      </label>
                    </div>
                    <div className="text-secondary">8</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Gangwondo"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        강원도
                      </label>
                    </div>
                    <div className="text-secondary">1</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Kyeongkido"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        경기도
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  계절
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse show"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Spring"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        봄
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Summer"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        여름
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Autumn"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        가을
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Winter"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        겨울
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  가이드
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse show"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="guideYun"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        최윤정
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="GuideDo"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        김원도
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="guideRyu"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        유성민
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="GuideDK"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        이동국
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="guideDion"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        김동현
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="guideJin"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label pt-1"
                        htmlFor="flexCheckDefault"
                      >
                        최진우
                      </label>
                    </div>
                    <div className="text-secondary">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SearchSidebar;
