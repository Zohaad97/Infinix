import Arrow_5 from "../assets/images/Arrow_5.png";
import { Link } from "react-router-dom";
import projectrender from "../../projects.json";
import { ProjectName } from "../ProjectList/ProjectList";
import ProjectTag from "../ProjectTag";
import CurveLeft from "../base/CurveLeft";
import CurveRight from "../base/CurveRight";
import BottomCurve from "../base/BottomCurve";

export const ProjectList = ({ items, enableTags = false }) => (<div sty className="column-50 flex-vertical is-grid is-footer-grid space-top">
  {items.map(item => (
    <Link to={`/project-page?name=${item.title
      .replace(/ /g, "-")
      .toLowerCase()}`} className="partner-item" >
      <div>
        <img src={item.mainImage.src} alt="partner" />
        <h4 className="project-heading4">
          {ProjectName(item.title)} <br />
          {/* <span className="project-desc">GITEX 2023</span> */}
        </h4>
        {enableTags && item.mainImage.tag && <ProjectTag tag={item.mainImage.tag} />}
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
          <CurveLeft hideOnDesktop />
          <CurveLeft />
          <CurveRight />
          <div className="record__heading-div">
            <h2 className="p-leading opacity-06">Projects</h2>
          </div>
        </div>
        <h1 style={{ whiteSpace: 'nowrap', lineHeight: 1.2 }} className="about-heading">
          Empower Your Activations with <br />
          <span className="blue-text">Engagement Driven </span>
          Technology
        </h1>

        <ProjectList items={firstFourItems} />
        <div className="logos-expander bg--4">
          <BottomCurve topOnly />
          <BottomCurve />
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
