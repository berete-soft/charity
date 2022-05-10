import React from "react";
import Footer from "../layout/Footer";
import Header from "./header/Header";

function Causes_Detail() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <section class="page-header">
          <div class="page-header__bg"></div>

          <div class="container">
            <h2>Cause Details</h2>
            <ul class="thm-breadcrumb list-unstyled dynamic-radius">
              <li>
                <a href="{{route('home')}}">Home</a>
              </li>
              <li>-</li>
              <li>
                <span>Causes</span>
              </li>
            </ul>
          </div>
        </section>
        <section class="cause-details blog-details  pt-120 pb-40">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-8">
                <div class="cause-details__content">
                  <div class="cause-card">
                    <div class="cause-card__inner">
                      <div class="cause-card__image">
                        <img
                          src="assets/images/causes/cause-d-1-1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="cause-card__content">
                        <div class="cause-card__top">
                          <div class="cause-card__progress">
                            <span
                              style={{ width: "66%" }}
                              class="wow cardProgress"
                              data-wow-duration="1500ms"
                            >
                              <b>
                                <i>66</i>%
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
                      </div>
                    </div>
                  </div>
                  <h3>Our donation is hope for poor childrens</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.{" "}
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <div class="cause-card__bottom">
                    <a href="cause-details.html" class="thm-btn dynamic-radius">
                      Donate Now
                    </a>

                    <a href="#" class="cause-card__share">
                      <i class="azino-icon-share"></i>
                    </a>
                  </div>
                  <div class="cause-details__presentations">
                    <i class="fa fa-file-pdf"></i>
                    <h3>Our Presentation</h3>
                    <a href="#" class="thm-btn dynamic-radius">
                      Download
                    </a>
                  </div>
                </div>
                <h3 class="blog-details__title">Comments</h3>
                <div class="comment-one">
                  <div class="comment-one__single">
                    <img src="assets/images/blog/comment-1-1.jpg" alt="" />
                    <h3>Jessica Brown</h3>
                    <p class="comment-one__date">20 May, 2020 . 4:00 pm</p>
                    <p>
                      Lorem Ipsum is simply dummy free text of the available
                      printing and typesetting been the industry standard dummy
                      text ever sincer condimentum purus.
                    </p>
                    <a href="#" class="thm-btn dynamic-radius">
                      Reply
                    </a>
                  </div>
                  <div class="comment-one__single">
                    <img src="assets/images/blog/comment-1-2.jpg" alt="" />
                    <h3>Jessica Brown</h3>
                    <p class="comment-one__date">20 May, 2020 . 4:00 pm</p>
                    <p>
                      Lorem Ipsum is simply dummy free text of the available
                      printing and typesetting been the industry standard dummy
                      text ever sincer condimentum purus.
                    </p>
                    <a href="#" class="thm-btn dynamic-radius">
                      Reply
                    </a>
                  </div>
                </div>
                <h3 class="blog-details__title">Leave a comment</h3>
                <form
                  action="assets/inc/sendemail.php"
                  class="contact-form-validated contact-page__form form-one mb-80"
                >
                  <div class="form-group">
                    <div class="form-control">
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div class="form-control">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="form-control">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div class="form-control">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div class="form-control form-control-full">
                      <textarea
                        name="message"
                        placeholder="Write a Message"
                      ></textarea>
                    </div>
                    <div class="form-control form-control-full">
                      <button type="submit" class="thm-btn dynamic-radius">
                        Submit Comment
                      </button>
                    </div>
                  </div>
                </form>
                <div class="result"></div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="cause-details__sidebar">
                  <div class="cause-details__organizer">
                    <img src="assets/images/causes/organizer-1-1.jpg" alt="" />
                    <p>Created 20 May, 2020</p>
                    <h3>
                      Organizer: <strong>Sarah Albert</strong>
                    </h3>
                    <ul class="list-unstyled cause-details__organizer-list">
                      <li>
                        <i class="fa fa-tag"></i>
                        <a href="#">Education</a>
                      </li>
                      <li>
                        <i class="fa fa-map-marker-alt"></i>
                        <a href="#">New York, USA</a>
                      </li>
                    </ul>
                  </div>
                  <div class="cause-details__donations">
                    <h4 class="cause-details__donations-title">Donations</h4>
                    <ul class="list-unstyled cause-details__donations-list">
                      <li>
                        <img src="assets/images/causes/donor-1-1.jpg" alt="" />
                        <p>$20</p>
                        <h3>
                          David Marks <span>3 hours ago</span>
                        </h3>
                        <span>God bless you dear</span>
                      </li>
                      <li>
                        <img src="assets/images/causes/donor-1-2.jpg" alt="" />
                        <p>$20</p>
                        <h3>
                          David Marks <span>3 hours ago</span>
                        </h3>
                        <span>God bless you dear</span>
                      </li>
                      <li>
                        <img
                          src="assets/images/causes/donor-1-1.jpg"
                          class="anonymus"
                          alt=""
                        />
                        <p>$20</p>
                        <h3>
                          Anonymus <span>3 hours ago</span>
                        </h3>
                        <span>God bless you dear</span>
                      </li>
                    </ul>
                  </div>
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
export default Causes_Detail;
