import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CauseSlider from "../components/Slider/CauseSlider";
import { ThemeContext } from "../context/ThemeContext";
import Values from "../Values";

export default function Cause() {
  const context = useContext(ThemeContext);
  const URL = `${Values.BASE_URL}cause_section`;
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
    <section className="causes-page causes-home pt-120 pb-120">
      <div className="container">
        <div className="row align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <div className="col-lg-7">
            <div className="block-title">
              <h3>{data.title}</h3>
            </div>
          </div>
          <div className="col-lg-5 d-flex">
            <div className="my-auto">
              <p className="block-text pr-10 mb-0">{data.body}</p>
            </div>
          </div>
        </div>

        <CauseSlider />
      </div>
    </section>
  );
}
