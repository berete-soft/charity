import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Language from "../components/basic/Language";
import ProfileBtn from "../components/Profile/ProfileBtn";
import { ThemeContext } from "../context/ThemeContext";
import Values from '../Values';


function Navbar() {
  const ref = useRef();
  const[isTogole, setIsToggle] = useState(false)

  const navHandler = () => {
    if(isTogole=== true){
      setIsToggle(false)
    }else {
      setIsToggle(true)
    }
  };


  const[data, setData] = useState({})

  const context = useContext(ThemeContext);

  useEffect(()=> {
    const url = `${Values.BASE_URL}site_settings`

    axios.get(url, {
      headers: {
        language: context.language,
      },
    }).then(d=>{
      setData(d.data.response)
    }).catch(e=>{
      console.log(e.response)
    })
  },[context.language])



  return (
    <div>
      <div className="main-header__two">
        <div className="main-header__top">
          <div className="container">
            <p>Welcome to {data?.site_organization_name}</p>

            <Language />

            <div className="main-header__social">
              <a href={data?.site_social_twitter} aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={data?.site_social_facebook} aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href={data?.site_social_pinterest} aria-label="pinterest">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href={data?.site_social_instagram} aria-label="instagram">
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
                <img src={data?.Site_logo|| logo} width="101" alt="" />
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
                    <a href={`mailto:${data?.site_email}`}>
                    {data?.site_email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="header-info__box">
                <i className="azino-icon-calling"></i>
                <div className="header-info__box-content">
                  <h3>Phone</h3>
                  <p>
                    <a href={`tel:${data?.site_phone_one}`}>{data?.site_phone_one}</a>
                  </p>
                </div>
              </div>
              <div className="header-info__box">
                <i className="azino-icon-address"></i>
                <div className="header-info__box-content">
                  <h3>Visit</h3>
                  <p>{data?.site_address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={`main-menu ${isTogole && "active"|| ""}`}>
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
                <Link to="/videos">Videos</Link>
              </li>

              <li className="  ">
                <Link to="/contact">Contact</Link>
              </li>
              <li className=" ">
                <Link to="/about">About</Link>
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
