import { useState } from "react";
import "../Home/internal.css";
import "../Home/mainstyle.css";
import { Link } from "react-router-dom";

import "../ImageSlider/slider.css"

import "../About/About.css";
import "../Services/Service.css";
import Container from "../base/Container";
import Projectjson from "../../projects.json";
import { sliceArrayIntoPairs } from "../ImageSlider";
import Project from "../Projects/Projects";
export function ProjectName(name) {
  try{
    return name.split("-")[0].toUpperCase()
  }catch(e){
    return name?.toUpperCase()
  }
 
}
const Projects = () => {
  const [url, setUrl] = useState();
  const projectUrl = "/project-page?name=ge-healthcare---arab-health-2023";
  const slicedProjects = sliceArrayIntoPairs(Projectjson);
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
      renderBody={() => <Project />}
      // renderBody={() => (
      //   <div className="space-top">

      //     <ul class="project-images-list">

      //       {slicedProjects.map((projects, index) => (
      //         <li key={index} className="project-images-list-item">
      //           <div>
      //             <Link to={`/project-page?name=${projects[0].title
      //               .replace(/ /g, "-")
      //               .toLowerCase()}`}
      //             >
      //               <img className="image" src={projects[0].mainImage} alt={`Slide ${index}`} />
      //               <h4 className="project-heading4">
      //                 {ProjectName(projects[0].title)}
      //                 {setUrl(projects[0].title)} <br />
      //               </h4>
      //             </Link>
      //           </div>

      //           {projects[1] && <div>   <Link to={`/project-page?name=${projects[1].title
      //             .replace(/ /g, "-")
      //             .toLowerCase()}`}
      //           > <img className="image" src={projects[1].mainImage} alt={`Slide ${index}`} />
      //             <h4 className="project-heading4">
      //               {ProjectName(projects[1].title)}
      //               {setUrl(projects[1].title)} <br />
      //             </h4>
      //           </Link>
      //           </div>}

      //         </li>
      //       ))}
      //     </ul>
          
      //   </div>
      // )}
    />
  );
};
export default Projects;
