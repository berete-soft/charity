import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Values from "../Values";

export default function Package() {
  const [data, setData] = useState([]);
  const url = `${Values.BASE_URL}package_list`;
  const context = useContext(ThemeContext);
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setData(d.data.response);
      })
      .catch((e) => console.log(e));
  }, [context.language]);
  return (
    <div className="package">
      <div className="row">
        {data.map((d) => (
          <div className="col-md-6 pb-5">
            <div
              className="price-one__single wow flipInY"
              data-wow-duration="1500ms"
            >
              <i className="fa fa-paper-plane"></i>
              <p>{d.package_name}</p>
              <h3>${d.package_price}</h3>
              <ul className="price-one__list">
                <li>{d.description}</li>
              </ul>
              <Link to="#" className="thm-btn dynamic-radius">
                Choose Plan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
