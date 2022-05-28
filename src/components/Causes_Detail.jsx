import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../layout/Footer";
import Values from "../Values";
import Header from "./header/Header";


function Causes_Detail() {
  const [data, setData] = useState({})
  const context = useContext(ThemeContext)
  const id = useParams()


    useEffect(()=> {
      const URL = `${Values.BASE_URL}cause/${id.id}`;
  
      axios.get(URL, {
        headers: {
          language: context.language,
        }
      }).then(d=> {
        console.log(d.data.response)
        setData(d.data.response)
      }).catch(e=> {
        console.log(e.response)
      })
    },[context.language])

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
              <Link to="/">Home</Link>
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
                          src={data?.image}
                          alt=""
                        />
                      </div>
                      <div class="cause-card__content">
                        <div class="cause-card__top">
                        <div class="cause-card__progress">
                          <span
                            style={{ width: `${(data.raised / data.goal) * 100}%` }}
                            class="wow cardProgress"
                            data-wow-duration="1500ms"
                          >
                            <b>
                              <i>{Math.floor((data.raised / data.goal) * 100)}</i>%
                            </b>
                          </span>
                        </div>
                          <div class="cause-card__goals">
                            <p>
                              <strong>Raised:</strong> ${data.raised}
                            </p>
                            <p>
                              <strong>Goal:</strong> ${data.goal}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>{data.title}</h3>
                  <p>
                    {data.description}
                  </p>
                  
                  <div class="cause-card__bottom">
                    <a href="/donate" class="thm-btn dynamic-radius">
                      Donate Now
                    </a>

                    <a href={`https://www.facebook.com/sharer.php?u=https://mandenislamiccenter.com/causes_detail/${data.id}`} class="cause-card__share">
                      <i class="azino-icon-share"></i>
                    </a>
                  </div>
                  {/* <div class="cause-details__presentations">
                    <i class="fa fa-file-pdf"></i>
                    <h3>Our Presentation</h3>
                    <a href="/" class="thm-btn dynamic-radius">
                      Download
                    </a>
                  </div> */}
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
