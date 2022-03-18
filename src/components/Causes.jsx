import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
function Causes() {
  return (
    <div>
      <div className="page-wrapper">
        <Navbar />

        <div class="stricky-header stricked-menu">
          <div class="container">
            <div class="logo-box">
              <Link to="{{ route('home')}}">
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
                <Link to="{{ route('home')}}">Home</Link>
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
              <div class="cause-card">
                <div class="cause-card__inner">
                  <div class="cause-card__image">
                    <img src="assets/images/causes/cause-1-2.jpg" alt="" />
                  </div>
                  <div class="cause-card__content">
                    <div class="cause-card__top">
                      <div class="cause-card__progress">
                        <span
                          style={{ width: "65%" }}
                          class="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>65</i>%
                          </b>
                        </span>
                      </div>
                      <div class="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to="/causes_detail">
                        Education for Poor Children
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum simply dummy text of printng and type
                      industry.
                    </p>
                    <div class="cause-card__bottom">
                      <Link to="/causes_detail" class="thm-btn dynamic-radius">
                        Donate Now
                      </Link>

                      <Link
                        to="#"
                        class="cause-card__share"
                        aria-label="share postr"
                      >
                        <i class="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cause-card">
                <div class="cause-card__inner">
                  <div class="cause-card__image">
                    <img src="assets/images/causes/cause-1-2.jpg" alt="" />
                  </div>
                  <div class="cause-card__content">
                    <div class="cause-card__top">
                      <div class="cause-card__progress">
                        <span
                          style={{ width: "65%" }}
                          class="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>65</i>%
                          </b>
                        </span>
                      </div>
                      <div class="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to="/causes_detail">
                        Education for Poor Children
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum simply dummy text of printng and type
                      industry.
                    </p>
                    <div class="cause-card__bottom">
                      <Link to="/causes_detail" class="thm-btn dynamic-radius">
                        Donate Now
                      </Link>

                      <Link
                        to="#"
                        class="cause-card__share"
                        aria-label="share postr"
                      >
                        <i class="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cause-card">
                <div class="cause-card__inner">
                  <div class="cause-card__image">
                    <img src="assets/images/causes/cause-1-3.jpg" alt="" />
                  </div>
                  <div class="cause-card__content">
                    <div class="cause-card__top">
                      <div class="cause-card__progress">
                        <span
                          style={{ width: "65%" }}
                          class="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>55</i>%
                          </b>
                        </span>
                      </div>
                      <div class="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to="/causes_detail">
                        Promoting The Rights of Children
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum simply dummy text of printng and type
                      industry.
                    </p>
                    <div class="cause-card__bottom">
                      <Link to="/causes_detail" class="thm-btn dynamic-radius">
                        Donate Now
                      </Link>

                      <Link
                        to="#"
                        class="cause-card__share"
                        aria-label="share postr"
                      >
                        <i class="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cause-card">
                <div class="cause-card__inner">
                  <div class="cause-card__image">
                    <img src="assets/images/causes/cause-1-4.jpg" alt="" />
                  </div>
                  <div class="cause-card__content">
                    <div class="cause-card__top">
                      <div class="cause-card__progress">
                        <span
                          style={{ width: "65%" }}
                          class="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>23</i>%
                          </b>
                        </span>
                      </div>
                      <div class="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to="/causes_detail">
                        Fundrising for Early Childhood Rise
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum simply dummy text of printng and type
                      industry.
                    </p>
                    <div class="cause-card__bottom">
                      <Link to="/causes_detail" class="thm-btn dynamic-radius">
                        Donate Now
                      </Link>

                      <Link
                        to="#"
                        class="cause-card__share"
                        aria-label="share postr"
                      >
                        <i class="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cause-card">
                <div class="cause-card__inner">
                  <div class="cause-card__image">
                    <img src="assets/images/causes/cause-1-5.jpg" alt="" />
                  </div>
                  <div class="cause-card__content">
                    <div class="cause-card__top">
                      <div class="cause-card__progress">
                        <span
                          style={{ width: "65%" }}
                          class="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>65</i>%
                          </b>
                        </span>
                      </div>
                      <div class="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to="/causes_detail">
                        School Counseling for Children
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum simply dummy text of printng and type
                      industry.
                    </p>
                    <div class="cause-card__bottom">
                      <Link to="/causes_detail" class="thm-btn dynamic-radius">
                        Donate Now
                      </Link>

                      <Link
                        to="#"
                        class="cause-card__share"
                        aria-label="share postr"
                      >
                        <i class="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cause-card">
                <div class="cause-card__inner">
                  <div class="cause-card__image">
                    <img src="assets/images/causes/cause-1-6.jpg" alt="" />
                  </div>
                  <div class="cause-card__content">
                    <div class="cause-card__top">
                      <div class="cause-card__progress">
                        <span
                          style={{ width: "65%" }}
                          class="wow cardProgress"
                          data-wow-duration="1500ms"
                        >
                          <b>
                            <i>55</i>%
                          </b>
                        </span>
                      </div>
                      <div class="cause-card__goals">
                        <p>
                          <strong>Raised:</strong> $25,270
                        </p>
                        <p>
                          <strong>Goal:</strong> $30,000
                        </p>
                      </div>
                    </div>
                    <h3>
                      <Link to="/causes_detail">
                        Growing Up children in Charity Care
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum simply dummy text of printng and type
                      industry.
                    </p>
                    <div class="cause-card__bottom">
                      <Link to="/causes_detail" class="thm-btn dynamic-radius">
                        Donate Now
                      </Link>

                      <Link
                        to="#"
                        class="cause-card__share"
                        aria-label="share postr"
                      >
                        <i class="azino-icon-share"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="list-unstyled post-pagination d-flex justify-content-center align-items-center">
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
            </ul>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
export default Causes;
