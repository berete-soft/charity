import axios from 'axios';
import { useContext, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext';
import Footer from "../layout/Footer";
import Values from '../Values';
import BlogCard from "./Card/BlogCard";
import Header from "./header/Header";



function Event() {
  const [data, setData] =useState(null)


  const url = `${Values.BASE_URL}event_list`;
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
  }, [context.language])








  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <section class="page-header">
          <div class="page-header__bg"></div>

          <div class="container">
            <h2>Events Page</h2>
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

        <section class="news-page pb-120 pt-120">
          <div class="container">
            <div class="news-3-col">
              {
                data?.map((d)=> (
                  <BlogCard data={d} />
                ))
              }
            </div>
            {/* <ul class="list-unstyled post-pagination d-flex justify-content-center align-items-center">
              <li>
                <Link to="#">
                  <i class="fa fa-angle-left"></i>
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
                  <i class="fa fa-angle-right"></i>
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
export default Event;
