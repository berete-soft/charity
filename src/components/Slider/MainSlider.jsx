import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/main-slider/Canpy-ISI-border.jpg";
import img2 from "../../assets/images/main-slider/Islamic_school.jpg";
import img3 from "../../assets/images/main-slider/madarsa.jpg";

export default function MainSlider() {
  const [slide, setSlide] = useState([
    {
      img: img1,
      title: "Your Donation Can Change Someone's Future",
      text: "",
      btn: "Donate Now",
      rtl: false,
    },
    {
      img: img2,
      title: "Votre Don Pourrait Changer le Future de Quelqu'un",
      text: "",
      btn: "Faites le Don Maintenant",
      rtl: false,
    },
    {
      img: img3,
      title: "تبرعك يمكن أن يغير مستقبل شخص ما",
      text: "",
      btn: "تبرع الان",
      rtl: true,
    },
  ]);
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
              <img src={data.img} alt="" />
            </div>
            <div className="container">
              <div
                className={`row ${
                  (data.rtl && "justify-content-end") || "justify-content-start"
                }`}
              >
                <div className="col-xl-7 col-lg-12 text-left">
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                  <Link
                    to="/donate"
                    data-target=".donate-options"
                    className="scroll-to-target thm-btn dynamic-radius"
                  >
                    {data.btn}
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
