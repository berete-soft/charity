import Accordion from "../components/accordion/Accordion"

export default function AboutSection(){
    return(
        <section className="faq-one pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-one__content">
                  <div className="block-title">
                    <h3>One Community, One Goal, For Everyone</h3>
                  </div>
                  <Accordion />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-counter__image clearfix">
                  <div className="about-counter__image-content">
                    <img
                      src="assets/images/shapes/Linkbout-count-heart-1-1.png"
                      alt=""
                    />
                    <p>We’re here to support you every step of the way.</p>
                  </div>
                  <img
                    src="https://cdn.pixabay.com/photo/2019/04/17/14/54/mosque-4134459_960_720.jpg"
                    alt=""
                    className="float-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}