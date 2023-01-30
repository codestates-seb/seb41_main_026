import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.li`
  background-color: ${props => (props.selected ? '#142850' : 'none')};
  border-radius: ${props => (props.selected ? '5px' : '0px')};
  & a {
    color: ${props => (props.selected ? '#fff' : '#aaa')} !important;
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
`;

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="col-12 col-md-3 ps-2">
      <nav
        className="border border-2 rounded mt-2 justify-content-around"
        style={{ top: '100px', position: 'sticky' }}
      >
        <div className="nav nav-pills p-1  d-flex flex-column">
          <List selected={pathname === '/mypage'} className="nav-item my-2">
            <Link to="/mypage" className="nav-link">
              <span>나의 정보</span>
            </Link>
          </List>
          <hr />
          <List
            selected={pathname === '/mypage/like'}
            className="nav-item my-2"
          >
            <Link
              to="/mypage/like"
              className="nav-link d-flex align-items-bottom"
              aria-current="page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart me-2"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              좋아요
            </Link>
          </List>
          <List selected={pathname === '/mypage/comment'} className="my-2">
            <Link
              to="/mypage/comment"
              className="nav-link text-white d-flex align-items-bottom"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chat-dots me-2"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
              </svg>
              댓글
            </Link>
          </List>
          <List selected={pathname === '/mypage/edit'} className="my-2">
            <Link
              to="/mypage/edit"
              className="nav-link text-white d-flex align-items-bottom"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-gear me-2"
                viewBox="0 0 16 16"
              >
                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
              회원 정보 변경
            </Link>
          </List>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
