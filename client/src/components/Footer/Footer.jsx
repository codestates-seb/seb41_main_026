import logoGit from '../../img/github_dark.png';

function Footer() {
  return (
    <nav className="navbar bg-dark fixed-bottom" data-bs-theme="dark">
      <div className="container-xl">
        <span className="text-light">Copyrights ⓒ 여행가조</span>

        <div>
          <a href="https://github.com/codestates-seb/seb41_main_026">
            <img
              src={logoGit}
              alt="locate github repo"
              height="40px"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
