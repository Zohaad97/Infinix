import { useState } from "react";
import "../Home/internal.css";
import "../Home/mainstyle.css";
import { Link } from "react-router-dom";

import "../ImageSlider/slider.css"

import "../About/About.css";
import "../Services/Service.css";
import Container from "../base/Container";
import Projectjson from "../../projects.json";
import Project, { ProjectList } from "../Projects/Projects";
export function ProjectName(name) {
  try {
    return name.split("-")[0].toUpperCase()
  } catch (e) {
    return name?.toUpperCase()
  }

}
const Projects = () => {
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
      renderBody={() => <ProjectList items={Projectjson} enableTags />}
    />
  );
};
export default Projects;
