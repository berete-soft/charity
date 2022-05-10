import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "../../layout/Navbar";


export default function Header() {
  const ref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        ref.current.style.transform = "translateY(0)";
      }
      if (window.scrollY <= 300) {
        ref.current.style.transform = "translateY(-110%)";
      }
    });
  });
  return (
    <>
      <Navbar />
      <div
        ref={ref}
        className="stricky-header stricked-menu stricky-header-two"
      >
        <div className="container">
          <div className="logo-box">
            <Link to="">
              <img src={logo} width="101" alt="" />
            </Link>
          </div>
          <div className="sticky-header__content"></div>
        </div>
      </div>
    </>
  );
}
