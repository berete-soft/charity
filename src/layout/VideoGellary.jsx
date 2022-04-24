import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import { ThemeContext } from "../context/ThemeContext";
import Values from "../Values";

export default function VideoGellary() {
  const context = useContext(ThemeContext);
  const URLCAT = `${Values.BASE_URL}categories`;
  const URLVIDEO = `${Values.BASE_URL}videos`;
  const [catagori, setCatagori] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // catagories
    axios
      .get(URLCAT, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setCatagori(d.data.response);
      })
      .catch((e) => console.log(e.response));

    // videos
    axios
      .get(URLVIDEO, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setVideos(d.data.response);
      })
      .catch((e) => console.log(e.response));
  }, [context.language]);

  return (
    <>
      <Header />
      <section className="video">
        <div className="container">
          <ul className="video-catagory">
            <li className="video-catagory-item">
              <button className="video-catagory-link">All</button>
            </li>
            {catagori.map((d, i) => (
              <li key={i} className="video-catagory-item">
                <button className="video-catagory-link">{d.title}</button>
              </li>
            ))}
          </ul>

          <div className="video-gellary">
            {videos.map((video, i) => (
              <div className="video-gellary-video">
                <a href={video.url} className="video-gallary-item">
                  <img src={video.thumbnails.max} alt="" />
                </a>
                <p className="name">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
