import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Values from "../Values";

export default function About() {
  const context = useContext(ThemeContext);
  const URL = `${Values.BASE_URL}about_section`;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setData(d.data.response[0]);
      })
      .catch((e) => console.log(e.response));
  }, [context.language]);

  return (
    <section className="about-two pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div
              className="about-two__image wow fadeInLeft"
              data-wow-duration="1500ms"
            >
              <iframe
                src={data.video}
                width="100%"
                height="440px"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {/* <div className="about-two__award">
                <img src="assets/images/shapes/Linkbout-bag-1-2.png" alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="block-title">
                <h3>{data.title}</h3>
              </div>
              <p className="mb-40 pr-10">{data.body}</p>
              {/* <div className="row">
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
                    <h3>You can make a big difference in someone’s life.</h3>
                  </div>
                </div>
              </div> */}
              <a href={data.url} className="thm-btn dynamic-radius">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
