import { Link } from "react-router-dom";
export default function CauseCard() {
  return (
    <div class="cause-card">
      <div class="cause-card__inner">
        <div class="cause-card__image">
          <img src="assets/images/causes/cause-1-2.jpg" alt="" />
        </div>
        <div class="cause-card__content">
          <div class="cause-card__top">
            <div class="cause-card__progress">
              <span
                style={{ width: "65%" }}
                class="wow cardProgress"
                data-wow-duration="1500ms"
              >
                <b>
                  <i>65</i>%
                </b>
              </span>
            </div>
            <div class="cause-card__goals">
              <p>
                <strong>Raised:</strong> $25,270
              </p>
              <p>
                <strong>Goal:</strong> $30,000
              </p>
            </div>
          </div>
          <h3>
            <Link to="/causes_detail">Education for Poor Children</Link>
          </h3>
          <p>Lorem Ipsum simply dummy text of printng and type industry.</p>
          <div class="cause-card__bottom">
            <Link to="/causes_detail" class="thm-btn dynamic-radius">
              Donate Now
            </Link>

            <Link to="#" class="cause-card__share" aria-label="share postr">
              <i class="azino-icon-share"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
