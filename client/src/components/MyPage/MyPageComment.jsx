import React from 'react';
import Sidebar from './Sidebar';
import MyPageCard from '../Card/MyPageCard';

function MyPageComment() {
  return (
    <div className="container">
      <div className="row flex-grow-sm-1 flex-grow-0">
        <Sidebar />
        <div className="col-sm-3" />
        <div className="col overflow-auto h-100 mt-5 mb-5">
          <div className="mb-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <MyPageCard title="DMZ 투어" destination="Paju" id="1" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="2" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="3" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="4" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="5" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="6" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="7" />
              </div>
              <div className="col">
                <MyPageCard title="🛤️ DMZ 투어" id="7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageComment;
