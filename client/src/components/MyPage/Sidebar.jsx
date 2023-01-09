import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
  background-color: ${props => (props.selected ? '#142850' : 'none')};
  border-right: 3px solid ${props => (props.selected ? '#f48225' : 'none')};
  & a {
    color: ${props => (props.selected ? '#0c0d0e' : '#6a737c')} !important;
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
    <div className="col-sm-3">
      <div className="d-flex flex-column flex-shrink-0 p-3  bg-primary-subtle">
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <List selected={pathname === '/mypage'} className="nav-item mb-2">
            <Link to="/mypage" className="nav-link text-white">
              <span>Home</span>
            </Link>
          </List>
          <List
            selected={pathname === '/mypage/like'}
            className="nav-item mb-2"
          >
            <Link to="/mypage/like" className="nav-link " aria-current="page">
              좋아요
            </Link>
          </List>
          <List selected={pathname === '/mypage/comment'} className="mb-2">
            <Link to="/mypage/comment" className="nav-link text-white">
              댓글
            </Link>
          </List>
          <List selected={pathname === '/mypage/edit'} className="mb-2">
            <Link to="/mypage/edit" className="nav-link text-white">
              회원 정보 변경
            </Link>
          </List>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
