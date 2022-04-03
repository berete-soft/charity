import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Package from "../layout/Package";
import Accordion from "./accordion/Accordion";
import Header from "./header/Header";
import BlogSlider from "./Slider/BlogSlider";
import CauseSlider from "./Slider/CauseSlider";
import LogoSlider from "./Slider/LogoSlider";
import MainSlider from "./Slider/MainSlider";
import ServiceSlider from "./Slider/ServiceSlider";
function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />

        <MainSlider />

        <section className="service-two">
          <div className="container">
            <ServiceSlider />
          </div>
        </section>
        <section className="about-two pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="about-two__image wow fadeInLeft"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/images/resources/welcome-1-1.png" alt="" />
                  <div className="about-two__award">
                    <img
                      src="assets/images/shapes/Linkbout-bag-1-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-two__content">
                  <div className="block-title">
                    <h3>Welcome to non-profit charity organization.</h3>
                  </div>
                  <p className="mb-40 pr-10">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do eiusmod tempor incididunt simply free ut labore
                    et dolore magna aliqua simhy adndnh qkhhn.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-two__box">
                        <h3>
                          <i className="azino-icon-confirmation"></i> Become a
                          Volunteer
                        </h3>
                        <p>
                          Lorem ipsum dolor sit ametelit sed consectetur notted.
                        </p>
                      </div>
                      <div className="about-two__box">
                        <h3>
                          <i className="azino-icon-confirmation"></i> Quick
                          Fundraising
                        </h3>
                        <p>
                          Lorem ipsum dolor sit ametelit sed consectetur notted.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-two__box-two">
                        <i className="azino-icon-support"></i>
                        <h3>
                          You can make a big difference in someone’s life.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <Link to="about.html" className="thm-btn dynamic-radius">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-card">
          <div className="video-card__bg"></div>
          <div className="container text-center pt-120 pb-120">
            <h3>Our fingerprints on the lives we touch never fade.</h3>
            <div className="video-card__btn-block">
              <Link to="cause-details.html" className="thm-btn dynamic-radius">
                Start Donating
              </Link>

              <Link
                to="https://www.youtube.com/watch?v=k0ZvG_917YI"
                className="video-popup video-card__btn"
              >
                <i className="fa fa-play"></i>
              </Link>
            </div>
          </div>
        </section>
        <section className="causes-page causes-home pt-120 pb-120">
          <div className="container">
            <div className="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
              <div className="col-lg-7">
                <div className="block-title">
                  <h3>
                    We also have other Communities Causes that need helps around
                    the World.{" "}
                  </h3>
                </div>
              </div>
              <div className="col-lg-5 d-flex">
                <div className="my-auto">
                  <p className="block-text pr-10 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Have you done google research which
                    works all the time.{" "}
                  </p>
                </div>
              </div>
            </div>

            <CauseSlider />
          </div>
        </section>
        <section className="faq-one pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-one__content">
                  <div className="block-title">
                    <h3>One Community, One Goal, For Everyone</h3>
                  </div>
                  <Accordion />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-counter__image clearfix">
                  <div className="about-counter__image-content">
                    <img
                      src="assets/images/shapes/Linkbout-count-heart-1-1.png"
                      alt=""
                    />
                    <p>We’re here to support you every step of the way.</p>
                  </div>
                  <img
                    src="assets/images/resources/faq-box-1-1.jpg"
                    alt=""
                    className="float-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fact-counter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="8860">
                  00
                </h3>
                <p>Fund Raised</p>
                <Link to="#">+</Link>
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="456">
                  00
                </h3>
                <p>Fund Raised</p>
                <Link to="#">+</Link>
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="6208">
                  00
                </h3>
                <p>Fund Raised</p>
                <Link to="#">+</Link>
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="960">
                  00
                </h3>
                <p>Fund Raised</p>
                <Link to="#">+</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="price-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="price-one__main">
                  <div className="block-title">
                    <h3>Want to help regularly for the sake of Allah?</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.{" "}
                  </p>
                  <div className="price-one__image-box">
                    <img
                      src="assets/images/resources/price-box-1-1.jpg"
                      alt=""
                    />
                    <div className="price-one__image-box-content">
                      <h3>
                        <i className="fa fa-check"></i> Fundraising Platform
                      </h3>
                      <p>
                        Lorem Ipsum. Proin gravida nibh vel velit auctor
                        aliquet. Aenean sollicitudin, lorem is simply free text
                        quis bibendum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <Package />
              </div>
            </div>
          </div>
        </section>

        <section className="news__top news-home  pt-120">
          <div className="container">
            <div className="row align-items-start align-items-md-center flex-column flex-md-row">
              <div className="col-lg-12">
                <div className="block-title pb-5">
                  <h3>Check our list of Events available for the Commutity</h3>
                </div>
              </div>
            </div>

            <BlogSlider />
          </div>
        </section>

        <div className="client-carousel client-carousel__has-border-top">
          <div className="container pb-5">
            <div className="block-title">
              <h3>OUR VALUABLE SPONSORS</h3>
            </div>
            <LogoSlider />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
