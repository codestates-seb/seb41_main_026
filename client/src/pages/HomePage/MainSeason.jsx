import styled from 'styled-components';
import SeasonSection from '../../components/SeasonSection/SeasonSection';
import Layout from '../../components/Common/Layout';

const Wrapper = styled.div`
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
  return (
    <Layout header footer>
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
        <section id="spring" className="">
          <BgImg
            style={{
              backgroundSize: 'cover',
              backgroundImage: 'url(/bgSpring.jpg)',
              backgroundAttachment: 'fixed',
            }}
          >
            <h1 className="text-black">봄</h1>
          </BgImg>
          <SeasonSection season="봄" />
        </section>

        <section id="summer" className="">
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

        <section id="autumn" className="">
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

        <section id="winter" className="">
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
    </Layout>
  );
}

export default MainSeason;
