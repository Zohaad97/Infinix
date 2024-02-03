import "../Home/internal.css";
import "../Home/mainstyle.css";

import site2 from "../assets/images/emaar-project.png";
import tehkom from "../assets/images/cop-project.png";
import sitee from "../assets/images/site-project.png";
import general from "../assets/images/general.png";

import "../About/About.css";
import "../Services/Service.css";
import Container from "../base/Container";

const Projects = () => {
  return (
    <Container
      title={"Projects"}
      renderDescription={() => (
        <h1 className="about-heading">
          Empower Your Activations with <br />
          <span className="blue-text">Engagement Driven</span>
          Technology
        </h1>
      )}
      renderBody={() => (
        <div className="column-50 flex-vertical is-grid is-footer-grid space-top">
          <a className="partner-item" href="/#">
            <img src={site2} alt="partner" />
            <h4 className="project-heading4">
              Emaar Properties <br />
              <span className="project-desc">
                Interactive LED Floor, Property Launch Event
              </span>
            </h4>
          </a>

          <a className="partner-item" href="/#">
            <img src={tehkom} alt="Tehkom" />
            <h4 className="project-heading4">
              COP 28
              <br />
              <span className="project-desc">
                Dynamic Motion Wall, Rextos Dubai Hotel
              </span>
            </h4>
          </a>
          <a className="partner-item" href="/#">
            <img src={sitee} alt="Sitee" />
            <h4 className="project-heading4">
              Site <br />
              <span className="project-desc">
                Innovative presentations, GITEX 2023
              </span>
            </h4>
          </a>
          <a className="partner-item" href="/#">
            <img src={general} alt="General" />
            <h4 className="project-heading4">
              GE Health Care
              <br />
              <span className="project-desc">
                Rotating Platform, Arab health 2023
              </span>
            </h4>
          </a>
        </div>
      )}
    />
  );
};
export default Projects;
