import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
  background-color: ${props => (props.selected ? '#142850' : 'none')};
  border-radius: ${props => (props.selected ? '5px' : '0px')};
  & a {
    color: ${props => (props.selected ? '#fff' : '#6a737c')} !important;
    font-weight: ${props => (props.selected ? 'bold' : '400')};
  }
  & .nav-link---icon-globe {
    & path {
      fill: ${props => (props.selected ? '#0c0d0e' : '#838c95')} !important;
    }
    &:hover path {
      fill: #0c0d0e !important;
    }
  }
  & .nav-link__with-icon span {
    color: ${props => (props.selected ? '#0c0d0e' : '#6a737c')} !important;
  }
`;

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className="col-sm-3  d-flex align-items-stretch"
        style={{ position: 'fixed' }}
      >
        <div className="d-flex flex-column p-3">
          <div className="border border-2 rounded mt-5 p-3">
            <ul className="nav nav-pills flex-column mb-auto">
              <List selected={pathname === '/mypage'} className="nav-item mb-2">
                <Link to="/mypage" className="nav-link text-white">
                  <span>나의 정보</span>
                </Link>
              </List>
              <hr />
              <List
                selected={pathname === '/mypage/like'}
                className="nav-item mb-2"
              >
                <Link
                  to="/mypage/like"
                  className="nav-link d-flex align-items-bottom "
                  aria-current="page"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icon-like.svg`}
                    alt="like icon"
                    width="18"
                    height="18"
                    className="me-2 "
                  />
                  좋아요
                </Link>
              </List>
              <List selected={pathname === '/mypage/comment'} className="mb-2">
                <Link
                  to="/mypage/comment"
                  className="nav-link text-white d-flex align-items-bottom"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icon-comment.svg`}
                    alt="like icon"
                    width="18"
                    height="18"
                    className="me-2 "
                  />
                  댓글
                </Link>
              </List>
              <List selected={pathname === '/mypage/edit'} className="mb-2">
                <Link
                  to="/mypage/edit"
                  className="nav-link text-white d-flex align-items-bottom"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/icon-user-edit.svg`}
                    alt="like icon"
                    width="18"
                    height="18"
                    className="me-2 "
                  />
                  회원 정보 변경
                </Link>
              </List>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-9" style={{ position: 'fixed' }} />
    </>
  );
}

export default Sidebar;
