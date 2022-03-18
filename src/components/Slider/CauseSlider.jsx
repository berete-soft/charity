import { useState } from "react";
import Slider from "react-slick";
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
  return (
    <Slider {...settings}>
      {slide.map((data, i) => (
        <div key={i} className="cause-slide-wrapper">
          <CauseCard />
        </div>
      ))}
    </Slider>
  );
}
