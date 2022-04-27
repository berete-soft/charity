import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";

export default function Accordion() {
  const context = useContext(ThemeContext);
  const URL = `${Values.BASE_URL}faqs`;
  const [datas, setDatas] = useState([1, 1, 1]);

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          language: context.language,
        },
      })
      .then((d) => {
        setDatas(d.data.response);
      })
      .catch((e) => console.log(e.response));
  }, [context.language]);

  const ref = useRef();

  useEffect(() => {
    const btns = document.querySelectorAll("#accordion>li>h2");
    const items = document.querySelectorAll("#accordion>li");

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", () => {
        items[i].classList.toggle("active");
      });
    }
  });

  return (
    <ul id="accordion" className=" list-unstyled">
      {datas &&
        datas.map((data, i) => (
          <li ref={ref} key={i} className="">
            <h2 className="para-title">
              <span className="collapsed">
                <i className="fa fa-plus"></i>
                {data.title}
              </span>
            </h2>
            <div id="" className="collapse">
              <p>{data.body}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
