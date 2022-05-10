import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";
import CauseCard from "../Card/CauseCard";

export default function CauseSlider() {
  const [slide, setSlide] = useState([1, 1, 1]);
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const url = `${Values.BASE_URL}cause_list`;
  const context = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setSlide(d.data.response);
      })
      .catch((e) => console.log(e));
  }, [context.language]);
  return (
    <Slider {...settings}>
      {slide.map((data, i) => (
        <div key={i} className="cause-slide-wrapper">
          <CauseCard data={data} />
        </div>
      ))}
    </Slider>
  );
}
