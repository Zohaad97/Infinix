import site2 from "../assets/images/site2.png";
import tehkom from "../assets/images/tehkom.png";
import sitee from "../assets/images/sitee.png";
import general from "../assets/images/general.png";
import Container from "../base/Container";
import projectrender from "../../projects.json";

const Project = () => {
  const firstFourItems = projectrender.slice(0, 4);
  return (
    <Container
      title={"Projects"}
      renderDescription={() => (
        <h2 className="project-blue-text">
          Elevate Your Business &nbsp;
          <br />
          <span className="project-heading-home">
            with Actionable Technologies
          </span>
        </h2>
      )}
      renderBody={() => (
        <div className="column-50 flex-vertical is-grid is-footer-grid space-top">
          {firstFourItems &&
            firstFourItems.map((item) => {
              return (
                <a className="partner-item" href="/#">
                  <img src={item.mainImage} alt="partner" />
                  <h4 className="project-heading4">
                    {item.title} <br />
                    {/* <span className="project-desc">GITEX 2023</span> */}
                  </h4>
                </a>
              );
            })}
        </div>
      )}
    />
  );
};

export default Project;
