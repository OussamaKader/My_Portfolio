import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [mobileActive, setMobileActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileActive(!mobileActive);
  };

  return (

    <header
      id="header"
      className={`header d-flex align-items-center light-background sticky-top ${mobileActive ? "mobile-nav-active" : ""
        }`}
    >
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet"></link>
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">KADER</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" onClick={() => setMobileActive(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileActive(false)}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => setMobileActive(false)}>Portfolio</Link></li>
            <li><Link to="/resume" onClick={() => setMobileActive(false)}>Resume</Link></li>
            <li><Link to="/contact" onClick={() => setMobileActive(false)}>Contact</Link></li>
            <li><Link to="/services" onClick={() => setMobileActive(false)}>Services</Link></li>
          </ul>
          {/* Mobile toggle button */}
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <div className="header-social-links">
          <a href="https://x.com/abdelkaderous?s=21" target="_blank" rel="noopener noreferrer" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>

          <a href="https://www.facebook.com/share/17KPE2yhL6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>

          <a href="https://www.instagram.com/oussamamedlemine?igsh=d2hjOHcwcjE5aDZw&utm_source=" target="_blank" rel="noopener noreferrer" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/oussama-med-lemine-5a2449267?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;