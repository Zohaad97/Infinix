import { useState } from "react";
import "../Home/internal.css";
import "../Home/mainstyle.css";
import { Link } from "react-router-dom";

import site2 from "../assets/images/emaar-project.png";
import tehkom from "../assets/images/cop-project.png";
import sitee from "../assets/images/site-project.png";
import general from "../assets/images/general.png";

import "../About/About.css";
import "../Services/Service.css";
import Container from "../base/Container";
import Projectjson from "../../projects.json";

const Projects = () => {
  const [url, setUrl] = useState();
  const projectUrl = "/project-page?name=ge-healthcare---arab-health-2023";

  return (
    <Container
      title={"Projects"}
      renderDescription={() => (
        <h1 style={{ whiteSpace: 'nowrap', lineHeight: 1.2 }} className="about-heading">
          Empower Your Activations with <br />
          <span className="blue-text">Engagement Driven </span>
          Technology
        </h1>
      )}
      renderBody={() => (
        <div className="column-50 flex-vertical is-grid is-footer-grid space-top">
          {Projectjson.map((item) => {
            return (
              <Link
                to={`/project-page?name=${item.title
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
                className="partner-item"
              >
                <img src={item.mainImage} alt="partner" />

                <h4 className="project-heading4">
                  {item.title}
                  {setUrl(item.title)} <br />
                  {/* <span className="project-desc">{item.description}</span> */}
                </h4>
              </Link>
            );
          })}
        </div>
      )}
    />
  );
};
export default Projects;
