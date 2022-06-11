import React, { useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const divRef = useRef(null);
  const scrollToElement = () => divRef.current.scrollIntoView();
  return (
    <header className="header">
      {/* <!-- Header --> */}

      {/* <!-- logo --> */}
      <div className="logo">
        <a href="#">
          <img className="logo-img" src="images/logo.png" alt="" />
          <span className="logo-lnk">
            Himanshu <br />
            Nanikwal
          </span>
        </a>
      </div>

      {/* <!-- menu button --> */}
      <a href="#" className="menu-btn">
        <span></span>
      </a>

      {/* <!-- download cv button --> */}
      <a href="#" className="btn download-cv-btn">
        <span className="animated-button">
          <span>Download CV</span>
        </span>
        <i className="icon fas fa-download"></i>
      </a>

      {/* <!-- header sidebar --> */}
      <div className="header-sidebar">
        {/* <!-- top menu -->						 */}
        <div className="top-menu">
          <div className="top-menu-nav">
            <div className="menu-topmenu-container">
              <ul className="menu">
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    About
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="Resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Resume
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Education
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="Coding"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Skills
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="Portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    activeClass="current-menu-item"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
