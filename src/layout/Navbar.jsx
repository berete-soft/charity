import React, { useContext, useRef } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Language from "../components/basic/Language";
import ProfileBtn from "../components/Profile/ProfileBtn";
import { ThemeContext } from "../context/ThemeContext";
function Navbar() {
  const ref = useRef();
  const navHandler = () => {
    ref.current.classList.toggle("active");
  };

  const context = useContext(ThemeContext);

  return (
    <div>
      <div className="main-header__two">
        <div className="main-header__top">
          <div className="container">
            <p>Welcome to Manden Islamic Center Registration Platform</p>

            <Language />

            <div className="main-header__social">
              <a href="#" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" aria-label="pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
              {!context.isLogin && (
                <Link to="/login" className="login-btn">
                  Login
                </Link>
              ) || <ProfileBtn />}
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="container">
            <div className="logo-box">
              <Link to="/" aria-label="logo image">
                <img src={Logo} width="101" alt="" />
              </Link>
              <span onClick={navHandler} className="mobile-nav__toggler">
                <i className="fa-solid fa-bars"></i>
              </span>
            </div>

            <div className="header-info">
              <div className="header-info__box">
                <i className="azino-icon-email1"></i>
                <div className="header-info__box-content">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:contact@mandenislamiccenter.com">
                      contact@mandenislamiccenter.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="header-info__box">
                <i className="azino-icon-calling"></i>
                <div className="header-info__box-content">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:666-888-0000">666 888 0000</a>
                  </p>
                </div>
              </div>
              <div className="header-info__box">
                <i className="azino-icon-address"></i>
                <div className="header-info__box-content">
                  <h3>Visit</h3>
                  <p>88 Broklyn Golden Street, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav ref={ref} className="main-menu">
          <div className="container">
            <ul className="main-menu__list dynamic-radius">
              <li className=" @yield('home_select')">
                <Link to="/">Home</Link>
              </li>
              <li className=" @yield('events_select')">
                <Link to="/events">Events</Link>
              </li>
              <li className=" ">
                <Link to="/causes">Causes</Link>
              </li>
              <li className=" ">
                <Link to="/about">About us</Link>
              </li>
              <li className=" ">
                <Link to="/videos">Videos</Link>
              </li>

              <li className="  ">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="search-btn search-toggler">
                <a href="#">
                  <i className="azino-icon-magnifying-glass"></i>
                </a>
              </li>
            </ul>
            <Link
              to={(context.isLogin && "/payment") || "/registation"}
              className="thm-btn dynamic-radius"
            >
              {(context.isLogin && "PAYMENT") || "REGISTRATION"}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
