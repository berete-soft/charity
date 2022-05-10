import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";

export default function MainSlider() {
  const [slide, setSlide] = useState([]);
  const context = useContext(ThemeContext);

  const URL = `${Values.BASE_URL}slider_section`;

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setSlide(d.data.response);
      })
      .catch((e) => console.log(e.response));
  }, [context.language]);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="main-slider main-slider__two">
      <Slider {...settings}>
        {slide.map((data, i) => (
          <div key={i} className="main-slider-item">
            <div className="image-layer">
              <img src={data.image} alt="" />
            </div>
            <div className="container">
              <div
                className={`row ${
                  (context.rtl && "justify-content-end") ||
                  "justify-content-start"
                }`}
              >
                <div
                  className={`col-xl-7 col-lg-12  ${
                    (context.rtl && "text-right") || "text-left"
                  }`}
                >
                  <h2 className="">{data.text}</h2>
                  {/* <p>{data.text}</p> */}
                  <Link
                    to="/donate"
                    data-target=".donate-options"
                    className="scroll-to-target thm-btn dynamic-radius mt-5"
                  >
                    {data.button_text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
