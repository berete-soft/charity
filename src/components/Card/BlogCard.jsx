import { Link } from "react-router-dom";

export default function BlogCard({ data }) {

  const metaData = data.meta_desc?.length >=100? data.meta_desc.substring(0,100) : data.meta_desc;
  return (
    <div class="blog-card">
      <div class="blog-card__inner">
        <Link to="/event_detail">
          <div class="blog-card__image">
            <img src={data.image} alt={data.meta_dec} />
            <div class="blog-card__date">{data.date}</div>
          </div>
        </Link>
        <div class="blog-card__content">
          <h3 class="mt-2">
            <Link to="/event_detail">{data.title}</Link>
          </h3>

          <div class="pl-3 pr-3 cause-card__goals_event">
            <p>
              {" "}
              <i style={{ color: "#fcad30" }} class="p-2 azino-icon-clock"></i>
              <strong>Time:</strong> {data.start_time} {data.end_time}
            </p>
            <p>
              {" "}
              <i
                style={{ color: "#fcad30" }}
                class="p-2 azino-icon-clock"
              ></i>{" "}
              <strong>Location:</strong> {data.location}
            </p>
          </div>

          <p>{metaData}...</p>

          <div class="cause-card__bottom_event">
            <Link to={`/event_detail/${data.id}`} class="thm-btn dynamic-radius">
              Read More
            </Link>
            <a href={`https://www.facebook.com/sharer.php?u=https://mandenislamiccenter.com/causes_detail/${data.id}`} class="cause-card__share" aria-label="share postr">
              <i class="azino-icon-share"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
