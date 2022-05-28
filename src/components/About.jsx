import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../layout/AboutSection";
import Footer from "../layout/Footer";
import VideoCard from "../layout/VideoCard";
import Header from "./header/Header";
function About() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <section class="page-header">
          <div class="page-header__bg"></div>

          <div class="container">
            <h2>About Page</h2>
            <ul class="thm-breadcrumb list-unstyled dynamic-radius">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>-</li>
              <li>
                <span>About</span>
              </li>
            </ul>
          </div>
        </section>

        <section class="about-one pt-120 pb-40">
          <div class="container">
            <div class="row">
              <div class="about-one__award">
                <img src="assets/images/shapes/about-bag-1-1.png" alt="" />
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/images/resources/about-1-1.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/images/resources/about-1-2.jpg"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="container">
            <div class="team-about__top mt-60">
              <div class="row">
                <div class="col-md-12 col-lg-4">
                  <div class="block-title">
                    <h3>Let’s help them together.</h3>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4">
                  <p class="team-about__top-text">
                    Tincidunt elit magnis nulla facilisis sagittis is maecenas.
                    Sapien nunced amet ultrices, dolores sit ipsum velit purus
                    aliquet, massa fringilla leo orci ipsum dolor sit.
                  </p>
                </div>
                <div class="col-md-12 col-lg-4">
                  <p class="team-about__top-text">
                    Sapien nunced amet ultrices, dolores sit ipsum velit purus
                    aliquet, massa fringilla leo orci. Lorem ipsum dolor sit
                    amet. consectetur adipisi cing elit dolo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

       <AboutSection />

        <section class="team-about pb-120 pt-120">
          <div class="container">
            <div class="team-about__top">
              <div class="row align-items-center">
                <div class="col-md-12 col-lg-7">
                  <div class="block-title">
                    <h3>
                      Meet those who help <br /> others in need.
                    </h3>
                  </div>
                </div>
                <div class="col-md-12 col-lg-5">
                  <p class="team-about__top-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Have you done google research which
                    works all the time.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="team-4-col">
              <div class="team-card text-center content-bg-1">
                <div class="team-card__image">
                  <img src="assets/images/team/team-2-1.jpg" alt="" />
                </div>
                <div class="team-card__social">
                  <a href="#" aria-label="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="facebook">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" aria-label="pinterest">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" aria-label="instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="team-card__content">
                  <h3>Corey Dawson</h3>
                  <p>Student</p>
                </div>
              </div>
              <div class="team-card text-center content-bg-2">
                <div class="team-card__image">
                  <img src="assets/images/team/team-2-2.jpg" alt="" />
                </div>
                <div class="team-card__social">
                  <a href="#" aria-label="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="facebook">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" aria-label="pinterest">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" aria-label="instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="team-card__content">
                  <h3>Zachary Pope</h3>
                  <p>Student</p>
                </div>
              </div>
              <div class="team-card text-center content-bg-3">
                <div class="team-card__image">
                  <img src="assets/images/team/team-2-3.jpg" alt="" />
                </div>
                <div class="team-card__social">
                  <a href="#" aria-label="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="facebook">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" aria-label="pinterest">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" aria-label="instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="team-card__content">
                  <h3>Cole Erickson</h3>
                  <p>Student</p>
                </div>
              </div>
              <div class="team-card text-center content-bg-4">
                <div class="team-card__image">
                  <img src="assets/images/team/team-2-4.jpg" alt="" />
                </div>
                <div class="team-card__social">
                  <a href="#" aria-label="twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="facebook">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a href="#" aria-label="pinterest">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" aria-label="instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="team-card__content">
                  <h3>Violet Figueroa</h3>
                  <p>Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <VideoCard />
        <section class="testimonials-one pt-120 pb-90">
          <div class="container">
            <div class="team-about__top">
              <div class="row align-items-center">
                <div class="col-md-12 col-lg-7">
                  <div class="block-title">
                    <h3>
                      What they are talking <br /> about azino.
                    </h3>
                  </div>
                </div>
                <div class="col-md-12 col-lg-5">
                  <p class="team-about__top-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Have you done google research which
                    works all the time.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="testimonials-one__single">
                  <div class="testimonials-one__image">
                    <img
                      src="assets/images/resources/testimonial-1-1.jpg"
                      alt=""
                    />
                  </div>
                  <p>
                    There are many variations of passages of lorsum available
                    but the majority have suffered alteration in form, by
                    injected not humour.
                  </p>
                  <h3>Alex Cooper</h3>
                  <span>Customer</span>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="testimonials-one__single">
                  <div class="testimonials-one__image">
                    <img
                      src="assets/images/resources/testimonial-1-2.jpg"
                      alt=""
                    />
                  </div>
                  <p>
                    There are many variations of passages of lorsum available
                    but the majority have suffered alteration in form, by
                    injected not humour.
                  </p>
                  <h3>Sara Logan</h3>
                  <span>Customer</span>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="testimonials-one__single">
                  <div class="testimonials-one__image">
                    <img
                      src="assets/images/resources/testimonial-1-3.jpg"
                      alt=""
                    />
                  </div>
                  <p>
                    There are many variations of passages of lorsum available
                    but the majority have suffered alteration in form, by
                    injected not humour.
                  </p>
                  <h3>Jacob Casey</h3>
                  <span>Customer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
export default About;
