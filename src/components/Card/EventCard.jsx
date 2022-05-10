import React from "react";
import { Link } from "react-router-dom";

export default function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div class="event-card-image">
          <div class="event-card-image-inner">
            <img src="assets/images/events/event-1-1.jpg" alt="" />
            <span>20 May</span>
          </div>
        </div>
        <div className="event-card-content">
          <h3>
            <Link to="event-details.html">Help for needy people</Link>
          </h3>
          <ul className="event-card-list">
            <li>
              <i className="azino-icon-clock"></i>
              <strong>Time:</strong> 9:00am 02:00pm
            </li>
            <li>
              <i className="azino-icon-pin1"></i>
              <strong>Location:</strong> New York
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
