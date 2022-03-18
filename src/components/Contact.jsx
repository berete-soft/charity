import React, { useState } from "react";
import Footer from "../layout/Footer";
import EventCard from "./Card/EventCard";
import Header from "./header/Header";
function Contact() {
  const [events, setEvents] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <section class="page-header">
          <div class="page-header__bg"></div>

          <div class="container">
            <h2>Contact Page</h2>
            <ul class="thm-breadcrumb list-unstyled dynamic-radius">
              <li>
                <a href="{{route('home')}}">Home</a>
              </li>
              <li>-</li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </section>
        <section class="become-volunteer pt-120 pb-80">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="become-volunteer__content mb-40">
                  <div class="block-title">
                    <p>
                      <img
                        src="assets/images/shapes/heart-2-1.png"
                        width="15"
                        alt=""
                      />
                      Join Us Now
                    </p>
                    <h3>
                      Register yourself as <br /> our volunteer.
                    </h3>
                  </div>
                  <p class="block-text mb-40 pr-10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Have you done google research which
                    works all the time.{" "}
                  </p>
                  <ul class="list-unstyled ul-list-one">
                    <li>Nsectetur cing elit.</li>
                    <li>Suspe ndisse suscipit sagittis leo.</li>
                    <li>Entum estibulum dignissim posuere.</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-7">
                <form
                  action="assets/inc/sendemail.php"
                  class="contact-form-validated become-volunteer__form form-one mb-40"
                >
                  <div class="form-group">
                    <div class="form-control">
                      <label for="name" class="sr-only">
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="form-control">
                      <label for="email" class="sr-only">
                        email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div class="form-control">
                      <label for="phone" class="sr-only">
                        phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div class="form-control">
                      <label for="date-of-birth" class="sr-only">
                        date of birth
                      </label>
                      <input
                        type="text"
                        name="date"
                        id="date-of-birth"
                        placeholder="Date of Birth"
                      />
                    </div>
                    <div class="form-control">
                      <label for="address" class="sr-only">
                        address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                      />
                    </div>
                    <div class="form-control">
                      <label for="occupation" class="sr-only">
                        occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        id="occupation"
                        placeholder="Occupation"
                      />
                    </div>
                    <div class="form-control form-control-full">
                      <label for="message" class="sr-only">
                        message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Write a Message"
                      ></textarea>
                    </div>
                    <div class="form-control form-control-full">
                      <button type="submit" class="thm-btn dynamic-radius">
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
                <div class="result"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="event-page pt-120 pb-120">
          <div class="container">
            <div class="event-grid">
              {events.map((event, i) => (
                <EventCard key={i} />
              ))}
            </div>
          </div>
        </section>

        <div class="google-map__contact">
          <iframe
            title="template google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            class="map__contact"
            allowfullscreen
          ></iframe>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Contact;
