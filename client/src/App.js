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

function App() {
  return (
    <>
      <Header />
      <Container>
        <RouterProvider router={router} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
