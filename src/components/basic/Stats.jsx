import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";

export default function Stats(){
    const [data, setData] = useState(null)

    const context = useContext(ThemeContext)


    useEffect(()=> {
        const URL = `${Values.BASE_URL}stats`;

        axios.get(URL, {
            headers: {
              language: context.language,
            }
          }).then(d=> {
            setData(d.data.response)
          }).catch(e=> {
            console.log(e.response)
          })
    },[context])


    return(
        <section className="fact-counter">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="8860">
                  {data?.members}
                </h3>
                <p>Members</p>
                {/* <Link to="#">+</Link> */}
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="456">
                {data?.fund_raised}
                </h3>
                <p>Fund Raised</p>
                {/* <Link to="#">+</Link> */}
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="6208">
                {data?.causes}
                </h3>
                <p>Causes</p>
                {/* <Link to="#">+</Link> */}
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h3 className="odometer" data-count="960">
                {data?.events}
                </h3>
                <p>Events</p>
                {/* <Link to="#">+</Link> */}
              </div>
            </div>
          </div>
        </section>
    )
}