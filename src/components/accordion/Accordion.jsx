import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";

export default function Accordion() {
  const context = useContext(ThemeContext);
  const URL = `${Values.BASE_URL}faqs`;
  const [datas, setDatas] = useState([1, 1, 1]);
  const [id, setId] = useState("")


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

    const idHandler=(e)=> {
      if(e===id) {
        setId("")
      }else {
        setId(e)
      }
    }


  return (
    <ul id="accordion" className=" list-unstyled">
      {datas &&
        datas.map((data, i) => (
          <li  key={i} className={`${ id === data.id && "active" || ""}`}>
            <h2 onClick={e=> idHandler(data.id)} className="para-title">
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
