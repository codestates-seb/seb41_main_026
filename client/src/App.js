import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentPage from './pages/ContentPage/ContentPage';
import MyPage from './pages/MyPage/MyPage';
import MyPageLike from './components/MyPage/MyPageLike';
import MyPageComment from './components/MyPage/MyPageComment';
import MyPageInfo from './components/MyPage/MyPageInfo';
import MainShorts from './pages/HomePage/MainShorts';
import MainSeason from './pages/HomePage/MainSeason';
import MainGuide from './pages/HomePage/MainGuide';
import MainSearch from './pages/HomePage/MainSearch';
import MainPage from './pages/HomePage/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/shorts',
    element: <MainShorts />,
  },
  {
    path: '/season',
    element: <MainSeason />,
  },
  {
    path: '/guide',
    element: <MainGuide />,
  },
  {
    path: '/search',
    element: <MainSearch />,
  },
  {
    path: '/course/:id',
    element: <ContentPage />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
  },
  {
    path: '/mypage/like',
    element: <MyPageLike />,
  },
  {
    path: '/mypage/comment',
    element: <MyPageComment />,
  },
  {
    path: '/mypage/edit',
    element: <MyPageInfo />,
  },
]);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Main({ children }) {
  const location = window.location.pathname;
  if (location === '/' || location === '/course/:id') {
    return <Container>{children}</Container>;
  }
  return <div>{children}</div>;
}

function App() {
  return (
    <>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
