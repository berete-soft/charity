import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Values from '../Values';
import CauseCard from "./Card/CauseCard";


function Causes() {

  const [data, setData] =useState(null)


  const url = `${Values.BASE_URL}cause_list`;
  const context = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setData(d.data.response);
      })
      .catch((e) => console.log(e));
  }, [context.language]);


  return (
    <div>
      <div className="page-wrapper">
        <Navbar />

        <div class="stricky-header stricked-menu">
          <div class="container">
            <div class="logo-box">
              <Link to="/">
                <img src="assets/images/logo-light.png" width="101" alt="" />
              </Link>
            </div>
            <div class="sticky-header__content"></div>
          </div>
        </div>
        <section class="page-header">
          <div class="page-header__bg"></div>

          <div class="container">
            <h2>Causes Page</h2>
            <ul class="thm-breadcrumb list-unstyled dynamic-radius">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>-</li>
              <li>
                <span>Causes</span>
              </li>
            </ul>
          </div>
        </section>

        <section class="causes-page pt-120 pb-120">
          <div class="container">
            <div class="causes-col__3">
              {data?.map((d)=>(
                <CauseCard key={d.id} data={d}/>
              ))}
              

            </div>
            {/* <ul class="list-unstyled post-pagination d-flex justify-content-center align-items-center">
              <li>
                <Link to="#">
                  <i className="fa fa-angle-left"></i>
                </Link>
              </li>
              <li>
                <Link to="#">01</Link>
              </li>
              <li>
                <Link to="#">02</Link>
              </li>
              <li>
                <Link to="#">03</Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-angle-right"></i>
                </Link>
              </li>
            </ul> */}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
export default Causes;
