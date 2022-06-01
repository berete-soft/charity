import { Link } from "react-router-dom";
export default function CauseCard({ data }) {

  const metaData = data.meta_desc?.length >=100? data.meta_desc.substring(0,100) : data.meta_desc;
  const raised = data.raised?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const goal = data.goal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  

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
                <strong>Raised:</strong> ${raised}
              </p>
              <p>
                <strong>Goal:</strong> ${goal}
              </p>
            </div>
          </div>
          <h3>
            <Link to={`/causes_detail/${data.id}`}>{data.title}</Link>
          </h3>
          <p>{metaData}...</p>
          <div class="cause-card__bottom">
            <Link to={`/causes_detail/${data.id}`} class="thm-btn dynamic-radius">
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
