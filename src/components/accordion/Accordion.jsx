import { useEffect, useRef, useState } from "react";

export default function Accordion() {
  const [datas, setDatas] = useState([1, 1, 1]);
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
      {datas.map((data, i) => (
        <li ref={ref} key={i} className="">
          <h2 className="para-title">
            <span className="collapsed">
              <i className="fa fa-plus"></i>
              Make a difference in their life
            </span>
          </h2>
          <div id="" className="collapse">
            <p>
              There are many variations of passages the majority have suffered
              alteration in some fo injected humour, or randomised words
              believable.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
