import site2 from "../assets/images/site2.png";
import tehkom from "../assets/images/tehkom.png";
import sitee from "../assets/images/sitee.png";
import general from "../assets/images/general.png";
import Arrow_5 from "../assets/images/Arrow_5.png";
import Container from "../base/Container";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="spacing-bottom-04-px is-track-record bg--2 radius-24">
      <div className="container-small is-track-record remove-bottom_space">
        <div className="record-div bg--4">
          <div className="record__heading-div">
            <h2 className="p-leading opacity-06">Projects</h2>
          </div>
        </div>
        <h2 className="project-blue-text">
          Elevate Your Business &nbsp;
          <br />
          <span className="project-heading-home">with Actionable Technologies</span>
        </h2>

        <div className="column-50 flex-vertical is-grid is-footer-grid space-top">
          <a className="partner-item" href="/#">
            <img src={site2} alt="partner" />
            <h4 className="project-heading4">
              SITE <br />
              <span className="project-desc">GITEX 2023</span>
            </h4>

          </a>

          <a className="partner-item" href="/#">
            <img src={tehkom} alt="Tehkom" />
            <h4 className="project-heading4">
              TAHAKOM
              <br />
              <span className="project-desc"> GITEX 2023</span>
            </h4>

          </a>
          <a className="partner-item" href="/#">
            <img src={sitee} alt="Sitee" />
            <h4 className="project-heading4">
              Site <br />
              <span className="project-desc"> GITEX 2023</span>
            </h4>

          </a>
          <a className="partner-item" href="/#">
            <img src={general} alt="General" />
            <h4 className="project-heading4">
              GE, General Electric
              <br />
              <span className="project-desc"> Arab health 2023</span>
            </h4>
          </a>
        </div>
        <div className="logos-expander bg--4">
          <Link to={"/projects"} className="nav_fontsize-30 opacity-05 lighter line-height-1">
            View all
          </Link>
          <div className="whyus__expand is-logos">
            <img src={Arrow_5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
