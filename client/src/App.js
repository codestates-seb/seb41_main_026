import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentPage from './pages/ContentPage/ContentPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/course/:id',
    element: <ContentPage />,
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
