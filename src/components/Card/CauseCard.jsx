import React from "react";
import { Link } from "react-router-dom";
export default function CauseCard({ data }) {
  return (
    <div class="cause-card">
      <div class="cause-card__inner">
        <div class="cause-card__image">
          <img src={data.image} alt="" />
        </div>
        <div class="cause-card__content">
          <div class="cause-card__top">
            <div class="cause-card__progress">
              <span
                style={{ width: `${(data.raised / data.goal) * 100}%` }}
                class="wow cardProgress"
                data-wow-duration="1500ms"
              >
                <b>
                  <i>{Math.floor((data.raised / data.goal) * 100)}</i>%
                </b>
              </span>
            </div>
            <div class="cause-card__goals">
              <p>
                <strong>Raised:</strong> ${data.raised}
              </p>
              <p>
                <strong>Goal:</strong> ${data.goal}
              </p>
            </div>
          </div>
          <h3>
            <Link to="/causes_detail">{data.title}</Link>
          </h3>
          <p>{data.description}</p>
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
