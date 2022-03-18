import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function GallerySlider() {
  const [slide, setSlide] = useState([1, 1, 1, 1, 1, 1, 1]);
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
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
      {slide.map((data, i) => (
        <div key={i} className="gallery-slide-werrpper">
          <div className="swiper-slide">
            <div className="gallery-card">
              <img
                src="assets/images/gallery/gallery-2-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="gallery-content">
                <Link
                  to="assets/images/gallery/gallery-2-1.jpg"
                  className="img-popup"
                  aria-label="open image"
                >
                  <i className="fal fa-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
