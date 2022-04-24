import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";
import BlogCard from "../Card/BlogCard";

export default function BlogSlider() {
  const [slide, setSlide] = useState([]);
  const context = useContext(ThemeContext);

  const url = `${Values.BASE_URL}event_list`;

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
      .catch((e) => {
        console.log(e);
      });
  }, [context.language]);

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
        breakpoint: 521,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {slide.map((data, i) => (
        <div key={i} className="blog-slide-wrp">
          <BlogCard data={data} />
        </div>
      ))}
    </Slider>
  );
}
