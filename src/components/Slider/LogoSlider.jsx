import { useState } from "react";
import Slider from "react-slick";

export default function LogoSlider() {
  const [logos, setLogos] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  const settings = {
    dots: false,
    infinite: false,

    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {logos.map((logo, i) => (
        <div key={i} className="logo-slide ">
          <img src="assets/images/resources/brand-1-1.png" alt="" />
        </div>
      ))}
    </Slider>
  );
}
