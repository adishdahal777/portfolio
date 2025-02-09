import { useState, useEffect, JSX } from 'react';

function Header(): JSX.Element {
  const [activeLink, setActiveLink] = useState<string>('');

  // Function to handle scrollspy
  const navmenuScrollspy = (): void => {
    const navmenulinks = document.querySelectorAll('.navmenu a');

    navmenulinks.forEach((navmenulink: any) => {
      if (!navmenulink.hash) return;

      const section = document.querySelector(navmenulink.hash);
      if (!section) return;

      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        setActiveLink(navmenulink.hash);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

    return () => {
      window.removeEventListener('load', navmenuScrollspy);
      document.removeEventListener('scroll', navmenuScrollspy);
    };
  }, []);

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img src="/assets/img/profile.jpg" alt="" className="img-fluid rounded-circle" />
      </div>

      <a href="index.html" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Alex Smith</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://twitter.com/adishdahal777" className="twitter" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.facebook.com/adishdahal777" className="facebook" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/adisssh__/" className="instagram" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://github.com/adishdahal777" className="google-plus" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/adishdahal777/" className="linkedin" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className={activeLink === '#hero' ? 'active' : ''}>
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeLink === '#about' ? 'active' : ''}>
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#resume" className={activeLink === '#resume' ? 'active' : ''}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" className={activeLink === '#portfolio' ? 'active' : ''}>
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className={activeLink === '#services' ? 'active' : ''}>
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li>
            <a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
