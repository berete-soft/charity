import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Values from "../Values";

export default function VideoCard() {
  const context = useContext(ThemeContext);
  const URL = `${Values.BASE_URL}videocard_section`;
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
    <section className="video-card">
      <div className="video-card__bg"></div>
      <div className="container text-center pt-120 pb-120">
        <h3>{data.title}</h3>
        <div className="video-card__btn-block">
          <Link to={`/donate`} className="thm-btn dynamic-radius">
            {data.button_text}
          </Link>

          <a href={data.url} className="video-popup video-card__btn">
            <i className="fa fa-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
