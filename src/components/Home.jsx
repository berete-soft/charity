import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import About from "../layout/About";
import Cause from "../layout/Cause";
import Footer from "../layout/Footer";
import Package from "../layout/Package";
import VideoCard from "../layout/VideoCard";
import Accordion from "./accordion/Accordion";
import Header from "./header/Header";
import BlogSlider from "./Slider/BlogSlider";
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
        <About />
        <VideoCard />
        <Cause />
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
