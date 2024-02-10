import Arrow_5 from "../assets/images/Arrow_5.png";
import CurveLeft from "../assets/images/heading-curve-left.svg";
import { Link } from "react-router-dom";
import projectrender from "../../projects.json";
import { ProjectName } from "../ProjectList/ProjectList";

export const ProjectList = ({ items }) => (<div sty className="column-50 flex-vertical is-grid is-footer-grid space-top">
  {items.map(item => (
    <Link to={`/project-page?name=${item.title
      .replace(/ /g, "-")
      .toLowerCase()}`} className="partner-item" >
      <div>
        <img src={item.mainImage} alt="partner" />
        <h4 className="project-heading4">
          {ProjectName(item.title)} <br />
          {/* <span className="project-desc">GITEX 2023</span> */}
        </h4>
      </div>

    </Link>
  ))}
</div>)

const Project = () => {
  const firstFourItems = projectrender.slice(0, 4);
  return (
    <div className="spacing-bottom-04-px is-track-record bg--2 radius-24">
      <div className="container-small is-track-record remove-bottom_space">
        <div className="record-div bg--4">
          <div className="record__heading-div">
            <h2 className="p-leading opacity-06">Projects</h2>
          </div>
        </div>
        <h2 style={{ whiteSpace: 'nowrap' }} className="project-blue-text">
          Elevate Your Business &nbsp;
          <br />
          <span className="project-heading-home">with Actionable Technologies</span>
        </h2>

        <ProjectList items={firstFourItems} />
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
