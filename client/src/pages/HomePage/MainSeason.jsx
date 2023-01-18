import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SeasonSection from '../../components/SeasonSection/SeasonSection';

const Wrapper = styled.body`
  overflow: hidden;
  min-height: 100vh;
  nav {
    display: flex;
    position: fixed;
    z-index: 100;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    li {
      margin: 0 10px;
      a {
        font-size: 16px;
      }
      a:hover {
        color: #00a8cc;
      }
    }
  }
  .hidden {
    opacity: 0;
    filter: blur(5px);
    transition: all 1s;
  }
  .show {
    opacity: 1;
    filter: blur(0);
  }
`;

const BgImg = styled.div`
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;

  h1 {
    display: inline-block;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 40px 120px;
    font-size: 50px;
  }
`;

function MainSeason() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => {
    observer.observe(el);
  });

  return (
    <Wrapper>
      <nav id="navbar" className="navbar container-fluid">
        <ul className="d-flex">
          <li>
            <a className="nav-link scrollto active" href="#spring">
              봄
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#summer">
              여름
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#autumn">
              가을
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#winter">
              겨울
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <section id="spring" className="hidden">
        <BgImg
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/bgSpring.jpg)',
            backgroundPositionY: position / 2,
          }}
        >
          <h1 className="text-black">봄</h1>
        </BgImg>
        <SeasonSection season="봄" />
      </section>

      <section id="summer" className="hidden">
        <BgImg
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/bgSummer.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          <h1 className="text-info">여름</h1>
        </BgImg>
        <SeasonSection season="여름" />
      </section>

      <section id="autumn" className="hidden">
        <BgImg
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/bgAutumn.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          <h1 className="text-warning">가을</h1>
        </BgImg>
        <SeasonSection season="가을" />
      </section>

      <section id="winter" className="hidden">
        <BgImg
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/bgWinter.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          <h1>겨울</h1>
        </BgImg>
        <SeasonSection season="겨울" />
      </section>
    </Wrapper>
  );
}

export default MainSeason;
