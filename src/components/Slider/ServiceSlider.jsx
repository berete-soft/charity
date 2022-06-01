import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import icon1 from "../../assets/images/Icons/1st-Register.png";
import icon2 from "../../assets/images/Icons/2nd-Charity.png";
import icon3 from "../../assets/images/Icons/3rd-School.png";
import Values from "../../Values";

export default function ServiceSlider() {
  const [datas, setDatas] = useState([
    {
      text: "Start Registering",
      title: "Make yourself count in the Community",
      link: "/registation",
      icon: icon1,
      bg: "background-primary",
    },
    {
      text: "Start Donating",
      title: "Together We Can Make a Difference",
      link: "donate",
      icon: icon2,
      bg: "background-secondary",
    },
    {
      text: "Noble Causes",
      title: "Our Children and Youths Education",
      link: "",
      icon: icon3,
      bg: "background-base",
    },
  ]);

  useEffect(() => {
    const url = `${Values.BASE_URL}office_list`;
    // axios
    //   .get(url)
    //   .then((d) => {
    //     setDatas(d.data.response);
    //   })
    //   .catch((e) => console.log(e));
  }, []);
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
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      {datas.map((data, i) => (
        <div className="gap">
          <div className={`service-sider-item-wrapper ${data.bg}`}>
            <div className="service-two__box-inner ">
              <Link to={data.link} >
                <img src={data.icon} width="80" alt="" />
              </Link>
              <p>{data.text}</p>
              <h3>
                <Link to={data.link}>{data.title}</Link>
              </h3>
              <Link to={data.link} className="service-two__box-link">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
