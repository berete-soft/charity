import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Footer from "../layout/Footer";
import Values from "../Values";
import Header from "./header/Header";
function Event_Detail() {
  const [data, setData] = useState()
  const context = useContext(ThemeContext)

  const id = useParams()
  
  useEffect(()=> {
    const URL = `${Values.BASE_URL}event/${id.id}`;

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

  console.log(data)



  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <section class="page-header">
          <div class="page-header__bg"></div>

          <div class="container">
            <h2>{data && data.title}</h2>
            <ul class="thm-breadcrumb list-unstyled dynamic-radius">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>-</li>
              <li>
                <span>Events</span>
              </li>
            </ul>
          </div>
        </section>

        <section class="event-details pt-120">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-6">
                <h3>Help for needy people</h3>
                <p>
                 {data && data.description}
                </p>
               
              </div>
              <div class="col-md-12 col-lg-6">
                <img
                  src={data && data.image}
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <div class="event-infos pt-20 pb-90">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-lg-4 mb-30">
                <div class="event-infos__single background-secondary">
                  <h3>Venue</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quiaolor sit
                    amet adipisci veli sed quiae.
                  </p>
                  <ul class="list-unstyled event-infos__list">
                    <li>20 May, 2020</li>
                    <li>9:00am 02:00pm</li>
                    <li>New York</li>
                  </ul>
                  <div class="event-infos__social">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-4 mb-30">
                <div class="google-map__event">
                  <iframe
                    title="template google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    class="map__event"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div class="col-md-12 col-lg-4 mb-30">
                <div class="event-infos__single background-special">
                  <h3>Organizer</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quiaolor sit
                    amet adipisci veli sed quiae.
                  </p>
                  <ul class="list-unstyled event-infos__list event-infos__list-has-icons">
                    <li>
                      <i class="azino-icon-telephone"></i>
                      <a href="tel:6668880000">666 888 0000</a>
                    </li>
                    <li>
                      <i class="azino-icon-email"></i>
                      <a href="mailto:info@azino.com">info@azino.com</a>
                    </li>
                    <li>
                      <i class="azino-icon-pin"></i>
                      88 top broklyn street road new york, USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Event_Detail;
