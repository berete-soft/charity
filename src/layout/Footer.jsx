import React from "react";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import logo from "../assets/images/logo.png";
import ScrollToTop from "../components/basic/ScrollToTop";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <section className="site-footer">
        <div className="main-footer pt-142 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget mb-40 footer-widget__about">
                  <Link to="{{route('home')}}" aria-label="logo image">
                    <img
                      src={logo}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consect etur adi pisicing elit
                    sed.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget__link mb-40">
                  <h3 className="footer-widget__title">Explore</h3>
                  <ul className="list-unstyled footer-widget__link-list">
                    <li>
                      <Link to="{{ route('contact')}}">About us</Link>
                    </li>
                    <li>
                      <Link to="{{ route('events')}}">Upcoming Events</Link>
                    </li>
                    <li>
                      <Link to="about.html">Site Map</Link>
                    </li>
                    <li>
                      <Link to="{{ route('contact')}}">Help</Link>
                    </li>
                    <li>
                      <Link to="causes.html">Donate</Link>
                    </li>
                    <li>
                      <Link to="{{ route('contact')}}">Contact us</Link>
                    </li>
                    <li>
                      <Link to="{{ route('contact')}}">Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget mb-40 ">
                  <h3 className="footer-widget__title">Contract</h3>
                  <ul className="list-unstyled footer-widget__contact">
                    <li>
                      <Link to="#">
                        <i className="azino-icon-telephone"></i>666 888 0000
                      </Link>
                    </li>
                    <li>
                      <a href="mailto:contact@mandenislamiccenter.com">
                        <i className="azino-icon-email"></i>
                        contact@mandenislamiccenter.com
                      </a>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="azino-icon-pin"></i>88 Broklyn Golden
                        Street, USA
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget mb-40 footer-widget__newsletter">
                  <h3 className="footer-widget__title">Newletter</h3>
                  <p>Signup now to get daily latest news & updates from us</p>
                  <form
                    data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                    className="footer-widget__newsletter-form mc-form"
                  >
                    <label for="mc-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      id="mc-email"
                      className="dynamic-radius"
                      placeholder="Email address"
                    />
                    <div className="footer-widget__newsletter-btn-wrap d-flex justify-content-end">
                      <button type="submit" className="thm-btn dynamic-radius">
                        Subscribe Now
                      </button>
                    </div>
                  </form>
                  <div className="mc-form__response"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <ScrollToTop />
            <p>{`© Copyright ${year} Manden Islamic Center.`}</p>
            <div className="footer-social">
              <Link to="#" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#" aria-label="pinterest">
                <i className="fab fa-pinterest-p"></i>
              </Link>
              <Link to="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="far fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="{{route('home')}}" aria-label="logo image">
              <img src="assets/images/logo.png" width="101" alt="" />
            </Link>
          </div>
          <div className="mobile-nav__container"></div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="azino-icon-email"></i>
              <Link to="mailto:needhelp@azino.com">needhelp@azino.com</Link>
            </li>
            <li>
              <i className="azino-icon-telephone"></i>
              <Link to="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__language">
              <img src="assets/images/resources/flag-1-1.jpg" alt="" />
              <label className="sr-only" for="language-select">
                select language
              </label>

              <select className="selectpicker" id="language-select">
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div className="mobile-nav__social">
              <Link to="#" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#" aria-label="pinterest">
                <i className="fab fa-pinterest-p"></i>
              </Link>
              <Link to="#" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>

        <div className="search-popup__content">
          <form action="#">
            <label for="search" className="sr-only">
              search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Footer;

{
  /* if (document.getElementById("app")) {
    ReactDOM.render( < Navbar / > , document.getElementById("app"));
} */
}
